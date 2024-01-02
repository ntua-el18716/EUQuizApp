import { Link } from "react-router-dom";
import image from "../images/imagev3.jpg";
import image3 from "../images/image3v5.jpg";
import { useTranslation, Trans } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  if (!image) return <h1 className="bg-red-700 text-5xl">Loading</h1>;
  return (
    // <div className="flex flex-col pt-6 gap-8  bg-cyan-200 mx-auto outline outline-cyan-400 outline-2">

    <div className="grid h-full md:grid-cols-2 grid-rows-1[auto_1fr] md:grid-rows-1 bg-white">
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
        className="grid-auto items-center bg-cyan-50 pt-7 hidden md:block"
      ></div>

      <div
        className="flex h-full flex-col justify-between gap-16 bg-cyan-50 pt-6"
        // className="flex h-full flex-col justify-between gap-16 bg-cyan-50 pt-11" for el
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
            url(${image3})`,
          backgroundRepeat: "no-repeat",
          // backgroundSize: "contain",
          height: "100%",
          objectFit: "fill",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        {/* // <div className="flex flex-col justify-between pt-6 gap-8 bg-cyan-200"> */}
        {/* <h1 className="py-5 mx-auto text-2xl font-bold bg-indigo-700 text-indigo-50 px-3"> */}
        <h1 className="mx-auto text-4xl font-bold text-emerald-600">
          CYvoteEU
        </h1>
        <h1 className="mx-auto pl-1 pt-16 md:pt-20 text-3xl font-bold text-white">
          <Trans i18nKey="welcomeQuestion">
            DO YOU NEED HELP DECIDING WHO TO VOTE FOR?
          </Trans>
        </h1>
        <div className="bold flex flex-col gap-4 pl-8 font-bold text-white -500">
          {/* <p>
            One June 2024 the people of the European Union will vote for the
            next European Parliament.
          </p>
          <p>
            The goal of this quiz is to help you decide who to vote for based on
            your beliefs and priorities.
          </p>
          <p>Take this quiz now!</p> */}
          <>
            <p>
              <Trans i18nKey="welcomeText.1" />
            </p>
            <p>
              <Trans i18nKey="welcomeText.2" />
            </p>
            {/* <p>
              <Trans i18nKey="welcomeText.3" />
            </p> */}
          </>
        </div>
        <div className="mx-auto">
          <Link
            className="hover:bg-em rounded-xl bg-emerald-600 px-7 py-3 text-2xl font-bold text-white hover:bg-emerald-500 hover:transition-opacity hover:bg-gradient-to-r hover:from-teal-500 hover:via-emerald-500 hover:to-teal-500"
            to={"/questions"}
          >
            START THE QUIZ
          </Link>
        </div>
        <div className="mx-auto pb-12 pt-6"></div>
      </div>
    </div>
  );
}

export default Home;
