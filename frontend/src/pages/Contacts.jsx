import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contacts = () => {
  // 1. STATE MANAGEMENT (The Form Data)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [status, setStatus] = useState("idle"); // idle, submitting, success

  // 2. INPUT HANDLER
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. THE BACKEND CONNECTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    // LATER: This is where you send the data to your backend so the Admin can see it
    
    try {
      await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
    } catch (error) {
      console.error("Failed to send message", error);
      setStatus("idle");
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3 font-bold">Contacts</p>
        <h1 className="font-display text-5xl font-bold text-gray-900">Let's talk.</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        
        {/* The Contact Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 block w-full border-b border-gray-300 bg-transparent py-2 outline-none focus:border-primary transition-colors" 
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 block w-full border-b border-gray-300 bg-transparent py-2 outline-none focus:border-primary transition-colors" 
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Phone</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 block w-full border-b border-gray-300 bg-transparent py-2 outline-none focus:border-primary transition-colors" 
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Message</label>
            <textarea 
              rows={4} 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-2 block w-full border-b border-gray-300 bg-transparent py-2 outline-none focus:border-primary transition-colors resize-none" 
            />
          </div>

          <button 
            type="submit" 
            disabled={status === "submitting"}
            className="h-12 px-8 rounded-md bg-primary text-white font-medium hover:opacity-90 transition-colors disabled:opacity-50"
          >
            {status === "submitting" ? "Sending..." : status === "success" ? "Message Sent!" : "Send message"}
          </button>
        </form>

        {/* The Info Panel */}
        <div className="bg-cream rounded-lg p-8 md:p-10 shadow-sm border border-gray-100">
          <div className="aspect-4/3 rounded-md bg-white border border-gray-100 mb-8 grid place-items-center text-primary shadow-sm">
            {/* Real map integration goes here later, using a big icon for now */}
            <MapPin className="h-16 w-16 opacity-50" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <Mail className="h-5 w-5 text-primary mb-2" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Email</div>
              <div className="mt-1 font-medium text-gray-900">hello@medha.co</div>
            </div>
            <div>
              <MapPin className="h-5 w-5 text-primary mb-2" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Address</div>
              <div className="mt-1 font-medium text-gray-900">Jakarta, ID</div>
            </div>
            <div>
              <Phone className="h-5 w-5 text-primary mb-2" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Phone</div>
              <div className="mt-1 font-medium text-gray-900">+62 21 0000</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contacts;