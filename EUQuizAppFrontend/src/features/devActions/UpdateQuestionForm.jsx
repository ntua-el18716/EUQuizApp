import { useFieldArray, useForm } from "react-hook-form";
import AnswerPoints from "./PartyPointsArray";
import { updateQuestionAnswers } from "../../services/updateQuestionAnswers";
import { insertQuestionAnswers } from "../../services/insertQuestionAnswers";
import { useState } from "react";
import Loader from "react-spinner-loader";

const defaultInsertValue = {
  questionTitle: {
    el: "",
    tr: "",
    en: "",
  },
  questionAspect: {
    el: "",
    tr: "",
    en: "",
  },
  questionIndex: null,
  answers: [
    {
      answerIndex: null,
      answerText: {
        el: "",
        tr: "",
        en: "",
      },
      answerPoints: [], // You may need to add the necessary structure for answer points
    },
  ],
};

function UpdateQuestionForm({ question, insertMode, onRenderList }) {
  const {
    reset,
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm({
    values: insertMode ? defaultInsertValue : question,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "answers",
  });

  const [isLoading, setIsLoading] = useState(false);

  // const onSubmit = (data) => updateQuestionAnswers(data);
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      insertMode
        ? await insertQuestionAnswers(data)
        : await updateQuestionAnswers(data);
      onRenderList((t) => !t);
      reset();
    } catch (error) {
      console.error("Error updating/inserting candidate:", error);
    }
    setIsLoading(false);
  };

  if (isLoading)
    return (
      <Loader show={true} type="body" stack="vertical" message="Loading" />
    );

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl text-indigo-900 text-center pt-5 font-bold font-serif">
        {insertMode ? "Add Question Form" : "Update Question Form"}
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        // className="flex flex-col mx-auto  max-w-2xl gap-2"
        className="no-scrollbar max-h-screen h- flex flex-col gap-4 overflow-hidden overflow-y-auto whitespace-nowrap rounded-lg py-2 px-0.5"
      >
        {/* Question Title */}
        <label className="text-lg font-bold text-indigo-900">
          Question Title
        </label>
        <input
          className="bg-indigo-600 text-white py-2 px-2"
          {...register("questionTitle.el", {})}
          placeholder="Question Title Greek"
        />
        <input
          className="bg-indigo-600 text-white py-2 px-2"
          {...register("questionTitle.tr", {})}
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
            {...register("questionAspect.el", {})}
            placeholder="Question Aspect Greek"
          />
          <input
            className="bg-indigo-600 text-white py-2 px-2"
            {...register("questionAspect.tr", {})}
            placeholder="Question Aspect Turkish"
          />
          <input
            className="bg-indigo-600 text-white py-2 px-2"
            {...register("questionAspect.en", {})}
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
                    value={index + 1}
                  />
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="bg-indigo-600 text-white p-3 font-bold rounded-md uppercase hover:bg-indigo-600"
                  >
                    Delete
                  </button>
                </div>
                <div className="flex flex-col gap-1">
                  <input
                    className="bg-indigo-600 text-white py-2 px-2"
                    {...register(`answers.${index}.answerText.el`, {})}
                    placeholder="Answer Text Greek"
                  />
                  <input
                    className="bg-indigo-600 text-white py-2 px-2"
                    {...register(`answers.${index}.answerText.tr`, {})}
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

                {/* <Controller
                render={({ field }) => <input {...field} />}
                name={`answers.${index}.lastName`}
                control={control}
              /> */}
              </div>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="bg-indigo-600 text-white py-3 px-3 w-[9rem] font-bold uppercase rounded-xl mx-auto hover:bg-indigo-500"
          onClick={() => append()}
        >
          Add Answer
        </button>
        {/* Answer Index */}
        <input
          className="bg-indigo-600 text-white py-3 px-3 w-[12rem] font-bold uppercase rounded-xl mx-auto hover:bg-indigo-500"
          type="submit"
          value={insertMode ? "Insert question" : "Update question"}
        />
      </form>
    </div>
  );
}

export default UpdateQuestionForm;
