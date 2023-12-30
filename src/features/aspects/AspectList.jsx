import { useSelector } from "react-redux";
import { getAspects } from "../questions/questionsSlice";
import AspectItem from "./AspectItem";
import { useTranslation } from "react-i18next";

function AspectList() {
  const aspectsArray = useSelector(getAspects);
  const { t } = useTranslation();
  let aspectsArrayT = t("aspects", { ns: "questions", returnObjects: true });
  return (
    <div className="grid grid-cols-1 items-center gap-3 py-5">
      <ul>
        {aspectsArray.map((aspect) => (
          <li
            className="flex justify-between bg-sky-700 px-4 text-white"
            key={aspect.value}
          >
            <p className="col-start-1 bg-sky-700 px-4 py-2 text-base font-semibold text-indigo-50">
              {aspectsArrayT[aspect.aspectId - 1].value}
            </p>
            <div className="col-start-2 py-2">
              <AspectItem aspect={aspect} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AspectList;
