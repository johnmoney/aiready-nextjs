import Link from "next/link";
import Image from "next/image";
import Card from "@/components/Card";
import Pill from "@/components/Pill";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-light-bg to-white px-4 py-16 sm:py-24 lg:py-32">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="font-heading text-4xl font-bold leading-tight text-dark-text sm:text-5xl">
                Prepare students for <span className="text-primary">AI Driven Careers</span> with Clarity
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-text">
                Because the old way of choosing majors and careers no longer works. AI has changed the structure of work faster than advising models have changed. Students are now asked to commit to paths that may narrow sooner and recover more slowly than before. The AI Ready Institute helps schools, students, and families make decisions that reflect current economic reality—not inherited assumptions.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/consultation"
                  className="rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary-hover"
                >
                  Get Your Free Consultation
                </Link>
                <Link
                  href="/services"
                  className="rounded-lg border-2 border-primary bg-transparent px-6 py-3 text-base font-medium text-primary hover:bg-primary hover:text-white"
                >
                  Explore Our Services
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
                  src="/images/uploads/students01.png"
                  alt="Students preparing for AI-driven careers"
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-light-border bg-white p-6 shadow-xl backdrop-blur-sm sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent2">
                    <i className="fa-solid fa-graduation-cap text-xl text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-bold text-dark-text">100%</p>
                    <p className="font-body text-sm text-gray-text">Career Ready</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stakes */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-dark-text">
          The Stakes Have Never Been Higher
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-text">
          AI is reshaping the world of work—and the old rules for choosing majors no longer apply. Students need more than degrees; they need judgment, adaptability, and real-world skills.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <Card 
            title="AI-Informed Guidance"
            content="Help students understand which careers will thrive, which will transform, and which skills will remain irreplaceable in an AI-driven economy."
            icon="fa-compass"
          />
          <Card 
            title="Applied Learning Models"
            content="Move beyond theory with hands-on programs that teach students to work with AI tools, think critically, and solve real problems."
            icon="fa-laptop-code"
          />
          <Card 
            title="Strategic Programming"
            content="Implement long-term strategies that prepare your institution and students for the future of work, not just the present."
            icon="fa-diagram-project"
          />
        </div>
        <div className="mt-10 text-center">
          <Link href="/services" className="font-medium text-primary underline hover:no-underline">
            Modernize Career Preparation →
          </Link>
        </div>
      </section>

      {/* For Schools */}
      <section className="bg-gradient-to-br from-medium-bg to-light-bg px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/uploads/students02.png"
                alt="Schools and colleges partnership"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
            <div>
              <Pill
                title="For Schools & Colleges"
                icon="fa-people-group"
                bg="accent2"
              />
              <h2 className="font-heading text-3xl font-bold text-dark-text">
                Partner with AI Ready Institute to Modernize Career Preparation
              </h2>
              <p className="mt-4 max-w-2xl text-gray-text">
                We work directly with educational institutions to build programs that reflect the realities of today&apos;s AI-driven workplace. Your students will graduate with more than credentials—they&apos;ll have clarity, confidence, and career readiness.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <i className="fa-solid fa-book text-xl text-primary" aria-hidden="true" />
                  <h3 className="mt-3 font-heading font-semibold text-dark-text">Curriculum Consulting</h3>
                  <p className="mt-2 text-sm text-gray-text">
                    Align your programs with AI trends and employer needs
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <i className="fa-solid fa-chalkboard-user text-xl text-primary" aria-hidden="true" />
                  <h3 className="mt-3 font-heading font-semibold text-dark-text">Faculty Training</h3>
                  <p className="mt-2 text-sm text-gray-text">
                    Equip educators with AI literacy and career guidance tools
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <i className="fa-solid fa-people-group text-xl text-primary" aria-hidden="true" />
                  <h3 className="mt-3 font-heading font-semibold text-dark-text">Student Workshops</h3>
                  <p className="mt-2 text-sm text-gray-text">
                    Hands-on sessions that build AI skills and career clarity
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/services"
                  className="inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-hover"
                >
                  Learn More About Our Services
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
              bg="accent2"
            />
            <h2 className="font-heading text-3xl font-bold text-dark-text">Why AI Changes Everything for Education</h2>
            <p className="mt-4 max-w-3xl text-gray-text">
              Traditional career advice assumes stable job markets and predictable skill demands. But AI is automating tasks, creating new roles, and transforming entire industries faster than ever before. Students need more than a degree—they need to understand which skills will remain valuable, how to work alongside AI, and how to adapt as the landscape shifts. That&apos;s where we come in.
            </p>
            <div className="mt-10 flex flex-wrap gap-8">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-chart-line mt-1 text-2xl text-primary" aria-hidden="true" />
                <div>
                  <span className="font-heading text-4xl font-bold text-primary">85M</span>
                  <p className="text-gray-text">Jobs displaced by AI by 2025</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-user-plus mt-1 text-2xl text-primary" aria-hidden="true" />
                <div>
                  <span className="font-heading text-4xl font-bold text-primary">97M</span>
                  <p className="text-gray-text">New roles emerging from AI</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/ai-careers" className="font-medium text-primary underline hover:no-underline">
                Explore AI&apos;s Impact on Careers →
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/uploads/students03.png"
              alt="AI and the future of education"
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
          <i className="fa-solid fa-calendar-check text-4xl text-white mb-4" aria-hidden="true" />

          <h2 className="font-heading text-3xl font-bold text-white">
            Ready to Future-Proof Your Students&apos; Careers?
          </h2>
          <p className="mt-4 text-white/90">
            Schedule a free 30-minute consultation to discover how AI Ready Institute can help your institution prepare students for the AI-driven workforce. No commitment, no pressure—just strategic insights tailored to your needs.
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
              Expert guidance
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
