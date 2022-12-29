import { useEffect, useRef, useState } from 'react';
import { MotionConfig, motion, useScroll } from 'framer-motion';
function AboutMe() {
  const images = useRef<any>([]);

  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var scrollArea = 1000 - windowHeight; // ?

  const onScroll = () => {
    images.current.forEach((image: any) => {
      var scrollTop: any = window.pageYOffset || (window as any).scrollTop;
      var scrollPercent = scrollTop / scrollArea || 0;

      const way = parseInt(image.dataset.way);
      const rate = parseInt(image.dataset.rate);

      image.style.transform =
        'translateY(' + way * (scrollPercent * 15 * rate) + 'px)';
      image.style.transform = `translateY('${
        way * (scrollPercent * 15 * rate)
      }'px)`;
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section className="bg-white break-words pt-8">
      <h1 className="text-center text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl mb-8 break-words leading-relaxed">
        Dedicated, Fun-Loving Wedding Videographer
      </h1>
      <div className="flex justify-center">
        <p className=" max-w-2xl font-light text-gray-500  md:text-lg lg:text-xl break-words mb-6 tracking-wide leading-snug">
          Hello! My name is Béla Borsy and I am a wedding videographer with a
          passion for capturing the most special moments in a couple's life.
          When I'm not busy editing the perfect shot, you can catch me cracking
          jokes and making my clients laugh. But don't let my fun-loving
          personality fool you, I am a hard worker who is dedicated to creating
          the best possible product for my clients. Trust me, your wedding video
          will be one to remember!
        </p>
      </div>
      <div className="flex justify-center flex-wrap pb-12">
        <a
          href="#"
          className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-slate-500 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          Start together
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
        <a
          href="#"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Contact me
        </a>
      </div>
      <div className="image-grid h-[600px] relative">
        <div
          ref={(el) => (images.current[0] = el)}
          className={`image image-1 relative`}
          data-way="1"
          data-rate="0.8"
        />
        <div
          ref={(el) => (images.current[1] = el)}
          className={`image image-2`}
          data-way="1"
          data-rate="1.1"
        />
        <div
          ref={(el) => (images.current[2] = el)}
          className={`image image-3`}
          data-way="-1"
          data-rate="2"
        />
        <div
          ref={(el) => (images.current[3] = el)}
          className={`image image-4`}
          data-way="-1"
          data-rate="1.3"
        />
      </div>
    </section>
  );
}

export default AboutMe;
