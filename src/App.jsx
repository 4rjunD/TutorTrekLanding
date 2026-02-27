import { useState, useEffect } from 'react'
import { Hero } from '@/components/ui/animated-hero'
import { TestimonialsSection } from '@/components/ui/testimonial-v2'

const PHONE = '4702232680'
const PHONE_DISPLAY = '470-223-2680'
const CALENDLY_URL = 'https://cal.com/arjun-dixit-0nwkzi/15min?layout=month_view&month=2026-03'

function App() {
  const [showSticky, setShowSticky] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* ───── HERO ───── */}
      <Hero />

      {/* ───── PAIN POINT ───── */}
      <section className="bg-slate-50 px-5 py-14 md:py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            You've already tried everything.
          </h2>
          <p className="mt-5 text-slate-600 leading-relaxed text-lg">
            YouTube videos. Helping with homework yourself. Maybe even a tutoring center that charged $80/hr and stuck your kid in a room with 10 other students. The grades didn't move. The confidence kept dropping. And you're still paying.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed text-lg">
            The problem isn't your kid. It's that nobody's sat down 1-on-1 with someone who recently took the exact same class, remembers exactly what's confusing, and actually knows how to explain it.
          </p>
          <p className="mt-5 text-slate-900 font-semibold text-lg">
            That's what we do. And if your kid's grades don't improve within the first month, your next session is on us.
          </p>
          <div className="mt-8">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[48px] px-8 bg-primary-600 active:bg-primary-800 text-white font-semibold text-lg rounded-xl transition-colors w-full sm:w-auto"
            >
              Book a Free Call&nbsp;&rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ───── HOW IT WORKS ───── */}
      <section className="px-5 py-14 md:py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl text-center">
            You Do Nothing. We Handle Everything.
          </h2>
          <p className="mt-3 text-slate-500 text-center max-w-md mx-auto">
            No searching for tutors. No vetting resumes. No scheduling headaches. Here's how it works:
          </p>

          <div className="mt-10 space-y-8">
            <Step
              num="1"
              icon={<PhoneIcon />}
              title="15-minute call (that's it)"
              desc="Tell us your kid's subjects, grade level, and what they're struggling with. We take it from there."
            />
            <Step
              num="2"
              icon={<SearchIcon />}
              title="We hand-pick the perfect tutor"
              desc="Not a random match. We find the tutor who fits your kid's subject, personality, and schedule. You approve before anything starts."
            />
            <Step
              num="3"
              icon={<TrendIcon />}
              title="Grades improve in 2-3 weeks"
              desc="Sessions start within 48 hours. Fully online, so no driving anywhere. Most parents see a grade jump within the first month."
            />
          </div>

          <div className="mt-10 text-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[56px] px-8 bg-primary-600 active:bg-primary-800 text-white font-semibold text-lg rounded-xl transition-colors w-full sm:w-auto"
            >
              Book Your Free Call&nbsp;&rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ───── WHY TUTORTREK ───── */}
      <section className="bg-slate-50 px-5 py-14 md:py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl text-center">
            Everything You Get for $35/hr
          </h2>
          <p className="mt-3 text-slate-500 text-center max-w-md mx-auto">
            Other parents pay $80-100/hr at Kumon or Sylvan for group sessions with random staff. Here's what you get instead:
          </p>

          {/* Value Stack */}
          <div className="mt-10 space-y-4">
            <ValueItem
              title="1-on-1 sessions with a hand-picked, 4.0+ GPA tutor"
              sub="Not a group class. Not a random match. A tutor selected specifically for your kid."
            />
            <ValueItem
              title="Tutors who recently aced your kid's exact classes"
              sub="GT students, AP/IB alumni, top performers who remember what's actually confusing."
            />
            <ValueItem
              title="Fully online, any time that works for you"
              sub="Evenings, weekends, 8pm after soccer practice. No driving to a center."
            />
            <ValueItem
              title="No contracts, no signup fees, no commitments"
              sub="Pay per session. Cancel anytime. If you're not happy, you stop. That simple."
            />
            <ValueItem
              title="Free re-matching if the fit isn't right"
              sub="Don't love the tutor? We'll match you with someone new at no extra cost."
            />
            <ValueItem
              title="The &ldquo;Better Grades&rdquo; Guarantee"
              sub="If your kid's grades don't improve in the first month, your next session is free."
              highlight
            />
          </div>

          {/* Comparison Table */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-3 px-4 font-medium text-slate-500"></th>
                  <th className="py-3 px-4 font-semibold text-primary-600">TutorTrek</th>
                  <th className="py-3 px-4 font-medium text-slate-400">Kumon / Sylvan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-700">Price</td>
                  <td className="py-3 px-4 font-semibold text-slate-900">$35/hr</td>
                  <td className="py-3 px-4 text-slate-400">$60-100/hr</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-700">Format</td>
                  <td className="py-3 px-4 font-semibold text-slate-900">1-on-1, personalized</td>
                  <td className="py-3 px-4 text-slate-400">Group, cookie-cutter</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-700">Contracts</td>
                  <td className="py-3 px-4 font-semibold text-slate-900">None. Cancel anytime.</td>
                  <td className="py-3 px-4 text-slate-400">Monthly commitments</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-700">Guarantee</td>
                  <td className="py-3 px-4 font-semibold text-slate-900">Grade improvement or free session</td>
                  <td className="py-3 px-4 text-slate-400">None</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10 text-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[48px] px-8 bg-primary-600 active:bg-primary-800 text-white font-semibold text-lg rounded-xl transition-colors w-full sm:w-auto"
            >
              Get All This for $35/hr&nbsp;&rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ───── SUBJECTS ───── */}
      <section className="px-5 py-14 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Whatever They Need Help With
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {[
              'Math (K-12)', 'Algebra & Geometry', 'Calculus & Pre-Calc',
              'Biology', 'Chemistry', 'Physics',
              'English & Writing', 'Reading & ELA', 'Essay Help',
              'SAT Prep', 'ACT Prep', 'AP Exams',
              'Homework Help', 'Study Skills',
            ].map(s => (
              <span
                key={s}
                className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
              >
                {s}
              </span>
            ))}
          </div>

          <p className="mt-6 text-slate-500">
            Don't see what you need?{' '}
            <a href={`sms:${PHONE}`} className="text-primary-600 font-medium hover:underline">
              Text us
            </a>
            . We probably cover it.
          </p>

          <div className="mt-8">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[48px] px-8 bg-primary-600 active:bg-primary-800 text-white font-semibold text-lg rounded-xl transition-colors w-full sm:w-auto"
            >
              Book a Free Call&nbsp;&rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIALS ───── */}
      <TestimonialsSection />

      {/* ───── MEET THE FOUNDER ───── */}
      <section className="px-5 py-14 md:py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl text-center mb-8">
            Meet the Founder
          </h2>

          <div className="bg-primary-50 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-5">
              <img
                src="/arjun.png"
                alt="Arjun, founder of TutorTrek"
                className="shrink-0 w-20 h-20 rounded-full object-cover"
              />
              <div>
                <p className="text-xl font-bold text-slate-900">Hey, I'm Arjun</p>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  I'm an incoming Georgia Tech freshman. I started TutorTrek because I watched friends struggle with classes while their parents paid $80+/hr for tutoring centers that barely helped.
                </p>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Our tutors are students like me. We recently took these exact classes, we remember what's actually confusing, and we know how to explain it in a way that clicks. Every family I work with gets my personal number. If something isn't working, you text me directly and I fix it.
                </p>
                <p className="mt-4 text-slate-900 font-medium">
                  Text me anytime:{' '}
                  <a href={`sms:${PHONE}`} className="text-primary-600 hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[48px] px-8 bg-primary-600 active:bg-primary-800 text-white font-semibold rounded-xl transition-colors w-full sm:w-auto"
            >
              Book a Free Call&nbsp;&rarr;
            </a>
            <a
              href={`sms:${PHONE}`}
              className="inline-flex items-center justify-center min-h-[48px] px-6 border-2 border-primary-600 text-primary-600 active:bg-primary-50 font-semibold rounded-xl transition-colors w-full sm:w-auto"
            >
              Text Arjun: {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="bg-slate-50 px-5 py-14 md:py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl text-center mb-8">
            Quick Answers
          </h2>

          <div className="space-y-3">
            {[
              {
                q: 'What if my kid\'s grades don\'t improve?',
                a: 'If you don\'t see grade improvement within the first month, your next session is free. We stand behind our tutors because we only hire the best. Most families see results within 2-3 weeks.',
              },
              {
                q: 'How do you pick your tutors?',
                a: 'Every tutor has a 4.0+ GPA and passes a subject-specific vetting process. Many are Georgia Tech students or graduates of top high schools. We also match based on personality fit, not just academics. If the match isn\'t right, we swap for free.',
              },
              {
                q: 'Is online tutoring actually effective?',
                a: 'Yes. 1-on-1 screen sharing is more focused than sitting in a tutoring center with other kids. Your child gets 100% of the tutor\'s attention. Most parents tell us it works better than in-person options they\'ve tried.',
              },
              {
                q: 'Am I locked into a contract?',
                a: 'No contracts, ever. You pay per session via Zelle. No registration fees, no commitments, no cancellation fees. If you want to stop, you just stop.',
              },
              {
                q: 'How fast can we start?',
                a: 'Most families are matched and have their first session within 48 hours of the intro call.',
              },
              {
                q: 'What grades and subjects do you cover?',
                a: 'K-12, all subjects. We\'re especially strong in middle school and high school math, science, writing, and test prep (SAT, ACT, AP exams).',
              },
            ].map((item, i) => (
              <FaqItem
                key={i}
                question={item.q}
                answer={item.a}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[48px] px-8 bg-primary-600 active:bg-primary-800 text-white font-semibold text-lg rounded-xl transition-colors w-full sm:w-auto"
            >
              Book a Free Call&nbsp;&rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ───── FINAL CTA ───── */}
      <section className="bg-primary-600 px-5 py-16 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            One 15-Minute Call. That's All It Takes.
          </h2>
          <p className="mt-4 text-primary-100 text-lg">
            Tell us what your kid is struggling with. We'll hand-pick the perfect tutor, and sessions can start within 48 hours. No contracts. No risk. Grade improvement guaranteed or your next session is free.
          </p>

          <div className="mt-8 flex flex-col gap-3 items-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[56px] px-8 bg-white text-primary-700 font-semibold text-lg rounded-xl active:bg-primary-50 transition-colors w-full sm:w-auto"
            >
              Book a Free Call&nbsp;&rarr;
            </a>
            <a
              href={`sms:${PHONE}`}
              className="text-primary-100 hover:text-white font-medium transition-colors"
            >
              Or text us right now: {PHONE_DISPLAY}
            </a>
          </div>

          <p className="mt-6 text-primary-200 text-sm">
            We only take on a limited number of new families each week to keep quality high.
          </p>
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer className="px-5 py-8 border-t border-slate-100">
        <div className="max-w-2xl mx-auto text-center text-sm text-slate-400 space-y-1">
          <p>&copy; {new Date().getFullYear()} TutorTrek</p>
          <p>
            <a href={`tel:${PHONE}`} className="hover:text-slate-600 transition-colors">{PHONE_DISPLAY}</a>
          </p>
          <p>Serving families across metro Atlanta</p>
        </div>
      </footer>

      {/* ───── STICKY MOBILE CTA BAR ───── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-slate-200 px-4 pt-3 flex gap-3 transition-transform duration-300 md:hidden ${
          showSticky ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      >
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center min-h-[48px] bg-primary-600 active:bg-primary-800 text-white font-semibold rounded-xl transition-colors text-base"
        >
          Book a Free Call
        </a>
        <a
          href={`sms:${PHONE}`}
          className="inline-flex items-center justify-center min-h-[48px] px-5 border-2 border-primary-600 text-primary-600 active:bg-primary-50 font-semibold rounded-xl transition-colors text-base"
        >
          <svg className="w-5 h-5 mr-1.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>
          Text Us
        </a>
      </div>

      {/* Bottom spacer for sticky bar on mobile */}
      <div className="h-24 md:hidden" />
    </div>
  )
}

/* ────── Sub-components ────── */

function Step({ num, icon, title, desc }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="shrink-0 w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide">Step {num}</p>
        <p className="mt-1 text-lg font-semibold text-slate-900">{title}</p>
        <p className="mt-1 text-slate-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function ValueItem({ title, sub, highlight }) {
  return (
    <div className={`rounded-xl p-4 border ${highlight ? 'border-primary-300 bg-primary-50' : 'border-slate-200 bg-white'}`}>
      <p className="font-semibold text-slate-900 flex items-start gap-2">
        <svg className={`w-5 h-5 shrink-0 mt-0.5 ${highlight ? 'text-primary-600' : 'text-green-500'}`} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
        {title}
      </p>
      <p className="mt-1 text-sm text-slate-500 leading-relaxed ml-7">{sub}</p>
    </div>
  )
}

function FaqItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-5 py-4 min-h-[52px] text-left cursor-pointer"
      >
        <span className="font-medium text-slate-900 pr-4">{question}</span>
        <svg
          className={`w-5 h-5 shrink-0 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-5 pb-4 text-slate-500 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  )
}

/* ────── Icons ────── */

function PhoneIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  )
}

function TrendIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
    </svg>
  )
}

export default App
