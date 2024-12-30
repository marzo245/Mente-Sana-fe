import React from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar, Clock, User } from 'lucide-react';

// Mock data for appointments
const appointments = [
  {
    id: 1,
    patientName: "Juan Pérez",
    date: new Date(2024, 2, 25, 10, 0),
    status: "confirmed",
    type: "Primera consulta"
  },
  {
    id: 2,
    patientName: "María García",
    date: new Date(2024, 2, 25, 11, 30),
    status: "confirmed",
    type: "Seguimiento"
  },
  {
    id: 3,
    patientName: "Carlos López",
    date: new Date(2024, 2, 25, 15, 0),
    status: "pending",
    type: "Primera consulta"
  }
];

export default function PsychologistDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard del Psicólogo</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Today's Appointments */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Citas de Hoy</h2>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="border-l-4 border-purple-500 pl-4 py-2"
              >
                <div className="flex items-center mb-2">
                  <User className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="font-medium">{appointment.patientName}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>
                    {format(appointment.date, 'HH:mm')} - {appointment.type}
                  </span>
                </div>
                <span className={`text-sm ${
                  appointment.status === 'confirmed' ? 'text-green-600' : 'text-yellow-600'
                }`}>
                  {appointment.status === 'confirmed' ? 'Confirmada' : 'Pendiente'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar Overview */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Vista del Calendario</h2>
          <div className="text-center">
            <h3 className="font-medium text-lg mb-4">
              {format(new Date(), 'MMMM yyyy', { locale: es })}
            </h3>
            {/* Calendar grid would go here - simplified for demo */}
            <div className="grid grid-cols-7 gap-1 text-sm">
              {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((day) => (
                <div key={day} className="p-2 font-medium">
                  {day}
                </div>
              ))}
              {/* Calendar days would go here */}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Estadísticas</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">15</div>
              <div className="text-sm text-gray-600">Citas esta semana</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">45</div>
              <div className="text-sm text-gray-600">Pacientes activos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">8</div>
              <div className="text-sm text-gray-600">Horas disponibles hoy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}