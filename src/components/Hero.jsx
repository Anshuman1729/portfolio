const Hero = ({ stats, Icon }) => {
  return (
    <section id="about" className="pt-32 pb-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest">
            <Icon name="trending-up" size={14} /> Growth & Performance Marketing
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Scaling Growth With{" "}
            <span className="text-indigo-600 italic">Precision.</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-xl">
            Performance marketer owning acquisition and P&L outcomes. I scale
            topline revenue while improving unit economics through analytical
            rigor and lifecycle-led growth.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="mailto:khare.anshuman47@gmail.com"
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-lg flex items-center gap-2"
            >
              Get in Touch <Icon name="mail" />
            </a>

            <a
              href="https://www.linkedin.com/in/anshumankhare/"
              target="_blank"
              className="px-8 py-4 bg-white border rounded-xl font-bold flex items-center gap-2"
            >
              LinkedIn <Icon name="linkedin" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="metric-card p-6 bg-slate-50 border rounded-2xl"
            >
              <p className="text-indigo-600 text-sm font-semibold">
                {stat.label}
              </p>
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-slate-500 text-xs uppercase">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 🔑 expose globally for CDN usage
window.Hero = Hero;
const Hero = ({ stats, Icon }) => {
  return (
    <section id="about" className="pt-32 pb-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest">
            <Icon name="trending-up" size={14} /> Growth & Performance Marketing
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Scaling Growth With{" "}
            <span className="text-indigo-600 italic">Precision.</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-xl">
            Performance marketer owning acquisition and P&L outcomes. I scale
            topline revenue while improving unit economics through analytical
            rigor and lifecycle-led growth.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="mailto:khare.anshuman47@gmail.com"
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-lg flex items-center gap-2"
            >
              Get in Touch <Icon name="mail" />
            </a>

            <a
              href="https://www.linkedin.com/in/anshumankhare/"
              target="_blank"
              className="px-8 py-4 bg-white border rounded-xl font-bold flex items-center gap-2"
            >
              LinkedIn <Icon name="linkedin" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="metric-card p-6 bg-slate-50 border rounded-2xl"
            >
              <p className="text-indigo-600 text-sm font-semibold">
                {stat.label}
              </p>
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-slate-500 text-xs uppercase">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 🔑 expose globally for CDN usage
window.Hero = Hero;
