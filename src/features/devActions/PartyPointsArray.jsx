/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/display-name */
import { useFieldArray } from "react-hook-form";

export default ({ nestIndex, control, register }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `answers[${nestIndex}].answerPoints`,
  });

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <div key={item.id} className="grid grid-cols-4 py-1">
            <div className="flex gap-1 justify-between">
              <select
                className="bg-slate-600 text-white p-2 min-w-[5rem]"
                name={`answers[${nestIndex}].answerPoints[${k}].party`}
                {...register(`answers[${nestIndex}].answerPoints[${k}].party`, {
                  required: true,
                })}
                defaultValue=""
              >
                <option value="" disabled>
                  Party
                </option>
                <option value="disy">disy</option>
                <option value="akel">akel</option>
                <option value="diko">diko</option>
                <option value="edek">edek</option>
                <option value="elam">elam</option>
                <option value="depa">depa</option>
                <option value="greens">greens</option>
                <option value="volt">volt</option>
              </select>
              <input
                className="bg-slate-600 text-white p-2 max-w-[5rem]"
                name={`answers[${nestIndex}].answerPoints[${k}].value`}
                {...register(`answers[${nestIndex}].answerPoints[${k}].value`, {
                  required: true,
                })}
                placeholder="Points"
              />
              <button
                className="bg-slate-600 text-white p-3 font-bold rounded-xl uppercase min-w-[5rem] hover:bg-slate-500"
                onClick={() => remove(k)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}

      <button
        type="button"
        className="bg-slate-600 text-white p-3 font-bold rounded-lg uppercase min-w-[5rem] hover:bg-slate-500"
        onClick={() =>
          append({
            party: "",
            value: 1,
          })
        }
      >
        Add Party
      </button>

      <hr />
    </div>
  );
};
