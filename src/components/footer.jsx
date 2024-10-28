import React, { useEffect, useState } from "react";
import { FiTwitter, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import MyLogo from "../assets/mylogo.png";
import { BsWhatsapp } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [resultMessage, setResultMessage] = useState("");
  const [resultClass, setResultClass] = useState("");
  const { ref: contentRef, inView: isContentVisible } = useInView({
    triggerOnce: false, // Allows fade-in animation on both scroll up and down
    threshold: 0.1,
  });

  useEffect(() => {
    const form = document.getElementById("form");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      setResultMessage("Please wait...");
      setResultClass("");

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      })
        .then(async (response) => {
          let json = await response.json();
          if (response.status === 200) {
            setResultMessage(json.message);
            setResultClass("text-green-500");
          } else {
            setResultMessage(json.message);
            setResultClass("text-red-500");
          }
        })
        .catch((error) => {
          console.log(error);
          setResultMessage("Something went wrong!");
          setResultClass("text-red-500");
        })
        .finally(() => {
          form.reset();
          setTimeout(() => {
            setResultMessage("");
          }, 3000);
        });
    });
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-12 rounded-xl " id="contact">
      <div
        ref={contentRef}
        className={`container mx-auto flex flex-col md:flex-row justify-around items-center px-5 transition-all duration-1000 ease-in-out transform ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <div className="lg:w-2/3 md:w-1/2 w-full bg-gray-300 rounded-lg h-[512px] overflow-hidden sm:mr-10 p-6 flex items-end justify-start relative mb-6"> {/* Added mb-6 for bottom margin */}
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11200.264001095218!2d110.42562729096943!3d-7.022060275716979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1729149080721!5m2!1sen!2sid"
            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
          ></iframe>
          <div className="bg-white flex flex-wrap py-6 rounded shadow-md w-full lg:w-3/4 min-h-[100px] relative z-10">
            <div className="lg:w-1/2 w-full px-4 sm:px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1 text-gray-900">Jl. Dr Wahidin</p>
            </div>
            <div className="lg:w-1/2 w-full px-4 sm:px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a className="text-indigo-500 leading-relaxed break-all" href="mailto:muhammadhannan574@email.com">
                muhammadhannan574@email.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed  text-gray-900">+624254238787</p>
            </div>
          </div>

        </div>

        <form
          className="w-4/5 md:w-1/3 bg-gray-800 p-6 rounded-lg shadow-lg mb-6" // Added mb-6 for bottom margin
          id="form"
        >
          <h2 className="text-lg font-semibold text-white mb-4">Get In Touch</h2>

          <input
            type="hidden"
            name="access_key"
            value="3fb4d7f3-81ab-42e0-b266-7a2aa397b69e"
          />
          <input
            type="hidden"
            name="subject"
            value="New Submission from your Website"
          />
          <input type="checkbox" name="botcheck" style={{ display: "none" }} />

          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full px-4 py-2 text-gray-900 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-2 text-gray-900 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full px-4 py-2 text-gray-900 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="mb-4">
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 text-gray-900 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 mb-6 bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-200 text-white font-semibold rounded-lg hover:opacity-80 transition duration-300 ease-in-out"
          >
            Send Message
          </button>
          <a
            href="https://wa.me/628117428555?text=Halo%20saya%20tertarik%20untuk%20menghubungi%20Anda"
            className="flex items-center text-green-300 font-bold hover:text-green-200 transition duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp className="mr-2 text-xl" />
            WhatsApp Me
          </a>
          <p
            className={`text-base text-center mt-4 ${resultClass}`}
            id="result"
          >
            {resultMessage}
          </p>
        </form>
      </div>

    </footer>
  );
};

export default Footer;

