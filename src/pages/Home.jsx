import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CalendarCheck, Bell, Timer, UserCheck, FlaskConical, Users, Clock, LineChart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import { Link } from 'react-router';

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
      icon: <CalendarCheck className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Real-time Queue",
      description: "Track your position in queue and get live updates on wait times",
      icon: <Clock className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "Smart Notifications",
      description: "Receive instant alerts for appointments, results, and queue updates",
      icon: <Bell className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive insights and reports for better lab management",
      icon: <LineChart className="w-6 h-6 text-yellow-500" />,
    },
  ];

  const features = [
    {
      title: "For Patients",
      icon: <UserCheck className="w-8 h-8 text-green-600" />,
      points: [
        "Book appointments online",
        "Check real-time queue status",
        "Receive notifications",
        "Access test results",
      ],
    },
    {
      title: "For Technicians",
      icon: <FlaskConical className="w-8 h-8 text-yellow-500" />,
      points: [
        "Manage patient queue",
        "Update test statuses",
        "Process samples efficiently",
        "Upload results instantly",
      ],
    },
    {
      title: "For Managers",
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      points: [
        "Monitor lab performance",
        "Generate detailed reports",
        "Optimize resource allocation",
        "Track staff productivity",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="font-sans text-gray-900">

        {/* Hero Section */}
        <section data-aos="fade-up" className="bg-gradient-to-r from-[#4CAF50] to-[#059669] text-white py-12 min-h-[500px] md:min-h-[500px]">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="px-4">
              <h2 className="text-4xl font-bold mb-6">Streamline Your <br />Lab Visits</h2>
              <p className="mb-6 font-normal">Smart laboratory management system that reduces wait times, improves efficiency, and enhances patient experience through real-time queue management and appointment booking.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="w-full sm:w-[194.88px] h-[52px] rounded-[8px] font-semibold transition duration-300 bg-[#C2A344] text-white hover:bg-gray-300">Get Started</button>
                <button className="w-full sm:w-[173.78px] h-[52px] rounded-[8px] font-semibold transition duration-300 bg-transparent text-white border-2 hover:bg-gray-300">Watch Demo</button>
              </div>
            </div>
            <img src="https://cdn.pixabay.com/photo/2017/10/05/21/45/laboratory-2821207_1280.jpg" alt="Lab visit" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto mt-8 md:mt-0" />
          </div>
        </section>

        {/* Key Features */}
        <section data-aos="fade-right" className="py-16 bg-[#F9FAFB] text-center  h-[552px]">
          <h2 data-aos="zoom-in" className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Key Features</h2>
          <p data-aos="zoom-in" className="mt-2 text-gray-500 text-lg">Everything you need to manage your laboratory efficiently</p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full px-4">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-[240px]">
                <div className="bg-gray-100 w-12 h-12 flex items-center justify-center rounded-lg mb-4 mx-auto hover:animate-pulse transition duration-500">
                  {feature.icon}
                </div>
                <h3 data-aos="zoom-in" className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p data-aos="zoom-in" className="mt-2 text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section data-aos="fade-up" className="bg-white py-16 px-4 text-center">
          <h2 data-aos="zoom-in" className="text-3xl md:text-4xl font-bold text-gray-900">How LabSync Works</h2>
          <p data-aos="zoom-in" className="mt-2 text-gray-500 text-lg">Simple steps for all user types</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-gray-700">
                <div className="bg-gray-100 p-5 rounded-full mb-4">{feature.icon}</div>
                <h3 data-aos="zoom-in" className="text-xl font-semibold mb-3">{feature.title}</h3>
                <ul data-aos="zoom-in" className="text-sm space-y-2">
                  {feature.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section data-aos="fade-down" className="bg-gradient-to-r from-[#4CAF50] to-[#059669] text-white py-16 ">
          <div className="container mx-auto px-4 text-center">
            <h3 data-aos="zoom-in" className="text-3xl font-bold mb-4">Ready to Transform Your Lab?</h3>
            <p data-aos="zoom-in" className="mb-6">Join thousands of laboratories already using LabSync to improve efficiency and patient satisfaction</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 ">
              <Link to="/sign-up">
                <button data-aos="zoom-in" className="w-full sm:w-[195.88px] h-[52px] rounded-[8px] font-semibold transition duration-300 bg-[#C2A344] text-white hover:bg-gray-300">Create Account</button>
              </Link>
              <Link to="/login">
                <button data-aos="zoom-in" className="w-full sm:w-[173.78px] h-[52px] rounded-[8px] font-semibold transition duration-300 bg-transparent text-white border-2 hover:bg-gray-300">Log in</button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-[#C2A344] hover:bg-[#a89034] text-white p-3 rounded-full shadow-lg z-50 transition duration-300"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

      <button
        onClick={() => setShowContact(true)}
        className="fixed bottom-6 left-6 bg-[#4CAF50] hover:bg-[#047857] text-white px-4 py-2 rounded-full shadow-md z-50 transition duration-300"
      >
        Contact Us
      </button>

      {showContact && (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-80 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-xl p-6 shadow-lg relative w-full max-w-md animate-fade-in-up">
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl font-bold"
            >
              ×
            </button>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <form className="space-y-3">
              <input name="text" placeholder="Your Name" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2" />
              <input name="email" placeholder="Your Email" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2" />
              <textarea rows="4" placeholder="Your Message" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"></textarea>
              <button type="submit" className="w-full sm:w-[200px] bg-[#059669] text-white py-2 rounded-md hover:bg-green-700 transition">Send Message</button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
