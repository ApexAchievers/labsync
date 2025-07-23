import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mwpqknya");

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center h-screen px-4">
        <p className="text-xl font-semibold text-green-600">
          Thanks for reaching out! We'll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Us</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <p className="text-xs text-gray-500 mt-1">We usually respond within 1–2 business days.</p>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
