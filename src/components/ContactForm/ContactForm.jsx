import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Lógica para enviar o formulário
    console.log("Formulário enviado:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4 className="title"><span>LET'S</span> TALK ABOUT IDEIAS</h4>
        <label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name"/>
        </label>

        <label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email"/>
        </label>

      <label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Message Title" />
      </label>

      <label>
        <textarea name="text" value={formData.text} onChange={handleChange} placeholder="Your Message" />
      </label>

      <button className="btn-send" type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
