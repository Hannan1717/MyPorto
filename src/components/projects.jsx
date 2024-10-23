/* eslint-disable react/prop-types */
import { useRef } from "react";
import capstone from "../assets/capstone.png";

import kkn from "../assets/kkn.png";
import panerokan from "../assets/panerokan.png";
import jambi from "../assets/jambi.png";
import KP from "../assets/akuntara.png";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { PinContainer } from "../components/ui/3d-pin";
import { HoverEffect } from "../components/ui/card-hover-effect";

const ProjectCard = ({ project }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="h-[22rem] w-full flex items-center justify-center">
      <PinContainer
        title={project.title}
        href={project.link}
      >
        <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[25rem] h-[20rem] p-0">
          <div className="relative w-full h-full mb-4">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={project.src}
            />
          </div>
          <h3 className="max-w-xs mt-4 !pb-1 !m-0 font-bold text-base text-slate-100">
            {project.title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              {project.description}
            </span>
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

export default function Projects() {
  const projects = [
    {
      src: kkn,
      title: "KKN Kendawa Village",
      category: "Website Village",
      description:
        "Developed a comprehensive website for managing resources in Kaliprau village using Laravel and MySQL",
      link: "sorry, link is not available",
    },
    {
      src: panerokan,
      title: "Puskesmas Penerokan Batanghari",
      category: "Website Puskesmas",
      description:
        "Developed a website using Laravel to manage stunting data for children at Puskesmas Penerokan Batanghari.",
      link: "https://pintarsehatanak.com/",
    },
    {
      src: jambi,
      title: "Puskesmas Tanjung Pinang",
      category: "Website Puskesmas",
      description:
        "Created a Laravel-based website for managing stunting data for children at Puskesmas Tanjung Pinang.",
      link: "https://giziuntukmasadepan.com/",
    },

    {
      src: KP,
      title: "E-Learning Akuntara",
      category: "Internship",
      description:
        "Developed an E-learning platform with accounting courses using Odoo for Akuntara.",
      link: "Sorry, link is not available",
    },

    {
      src: capstone,
      title: "System for RSUD Sulfat Demak",
      category: "Capstone Project",
      description: "Focusing on DevOps practices to ensure efficient deployment and maintenance.",
      link: "https://daftar.rsudsulfat.id/",
    },

  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -368, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 368, behavior: "smooth" });
  };

  return (
    <section
      className="text-gray-200 body-font bg-[#040404] py-24 sm:py-16"
      id="projects"
    >
      <div className="container px-5 mx-auto">
        <div className="text-center mb-10 mt-6">
          {/* <h1 className="text-3xl font-extrabold text-gray-900 mb-4 animate__animated animate__fadeIn">
            My Projects
          </h1> */}
          <h1 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeIn">
            <span className="bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-200 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-slate-400 animate__animated animate__fadeIn animate__delay-1s">
            This is a project that I made while studying in the IT field. These projects were created for college and internship needs to develop hard skills, including college assignments, practical work, and research.
          </p>
        </div>

        {/* Arrows for scrolling */}


        {/* Desktop View */}
        <div className="snap-x hidden xl:flex flex-wrap  text-justify">
          {projects.map((project, index) => (
            <div className="snap-start xl:w-1/3 sm:w-1/2 p-4 mb-4 sm:mb-0" key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Mobile View with scroll */}
        <div ref={scrollRef} className="flex xl:hidden overflow-x-auto space-x-4">
          {projects.map((project, index) => (
            <div className="w-full py-2 flex-shrink-0" key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="flex md:hidden justify-between items-center mt-4 mx-6">
          <FiArrowLeft onClick={scrollLeft} className="text-2xl cursor-pointer" />
          <FiArrowRight onClick={scrollRight} className="text-2xl cursor-pointer" />
        </div>
      </div>
    </section>
  );
}