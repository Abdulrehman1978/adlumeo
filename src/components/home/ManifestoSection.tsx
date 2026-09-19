export default function ManifestoSection() {
  return (
    <section
      id="manifesto-burst"
      className="w-full min-h-screen bg-primary-container text-black px-margin-mobile md:px-margin py-24 flex flex-col justify-between selection:bg-black selection:text-primary-container relative overflow-hidden"
    >
      <div
        className="absolute -right-24 -top-24 w-96 h-96 bg-white/30 blur-3xl pointer-events-none animate-pulse"
        style={{ animationDuration: "6s" }}
      />

      {/* Header bar */}
      <div className="flex items-center justify-between border-b-2 border-black pb-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 font-label-technical text-xs uppercase tracking-widest font-black">
          <span className="w-3 h-3 bg-black"></span>
          <span>THE ADLUMEO MANIFESTO // RADICAL SIMPLICITY</span>
        </div>
        <span className="font-label-technical text-xs uppercase tracking-widest font-bold">
          [RULE 01: ZERO FORGETTABLE MEDIA]
        </span>
      </div>

      {/* Big Monumental Statement */}
      <div className="my-16 max-w-7xl mx-auto w-full">
        <h2 className="font-display-hero text-[11vw] sm:text-[8vw] lg:text-[6.8vw] font-black uppercase leading-[0.86] tracking-tighter">
          YOU DON’T NEED <br />
          MORE POSTS. <br />
          <span className="text-outline-lime cursor-default transition-all duration-300 hover:text-black">
            YOU NEED MORE
          </span>{" "}
          <br />
          ATTENTION.
        </h2>

        <div className="w-full h-1 bg-black my-8 transform origin-left"></div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4 font-label-technical text-sm font-bold uppercase tracking-wider leading-snug">
            The era of publishing three polite templates per week is dead. The feed algorithm rewards cinematic friction and punishes mediocrity.
          </div>
          <div className="md:col-span-8 font-body-xl text-xl sm:text-2xl font-medium leading-relaxed">
            Every second a prospective buyer scrolls past your video without pausing, your customer acquisition cost compounds. We don't produce content to satisfy arbitrary content calendars. We build high-voltage visual hooks that stop thumbs, command cultural authority, and redirect demand into verified enterprise balance sheets.
          </div>
        </div>
      </div>

      {/* 3 Core Rules / Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t-2 border-black font-label-technical max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-1 p-3 -m-3 hover:bg-black/5 transition-colors duration-200">
          <span className="text-xs uppercase opacity-70 font-semibold">01 / CREATIVE SHOCK</span>
          <p className="text-base font-bold uppercase">
            Stop the scroll within 1.2 seconds or forfeit the customer.
          </p>
        </div>
        <div className="flex flex-col gap-1 p-3 -m-3 hover:bg-black/5 transition-colors duration-200">
          <span className="text-xs opacity-70 font-semibold">02 / CULTURAL GRAVITY</span>
          <p className="text-base font-bold uppercase">
            Transform social profiles into digital luxury flagship stores.
          </p>
        </div>
        <div className="flex flex-col gap-1 p-3 -m-3 hover:bg-black/5 transition-colors duration-200">
          <span className="text-xs opacity-70 font-semibold">03 / PERFORMANCE HARVEST</span>
          <p className="text-base font-bold uppercase">
            Turn organic viral velocity straight into paid conversion scale.
          </p>
        </div>
      </div>
    </section>
  );
}
