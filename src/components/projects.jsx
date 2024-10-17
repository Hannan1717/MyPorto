import React, { useRef } from "react";
import capstone from "../assets/capstone.png";

import foody from "../assets/12.png";
import kkn from "../assets/kkn.png";
import panerokan from "../assets/panerokan.png";
import jambi from "../assets/jambi.png";
import KP from "../assets/akuntara.png";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

const ProjectCard = ({ project }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`p-4 transition-transform transform ${
        inView ? "opacity-100 translate-y-0 scale-105 shadow-lg" : "opacity-0 translate-y-10"
      } duration-700 ease-in-out`}
    >
      <div className="relative flex flex-col bg-white rounded-lg shadow-md overflow-hidden h-full">
        <img
          alt="gallery"
          className="w-full h-64 object-cover object-center bg-white"
          src={project.src}
        />
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="p-6 flex flex-col h-full">
            <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
              {project.category}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {project.title}
            </h1>
            <p className="leading-relaxed text-gray-600 flex-grow">
              {project.description}
            </p>
          </div>
        </a>
      </div>
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
      link: "#",
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
  link: "#",
},

{
  src: capstone,
  title: "Online Registration and Monitoring System for RSUD Sulfat Demak",
  category: "Capstone Project",
  description:
    "Focusing on DevOps practices to ensure efficient deployment and maintenance.",
  link: "https://test1.spcplcpmk.com/login",
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
      className="text-gray-600 body-font bg-gradient-to-r from-slate-100 via-slate-200 to-gray-200 py-24 sm:py-16"
      id="projects"
    >
      <div className="container px-5 mx-auto">
        <div className="text-center mb-5 mt-6">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4 animate__animated animate__fadeIn">
            My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700 animate__animated animate__fadeIn animate__delay-1s">
            This is a project that I made while studying in the IT field. These projects were created for college and internship needs to develop hard skills, including college assignments, practical work, and research.
          </p>
        </div>

        {/* Arrows for scrolling */}
        

        {/* Desktop View */}
        <div className="snap-x hidden md:flex flex-wrap -m-4 text-justify">
          {projects.map((project, index) => (
            <div className="snap-start lg:w-1/3 sm:w-1/2 p-4 mb-4 sm:mb-0" key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Mobile View with scroll */}
        <div ref={scrollRef} className="flex md:hidden overflow-x-auto space-x-4">
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
