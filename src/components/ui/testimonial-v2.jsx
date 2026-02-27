import React from 'react';
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "My son went from a C to a B+ in math within a month. His tutor actually made it make sense for the first time.",
    name: "Michelle",
    role: "Mom of 7th grader, Alpharetta",
  },
  {
    text: "Finally, a tutoring service that doesn't cost a fortune. The tutor is amazing and my daughter actually looks forward to sessions.",
    name: "David",
    role: "Dad of 5th grader, Johns Creek",
  },
  {
    text: "The flexibility is a lifesaver. We do sessions at 8pm after soccer practice. No other service could do that.",
    name: "Jennifer",
    role: "Mom of 9th grader, Marietta",
  },
  {
    text: "I was skeptical about online tutoring but it works great. My son's writing has improved so much.",
    name: "Priya",
    role: "Mom of 8th grader, Cumming",
  },
  {
    text: "Our tutor helped my daughter go from dreading chemistry to actually enjoying it. Worth every penny.",
    name: "Lisa",
    role: "Mom of 10th grader, Roswell",
  },
  {
    text: "We tried Kumon before and it felt so impersonal. TutorTrek is the complete opposite. Our tutor really knows our son.",
    name: "Kevin",
    role: "Dad of 6th grader, Suwanee",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);

const TestimonialsColumn = (props) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent list-none m-0 p-0"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, name, role }, i) => (
              <motion.li
                key={`${index}-${i}`}
                aria-hidden={index === 1 ? "true" : "false"}
                tabIndex={index === 1 ? -1 : 0}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
                className="p-8 rounded-3xl border border-neutral-200 shadow-lg shadow-black/5 max-w-xs w-full bg-white transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <blockquote className="m-0 p-0">
                  <div className="flex gap-0.5 mb-4 text-amber-400">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-neutral-600 leading-relaxed font-normal m-0">
                    "{text}"
                  </p>
                  <footer className="flex items-center gap-3 mt-5">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                      {name[0]}
                    </div>
                    <div className="flex flex-col">
                      <cite className="font-semibold not-italic tracking-tight leading-5 text-neutral-900">
                        {name}
                      </cite>
                      <span className="text-sm leading-5 tracking-tight text-neutral-500 mt-0.5">
                        {role}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </motion.li>
            ))}
          </React.Fragment>
        ))]}
      </motion.ul>
    </div>
  );
};

function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-slate-50 py-14 md:py-24 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 },
        }}
        className="container px-5 z-10 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-12">
          <div className="flex justify-center">
            <div className="border border-neutral-300 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-neutral-600 bg-neutral-100/50">
              Testimonials
            </div>
          </div>

          <h2
            id="testimonials-heading"
            className="text-3xl md:text-5xl font-extrabold tracking-tight mt-6 text-center text-neutral-900"
          >
            Parents Love Us
          </h2>
          <p className="text-center mt-5 text-neutral-500 text-lg leading-relaxed max-w-sm">
            Hear from families across metro Atlanta who found the right tutor for their kids.
          </p>
        </div>

        <div
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://cal.com/arjun-dixit-0nwkzi/15min?layout=month_view&month=2026-03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[48px] px-8 bg-primary-600 active:bg-primary-800 text-white font-semibold text-lg rounded-xl transition-colors w-full sm:w-auto"
          >
            Join 100+ Happy Families&nbsp;&rarr;
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export { TestimonialsSection };
