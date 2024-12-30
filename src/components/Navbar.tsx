import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Menu } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-800">MindWell</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-purple-600">Inicio</Link>
            <Link to="/appointments" className="text-gray-600 hover:text-purple-600">Agendar Cita</Link>
            {user ? (
              <>
                {user.role === 'psychologist' && (
                  <Link to="/dashboard" className="text-gray-600 hover:text-purple-600">Dashboard</Link>
                )}
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-purple-600"
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-purple-600">Iniciar Sesión</Link>
                <Link to="/register" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
                  Registrarse
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-purple-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-purple-600">Inicio</Link>
            <Link to="/appointments" className="block px-3 py-2 text-gray-600 hover:text-purple-600">Agendar Cita</Link>
            {user ? (
              <>
                {user.role === 'psychologist' && (
                  <Link to="/dashboard" className="block px-3 py-2 text-gray-600 hover:text-purple-600">Dashboard</Link>
                )}
                <button
                  onClick={logout}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-purple-600"
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block px-3 py-2 text-gray-600 hover:text-purple-600">Iniciar Sesión</Link>
                <Link to="/register" className="block px-3 py-2 text-gray-600 hover:text-purple-600">Registrarse</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}