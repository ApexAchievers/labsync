

export default function Home() {
  return (

    <>
    <div className="font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">LabSync</h1>
          <nav className="space-x-6">
            <a href="#" className="text-gray-700 hover:text-green-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Features</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Contact</a>
          </nav>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Login</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-green-500 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold mb-4">Streamline Your Lab Visits</h2>
            <p className="mb-6">Save time during your medical system visits with our smart queue system and real-time notifications. No more waiting endlessly!</p>
            <button className="bg-white text-green-600 px-6 py-3 font-semibold rounded hover:bg-gray-100">Get Started</button>
          </div>
          <img src="https://via.placeholder.com/400x250" alt="Lab visit" className="mt-8 md:mt-0 rounded shadow-lg" />
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-10">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-semibold mb-2">Smart Booking</h4>
              <p>Book appointments with ease and skip the lines.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-semibold mb-2">Real-time Queue Tracking</h4>
              <p>Know your queue position instantly on your phone.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-semibold mb-2">Smart Notifications</h4>
              <p>Get alerts when it's your turn or your results are ready.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-10">How LabSync Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-lg">For Patients</h4>
              <p>Book and manage appointments online and receive live updates.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">For Technicians</h4>
              <p>Manage patient queues and sample workflows efficiently.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">For Managers</h4>
              <p>Track performance, generate reports, and oversee lab operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Lab?</h3>
          <p className="mb-6">Join thousands of labs choosing LabSync to simplify and optimize their workflows.</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-green-600 px-6 py-3 font-semibold rounded hover:bg-gray-100">Create Account</button>
            <button className="bg-white text-green-600 px-6 py-3 font-semibold rounded hover:bg-gray-100">Schedule Demo</button>
          </div>
        </div>
      </section>

    </div>
    </>
    
  );
}
