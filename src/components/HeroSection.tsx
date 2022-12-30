import { motion } from 'framer-motion';

function HeroSection() {
  return (
    // navbar nem lehet ebben
    <motion.main
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 50 }}
    >
      <section>
        <div className="grid max-w-screen-xl px-4 py-28 mx-auto lg:gap-8 xl:gap-0 lg:py-44 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-normal md:text-5xl xl:text-6xl text-white">
              Where <span className="text-purple-600">dreams</span> come true
            </h1>
            <p className="max-w-2xl mb-6 font-light leading-4  lg:mb-6 md:text-lg lg:text-xl text-white">
              Celebrate your love with a stunning, personalized wedding video
              that captures all the beauty and emotion of your special day.
            </p>
            <div className="text-left">
              <a
                href="#"
                className="inline-flex items-center justify-center pr-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get started
                <svg
                  className="move-arrow w-5 h-5 ml-2 -mr-1"
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
              <motion.a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-bold tracking-tight text-center text-yellow-300 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Contact us
              </motion.a>
            </div>
            {/* <button
            type="button"
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Dark
          </button> */}
          </div>
        </div>
      </section>
    </motion.main>
  );
}

export default HeroSection;
