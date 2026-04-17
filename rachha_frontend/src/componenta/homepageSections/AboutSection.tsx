export default function AboutSection() {
  return (
    <section className="relative z-10 bg-roseMist text-charcoal py-16">
      <div className="relative w-screen max-w-full overflow-hidden">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative mx-auto max-w-4xl">
            <span className="card-bg-loop card-bg-loop-reverse pointer-events-none absolute left-0 top-0 z-0 -translate-y-10 text-[7rem] md:text-[16rem] leading-none font-serif uppercase text-royalGold/70 tracking-[0.5em] select-none whitespace-nowrap" data-text="RACHHA">
              RACHHA
            </span>

            <span className="card-bg-loop pointer-events-none absolute left-0 bottom-0 z-0 translate-y-10 text-[7rem] md:text-[16rem] leading-none font-serif uppercase text-royalGold/70 tracking-[0.5em] select-none whitespace-nowrap" data-text="RACHHA">
              RACHHA
            </span>

            {/* <div className="relative z-10 rounded-[2rem] border-2 border-royalGold backdrop-blur-lg p-8 md:p-12 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.25)]">  */}

            {/* <div className="relative z-10 rounded  backdrop-blur-lg p-8 md:p-12 shadow-[0_25px_80px_-40px_rgba(212,175,55)]">  */}
            <div className="relative z-10 h-[45rem] rounded-full flex flex-col items-center justify-start gap-8 bg-white/20 backdrop-blur-lg p-8 md:p-12  text-center">

              <div className="flex flex-col items-center justify-center gap-6">
                <img
                  src="https://res.cloudinary.com/dfr5w7ayr/image/upload/q_auto/f_auto/v1776407767/curev-garlend-white-background_1_1_rnfice.svg"
                  alt="flower garlend curved"
                  className="h-40 w-auto"
                />

                <div className="gold-title-shine font-serif font-thin tracking-[0.1em] text-5xl md:text-5xl uppercase">
                  About Us
                </div>
              </div>

              <div className="font-sans font-normal tracking-[0.1em] text-lg space-y-8 text-center relative max-w-3xl">
                <p className="inline-flex flex-wrap items-center justify-center gap-2">
                  <span>At</span>
                  <span className="inline-flex items-center justify-center gap-2">
                    <img
                      src="https://res.cloudinary.com/dfr5w7ayr/image/upload/v1776364081/gemeni-namelogo-golden-removebg-preview_1_wgryid.svg"
                      alt="Rachha logo"
                      className="h-5"
                    />
                  </span>
                  <span>, we believe every celebration deserves to be extraordinary.</span>
                </p>
                <p>
                  We specialize in planning and executing events that are elegant, stress-free, and memorable. Our goal is to turn your vision into reality with creative ideas, attention to detail, and smooth execution.
                </p>
                <p>
                  Whether it’s a small gathering or a big wedding, we ensure everything is perfectly managed so you can enjoy your special day.
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
