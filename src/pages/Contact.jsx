import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  // Improved phone number validation (supporting international formats)
  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[+]?[0-9]{1,4}?[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}$/;  // Generic international phone regex
    return phoneRegex.test(phone);
  };

  // Improved email validation
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;  // Regex for general email format
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });  // Reset previous status message

    // Check if all fields are filled in
    if (!form.name || !form.email || !form.phone || !form.comment) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    // Validate email format
    if (!validateEmail(form.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    // Validate phone number format
    if (!validatePhoneNumber(form.phone)) {
      setStatus({ type: "error", message: "Please enter a valid phone number." });
      return;  // Don't proceed with form submission
    }

    // Construct message for WhatsApp
    const message = `Name: ${form.name}\n Email: ${form.email}\n Phone: ${form.phone}\n Comment: ${form.comment}`;
    
    // URL encode the message
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp Click to Chat URL
    const whatsappUrl = `https://wa.me/447936642246?text=${encodedMessage}`;  // Replace with the owner's phone number
    
    // Redirect user to WhatsApp
    window.open(whatsappUrl, "_blank");

    // Reset the form after submitting
    setForm({ name: "", email: "", phone: "", comment: "" });
    setStatus({ type: "success", message: "Thanks! We’ll get back to you shortly." });
  };

  return (
    <section className="w-full">
      {/* Hero / Banner */}
      <div
        className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "/contact2.png",
        }}
      >
        <div className="w-full bg-black/40">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24">
            <h2 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl mt-15">
              Contact
            </h2>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left: Form */}
          <div>
            <h3 className="mb-2 text-3xl font-bold text-black uppercase">Contact Us</h3>
            <p className="mb-6 text-lg text-gray-500">
              Got a question? We&apos;ve got your answer! Simply fill out the contact
              form below and we&apos;ll get back to you as soon as we can.
            </p>

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-gray-200 p-6 shadow-sm"
              noValidate
            >
              <p className="mb-4 text-sm text-red-600 font-medium">
                * Indicates required field
              </p>

              {/* Name */}
              <div className="mb-4">
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Your name"
                  required
                  aria-required="true"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="you@example.com"
                  required
                  aria-required="true"
                />
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="+44 7XXXX XXXXXX"
                  required
                  aria-required="true"
                />
              </div>

              {/* Comment */}
              <div className="mb-6">
                <label htmlFor="comment" className="mb-1 block text-sm font-medium text-gray-700">
                  Comment <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="comment"
                  value={form.comment}
                  onChange={(e) => handleChange("comment", e.target.value)}
                  className="h-40 w-full resize-y rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="How can we help?"
                  required
                  aria-required="true"
                />
              </div>

              {/* Status */}
              {status.message && (
                <div
                  className={`mb-4 rounded-lg px-3 py-2 text-sm ${status.type === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                    }`}
                  role="status"
                >
                  {status.message}
                </div>
              )}

              {/* Submit */}
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30"
                  aria-label="Submit"
                >
                  Submit
                </button>
                <p className="text-xs text-gray-500">
                  By submitting, you agree to be contacted about your enquiry.
                </p>
              </div>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-black uppercase">Contact Information</h3>
            <div className="mx-auto my-6 h-px w-1/2 bg-gray-300" />
            <div className="mx-auto mb-6 h-px w-3/4 bg-gray-300" />

            <div className="mb-4 font-semibold text-gray-600">
              <p>
                Phone :{" "}
                <a href="tel:+44 7936 642246" className="hover:text-[#f15a07] text-gray-600 hover:underline">
                  +44 7936 642246
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:anthonyspalding@committedfitness.co.uk"
                  className="text-gray-600 hover:underline hover:text-[#f15a07]"
                >
                  anthonyspalding@committedfitness.co.uk
                </a>
              </p>
            </div>

            <div className="mx-auto mb-6 h-px w-1/2 bg-gray-300" />

            <p className="mb-8 font-semibold text-gray-600">
              Address:{' '}
              <a
                href="https://www.google.com/maps?q=Unit+13,+Allenton,+Derby+DE24+8HL,+United+Kingdom"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f15a07] hover:underline"
              >
                Unit 13, Allenton, Derby DE24 8HL, United Kingdom
              </a>
            </p>

            <div className="mb-6 overflow-hidden rounded-xl border border-gray-200">
              <img
                src="/logo.png"
                alt="Group photo of business professionals"
                className="h-auto w-full"
              />
            </div>

            <p className="text-gray-500">
              We can&apos;t wait to help you crush your goals!
            </p>
          </div>
        </div>

        <div className="mt-10">
          <hr className="my-6 h-px w-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
}
