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

  const handleChange = (e) => {
    const { name, value } = e.target;
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
            onChange={handleChange}
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div class="mb-3">
          <div class="form-check">
            <input class="form-check-input" type="radio" id="html" name="fav_language" value="HTML" />
              <label class="form-check-label" for="html">HTML</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" id="css" name="fav_language" value="CSS" />
              <label class="form-check-label" for="css">CSS</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" id="javascript" name="fav_language" value="JavaScript" />
              <label class="form-check-label" for="javascript">JavaScript</label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
