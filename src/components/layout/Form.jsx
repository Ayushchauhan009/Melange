import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "Category 1", label: "Brand Strategy" },
  { value: "Category 2", label: "Content Marketing" },
  { value: "Category 3", label: "E-Commerce" },
  { value: "Category 4", label: "Design Solutions" },
  { value: "Category 5", label: "Performance Marketing" },
  { value: "Category 6", label: "Website Development & SEO" },
];

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleCategoryChange = (selectedValues) => {
    setSelectedCategories(selectedValues);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here

    // Reset form fields
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setSelectedCategories([]);
    setMessage("");
  };

  return (
    <div className="form-bg mx-14 py-10">
      <form onSubmit={handleSubmit} className=" lg:px-16 px-4 md:px-0">
        <div className="mb-4">
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
            placeholder="Your Full Name"
            className="w-full px-3 bg-transparent py-2 border-b outline-none border-[#756f6f]"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder="Your Email id"
            className="w-full px-3 bg-transparent py-2 border-b outline-none border-[#756f6f]"
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Your Mobile No."
            required
            className="w-full px-3 bg-transparent py-2 border-b border-[#756f6f] outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="company"
            value={company}
            onChange={handleCompanyChange}
            required
            placeholder="Your Company Name"
            className="w-full px-3 bg-transparent py-2 border-b outline-none border-[#756f6f]"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">
            What are you looking for?
          </label>
          <Select
            options={options}
            isMulti
            value={selectedCategories}
            onChange={handleCategoryChange}
            placeholder="Select"
            className="bg-transparent mutliverse-text"
          />
        </div>
        <div className="mb-4">
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            required
            placeholder="Your Message"
            className="w-full px-3 bg-transparent py-2 border outline-none border-[#756f6f]"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="submit-bg hover:bg-blue-600 text-white font-bold py-1 px-4 rounded-[50px]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
