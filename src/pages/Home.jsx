import { Link } from "react-router-dom";
import image from "../../public/images/image.jpg";

function Home() {
  return (
    // <div className="flex flex-col pt-6 gap-8  bg-cyan-200 mx-auto outline outline-cyan-400 outline-2">

    <div className="grid grid-cols-2 bg-cyan-50 h-full">
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
            url(${image})`,
          backgroundRepeat: "no-repeat",
          // backgroundSize: "contain",
          height: "100%",
          objectFit: "fill",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
        className="bg-cyan-50 items-center pt-7 grid-auto"
      ></div>
      <div className="flex flex-col h-full justify-between pt-6 gap-16 bg-cyan-50">
        {/* // <div className="flex flex-col justify-between pt-6 gap-8 bg-cyan-200"> */}
        {/* <h1 className="py-5 mx-auto text-2xl font-bold bg-indigo-700 text-indigo-50 px-3"> */}
        <h1 className="text-emerald-600 text-4xl mx-auto font-bold">
          CYvoteEU
        </h1>
        <h1 className="text-indigo-700 text-3xl font-bold mx-auto pt-4">
          DO YOU NEED HELP DECIDING WHO TO VOTE FOR?
        </h1>
        <div className="text-indigo-500 bold font-bold pl-8 flex flex-col gap-4">
          <p>
            One June 2024 the people of the European Union will vote for the
            next European Parliament.
          </p>
          <p>
            The goal of this quiz is to help you decide who to vote for based on
            your beliefs and priorities.
          </p>
          <p>Take this quiz now!</p>
        </div>
        <div className="mx-auto">
          <Link
            className="bg-emerald-600 px-7 py-3 text-white font-bold hover:transition-opacity rounded-xl text-2xl hover:bg-emerald-500 hover:bg-em"
            to={"/questions"}
          >
            START THE QUIZ
          </Link>
        </div>
        <div className="mx-auto pt-6 pb-12">
          {/* <Button onClick={navigate("/questions")}>START</Button> */}
          {/* <p className="mx-auto text-xl bg-indigo-600 px-3 py-2 text-cyan-50 font-bold capitalize">
            TAKE THIS QUIZ THEN!
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
