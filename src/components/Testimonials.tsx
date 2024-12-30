import React from 'react';

const testimonials = [
  {
    name: "María González",
    text: "Las sesiones me han ayudado enormemente a manejar mi ansiedad. ¡Totalmente recomendado!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Carlos Rodríguez",
    text: "Excelente atención y profesionalismo. Me han dado herramientas muy útiles para mi día a día.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Ana Martínez",
    text: "El ambiente es muy acogedor y me siento completamente segura compartiendo mis experiencias.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export default function Testimonials() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8">Lo que dicen nuestros pacientes</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <h3 className="font-semibold">{testimonial.name}</h3>
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}