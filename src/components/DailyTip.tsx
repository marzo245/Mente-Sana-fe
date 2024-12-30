import React from 'react';
import { Lightbulb } from 'lucide-react';

const tips = [
  "Practica la gratitud diariamente para mejorar tu bienestar emocional",
  "Toma pequeños descansos durante el día para reducir el estrés",
  "El ejercicio regular puede mejorar significativamente tu estado de ánimo",
  "La meditación puede ayudarte a mantener la calma en situaciones difíciles",
  "Mantén un diario para procesar tus pensamientos y emociones"
];

export default function DailyTip() {
  const [tip] = React.useState(() => tips[Math.floor(Math.random() * tips.length)]);

  return (
    <div className="bg-purple-50 p-6 rounded-lg shadow-sm mb-16">
      <div className="flex items-center space-x-4">
        <Lightbulb className="h-8 w-8 text-purple-600" />
        <div>
          <h3 className="text-lg font-semibold text-purple-900">Consejo del día</h3>
          <p className="text-purple-700">{tip}</p>
        </div>
      </div>
    </div>
  );
}