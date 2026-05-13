import React, { useState, useEffect } from "react";
import { LayoutGrid, List, Check } from "lucide-react";

const CommoditiesPage = () => {
  // 1. STATE MANAGEMENT
  const [commodities, setCommodities] = useState([]);
  const [active, setActive] = useState([]);
  const [view, setView] = useState("grid");
  const [loading, setLoading] = useState(true);

  // Fallback image just in case the database entry is missing an image
  const coffeeImg = "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

  const filters = ["Coffee", "Cocoa", "Spices", "Coconut", "Rubber", "Palm"];

  // 2. THE REAL BACKEND CONNECTION
  useEffect(() => {
    const fetchCommodities = async () => {
      try {
        // Fetching directly from your groupmate's CRUD API
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        
        // Save the real database items to state
        setCommodities(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from backend:", error);
        setLoading(false);
      }
    };

    fetchCommodities();
  }, []);

  // 3. DYNAMIC FILTERING LOGIC
  // (Added a safety check 'i.tags &&' so it doesn't crash since the DB doesn't have tags yet)
  const visible = active.length 
    ? commodities.filter((i) => i.tags && i.tags.some((t) => active.includes(t))) 
    : commodities;

  const toggle = (f) => setActive((a) => (a.includes(f) ? a.filter((x) => x !== f) : [...a, f]));

  // 4. THE RENDER
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3 font-bold">Commodities</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900">Our catalogue</h1>
        </div>
        
        {/* Grid/List Toggle Buttons */}
        <div className="flex items-center gap-1 border border-gray-300 rounded-md p-1 self-start sm:self-auto">
          <button 
            onClick={() => setView("list")} 
            className={`h-8 w-8 grid place-items-center rounded transition-colors ${view === "list" ? "bg-primary text-white" : "text-gray-500 hover:bg-gray-100"}`}
          >
            <List className="h-4 w-4" />
          </button>
          <button 
            onClick={() => setView("grid")} 
            className={`h-8 w-8 grid place-items-center rounded transition-colors ${view === "grid" ? "bg-primary text-white" : "text-gray-500 hover:bg-gray-100"}`}
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-[240px_1fr] gap-10">
        
        {/* Sidebar Filters */}
        <aside>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-bold">Filter by category</div>
          <ul className="space-y-2">
            {filters.map((f) => {
              const on = active.includes(f);
              return (
                <li key={f}>
                  <button onClick={() => toggle(f)} className="flex items-center gap-3 w-full text-left text-sm py-2 hover:opacity-80 transition-opacity">
                    <span className={`h-5 w-5 rounded border grid place-items-center transition-colors ${on ? "bg-primary border-primary text-white" : "border-gray-300 bg-white"}`}>
                      {on && <Check className="h-3 w-3" />}
                    </span>
                    {f}
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Product Display Area */}
        {loading ? (
          <div className="grid place-items-center h-64 text-gray-500">Loading live commodities from database...</div>
        ) : (
          <div className={view === "grid" ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
            {visible.map((it, i) => view === "grid" ? (
              
              // GRID CARD VIEW (Updated with DB schema)
              <article key={i} className="bg-white rounded-lg overflow-hidden shadow-md group border border-gray-100">
                <div className="aspect-square overflow-hidden">
                  <img src={it.imageUrl || coffeeImg} alt={it.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold text-gray-900">{it.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{it.description}</p>
                  <p className="text-lg font-bold text-primary mt-2">${it.price}</p>
                  <button className="mt-4 w-full h-10 rounded-md bg-primary text-white text-sm font-medium hover:opacity-90 transition-colors">
                    Request quote
                  </button>
                </div>
              </article>
            ) : (
              
              // LIST ROW VIEW (Updated with DB schema)
              <article key={i} className="flex flex-col sm:flex-row gap-5 bg-white rounded-lg p-4 shadow-sm border border-gray-100 items-start sm:items-center">
                <img src={it.imageUrl || coffeeImg} alt={it.name} loading="lazy" className="h-24 w-24 object-cover rounded shrink-0" />
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-gray-900">{it.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{it.description}</p>
                  <p className="text-lg font-bold text-primary mt-1">${it.price}</p>
                </div>
                <button className="w-full sm:w-auto px-6 h-10 rounded-md bg-primary text-white text-sm font-medium hover:opacity-90 transition-colors">
                  Quote
                </button>
              </article>
            ))}

            {/* Failsafe if database is completely empty */}
            {visible.length === 0 && !loading && (
              <div className="col-span-full text-center py-10 text-gray-500">
                No commodities found in the database. Add some from the Admin Dashboard!
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default CommoditiesPage;