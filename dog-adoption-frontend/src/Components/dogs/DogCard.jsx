import React from 'react';
import { Heart } from 'lucide-react';

const DogCard = ({ dog, onSelect, onToggleFavorite }) => {
  return (
    <div className="group bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={dog.image} 
          alt={dog.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=300&fit=crop&crop=face';
          }}
        />
        <div className="absolute top-4 right-4">
          <button 
            onClick={() => onToggleFavorite(dog.id)}
            className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 transition-colors duration-300 group"
          >
            <Heart className={`w-5 h-5 transition-colors duration-300 ${
              dog.isFavorited 
                ? 'text-red-500 fill-current' 
                : 'text-red-500 group-hover:fill-current'
            }`} />
          </button>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className={`px-3 py-1 text-sm rounded-full shadow-lg ${
            dog.isAvailable 
              ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
              : 'bg-gray-500 text-white'
          }`}>
            {dog.isAvailable ? 'Available' : 'Adopted'}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{dog.name}</h3>
            <p className="text-gray-600">{dog.breed} • {dog.age}</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4 line-clamp-2">{dog.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {dog.personality?.map((trait, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm rounded-full border border-blue-200"
            >
              {trait}
            </span>
          ))}
        </div>
        
        <button 
          onClick={() => onSelect(dog)}
          disabled={!dog.isAvailable}
          className={`w-full py-3 rounded-xl font-medium shadow-md transition-all duration-300 transform hover:scale-105 ${
            dog.isAvailable
              ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:shadow-lg'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {dog.isAvailable ? 'Learn More' : 'Adopted'}
        </button>
      </div>
    </div>
  );
};

export default DogCard;