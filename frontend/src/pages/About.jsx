import React from 'react';

// import aboutImg from '../assets/about.jpg';

const AboutPage = () => {
  const aboutImg = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";

  return (
    <>
      <section className="container-tight pt-20 pb-12 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">About Us</p>
        <h1 className="font-display text-5xl md:text-6xl max-w-3xl mx-auto leading-tight">
          Rooted in Indonesia. <em className="not-italic text-primary">Reaching the world.</em>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
          Medha Nusantara was founded on the belief that Indonesia's farmers deserve a fairer path to market — and that buyers deserve a partner they can trust on quality, traceability, and timing.
        </p>
      </section>

      <section className="container-tight grid md:grid-cols-2 gap-12 items-center py-16">
        <img 
          src={aboutImg} 
          alt="Medha Nusantara office" 
          loading="lazy" 
          width={1200} 
          height={900} 
          className="rounded-lg shadow-soft w-full h-auto" 
        />
        <div>
          <h2 className="font-display text-3xl md:text-4xl">Our Mission</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            To unlock the full value of Indonesian agriculture by building transparent supply chains, investing in producer communities, and delivering uncompromised quality to global buyers.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6">
            {[
              { k: "12+", v: "Origins" },
              { k: "30", v: "Countries served" },
              { k: "2,400", v: "Farmer partners" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl text-primary">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-tight py-20">
          <h2 className="font-display text-3xl md:text-4xl mb-10">Our Structure</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sourcing & Origin", desc: "Field teams across the archipelago working directly with cooperatives." },
              { name: "Trade & Logistics", desc: "Quality control, contracts, financing, and global shipment." },
              { name: "Partnership & Growth", desc: "Long-term programs to invest in producers and product innovation." },
            ].map((d) => (
              <div key={d.name} className="bg-card rounded-lg p-8 shadow-soft">
                <div className="h-10 w-10 rounded-md bg-primary/10 text-primary grid place-items-center font-display text-lg">
                  {d.name[0]}
                </div>
                <h3 className="font-display text-xl mt-4">{d.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;