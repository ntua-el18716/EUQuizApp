function CandidateThankYou() {
  return (
    <div className="flex flex-col gap-2 mx-auto w-80 bg-cyan-100 pt-8 md:w-screen md:max-w-[45rem]">
      <h1 className="font-mono text-3xl text-indigo-900 text-center md:pt-1 md:py-1 font-extrabold uppercase">
        Thank you for contributing to our work
      </h1>

      <p className="font-mono text-2xl text-indigo-900 text-center md:pt-1 md:py-1 font-extrabold"></p>
      <p className="text-indigo-900 font-semibold mx-auto pb-5">
        Thank you for taking part in CYvoteEU!
      </p>
      <p className="text-indigo-900 font-semibold">
        As you embark on your campaign journey, we want to wish you the very
        best of luck. We hope to stay in touch in order to further promote you
        and your beliefs to the youth of Cyprus
      </p>
      <p className="text-indigo-900 italic pb-2">
        In case you wish to contact us to ask for information, or to change your
        answers, or to withdraw your consent, or for any other reason you may
        contact us in any of the follwing ways:
      </p>
      <ul className="text-indigo-900 italic">
        <li>Email: mazibirlikte@gmail.com or stylianoschar17@gmail.com</li>
        <li>Phone Number: 99286084</li>
      </ul>
      <img
        src={`/images/thankYou.png`}
        alt="Your Image"
        style={{ maxWidth: "400px", height: "auto" }}
        loading="lazy"
        className=" mx-auto"
      />
    </div>
  );
}

export default CandidateThankYou;
