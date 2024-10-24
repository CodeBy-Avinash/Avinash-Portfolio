import { useState } from "react";
import { CONTACT } from "../constants";

const Contact = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // State to manage form submission status
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div id="Contact" className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        {/* <p className="my-4">{CONTACT.address}</p> */}
        {/* <p className="my-4">{CONTACT.phoneNo}</p> */}
        {/* <a href="#" className="border-b">{CONTACT.email}</a> */}
      </div>

      <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-left mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-left mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-left mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>

      {submitted && (
        <p className="mt-4 text-green-500 text-center">
          Your message has been sent!
        </p>
      )}
    </div>
  );
};

export default Contact;
