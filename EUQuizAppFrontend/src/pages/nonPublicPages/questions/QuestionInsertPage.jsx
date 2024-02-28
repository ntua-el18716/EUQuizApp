import { useForm, useFieldArray, Controller } from "react-hook-form";
import AnswerPoints from "../../../features/devActions/PartyPointsArray";
import { insertQuestionAnswers } from "../../../services/insertQuestionAnswers";

function QuestionInsertPage() {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "answers",
  });

  const onSubmit = (data) => insertQuestionAnswers(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col mx-auto  max-w-2xl gap-2"
    >
      <h1 className="text-2xl text-indigo-900 text-center pt-5 font-bold">
        Add Question Form
      </h1>
      {/* Question Title */}
      <label className="text-lg font-bold text-indigo-900">
        Question Title
      </label>
      <input
        className="bg-indigo-600 text-white py-2 px-2"
        {...register("questionTitle.el", {
          required: "This is required",
        })}
        placeholder="Question Title Greek"
      />
      <input
        className="bg-indigo-600 text-white py-2 px-2"
        {...register("questionTitle.tr", {
          required: "This is required",
        })}
        placeholder="Question Title Turkish"
      />
      <input
        className="bg-indigo-600 text-white py-2 px-2"
        {...register("questionTitle.en", {
          required: "This is required",
        })}
        placeholder="Question Title English"
      />
      {/* Question Aspect */}
      <label className="text-lg font-bold text-indigo-900">
        Question Aspect
      </label>
      <div className="flex gap-2 justify-between">
        <input
          className="bg-indigo-600 text-white py-2 px-2"
          {...register("questionAspect.el", {
            required: "This is required",
          })}
          placeholder="Question Aspect Greek"
        />
        <input
          className="bg-indigo-600 text-white py-2 px-2"
          {...register("questionAspect.tr", {
            required: "This is required",
          })}
          placeholder="Question Aspect Turkish"
        />
        <input
          className="bg-indigo-600 text-white py-2 px-2"
          {...register("questionAspect.en", {
            required: "This is required",
          })}
          placeholder="Question Aspect English"
        />
      </div>
      {/* Question Index */}
      <label className="text-lg font-bold text-indigo-900">
        Question Index
      </label>
      <input
        className="bg-indigo-600 text-white py-2 px-2"
        type="number"
        {...register("questionIndex", {
          required: "This is required",
        })}
        placeholder="Question Index"
      />

      {/* ANSWERS */}
      {/* Answer Text */}
      <label className="text-lg font-bold text-indigo-900">Answers</label>
      <ul>
        {fields.map((answer, index) => (
          <li key={answer.id}>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <label className="bg-indigo-600 p-3 rounded text-white font-semibold">{`Answer ${
                  index + 1
                }`}</label>
                <input
                  className="bg-indigo-600 text-white p-2 max-w-[7rem] text-justify"
                  {...register(`answers.${index}.answerIndex`)}
                  placeholder="Answer Index"
                />
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="bg-indigo-600 text-white p-3 font-bold rounded-md uppercase hover:bg-indigo-500"
                >
                  Delete
                </button>
              </div>
              <div className="flex flex-col gap-1">
                <input
                  className="bg-indigo-600 text-white py-2 px-2"
                  {...register(`answers.${index}.answerText.el`, {
                    required: "This is required",
                  })}
                  placeholder="Answer Text Greek"
                />
                <input
                  className="bg-indigo-600 text-white py-2 px-2"
                  {...register(`answers.${index}.answerText.tr`, {
                    required: "This is required",
                  })}
                  placeholder="Answer Text Turkish"
                />
                <input
                  className="bg-indigo-600 text-white py-2 px-2"
                  {...register(`answers.${index}.answerText.en`, {
                    required: "This is required",
                  })}
                  placeholder="Answer Text English"
                />
              </div>
              <AnswerPoints nestIndex={index} {...{ control, register }} />

              <Controller
                render={({ field }) => <input {...field} />}
                name={`answers.${index}.lastName`}
                control={control}
              />
            </div>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="bg-indigo-600 text-white py-3 px-3 w-[9rem] font-bold uppercase rounded-xl mx-auto hover:bg-indigo-500"
        onClick={() => append()}
      >
        Append
      </button>
      {/* Answer Index */}

      <input />
      <input
        className="bg-indigo-600 text-white py-3 px-3 w-[12rem] font-bold uppercase rounded-xl mx-auto hover:bg-indigo-500"
        type="submit"
        value="Insert question"
      />
    </form>
  );
}

export default QuestionInsertPage;
