// app/services/page.tsx
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/Card";
import Pill from "@/components/Pill";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-light-bg to-white px-4 py-16 sm:py-24 lg:py-32">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="font-heading text-4xl font-bold leading-tight text-dark-text sm:text-5xl">
                Our Services
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-text">
                The AI Ready Institute exists because the traditional way students have been advised about majors and careers no longer works.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-gray-text">
                For decades, advising relied on stable assumptions: that careers evolved slowly, that most majors remained viable, and that students could correct course without lasting damage. Those assumptions no longer hold.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-gray-text">
                Artificial intelligence has changed the structure of work. But advising frameworks have not kept pace.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/consultation"
                  className="rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary-hover"
                >
                  Schedule a Free Consultation
                </Link>
                <Link
                  href="/contact"
                  className="rounded-lg border-2 border-primary bg-transparent px-6 py-3 text-base font-medium text-primary hover:bg-primary hover:text-white"
                >
                  Get in Touch
                </Link>
              </div>
              <p className="mt-4 flex items-center text-sm text-gray-text">
                <i className="fa-solid fa-check-circle mr-2 text-accent2" aria-hidden="true" />
                No commitment required • Free 30-minute strategy session
              </p>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/uploads/students03.png"
                  alt="Advising students in an AI-driven world"
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-light-border bg-white p-6 shadow-xl backdrop-blur-sm sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent2">
                    <i className="fa-solid fa-shield-halved text-xl text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-bold text-dark-text">Reduce Risk</p>
                    <p className="font-body text-sm text-gray-text">In Career Decisions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Traditional Advising Falls Short (mirrors Stakes section) */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-dark-text">
          Why Traditional Advising Falls Short
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-text">
          Most advising models were built for an economy where:
        </p>
        <ul className="mx-auto mt-6 max-w-2xl list-disc pl-6 text-gray-text space-y-2">
          <li>Career paths were relatively predictable</li>
          <li>Mistakes were recoverable</li>
          <li>Time worked in a student’s favor</li>
        </ul>
        <p className="mx-auto mt-6 max-w-2xl text-center text-gray-text">
          In an AI-driven economy:
        </p>
        <ul className="mx-auto mt-4 max-w-2xl list-disc pl-6 text-gray-text space-y-2">
          <li>Entire categories of work can change quickly</li>
          <li>The cost of switching paths is rising</li>
          <li>Early decisions can close options sooner than expected</li>
        </ul>
        <p className="mx-auto mt-6 max-w-2xl text-center text-gray-text">
          Continuing to advise students as if these conditions have not changed is no longer neutral. It exposes students to avoidable risk.
        </p>
        <div className="mt-10 text-center">
          <Link href="/consultation" className="font-medium text-primary underline hover:no-underline">
            Address the Gap Today →
          </Link>
        </div>
      </section>

      {/* For Schools & Colleges */}
      <section className="bg-gradient-to-br from-medium-bg to-light-bg px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/uploads/students01.png"
                  alt="Schools and colleges partnering with AI Ready Institute"
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover"
                />
            </div>
            <div>
              <Pill
                title="For Schools & Colleges"
                icon="fa-people-group"
                accentVar="accent2"
              />
              <h2 className="font-heading text-3xl font-bold text-dark-text">
                AI Readiness & Advising Risk Review
              </h2>
              <p className="mt-4 max-w-2xl text-gray-text">
                We work with high schools and colleges to identify where current advising practices are misaligned with today’s economic reality.
              </p>
              <p className="mt-4 max-w-2xl text-gray-text">
                This review examines:
              </p>
              <ul className="mt-4 max-w-2xl list-disc pl-6 text-gray-text space-y-2">
                <li>Where institutions rely on legacy assumptions about majors and career stability</li>
                <li>Which pathways now carry materially higher exposure to AI-driven disruption</li>
                <li>How uncertainty is being downplayed, avoided, or oversimplified in student guidance</li>
                <li>Where students may be graduating without a clear understanding of risk and flexibility</li>
              </ul>
              <p className="mt-6 max-w-2xl text-gray-text">
                The risk for institutions is not failing to adopt new technology. The risk is continuing to guide students with outdated models of work and recovery.
              </p>
              <p className="mt-4 max-w-2xl text-gray-text">
                Our work helps institutions confront that risk directly—before it shows up in student outcomes and institutional trust.
              </p>
              <p className="mt-6 max-w-2xl text-gray-text">
                Counselor & Leadership Support
              </p>
              <p className="mt-4 max-w-2xl text-gray-text">
                Advisors are now being asked questions their training never prepared them to answer: Is this major still a responsible choice? How exposed is this career to AI-driven change? What happens if this path narrows faster than expected?
              </p>
              <p className="mt-4 max-w-2xl text-gray-text">
                We work with counselors, faculty, and leadership teams to replace inherited advising scripts with decision frameworks that reflect current reality.
              </p>
              <div className="mt-8">
                <Link
                  href="/consultation"
                  className="inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-hover"
                >
                  Learn More & Schedule a Review
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Pill
              title="The Challenge"
              icon="fa-chart-line"
              accentVar="accent2"
            />
            <h2 className="font-heading text-3xl font-bold text-dark-text">
              For Students & Families
            </h2>
            <p className="mt-4 max-w-3xl text-gray-text">
              Major & Career Decision Guidance
            </p>
            <p className="mt-4 max-w-3xl text-gray-text">
              Students today are often advised as if they will have time to fix mistakes later. In many cases, that assumption is no longer safe.
            </p>
            <p className="mt-4 max-w-3xl text-gray-text">
              We work directly with students and families to help them:
            </p>
            <ul className="mt-4 max-w-3xl list-disc pl-6 text-gray-text space-y-2">
              <li>Understand how AI is already reshaping different fields of study</li>
              <li>Recognize which decisions narrow future options—and how quickly</li>
              <li>Avoid choices driven by prestige, fear, or outdated advice</li>
              <li>Make commitments only where the long-term trade-offs are clear</li>
            </ul>
            <p className="mt-6 max-w-3xl text-gray-text">
              We do not promise certainty. We help families avoid decisions that quietly limit future mobility.
            </p>
            <p className="mt-6 max-w-3xl text-gray-text">
              Support at Critical Decision Points
            </p>
            <p className="mt-4 max-w-3xl text-gray-text">
              We are most often engaged when decisions are imminent: declaring or changing a major, choosing between programs with very different risk profiles, committing to a career trajectory that may be difficult to exit.
            </p>
            <p className="mt-4 max-w-3xl text-gray-text">
              At these moments, the old advising instinct—to reassure and move forward—is often the wrong response. What students need instead is honest friction: time and guidance to confront the consequences of their choices before they become fixed.
            </p>
            <div className="mt-8">
              <Link href="/consultation" className="font-medium text-primary underline hover:no-underline">
                Get Guidance for Your Family →
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/uploads/students02.png"
              alt="Students and families making informed career decisions"
              width={600}
              height={400}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-accent2 px-4 py-16 text-light-text sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <i className="fa-solid fa-handshake text-4xl text-white mb-4" aria-hidden="true" />

          <h2 className="font-heading text-3xl font-bold text-white">
            Work With Us
          </h2>
          <p className="mt-4 text-white/90">
            Major and career decisions are now being made under conditions the old advising model was never designed to handle.
          </p>
          <p className="mt-4 text-white/90">
            Ignoring that shift does not protect students. It places them at risk.
          </p>
          <p className="mt-4 text-white/90">
            The AI Ready Institute exists to help students, families, and institutions update how decisions are made—before outdated guidance becomes a permanent liability.
          </p>
          <p className="mt-4 text-white/90">
            If you are navigating choices where the cost of getting it wrong is rising, we welcome a conversation.
          </p>
          <Link
            href="/consultation"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-medium text-dark-text 
                      hover:bg-gray-100 hover:shadow-md active:bg-gray-200
                      transition-all duration-200"
          >
            Book Your Free Consultation
          </Link>
          <ul className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-circle-check text-white" aria-hidden="true" />
              No obligation
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-circle-check text-white" aria-hidden="true" />
              30-minute session
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-circle-check text-white" aria-hidden="true" />
              Reality-based guidance
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}