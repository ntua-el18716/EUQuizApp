import { Trans, useTranslation } from "react-i18next";

function CandidateThankYou() {
  const { i18n } = useTranslation();
  let language = i18n.language;
  return (
    <div className="flex flex-col gap-2 mx-auto w-80 bg-cyan-100 pt-4 md:pt-8 md:w-screen md:max-w-[45rem]">
      <h1 className="font-mono text-3xl text-indigo-900 text-center md:pt-1 md:py-1 font-extrabold uppercase">
        <Trans i18nKey="candidateThankYou.thankYouText.1" />
      </h1>

      <p className="font-mono text-2xl text-indigo-900 text-center md:pt-1 md:py-1 font-extrabold"></p>
      <p className="text-indigo-900 font-semibold mx-auto md:pb-5">
        <Trans i18nKey="candidateThankYou.thankYouText.2" />
      </p>
      <p className="text-indigo-900 font-semibold">
        <Trans i18nKey="candidateThankYou.thankYouText.3" />
      </p>
      <p className="text-indigo-900 italic pb-2">
        <Trans i18nKey="candidateThankYou.thankYouText.4" />
      </p>
      <ul className="text-indigo-900 italic">
        {/* <li>Email: mazibirlikte@gmail.com or stylianoschar17@gmail.com</li> */}
        <li>Email: stylch37@gmail.com</li>
        <li>
          <Trans i18nKey="candidateThankYou.phoneNumber" />
        </li>
      </ul>
      <img
        src={`/images/thankYou.png`}
        alt="Your Image"
        style={{
          maxWidth: language === "el" ? "350px" : "400px",
          height: "auto",
        }}
        loading="lazy"
        className=" mx-auto hidden sm:block"
      />

      <img
        src={`/images/thankYou.png`}
        alt="Your Image"
        style={{ maxWidth: "300px", height: "auto" }}
        loading="lazy"
        className=" mx-auto md:hidden pb-1"
      />
    </div>
  );
}

export default CandidateThankYou;
