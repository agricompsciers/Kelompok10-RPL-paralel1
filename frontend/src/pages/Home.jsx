import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Globe2, ShieldCheck } from "lucide-react";

const Home = () => {
  // Placeholder images so the page renders beautifully out of the box
  const heroImg = "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80";
  const coffeeImg = "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  const cocoaImg = "https://images.unsplash.com/photo-1590165482156-f5fd3876518a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  const spicesImg = "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; // Reusing hero for spices just as a placeholder

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <img src={heroImg} alt="Indonesian plantation" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" /> {/* Dark green overlay */}
        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-44 text-white">
          <p className="text-xs uppercase tracking-[0.3em] opacity-80 mb-6">Est. Indonesia</p>
          <h1 className="font-display text-5xl md:text-7xl max-w-3xl leading-[1.05]">
            The earth's finest, <em className="not-italic text-cream">honestly traded.</em>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg opacity-85">
            Medha Nusantara sources premium agricultural commodities from across the archipelago and delivers them to discerning buyers worldwide.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/commodities" className="inline-flex items-center gap-2 rounded-md bg-white text-primary px-6 h-12 font-medium hover:bg-cream transition-colors">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 h-12 font-medium hover:bg-white/10 transition-colors">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: Leaf, title: "Sustainably Sourced", body: "Direct partnerships with smallholder farmers and cooperatives across Sumatra, Java, and Sulawesi." },
            { icon: Globe2, title: "Globally Delivered", body: "End-to-end logistics serving buyers in Europe, Asia, the Middle East, and North America." },
            { icon: ShieldCheck, title: "Quality Assured", body: "Rigorous grading, traceability and certifications you can verify on every shipment." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title}>
              <Icon className="h-7 w-7 text-primary" />
              <h3 className="font-display text-2xl mt-5 font-bold text-gray-900">{title}</h3>
              <p className="mt-2 text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Commodities Preview Section */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Commodities</p>
              <h2 className="font-display text-4xl md:text-5xl max-w-xl font-bold text-gray-900">A harvest worth crossing oceans for.</h2>
            </div>
            <Link to="/commodities" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: coffeeImg, name: "Arabica Coffee", origin: "Aceh Gayo · Toraja" },
              { img: cocoaImg, name: "Cocoa Beans", origin: "Sulawesi · Lampung" },
              { img: spicesImg, name: "Heritage Spices", origin: "Maluku · Java" },
            ].map((p) => (
              <article key={p.name} className="group bg-card rounded-lg overflow-hidden shadow-md">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-display text-2xl font-bold text-gray-900">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.origin}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-primary rounded-2xl p-12 md:p-20 text-white shadow-xl">
          <h2 className="font-display text-4xl md:text-5xl max-w-2xl font-bold">Let's build a partnership that grows with you.</h2>
          <p className="mt-4 max-w-xl opacity-85">Tell us what you're looking for. We'll match you with the right origin, grade, and timing.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-white text-primary px-6 h-12 font-medium hover:bg-cream transition-colors">
            Start a conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;