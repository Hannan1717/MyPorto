// import React from "react";
import Profile from "../assets/profile.jpg";
import { useInView } from "react-intersection-observer";
import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import js from "../assets/js.png";
import reactImg from "../assets/react.png";
import css from "../assets/css.png";
import Slider from "react-slick";
import figma from "../assets/figma.png";
import cisco2 from "../assets/image.png";
import html from "../assets/html .png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import laravel from "../assets/laravel.png";
import { useEffect, useState } from 'react';
function Content() {
  const { ref: contentRef, inView: isContentVisible } = useInView({
    triggerOnce: false, // Allows fade-in animation on both scroll up and down
    threshold: 0.1,
  });

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 8, // Menampilkan 8 logo di desktop
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4, // Menampilkan 4 logo di tablet dan mobile
        },
      },
    ],
  };

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const originalText = 'Background lights are cool you know.';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(index + 1);
      setText(originalText.substring(0, index + 1));
    }, 100);

    return () => clearTimeout(timer);
  }, [index]);

  return (

    <div id="content">

      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 py-8" // Keep these classes
        >
          <div className="text-3xl md:text-7xl font-bold bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-200 bg-clip-text text-transparent leading-tight md:leading-normal w-full text-center">
            {/* {text} */}
            Background lights are cool you know.
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center">
            And this, is chemical burn.
          </div>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Explore now
          </button>
        </motion.div>
      </AuroraBackground>
      <BackgroundBeamsWithCollision className="flex flex-col" id="content">
        {/* aboutme */}
        <div
          ref={contentRef}
          className={`container mx-auto flex flex-col-reverse lg:flex-row items-center py-12 px-6 lg:px-12 transition-all duration-1000 ease-in-out transform ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Text Section */}
          <div className="lg:w-1/2 w-full lg:pr-12 mb-8 lg:mb-0">
            <div className="flex items-center mb-4">
              <svg
                className="stroke-gray-400 stroke-2 h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 10"
              >
                <line x1="0" y1="5" x2="10" y2="5" />
              </svg>
              <h2 className="text-2xl font-light text-gray-300 uppercase">
                My name is
              </h2>
            </div>
            <h3 className="text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-200 bg-clip-text text-transparent">
                Muhammad Hannan
              </span>
            </h3>
            <p className="text-lg md:text-2xl text-gray-300 mb-6 text-justify">
              Hello! I'm Muhammad Hannan, a fresh graduate of Computer Engineering Diponegoro University,
              passionate about both backend and frontend development. I’m
              dedicated to mastering technologies and delivering impactful
              solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/hannan.zz"
                target="_blank"
                rel="noopener noreferrer" aria-label="Instagram profile of Hannan"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6 text-gray-300 hover:text-purple-400 transition-transform transform hover:scale-110"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/muhammadhannan-mh"
                target="_blank"
                rel="noopener noreferrer" aria-label="LinkedIn profile of Hannan"
              >
                <svg
                  fill="currentColor"
                  className="w-6 h-6 text-gray-300 hover:text-purple-400 transition-transform transform hover:scale-110"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://github.com/Hannan1717"
                target="_blank"
                rel="noopener noreferrer" aria-label="Github profile of Hannan"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-300 hover:text-purple-400 transition-transform transform hover:scale-110"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          {/* Image Section */}
          <div className="lg:w-1/2 w-full flex justify-center mb-10">
            <img
              className="w-72 h-72 sm:w-3/4 sm:h-3/4 rounded-full sm:rounded-xl shadow-xl transition-transform duration-1000 ease-in-out transform hover:scale-110 hover:rotate-3"
              src={Profile}
              alt="Profile"
            />
          </div>
        </div>
        {/* aboutme end*/}

        {/* My Skill Section */}
        <h1 className="text-4xl mb-16 mt-6 text-center font-bold text-white animate__animated animate__fadeIn">
          <span className="bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-200 bg-clip-text text-transparent">
            My Skill
          </span>
        </h1>
        <div className="slider-container overflow-hidden w-full px-2 sm:px-3 pb-10">
          <Slider {...settings}>
            {[
              js,
              css,
              html,
              reactImg,
              github,
              tailwind,
              laravel,
              figma,
              cisco2,
            ].map((icon, index) => (
              <img
                key={index} // Add a unique key for each child in the list
                src={icon}
                title={icon.split("/").pop().split(".")[0]}
                alt=""
                className="sm:w-20 w-16 sm:h-20 h-16 object-contain mt-5 sm:mt-10 mb-2 sm:mb-12"
              />
            ))}
          </Slider>
        </div>
      </BackgroundBeamsWithCollision>


    </div>
  );
}

export default Content;

