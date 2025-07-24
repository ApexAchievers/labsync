import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CalendarCheck, Bell, Timer, Tally1Icon, Tally2, Tally3, UserCheck, FlaskConical, Users, Clock, LineChart } from 'lucide-react';
import tubes from '../assets/images/Laboratory.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import { Link } from 'react-router';
import { p, title } from 'motion/react-client';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  const [showContact, setShowContact] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const keyFeatures = [
    {
      title: "Smart Booking",
      description: "Schedule appointments with real-time availability and automated reminders",
      icon: <CalendarCheck className="w-6 h-6 text-red-700" />,
    },
    {
      title: "Real-time Queue",
      description: "Track your position in queue and get live updates on wait times",
      icon: <Clock className="w-6 h-6 text-red-700" />,
    },
    {
      title: "Smart Notifications",
      description: "Receive instant alerts for appointments, results, and queue updates",
      icon: <Bell className="w-6 h-6 text-red-700" />,
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive insights and reports for better lab management",
      icon: <LineChart className="w-6 h-6 text-red-700" />,
    },
  ];

  const features = [
    {
      title: "For Patients",
      icon: <UserCheck className="w-6 h-6 sm:w-8 sm:h-8 text-red-700" />,
      points: [
        "Book appointments online",
        "Check real-time queue status",
        "Receive notifications",
        "Access test results",
      ],
    },
    {
      title: "For Technicians",
      icon: <FlaskConical className="w-6 h-6 sm:w-8 sm:h-8 text-red-700" />,
      points: [
        "Manage patient queue",
        "Update test statuses",
        "Process samples efficiently",
        "Upload results instantly",
      ],
    },
    {
      title: "For Managers",
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-red-700" />,
      points: [
        "Monitor lab performance",
        "Generate detailed reports",
        "Optimize resource allocation",
        "Track staff productivity",
      ],
    },
  ];

  const services = [
    {
      title: "Routine & Specialized Testing",
      icon: <Tally1Icon className="w-6 h-6 sm:w-8 sm:h-8 text-center items-center" />,
      points: [
        "Blood Tests",
        "Urine Analysis",
        "Microbiology",
        "Pathology",
        "Molecular Diagnostics"
      ],
    },
    {
      title: "COVID-19 & Infectious Disease Testing with Same-Day Results" ,
      icon: <Tally2 className="w-6 h-6 sm:w-8 sm:h-8 text-center items-center" />,
      points: [
        "Rapid Antigen Tests",
        "PCR Testing",
        "Antibody Testing",
        "Influenza Testing",
      ],
    },
    {
      title: "Health Screening Packages",
      icon: < Tally3 className="w-6 h-6 sm:w-8 sm:h-8 text-center items-center" />,
      points: [
        "Rapid Antigen Tests",
        "PCR Testing",
        "Antibody Testing",
        "Influenza Testing",
      ],
    },

  ];

  return (
    <>
      <Navbar />
      <div className="font-sans text-gray-900">

        {/* Hero Section */}
        <section
        id="hero"
  data-aos="fade-down"
  className="text-blue-600 relative px-4 overflow-hidden py-15 sm:py-12 lg:py-16 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]"
  style={{
    background: "linear-gradient(135deg, #c8c8da 0%, #efeff7 30%, #c9c8d8 100%)"
  }}
>
          <div className="container mx-auto p-10 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-10">
            <div className="w-full lg:w-1/2 text-center lg:text-left px-2 sm:px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Welcome to <br className="hidden sm:block" />LabSync
              </h2>
              <p className="mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                At LabSync, we are committed to delivering fast, accurate, and reliable laboratory testing services to support patient care and clinical decision-making. Whether you’re a healthcare provider, hospital, or individual patient, our state-of-the-art facility and expert team ensure top-tier diagnostic solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start">
                <Link to="/sign-up">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition duration-300 bg-blue-600 text-white hover:bg-transparent hover:text-red-700 hover:border-2 hover:border-red-700 min-w-[160px] cursor-pointer">
                    Get Started
                  </button>
                </Link>

                <Link>
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition duration-300 bg-transparent text-red-700 border-2 border-red-700 hover:bg-blue-800 hover:text-white hover:border-0 min-w-[160px] cursor-pointer">
                    Watch Demo
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img
              src={tubes}
              alt="Scientist holding blood samples in a laboratory"
                className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section id="features" data-aos="fade-right" className="py-12 sm:py-16 lg:py-20 bg-[#F9FAFB] text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 data-aos="zoom-in" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2 sm:mb-4">
              Key Features
            </h2>
            <p data-aos="zoom-in" className="text-blue-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
              Everything you need to manage your laboratory efficiently
            </p>
            <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="bg-blue-500 p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 h-auto sm:h-[240px] flex flex-col">
                  <div className="bg-gray-100 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg mb-3 sm:mb-4 mx-auto hover:animate-pulse transition duration-500">
                    {feature.icon}
                  </div>
                  <h3 data-aos="zoom-in" className="text-base sm:text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p data-aos="zoom-in" className="text-xs sm:text-sm text-white flex-grow">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* How It Works */}
        <section id="overview" data-aos="fade-up" className="bg-[#d6e1fa] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="container mx-auto">
            <h2 data-aos="zoom-in" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              How LabSync Works
            </h2>
            <p data-aos="zoom-in" className="text-gray-500 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
              Simple steps for all user types
            </p>
            <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-gray-700 p-4 sm:p-6 rounded-lg hover:bg-gray-50 transition duration-300">
                  <div className="bg-gray-100 p-3 sm:p-4 lg:p-5 rounded-full mb-3 sm:mb-4">
                    {feature.icon}
                  </div>
                  <h3 data-aos="zoom-in" className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <ul data-aos="zoom-in" className="text-sm sm:text-base space-y-1 sm:space-y-2 text-center">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-center justify-center gap-2">
                        <span>•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" data-aos="fade-up" className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="container mx-auto">
            <h2 data-aos="zoom-in" className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
              Our Services
            </h2>
            <p data-aos="zoom-in" className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
              Comprehensive Diagnostic Services Designed With Your Health in Mind
            </p>
            <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col items-center border-2 border-red-700 p-4 sm:p-6 rounded-lg hover:bg-red-50 transition duration-300">
                  <div className="p-3 sm:p-4 lg:p-5 rounded-full mb-3 sm:mb-4">
                    {service.icon}
                  </div>
                  <h3 data-aos="zoom-in" className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <ul data-aos="zoom-in" className="text-sm sm:text-base space-y-1 sm:space-y-2 text-center">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-center justify-center gap-2">
                        <span>•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section data-aos="fade-down" className="bg-gradient-to-r from-[#5021a7] to-blue-600 text-white py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 data-aos="zoom-in" className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Ready to Transform Your Lab?
            </h3>
            <p data-aos="zoom-in" className="mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
              Join thousands of laboratories already using LabSync to improve efficiency and patient satisfaction
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link to="/sign-up">
                <button data-aos="zoom-in" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition duration-300 bg-white text-red-800 hover:bg-transparent hover:border-2 hover:border-white hover:text-white  min-w-[160px] cursor-pointer">
                  Create Account
                </button>
              </Link>
              <Link to="/login">
                <button data-aos="zoom-in" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition duration-300 bg-transparent text-white border-2 hover:bg-white hover:border-0 hover:text-red-800 min-w-[160px] cursor-pointer">
                  Log in
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 bg-red-700  text-white p-2 sm:p-3 rounded-full shadow-lg z-50 transition duration-300 text-sm sm:text-base"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

      <button
        onClick={() => setShowContact(true)}
        className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-full shadow-md z-50 transition duration-300 text-xs sm:text-sm cursor-pointer"
      >
        Contact Us
      </button>

      {showContact && (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-50 flex justify-center items-center z-50 px-4 sm:px-6">
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg relative w-full max-w-md animate-fade-in-up max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-600 hover:text-red-700 text-xl sm:text-2xl font-bold w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 pr-8">Contact Us</h3>
            <div className="space-y-3 sm:space-y-4">
              <input
                name="text"
                placeholder="Your Name"
                className="w-full p-2 sm:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm sm:text-base"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="w-full p-2 sm:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm sm:text-base"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-2 sm:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm sm:text-base resize-none"
              ></textarea>
              <button
                type="button"
                className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-md transition text-sm sm:text-base font-medium"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}