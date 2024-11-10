import { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/formStyles.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        "your_service_id", // Replace with your EmailJS Service ID
        "your_template_id", // Replace with your EmailJS Template ID
        { ...formData } as Record<string, unknown>, // Convert formData to a compatible type
        "your_user_id" // Replace with your EmailJS User ID
      );
      console.log("Email sent successfully:", result.text);
      setFormData({ name: "", email: "", message: "" }); // Clear form after submission
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
    <div id="contact" className="backgroundForm">
      <form onSubmit={handleSubmit} className="formStyles">
        <label className="inputFeild">
          Name:
          <p />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="inputStyles"
          />
        </label>
        <label className="inputFeild">
          Email:
          <p />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="inputStyles"
          />
        </label>
        <label className="inputFeild">
          Message:
          <p />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="inputStyles"
          />
        </label>
        <button type="submit" className="buttonStyles">
          Submit
        </button>
      </form>
    </div>
  );
}
