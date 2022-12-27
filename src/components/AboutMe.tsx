function AboutMe() {
  // wide space
  return (
    <section className="bg-white break-words">
      <div className="testelek">
        <div className="bg-gradient-to-b from-[#ffecd2] to-[#fcb69f] brightness-75">
          <div className="">
            <div className="">
              <h1 className="text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl mb-8">
                Dedicated, Fun-Loving Wedding Videographer
              </h1>
              <p className="max-w-2xl font-light text-gray-500  md:text-lg lg:text-xl dark:text-gray-400">
                Hello! My name is Béla Borsy and I am a wedding videographer
                with a passion for capturing the most special moments in a
                couple's life.
                <span className="max-sm:hidden">
                  When I'm not busy editing the perfect shot, you can catch me
                  cracking jokes and making my clients laugh. But don't let my
                  fun-loving personality fool you,
                </span>
                I am a hard worker who is dedicated to creating the best
                possible product for my clients. Trust me, your wedding video
                will be one to remember!
              </p>
              <div className="flex justify-center flex-wrap">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-slate-500 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Start together
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Contact me
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-200 image-grid h-[550px]">
          <div className="item image-1"></div>
          <div className="item image-2 rounded-full"></div>
          <div className="item image-3"></div>
          <div className="item image-4"></div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
