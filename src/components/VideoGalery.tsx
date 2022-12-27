import { Carousel } from 'flowbite-react/lib/esm/components/Carousel';
import React from 'react';
// import the forest.png from assets
import forestPng from '../assets/forest.png';
import 'tw-elements';
type Props = {};

export default function VideoGalery({}: Props) {
  // return (
  //   <div
  //     id="carouselExampleCaptions"
  //     className=" carousel slide carousel-fade relative"
  //     data-bs-ride="carousel"
  //   >
  //     <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
  //       <button
  //         type="button"
  //         data-bs-target="#carouselExampleCaptions"
  //         data-bs-slide-to="0"
  //         className="active"
  //         aria-current="true"
  //         aria-label="Slide 1"
  //       ></button>
  //       <button
  //         type="button"
  //         data-bs-target="#carouselExampleCaptions"
  //         data-bs-slide-to="1"
  //         aria-label="Slide 2"
  //       ></button>
  //       <button
  //         type="button"
  //         data-bs-target="#carouselExampleCaptions"
  //         data-bs-slide-to="2"
  //         aria-label="Slide 3"
  //       ></button>
  //     </div>
  //     <div className="carousel-inner relative w-full overflow-hidden">
  //       <div className="carousel-item active relative float-left w-full">
  //         <video className="w-full" autoPlay loop muted>
  //           <source
  //             src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4"
  //             type="video/mp4"
  //           />
  //         </video>
  //         <div className="carousel-caption hidden md:block absolute text-center">
  //           <h5 className="text-xl">First slide label</h5>
  //           <p>Some representative placeholder content for the first slide.</p>
  //         </div>
  //       </div>
  //       <div className="carousel-item relative float-left w-full">
  //         <video className="w-full" autoPlay loop muted>
  //           <source
  //             src="https://mdbcdn.b-cdn.net/img/video/forest.mp4"
  //             type="video/mp4"
  //           />
  //         </video>
  //         <div className="carousel-caption hidden md:block absolute text-center">
  //           <h5 className="text-xl">Second slide label</h5>
  //           <p>Some representative placeholder content for the second slide.</p>
  //         </div>
  //       </div>
  //       <div className="carousel-item relative float-left w-full">
  //         <video className="w-full" autoPlay loop muted>
  //           <source
  //             src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4"
  //             type="video/mp4"
  //           />
  //         </video>
  //         <div className="carousel-caption hidden md:block absolute text-center">
  //           <h5 className="text-xl">Third slide label</h5>
  //           <p>Some representative placeholder content for the third slide.</p>
  //         </div>
  //       </div>
  //     </div>
  //     <button
  //       className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
  //       type="button"
  //       data-bs-target="#carouselExampleCaptions"
  //       data-bs-slide="prev"
  //     >
  //       <span
  //         className="carousel-control-prev-icon inline-block bg-no-repeat"
  //         aria-hidden="true"
  //       ></span>
  //       <span className="visually-hidden">Previous</span>
  //     </button>
  //     <button
  //       className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
  //       type="button"
  //       data-bs-target="#carouselExampleCaptions"
  //       data-bs-slide="next"
  //     >
  //       <span
  //         className="carousel-control-next-icon inline-block bg-no-repeat"
  //         aria-hidden="true"
  //       ></span>
  //       <span className="visually-hidden">Next</span>
  //     </button>
  //   </div>
  // );
  return (
    <div className="h-[500px] relative">
      <Carousel
        slideInterval={5000}
        radioGroup="none"
        className="brightness-75"
      >
        <video className="w-full" autoPlay loop muted>
          <source
            src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4"
            type="video/mp4"
          />
        </video>
        <video className="w-full" autoPlay loop muted>
          <source
            src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4"
            type="video/mp4"
          />
          {/* write a hello world to the bottom of the video */}
        </video>
      </Carousel>
      <div className="bottom-20 left-1/2 -translate-x-1/2 absolute text-center">
        <h5 className="text-xl text-white">A union of hearts</h5>
        <p className="text-base text-white">
          The bride and groom's love shines brightly as they say "I do" and
          become one in marriage.
        </p>
      </div>
    </div>
  );
}
