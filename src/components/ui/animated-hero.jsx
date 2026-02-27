import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE = "4702232680";
const PHONE_DISPLAY = "470-223-2680";
const CALENDLY_URL = "https://cal.com/arjun-dixit-0nwkzi/15min?layout=month_view&month=2026-03";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["math.", "science.", "writing.", "test prep.", "confidence."],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto px-5">
        <div className="flex gap-5 md:gap-8 py-10 md:py-16 lg:py-32 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4 cursor-default">
              Top-School Tutors &middot; $35/hr &middot; 100+ Students Helped
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-[2.25rem] leading-[1.1] md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span>Your kid's grades, fixed in</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              $35/hr. No contracts. Grade improvement in 2-3 weeks or your next session is free. We hand-pick every tutor so you don't have to.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button size="lg" className="gap-4 h-14 text-base rounded-xl" asChild>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Book a Free Call <MoveRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-4 h-14 text-base rounded-xl" asChild>
              <a href={`sms:${PHONE}`}>
                Text Us: {PHONE_DISPLAY} <MessageCircle className="w-4 h-4" />
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-3 w-full max-w-lg">
            <div className="flex flex-col items-center text-center gap-1.5 px-2 py-3 rounded-xl bg-secondary">
              <GraduationIcon />
              <span className="text-sm font-semibold text-foreground">Elite Tutors</span>
              <span className="text-xs text-muted-foreground leading-tight">GT students and top performers, hand-picked</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1.5 px-2 py-3 rounded-xl bg-secondary">
              <StarIcon />
              <span className="text-sm font-semibold text-foreground">$35/hr Flat</span>
              <span className="text-xs text-muted-foreground leading-tight">No contracts, no hidden fees, cancel anytime</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1.5 px-2 py-3 rounded-xl bg-secondary">
              <UsersIcon />
              <span className="text-sm font-semibold text-foreground">Sessions in 48hrs</span>
              <span className="text-xs text-muted-foreground leading-tight">Matched, scheduled, and learning fast</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GraduationIcon() {
  return (
    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15v-3.75m0 0-2.25.75L12 16.5l7.5-4.5-2.25-.75" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  );
}

export { Hero };
