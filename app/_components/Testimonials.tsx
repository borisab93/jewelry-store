// File: components/Testimonials.jsx
import Image from "next/image";

const testimonials = [
  {
    quote:
      "The quality of my necklace is exceptional. I've received so many compliments!",
    name: "Sarah M.",
    image: "/api/placeholder/100/100",
  },
  {
    quote:
      "Customer service was outstanding. They helped me find the perfect engagement ring.",
    name: "David L.",
    image: "/api/placeholder/100/100",
  },
  {
    quote:
      "Luxe Gems' pieces are timeless. I wear my bracelet every day and it still looks brand new.",
    name: "Emma T.",
    image: "/api/placeholder/100/100",
  },
];

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
          <div className="relative h-16 w-16 rounded-full overflow-hidden mx-auto mb-4">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <p className="italic mb-4">&quot;{testimonial.quote}&quot;</p>
          <p className="font-medium">{testimonial.name}</p>
        </div>
      ))}
    </div>
  );
}
