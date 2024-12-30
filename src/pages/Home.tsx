import React from 'react';
import { Calendar, Phone, MessageSquare } from 'lucide-react';
import DailyTip from '../components/DailyTip';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Tu bienestar mental es nuestra prioridad
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Encuentra apoyo profesional y consejos para mejorar tu salud mental
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#contact" className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700">
            Contactar ahora
          </a>
          <a href="#appointments" className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-md hover:bg-purple-50">
            Agendar cita
          </a>
        </div>
      </div>

      {/* Daily Tip Section */}
      <DailyTip />

      {/* Services Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Calendar className="h-12 w-12 text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Agenda tu cita</h3>
          <p className="text-gray-600">
            Programa una consulta con nuestros profesionales de manera fácil y rápida.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Phone className="h-12 w-12 text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Línea de atención</h3>
          <p className="text-gray-600">
            Disponibles 24/7 para atender tus necesidades y emergencias.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <MessageSquare className="h-12 w-12 text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Consulta en línea</h3>
          <p className="text-gray-600">
            Sesiones virtuales desde la comodidad de tu hogar.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <div id="contact" className="bg-white p-8 rounded-lg shadow-md mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Línea de Atención</h2>
        <div className="text-center">
          <p className="text-xl mb-4">¿Necesitas ayuda inmediata?</p>
          <p className="text-2xl font-bold text-purple-600 mb-2">+1 (800) 123-4567</p>
          <p className="text-gray-600">Disponible 24/7 para emergencias</p>
        </div>
      </div>
    </div>
  );
}