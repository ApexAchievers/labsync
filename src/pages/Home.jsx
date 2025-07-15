import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CalendarCheck, Bell, Timer } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className="font-sans text-gray-900">

      {/* Hero Section */}
      <section data-aos="fade-up" className="bg-gradient-to-r from-[#4CAF50] to-[#059669] text-white py-12 h-[500px]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="px-4">
            <h2 className="text-4xl font-bold mb-6">Streamline Your <br />Lab Visits</h2>
            <p className="mb-6 font-normal">Smart laboratory management system that reduces wait times, improves efficiency, and enhances patient experience through real-time queue management and appointment booking.</p>
            <div className="flex gap-3">
              <button className="w-[194.88px] h-[52px] rounded-[8px] font-semibold transition duration-300 bg-[#C2A344] text-white hover:bg-gray-300">Get Started Free</button>
              <button className="w-[173.78px] h-[52px] rounded-[8px] font-semibold transition duration-300 bg-transparent text-white border-2 hover:bg-gray-300">Watch Demo</button>
            </div>
          </div>
          <img src="https://cdn.pixabay.com/photo/2017/10/05/21/45/laboratory-2821207_1280.jpg" alt="Lab visit" className="w-full max-w-md md:max-w-lg h-auto mt-8 md:mt-0" />
        </div>
      </section>

      {/* Key Features */}
      <section data-aos="fade-up" className="py-8 bg-[#F9FAFB] h-[572px]">
        <div className="max-w-6xl mx-auto p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Key Features</h3>
          <p className="mb-10">Everything you need to manage your laboratory efficiently</p>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="bg-white p-6 shadow w-[280px] h-[264px] rounded-[12px]" data-aos="zoom-in">
              <CalendarCheck className="h-10 w-10 text-green-300 mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">Smart Booking</h4>
              <p>Schedule appointments with real-time availability and automated reminders </p>
            </div>
            <div className="bg-white p-6 shadow w-[280px] h-[264px] rounded-[12px]" data-aos="zoom-in" data-aos-delay="100">
              <Timer className="h-10 w-10 text-[#C2A3441A] mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">Real-time Queue Tracking</h4>
              <p>Know your queue position instantly on your phone.</p>
            </div>
            <div className="bg-white p-6 shadow w-[280px] h-[264px] rounded-[12px]" data-aos="zoom-in" data-aos-delay="200">
              <Bell className="h-10 w-10 text-[#4CAF501A] mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">Smart Notifications</h4>
              <p>Get alerts when it's your turn or your results are ready.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section data-aos="fade-up" className="py-16 h-[456px]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-10">How LabSync Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="100">
              <h4 className="font-semibold text-lg">For Patients</h4>
              <p>Book and manage appointments online and receive live updates.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <h4 className="font-semibold text-lg">For Technicians</h4>
              <p>Manage patient queues and sample workflows efficiently.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <h4 className="font-semibold text-lg">For Managers</h4>
              <p>Track performance, generate reports, and oversee lab operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section data-aos="fade-up" className="bg-gradient-to-r from-[#4CAF50] to-[#059669] text-white py-16 h-[376px]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Lab?</h3>
          <p className="mb-6">Join thousands of laboratories already using LabSync to improve efficiency and patient satisfaction</p>
          <div className="flex flex-row items-center justify-center gap-3">
            <button className="w-[194.88px] h-[52px] rounded-[8px] font-semibold transition duration-300 bg-[#C2A344] text-white hover:bg-gray-300">Create Account</button>
            <button className="w-[173.78px] h-[52px] rounded-[8px] font-semibold transition duration-300 bg-transparent text-white border-2 hover:bg-gray-300">Schedule Demo</button>
          </div>
        </div>
      </section>

    </div>
  );
}
