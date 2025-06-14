import React from 'react';
import { X, Heart, MapPin, Clock, Award } from 'lucide-react';

const DogModal = ({ dog, isOpen, onClose, onToggleFavorite }) => {
  if (!isOpen || !dog) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white/90 backdrop-blur-md rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-white/20">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-300"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
        
        <div className="overflow-y-auto max-h-[90vh]">
          <div className="relative">
            <img 
              src={dog.image} 
              alt={dog.name}
              className="w-full h-80 object-cover"
            />
            <div className="absolute top-4 left-4 flex space-x-2">
              <span className={`px-3 py-1 text-sm rounded-full shadow-lg ${
                dog.isAvailable 
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                  : 'bg-gray-500 text-white'
              }`}>
                {dog.isAvailable ? 'Available for Adoption' : 'Adopted'}
              </span>
            </div>
            <button 
              onClick={() => onToggleFavorite(dog.id)}
              className="absolute bottom-4 right-4 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 transition-colors duration-300"
            >
              <Heart className={`w-6 h-6 transition-colors duration-300 ${
                dog.isFavorited 
                  ? 'text-red-500 fill-current' 
                  : 'text-red-500 hover:fill-current'
              }`} />
            </button>
          </div>
          
          <div className="p-8">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{dog.name}</h2>
              <div className="flex items-center space-x-4 text-gray-600">
                <span className="flex items-center space-x-1">
                  <Award className="w-4 h-4" />
                  <span>{dog.breed}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{dog.age}</span>
                </span>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">About {dog.name}</h3>
              <p className="text-gray-700 leading-relaxed">{dog.description}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Personality Traits</h3>
              <div className="flex flex-wrap gap-2">
                {dog.personality?.map((trait, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full border border-blue-200 font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Adoption Information</h3>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                <ul className="space-y-2 text-gray-700">
                  <li>✅ Vaccinated and health-checked</li>
                  <li>✅ Spayed/Neutered</li>
                  <li>✅ Microchipped</li>
                  <li>✅ Ready for their forever home</li>
                </ul>
              </div>
            </div>
            
            {dog.isAvailable && (
              <div className="flex space-x-4">
                <button className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-6 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Start Adoption Process
                </button>
                <button className="flex-1 bg-white border-2 border-blue-500 text-blue-500 py-3 px-6 rounded-xl font-medium hover:bg-blue-50 transition-colors duration-300">
                  Schedule Visit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogModal;