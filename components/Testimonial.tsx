// components/Testimonial.tsx
interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  imageSrc: string;
}

export default function Testimonial({ quote, author, role, imageSrc }: TestimonialProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm text-center">
      <img src={imageSrc} alt={author} className="mx-auto h-16 w-16 rounded-full object-cover mb-4" />
      <p className="text-gray-text italic">&quot;{quote}&quot;</p>
      <p className="mt-4 font-semibold text-dark-text">{author}</p>
      <p className="text-sm text-gray-text">{role}</p>
    </div>
  );
}