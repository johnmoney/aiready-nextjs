// app/about/page.tsx
import Image from 'next/image';
import Pill from '@/components/Pill';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold leading-tight text-dark-text sm:text-5xl">
          About the AI Ready Institute
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-gray-text">
  The AI Ready Institute was created to address a growing gap between how students are traditionally advised to choose majors and careers and the realities of an economy increasingly shaped by artificial intelligence.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-gray-text">
  For decades, career guidance assumed that professions changed gradually and that students could easily adjust course later. Those assumptions are becoming less reliable as artificial intelligence reshapes how work is performed and how professional opportunities evolve.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-gray-text">
  The Institute works with students, families, and educational institutions to help them approach major and career decisions with greater clarity in this new environment.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-gray-text">
  Rather than attempting to predict specific jobs, the AI Ready Institute focuses on helping students develop the judgment, discernment, and adaptability needed to succeed as the structure of work continues to change.
        </p>
      </section>

      {/* Why This Matters Now */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-dark-text">
          Why This Matters Now
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-gray-text">
          Artificial intelligence is advancing rapidly across industries, altering how work is performed and how professional opportunities develop.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-gray-text">
          Students entering college today will graduate into an economy that may look very different from the one that existed when traditional advising models were developed.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-gray-text">
          When students cannot see how their education connects to the future of work, uncertainty grows. That uncertainty affects motivation, engagement, and the decisions students make about their academic paths.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-gray-text">
          Helping students think more clearly about majors and careers in the context of AI is not simply a career planning exercise. It is increasingly central to how institutions prepare students for a changing world.
        </p>
      </section>

      {/* Why the Institute Was Created */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-dark-text">
          Why the Institute Was Created
        </h2>
        <p className="mt-6 text-gray-text">
          Students today are increasingly aware that artificial intelligence is changing the future of work.
        </p>
        <p className="mt-6 text-gray-text">
          Many are asking questions that traditional advising systems were never designed to answer:
        </p>
        <ul className="mt-4 list-disc pl-6 text-gray-text space-y-2">
          <li>Which majors will remain viable in an AI economy?</li>
          <li>How will artificial intelligence reshape different professions?</li>
          <li>What academic paths preserve flexibility as careers evolve?</li>
        </ul>
        <p className="mt-6 text-gray-text">
          These questions are becoming central to how students think about their education, yet many advising models still rely on assumptions developed before AI began transforming the workplace.
        </p>
        <p className="mt-6 text-gray-text">
          The AI Ready Institute was created to help students, families, and institutions address these questions directly and make decisions that reflect the realities of an AI-driven economy.
        </p>
      </section>

      {/* Why the Institute Was Created */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-dark-text">
          What Makes Our Approach Different
        </h2>
        <p className="mt-6 text-gray-text">
          Most conversations about artificial intelligence in education focus on technology — new tools, technical training, or predictions about future jobs.
        </p>
        <p className="mt-6 text-gray-text">
          The AI Ready Institute focuses instead on the decisions students must make today: choosing majors, evaluating career paths, and preparing for a changing economy.
        </p>
        <p className="mt-6 text-gray-text">
          Rather than trying to forecast which jobs will survive AI, our work centers on helping students develop capabilities that remain valuable regardless of technological change:
        </p>
        <ul className="mt-4 list-disc pl-6 text-gray-text space-y-2">
          <li>Judgment</li>
          <li>Discernment</li>
          <li>Adaptability</li>
          <li>Strategic thinking</li>
        </ul>
        <p className="mt-6 text-gray-text">
          These are the abilities that allow students not just to react to change, but to navigate it thoughtfully.
        </p>
      </section>

      {/* Questions We Help Students Answer */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-dark-text">
          Questions We Help Students Answer
        </h2>
        <p className="mt-6 text-gray-text">
            Students and families often come to the Institute when they are wrestling with questions such as:
        </p>
        <ul className="mt-4 list-disc pl-6 text-gray-text space-y-2">
            <li>How is artificial intelligence changing the future of different careers?</li>
            <li>Will my major still lead to meaningful opportunities in an AI economy?</li>
            <li>How do I choose a career path when the future feels uncertain?</li>
            <li>What kinds of skills and judgment will remain valuable as technology evolves?</li>
        </ul>
        <p className="mt-6 text-gray-text">
            The goal of the Institute is not to eliminate uncertainty, but to help students make informed, resilient decisions in a world where change is accelerating.
        </p>
      </section>


      {/* Founder */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
      <section className="bg-gradient-to-br from-primary to-accent2 px-4 py-16 text-light-text sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <i className="fa-solid fa-quote-left text-6xl text-white/30 mb-6" aria-hidden="true" />
          <blockquote className="font-heading text-2xl font-medium leading-relaxed">
            “Students today are making major and career decisions in a world that is changing faster than our advising systems were designed for.
            <br /><br />
            The goal of the AI Ready Institute is to help students develop the judgment needed to navigate that uncertainty thoughtfully.”
          </blockquote>
          <p className="mt-8 text-xl font-semibold">
            Karina Money
          </p>
          <p className="text-lg text-white/80">
            Founder, AI Ready Institute
          </p>
        </div>
      </section>

          </div>
          <div>
            <Pill
              title="Founder"
              icon="fa-user-tie"
              accentVar="accent2"
            />
            <h2 className="mt-6 font-heading text-3xl font-bold text-dark-text">
              Karina Money, EdD
            </h2>
            <p className="mt-4 text-gray-text">
              The AI Ready Institute was founded by Karina Money, EdD, an advisor and strategist focused on how artificial intelligence is reshaping major and career decisions for students.
            </p>
            <p className="mt-6 text-gray-text">
              Through her work with students, families, and educators, she observed a widening gap between traditional career guidance and the rapidly changing nature of work. The Institute was created to help bridge that gap and support more thoughtful decision-making about education and career paths.
            </p>
            <p className="mt-6 text-gray-text">
              Karina is also the author of <span className="font-semibold">What’s Your Major? AI Doesn’t Care</span>, a book exploring how students and institutions can rethink major and career decisions in the context of artificial intelligence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}