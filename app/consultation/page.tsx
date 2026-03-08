import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Pill from '@/components/Pill';

export default function ConsultationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-light-bg to-white px-4 py-16 sm:py-24 lg:py-32">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="font-heading text-4xl font-bold leading-tight text-dark-text sm:text-5xl">
                Most Schools Still Advise Like AI Doesn&apos;t Exist
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-text">
                Book Your Free 30-Min Strategy Session to See Exactly Where Your Current Guidance Is Exposed
              </p>
              <p className="mt-4 text-sm text-gray-text">
                No obligation • 100% confidential • Tailored to your school/students/family
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
              <p className="mt-6 text-sm text-accent2 font-medium">
                Limited spots available next week — Response within 24 hours
              </p>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl bg-gray-200 h-[400px] flex">
                <Image
                  src="/images/uploads/calendar.jpg"
                  alt="Reserve your spot today"
                  width={600}
                  height={400}
                  className="object-cover object-top rounded-2xl shadow-x"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-dark-text">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 space-y-6">
          <div>
            <h3 className="font-heading text-xl font-semibold text-dark-text">Is it really free?</h3>
            <p className="mt-2 text-gray-text">Yes, 100% free and no obligation. Just valuable insights tailored to you.</p>
          </div>
          <div>
            <h3 className="font-heading text-xl font-semibold text-dark-text">What if I need to reschedule?</h3>
            <p className="mt-2 text-gray-text">No problem—cancel or reschedule anytime before the call.</p>
          </div>
          <div>
            <h3 className="font-heading text-xl font-semibold text-dark-text">How long is the call?</h3>
            <p className="mt-2 text-gray-text">30 minutes of focused, strategic discussion.</p>
          </div>
          <div>
            <h3 className="font-heading text-xl font-semibold text-dark-text">Is this confidential?</h3>
            <p className="mt-2 text-gray-text">Absolutely—100% confidential.</p>
          </div>
          <div>
            <h3 className="font-heading text-xl font-semibold text-dark-text">No sales pitch?</h3>
            <p className="mt-2 text-gray-text">Pure value—no pressure, just insights.</p>
          </div>
        </div>
      </section>
    </>
  );
}
