import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:joy.official1130@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(
      name
    )}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p className="text-lg mb-8">
          If you have any questions or would like to get in touch, feel free to reach out!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-left text-lg">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-left text-lg">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-left text-lg">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="py-2 px-6 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-600 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8">
          <p className="text-lg">You can also reach me at:</p>
          <p className="text-blue-600">
            <a href="mailto:joy.official1130@gmail.com">joy.official1130@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
