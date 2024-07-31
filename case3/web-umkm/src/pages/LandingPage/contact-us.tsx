import React, { useState, ChangeEvent, FormEvent } from "react";
import Swal from "sweetalert2";
import InputField from "../../components/InputField";
import AnimateOnView from "../../hooks/AnimateOnView";

type ContactFormData = {
  fullName: string;
  subject: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    subject: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = (): boolean => {
    let isValid = true;
    let newErrors: Partial<ContactFormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
      isValid = false;
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      newErrors.email = "Valid email is required.";
      isValid = false;
    }

    if (!formData.phoneNumber.trim() || isNaN(Number(formData.phoneNumber))) {
      newErrors.phoneNumber = "Valid phone number is required.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      Swal.fire({
        title: "Sending",
        text: "Please wait...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      try {
        const response = await fetch(
          "https://porto-mail-backend.vercel.app/send",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "Thank you for contacting me!",
            text: "I'll respond as soon as I can!",
          });

          setFormData({
            fullName: "",
            subject: "",
            email: "",
            phoneNumber: "",
            message: "",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Error sending email. Please try again later.",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error sending email. Please try again later.",
        });
      }
    }
  };

  return (
    <main
      id="contact"
      className="flex justify-center items-center px-16 py-20 bg-gray-200 max-md:px-5"
    >
      <div className="flex flex-col mt-16 max-w-full w-[1024px] max-md:mt-10">
        <header className="flex flex-col text-center max-md:max-w-full">
          <h2 className="self-center text-xl font-semibold leading-8">
            Get In Touch
          </h2>
          <AnimateOnView direction="up" delay={0.1}>
            <div className="flex flex-col mt-6 max-md:max-w-full">
              <h1 className="text-6xl font-bold leading-[76.8px] max-md:max-w-full max-md:text-4xl">
                Contact me
              </h1>
              <p className="mt-8 text-2xl leading-9 max-md:max-w-full text-gray-600">
                For business and partnership inquiry please contact me below!.
              </p>
            </div>
          </AnimateOnView>
        </header>
        <form
          className="flex flex-col mt-16 max-md:mt-10 max-md:max-w-full"
          onSubmit={handleSubmit}
        >
          <AnimateOnView direction="up" delay={0.2}>
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <InputField
                    label="Full name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    error={errors.fullName}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <InputField
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    error={errors.subject}
                    placeholder="Enter the subject"
                  />
                </div>
              </div>
            </div>
          </AnimateOnView>
          <AnimateOnView direction="up" delay={0.3}>
            <div className="mt-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <InputField
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={errors.email}
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <InputField
                    label="Phone number"
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    error={errors.phoneNumber}
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </div>
          </AnimateOnView>
          <AnimateOnView direction="up" delay={0.4}>
            <div className="flex flex-col mt-8 text-xl leading-8 max-md:max-w-full">
              <label htmlFor="message" className="max-md:max-w-full">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="justify-center px-4 pt-4 pb-24 mt-2.5 bg-white text-neutral-600 rounded-lg border border-gray-400 border-solid max-md:pb-10 max-md:max-w-full"
                placeholder="Type your message..."
              />
              {errors.message && (
                <p className="text-red-500 mt-2">{errors.message}</p>
              )}
            </div>
          </AnimateOnView>
          <div className="justify-center self-center">
            <AnimateOnView direction="up" delay={0.5}>
              <button
                type="submit"
                className="px-11 py-5 mt-8 text-xl leading-8 text-white whitespace-nowrap bg-gray-400 rounded-lg max-md:px-5 border border-gray-400 transition-all hover:bg-gray-500 hover:border-gray-500"
              >
                Submit
              </button>
            </AnimateOnView>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ContactUs;
