import React, { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameValid, setFirstNameValid] = useState(true);
  const [lastNameValid, setLastNameValid] = useState(true);
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    setFirstName(value);
    setFirstNameValid(value.trim() !== "");
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    setLastName(value);
    setLastNameValid(value.trim() !== "");
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Only allow numbers and limit to 10 digits
    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstNameValid || !lastNameValid || !isValid || !phoneNumber || !message) {
      alert("Please fill in all required fields correctly.");
      return;
    }

    const whatsappNumber =  process.env.REACT_APP_WHATSAPP_NUMBER;
    const whatsappMessage = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="contact reveal py-14">
      <div className="contact-container max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="contact-text max-w-lg mx-auto space-y-3 sm:text-center">
          <h3 className="text-5xl text-gray-800 font-extrabold mx-auto md:text-5xl mb-12">
            Do you want to join Mirage?
          </h3>
          <p className="text-2xl text-gray-800 font-semibold md:text-3xl">
            Get in touch
          </p>
          <p>We’d love to hear from you! Please fill out the form below.</p>
        </div>
        <div className="contact-form mt-12 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  required
                  className={`mt-2 w-full px-3 py-2 text-gray-700 bg-white border rounded-lg shadow-sm focus:outline-none ${
                    firstNameValid
                      ? "border-gray-300 focus:border-green-600"
                      : "border-red-600 focus:border-red-600"
                  }`}
                />
                {!firstNameValid && (
                  <div className="mt-1 text-sm text-red-600">
                    First name is required.
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  value={lastName}
                  onChange={handleLastNameChange}
                  required
                  className={`mt-2 w-full px-3 py-2 text-gray-700 bg-white border rounded-lg shadow-sm focus:outline-none ${
                    lastNameValid
                      ? "border-gray-300 focus:border-green-600"
                      : "border-red-600 focus:border-red-600"
                  }`}
                />
                {!lastNameValid && (
                  <div className="mt-1 text-sm text-red-600">
                    Last name is required.
                  </div>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@example.com"
                value={email}
                onChange={handleEmailChange}
                required
                className={`mt-2 w-full px-3 py-2 text-gray-700 bg-white border rounded-lg shadow-sm focus:outline-none ${
                  isValid
                    ? "border-gray-300 focus:border-green-600"
                    : "border-red-600 focus:border-red-600"
                }`}
              />
              <p className="mt-1 text-sm text-gray-500">
                We'll never share your email with anyone else.
              </p>
              {!isValid && (
                <div className="mt-1 text-sm text-red-600" id="emailError">
                  Please enter a valid email address.
                </div>
              )}
            </div>
            <div>
              <label className="font-medium">Phone number</label>
              <div className="relative mt-2">
                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                  <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                    <option>KE</option>
                  </select>
                </div>
                <input
                  type="text"
                  placeholder="+254 000-000-000"
                  required
                  className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                  value={phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label className="font-medium">Message</label>
              <textarea
                required
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                value={message}
                onChange={handleMessageChange}
              ></textarea>
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-green-600 hover:bg-green-500 active:bg-green-600 rounded-lg duration-150">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
