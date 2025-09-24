// src/pages/Contact.tsx
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status ,setStatus] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement; 
    const fd = new FormData(form);
    fd.append("access_key", "dd12f02d-38bf-4faa-8e71-50d60f058657");

    const object = Object.fromEntries(fd);
    const json = JSON.stringify(object);

    setLoading(true);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    setLoading(false);
    if (res.success) {
      setError("");
      setStatus(true);
      setTimeout(() => {
        setStatus(false);
      }, 2000);
      form.reset();
    } else {
      setError("Something went wrong");
    }
  };

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-16 sm:px-6 lg:px-8" id="contact">
      <div className="w-full max-w-lg space-y-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Contact Me
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Let's build something amazing together.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6" method="POST">
          <div className="space-y-6">
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                autoComplete="name"
                className="block w-full rounded-lg border-gray-700 bg-gray-900/50 py-4 px-5 text-white placeholder-gray-400 focus:border-primary focus:ring-primary transition-colors"
                id="name"
                name="name"
                placeholder="Name"
                required
                type="text"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                autoComplete="email"
                className="block w-full rounded-lg border-gray-700 bg-gray-900/50 py-4 px-5 text-white placeholder-gray-400 focus:border-primary focus:ring-primary transition-colors"
                id="email"
                name="email"
                placeholder="Email Address"
                required
                type="email"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                className="block w-full rounded-lg border-gray-700 bg-gray-900/50 py-4 px-5 text-white placeholder-gray-400 focus:border-primary focus:ring-primary transition-colors"
                id="message"
                name="message"
                placeholder="Your Message"
                required
                rows={5}
              ></textarea>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-lg bg-primary py-4 px-4 text-lg font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {error && <p className="text-white mt-2">{error}</p>}
            {
              status && <div className="border p-4 border-green-500 mt-2 text-white">Send sucessfully</div>
            }
          </div>
        </form>
      </div>
    </main>
  );
};

export default Contact;
