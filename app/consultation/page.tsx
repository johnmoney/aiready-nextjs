import ContactForm from "@/components/ContactForm";

export default function ConsultationPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold text-slate-900">Claim Your Free Consultation</h1>
      <p className="mt-6 text-slate-600 mb-4">
        Schedule a free 30-minute strategy session. No commitment required.
      </p>

      <ContactForm />
    </div>
  );
}
