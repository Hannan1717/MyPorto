import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Experience() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll('.experience-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('transform', 'scale-105');
          entry.target.classList.remove('opacity-0');
        } else {
          entry.target.classList.remove('transform', 'scale-105');
          entry.target.classList.add('opacity-0');
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => {
      observer.observe(card);
    });

    return () => {
      cards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  const { ref: contentRef, inView: isContentVisible } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollContainerRef.current.offsetWidth : scrollContainerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={contentRef}
      className={`text-gray-600 body-font bg-gradient-to-r from-gray-50 via-gray-100 py-4 sm:py-4 transition-all duration-1000 ease-in-out transform ${
        isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}id="experience"
    >
      <div className="container px-5 py-14 mx-auto text-center sm:py-28 relative">
        <div className="mb-16" >
          <h1 className="sm:text-4xl text-3xl font-extrabold text-gray-900 mb-4 mt-14 animate__animated animate__fadeIn" >
            Experience
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700 animate__animated animate__fadeIn animate__delay-1s">
            This is my experience while studying at Diponegoro University.
          </p>
        </div>

        {/* Left Scroll Icon */}
        <button
          className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-2 mx-1"
          onClick={() => handleScroll("left")}
        >
          <FiChevronLeft size={24} />
        </button>

        {/* Right Scroll Icon */}
        <button
          className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-2 mx-1"
          onClick={() => handleScroll("right")}
        >
          <FiChevronRight size={24} />
        </button>

        <div className="overflow-x-auto snap-x" ref={scrollContainerRef}>
          <div className="flex space-x-24 pb-4">
            {[
              {
                company: "PT. Awan Network Indonesia",
                period: "Aug 2024 - Present",
                role: "Back End Developer",
                description: "As a Backend Developer at PT Awan Network Indonesia, I developed and optimized APIs for seamless integration between the application and the website with my team. My responsibilities included ensuring efficient backend performance, implementing scalable solutions, and collaborating with cross-functional teams to deliver a robust and secure platform that enhances user interaction and functionality."
              },
              {
                company: "CV. Destinasi Computindo",
                period: "February 2024 - April 2024",
                role: "Data Entry",
                description: "I accurately entered over 15,000 birth certificate records into the Simarsip website, ensuring compliance with regulatory standards. I focused on maintaining high data quality through precise data input and adhered to policies and procedures to safeguard confidentiality and security. Additionally, I collaborated with the team to improve efficiency in the digital archiving process."
              },
              {
                company: "CV. Akuntara konsulting",
                period: "July 2022 - October 2022",
                role: "Frontend Developer",
                description: "I developed an E-learning platform for an accountant community using the Odoo website builder, incorporating features like self-paced courses, group courses, a digital marketplace, webinars, forums, job vacancies, internships, profiles, and memberships. Working within a Scrum framework, I ensured efficient and timely project delivery, while focusing on creating a responsive design and user-friendly interface for an optimal experience."
              },
            ].map((item, index) => (
              <div
                key={index}
                className="snap-start bg-gradient-to-r from-slate-50  to-gray-100  experience-card min-w-full p-10 text-justify sm:p-20  rounded-lg shadow-md hover:shadow-lg transition-all duration-500 ease-in-out transform opacity-0 animate__animated animate__fadeIn"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 text-lg font-bold mr-4">
                    {item.company.charAt(0)}
                  </div>
                  <div>
                    <span className="block font-semibold text-gray-700">{item.company}</span>
                    <span className="block text-gray-500 text-sm">{item.period}</span>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.role}</h2>
                <p className="leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
