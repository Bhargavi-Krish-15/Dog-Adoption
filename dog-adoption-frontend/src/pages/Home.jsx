import React, { useState } from 'react';
// import { useDogs } from '../hooks/useDogs';
import DogCard from '../Components/dogs/DogCard';
import DogModal from '../Components/dogs/DogModal';
import SearchBar from '../Components/dogs/SearchBar';
import LoadingSpinner from '../Components/common/LoadingSpinner';
import { Heart, Users, Award, Shield } from 'lucide-react';
import ChatWidget from '../Components/chat/ChatWidget';

const Home = () => {
  // const { 
  //   dogs, 
  //   loading, 
  //   error, 
  //   searchTerm, 
  //   setSearchTerm, 
  //   searchDogs, 
  //   toggleFavorite 
  // } = useDogs();
  
  // const [selectedDog, setSelectedDog] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleDogSelect = (dog) => {
  //   setSelectedDog(dog);
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  //   setSelectedDog(null);
  // };

  // const handleToggleFavorite = (dogId) => {
  //   toggleFavorite(dogId);
  //   if (selectedDog && selectedDog.id === dogId) {
  //     setSelectedDog(prev => ({ ...prev, isFavorited: !prev.isFavorited }));
  //   }
  // };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 px-4 text-center">
        <img
            src="/public/dog2.png" // If in public folder, use this path
            alt="Decorative Dog"
            className="mx-auto mb-6 w-32 h-auto" // Adjust width as needed
            style={{ zIndex: 1 }}
        />
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Find Your Perfect
            </span>
            <br />
            <span className="text-gray-800">Furry Companion</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Every dog deserves a loving home. Chat with our AI assistant to discover adorable rescue dogs and find your new best friend today.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {[
              { icon: Heart, label: 'Dogs Adopted', value: '500+' },
              { icon: Users, label: 'Happy Families', value: '450+' },
              { icon: Award, label: 'Years of Service', value: '8+' },
              { icon: Shield, label: 'Success Rate', value: '98%' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <stat.icon className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

        <section className="py-12 px-4 justify-center">
        <div className="max-w-4xl mx-auto">
          <ChatWidget />
        </div>
      </section>

      {/* Search Section */}
      {/* <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onSearch={searchDogs}
          />
        </div>
      </section> */}

      {/* Dogs Grid */}
      {/* <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Available Dogs
            </h2>
            <p className="text-lg text-gray-600">
              Each of these wonderful dogs is looking for their forever home
            </p>
          </div>

          {loading && <LoadingSpinner message="Loading our adorable dogs..." />}
          
          {error && (
            <div className="text-center py-12">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-red-600 font-medium">{error}</p>
              </div>
            </div>
          )}

          {!loading && !error && dogs.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 max-w-md mx-auto">
                <p className="text-yellow-800 font-medium">No dogs found matching your search.</p>
                <p className="text-yellow-600 text-sm mt-2">Try adjusting your search terms.</p>
              </div>
            </div>
          )}

          {!loading && dogs.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dogs.map((dog) => (
                <DogCard
                  key={dog.id}
                  dog={dog}
                  onSelect={handleDogSelect}
                  onToggleFavorite={handleToggleFavorite}
                />
              ))}
            </div>
          )}
        </div>
      </section> */}

      {/* Modal */}
      {/* <DogModal
        dog={selectedDog}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onToggleFavorite={handleToggleFavorite}
      /> */}
    </div>
  );
};

export default Home;