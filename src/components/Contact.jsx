import { useState } from "react";
import { CONTACT } from "../constants"; // Make sure this import is valid

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
        {/* Uncomment if you want to display contact details */}
        {/* <p className="my-4">{CONTACT.address}</p> */}
        {/* <p className="my-4">{CONTACT.phoneNo}</p> */}
        {/* <a href="#" className="border-b">{CONTACT.email}</a> */}
      </div>

      <div className="form-container mt-10 max-w-md mx-auto">
        <form id="contact_form" onSubmit={handleSubmit}>
          <div className="mb-3 form-row">
            <div className="mr-3 form-col">
              <label htmlFor="name_input">Your Name:</label>
              <input
                type="text"
                id="name_input"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="form-col">
              <label htmlFor="email_input">Email:</label>
              <input
                type="email"
                id="email_input"
                name="email"
                placeholder="name@website.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="message_input">Message:</label>
            <textarea
              id="message_input"
              name="message"
              rows="6"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-3">
          <button
    className="btnx w-full bg-purple-400 text-white p-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
    type="submit"
  >
    Send Message
  </button>
          </div>
        </form>
      </div>

      {submitted && (
        <p className="mt-4 text-green-500 text-center">
          Your message has been sent!
        </p>
      )}
    </div>
  );
};

export default Contact;
