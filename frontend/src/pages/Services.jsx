import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Placeholder images for the three service pillars
const tradingImg = "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; 
const supplyImg = "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; 
const partnershipImg = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; 

const services = [
  { img: tradingImg, title: "Trading", desc: "Spot and forward contracts across major Indonesian commodities, with transparent pricing and dependable execution." },
  { img: supplyImg, title: "Supply Chain", desc: "Warehousing, quality control, documentation, and global freight orchestration — handled end to end." },
  { img: partnershipImg, title: "Partnership", desc: "Long-term collaborations with growers, roasters, and manufacturers to develop traceable, certified product lines." },
];

const ServicesPage = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-bold">Services</p>
        <h1 className="font-display text-5xl md:text-6xl max-w-3xl mx-auto font-bold text-gray-900">What we do, end to end.</h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-8">
        {services.map((s) => (
          <article key={s.title} className="group">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-md">
              <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <h3 className="font-display text-2xl mt-6 underline decoration-primary/40 underline-offset-8 font-bold text-gray-900">{s.title}</h3>
            <p className="text-muted-foreground mt-3 leading-relaxed">{s.desc}</p>
            {/* Note: This link was changed from /contacts to /contact to match your App.jsx routing */}
            <Link to="/Contacts" className="inline-flex items-center gap-2 text-primary text-sm font-medium mt-4 hover:gap-3 transition-all">
              Learn more <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}

export default ServicesPage;