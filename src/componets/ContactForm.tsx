import { useState } from 'react';
import "../styles/formStyles.css"

interface FormData {
    name: string;
    email: string;
    message: string;
  }

export function ContactForm(){
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Clear form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact" className='backgroundForm'>
    <form onSubmit={handleSubmit} className='formStyles'>
      <label className='inputFeild'>
        Name:<p/>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className='inputStyles'
        />
      </label>
      <label className='inputFeild'>
        Email:<p/>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className='inputStyles'
        />
      </label>
      <label className='inputFeild'>
        Message:<p/> 
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className='inputStyles'
        />
      </label>
      <button type="submit" className='buttonStyles'>Submit</button>
    </form>  
    </div>
  );
};




