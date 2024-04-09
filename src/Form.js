// src/Form.js
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    selectedOption: '',
  });

  const countries = ['USA', 'Canada', 'UK', 'Australia', 'Japan'];

  // A generic change method that should work for form input fields
  const handleChange = (e) => {
    // Use JavaScript to deconstruct the e.target object;
    // name -> name of the input field
    // value => update value
    const { name, value } = e.target;
    // When used with call back function, the hook setFormData causes React state
    // to invoke the callback with its current state (established by useState)

    // Update data using the spread operator
    // ...prevData: makes a shallow copy of 'prevData'
    // [name]: value updates the 'name' property 
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Response:', formData);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Sample Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label for="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label for="selectedOption" className="form-label">
            Select Country
          </label>
          <select
            className="form-select"
            id="selectedOption"
            name="selectedOption"
            value={formData.selectedOption}
      
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
  
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
