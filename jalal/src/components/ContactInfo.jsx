import React, { useState } from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  // Form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Har field ka error store karne ke liye
  const [errors, setErrors] = useState({});

  // Success message ke liye
  const [successMsg, setSuccessMsg] = useState('');

  // Input change handle karna
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    // Jab user type kare, us field ka error hata dein
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    const { name, email, subject, message } = formData;

    // Name check
    if (!name.trim()) {
      newErrors.name = 'Please fill out this field.';
    }

    // Email check
    if (!email.trim()) {
      newErrors.email = 'Please fill out this field.';
    } else {
      // Email format check
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    // Subject check
    if (!subject.trim()) {
      newErrors.subject = 'Please fill out this field.';
    }

    // Message check
    if (!message.trim()) {
      newErrors.message = 'Please fill out this field.';
    }

    return newErrors;
  };

  // Submit handle
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    // Agar koi error hai
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMsg('');
      return;
    }

    // Sab theek hai
    setErrors({});
    setSuccessMsg('✅ Message sent successfully! We will contact you soon.');

    // Form reset
    setFormData({ name: '', email: '', subject: '', message: '' });

    // 4 second baad success message gayab
    setTimeout(() => {
      setSuccessMsg('');
    }, 4000);
  };

  return (
    <div className="contact-info-wrapper">

      {/* Divider */}
      <div className="contact-divider-section">
        <div className="divider-line"></div>
        <div className="divider-text-box">
          FEEL FREE TO CONTACT WITH US
        </div>
        <div className="divider-line"></div>
      </div>

      {/* Main Content */}
      <div className="contact-main-content">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <div className="contact-details">
            <div className="detail-item">
              <span className="detail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#000">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </span>
              <span className="detail-text">03008642244 | 03008883883 | 03008744141</span>
            </div>

            <div className="detail-item">
              <span className="detail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#000">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </span>
              <span className="detail-text">jalaltextile@gmail.com</span>
            </div>

            <div className="detail-item">
              <span className="detail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#000">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </span>
              <span className="detail-text">More Eminabad, G.T Road Gujranwala Pakistan</span>
            </div>
          </div>

          {/* MAP */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108581.7420084886!2d74.10027737539062!3d32.15355090000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918d55d29b59329%3A0x6d1a21b5a1c2b4aa!2sIkram%20Rice%20Mills%20%E2%80%93%20Premium%20Basmati%20Rice%20Millers%20And%20Exporter%20of%20Pakistan!5e0!3m2!1sen!2s!4v1791558687464!5m2!1sen!2s"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Ikram Rice Mills Location"
            ></iframe>

            <div className="custom-popup">
              <div className="popup-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#ea4335">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <p>Ikram Rice Mills – Premium Basmati Rice</p>
              </div>
              <a
                href="https://www.google.com/maps/place/Ikram+Rice+Mills+%E2%80%93+Premium+Basmati+Rice+Millers+And+Exporter+of+Pakistan/@32.0593815,74.2050167,17z"
                target="_blank"
                rel="noopener noreferrer"
              >
                More options
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (Form) */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>

            <div className="form-group">
              <label>Your name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'input-error' : ''}
              />
              {errors.name && <span className="error-msg">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label>Your email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={errors.subject ? 'input-error' : ''}
              />
              {errors.subject && <span className="error-msg">{errors.subject}</span>}
            </div>

            <div className="form-group">
              <label>Your message (optional)</label>
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'input-error' : ''}
              ></textarea>
              {errors.message && <span className="error-msg">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-btn">SUBMIT</button>

            {successMsg && (
              <div className="form-status success">
                {successMsg}
              </div>
            )}

          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactInfo;