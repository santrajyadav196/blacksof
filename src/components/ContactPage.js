"use client";
import { useState, useEffect } from "react";
import Input from "./Input";
import Textarea from "./TextArea";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitted(true);
    console.log("Submitting form data:", formData);

    // Optionally clear form data after submit success
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  // Reset submitted to false after 5 seconds
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const formFields = (
    <>
      {/* ... your input fields (same as before) ... */}
      <div className="flex flex-col">
        <Input
          id="name"
          name="name"
          placeholder="Full name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby="name-error"
        />
        {errors.name && (
          <span
            className="text-red-500 text-sm mt-1 font-medium"
            id="name-error"
            role="alert"
          >
            {errors.name}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby="email-error"
        />
        {errors.email && (
          <span
            className="text-red-500 text-sm mt-1 font-medium"
            id="email-error"
            role="alert"
          >
            {errors.email}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <Input
          id="company"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          aria-invalid={errors.company ? "true" : "false"}
          aria-describedby="company-error"
        />
        {errors.company && (
          <span
            className="text-red-500 text-sm mt-1 font-medium"
            id="company-error"
            role="alert"
          >
            {errors.company}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <Textarea
          id="message"
          name="message"
          placeholder="Message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby="message-error"
        />
        {errors.message && (
          <span
            className="text-red-500 text-sm mt-1 font-medium"
            id="message-error"
            role="alert"
          >
            {errors.message}
          </span>
        )}
      </div>

      <div className="flex justify-center md:grid relative place-content-center md:place-content-start">
        <button
          type="submit"
          className="
            flex justify-center gap-1 w-full
            disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer
            relative outline-none rounded-full
            bg-transparent border border-white
            text-white stroke-dark font-semibold
            text-sm lg:text-base
            px-8 md:px-12 py-3
            transition
            duration-300 ease-in-out
            hover:bg-white hover:text-black hover:stroke-white hover:border-transparent
            focus:bg-white focus:text-black focus:stroke-white focus:border-transparent
            transform hover:scale-105 focus:scale-105
          "
        >
          Send
        </button>
      </div>
    </>
  );

  return (
    <div className="h-auto bg-darkBlue py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-y-10 col-start-1 md:grid-cols-2 md:col-start-2 col-end-13 md:col-end-12 2xl:col-end-11 text-white mb-3">
          <section>
            <h1 className="text-2xl lg:text-[28px] xlg:text-3xl 2xl:text-4xl md:leading-snug lg:leading-snug 2xl:leading-snug font-semibold block">
              Get in touch
            </h1>

            <div className="h-[2px] w-12 bg-white my-3 md:my-5 lg:my-6 2xl:my-8" />

            {/* Mobile form */}
            <form
              className="md:hidden mx-auto w-full grid gap-4 2xl:gap-9 xl:gap-4 mt-6 mb-8"
              onSubmit={handleSubmit}
              noValidate
            >
              {formFields}

              {/* Show success message on desktop form */}
              {submitted && (
                <p className="text-green-500 font-semibold text-center mt-6">
                  Form submitted successfully!
                </p>
              )}
            </form>

            <p className="font-normal text-base md:text-lg 2xl:text-2xl mt-4 md:mt-0">
              For general enquiries
            </p>

            {/* Contact info list (unchanged) */}
            <ul className="list-none flex flex-col gap-3 md:gap-5 2xl:gap-7 pt-5 md:pt-7 2xl:pt-8">
              {/* ... your address, phone, email ... */}
              <li className="flex flex-col gap-px items-start">
                <span className="font-medium text-lg md:text-lg xl:text-xl">
                  Address :
                </span>
                <address className="not-italic font-normal text-white text-opacity-90 text-sm md:text-base 2xl:text-xl">
                  110, 16th Road, Chembur,
                  <br className="xl:hidden block" />
                  Mumbai - 400071
                </address>
              </li>
              <li className="flex flex-col items-start gap-px text-base md:text-lg 2xl:text-xl">
                <span className="font-medium text-lg md:text-lg xl:text-xl">
                  Phone :
                </span>
                <a
                  href="tel:+912225208822"
                  className="font-normal hover:underline focus-visible:underline underline-offset-4 decoration-from-font outline-none focus-visible:outline-none text-white text-opacity-90 text-sm md:text-base 2xl:text-xl"
                >
                  +91 22 25208822
                </a>
              </li>
              <li className="flex items-start flex-col gap-px text-base md:text-lg 2xl:text-xl">
                <span className="font-medium text-lg md:text-lg xl:text-xl">
                  Email :
                </span>
                <a
                  href="mailto:info@supremegroup.co.in"
                  className="font-normal text-white hover:underline focus-visible:underline underline-offset-4 decoration-from-font outline-none focus-visible:outline-none text-opacity-90 text-sm md:text-base 2xl:text-xl"
                >
                  info@supremegroup.co.in
                </a>
              </li>
            </ul>
          </section>

          {/* Desktop form */}
          <section className="hidden md:block">
            <form
              className="mx-auto w-full grid gap-4 xl:gap-4 2xl:gap-9"
              onSubmit={handleSubmit}
              noValidate
            >
              {formFields}
            </form>

            {/* Show success message on desktop form */}
            {submitted && (
              <p className="text-green-500 font-semibold text-center mt-6">
                Form submitted successfully!
              </p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
