import axios from 'axios';
// import { CHAT_RESPONSES } from '../utils/constants';

// const api = axios.create({
// //   baseURL: API_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   timeout: 10000,
// });

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080',
  headers: { 'Content-Type': 'application/json' },
  // timeout: 100000,
});



// // Mock data for development
// const mockDogs = [
//   {
//     id: 1,
//     name: "Luna",
//     breed: "French Bulldog",
//     age: "2 years",
//     image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=300&fit=crop&crop=face",
//     description: "Friendly and playful companion who loves belly rubs and treats.",
//     personality: ["Playful", "Gentle", "Social"],
//     isAvailable: true,
//     isFavorited: false
//   },
//   {
//     id: 2,
//     name: "Max",
//     breed: "Golden Retriever",
//     age: "3 years",
//     image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=300&fit=crop&crop=face",
//     description: "Loyal and energetic family dog who loves children and outdoor activities.",
//     personality: ["Loyal", "Active", "Friendly"],
//     isAvailable: true,
//     isFavorited: false
//   },
//   {
//     id: 3,
//     name: "Bella",
//     breed: "Labrador Mix",
//     age: "1 year",
//     image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=300&h=300&fit=crop&crop=face",
//     description: "Young and full of energy, perfect for an active family.",
//     personality: ["Energetic", "Curious", "Loving"],
//     isAvailable: true,
//     isFavorited: false
//   },
//   {
//     id: 4,
//     name: "Charlie",
//     breed: "Beagle",
//     age: "4 years",
//     image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=300&fit=crop&crop=face",
//     description: "Calm and well-trained companion who's great with kids.",
//     personality: ["Calm", "Smart", "Gentle"],
//     isAvailable: true,
//     isFavorited: false
//   },
//   {
//     id: 5,
//     name: "Rocky",
//     breed: "German Shepherd",
//     age: "5 years",
//     image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=300&h=300&fit=crop&crop=face",
//     description: "Protective and intelligent, perfect guard dog for your family.",
//     personality: ["Protective", "Smart", "Loyal"],
//     isAvailable: true,
//     isFavorited: false
//   },
//   {
//     id: 6,
//     name: "Daisy",
//     breed: "Poodle",
//     age: "2 years",
//     image: "https://images.unsplash.com/photo-1616190267960-f1c3d213b00d?w=300&h=300&fit=crop&crop=face",
//     description: "Elegant and intelligent companion who loves to learn new tricks.",
//     personality: ["Smart", "Elegant", "Playful"],
//     isAvailable: true,
//     isFavorited: false
//   }
// ];

// export const dogService = {
//   getAllDogs: async () => {
//     try {
//       const response = await api.get('/dogs');
//       return response.data;
//     } catch (error) {
//       console.log('Using mock data - Backend not connected');
//       return new Promise(resolve => {
//         setTimeout(() => resolve(mockDogs), 1000); // Simulate API delay
//       });
//     }
//   },

//   getDogById: async (id) => {
//     try {
//       const response = await api.get(`/dogs/${id}`);
//       return response.data;
//     } catch (error) {
//       return mockDogs.find(dog => dog.id === parseInt(id));
//     }
//   },

//   searchDogs: async (query) => {
//     try {
//       const response = await api.get(`/dogs/search?q=${query}`);
//       return response.data;
//     } catch (error) {
//       return mockDogs.filter(dog =>
//         dog.name.toLowerCase().includes(query.toLowerCase()) ||
//         dog.breed.toLowerCase().includes(query.toLowerCase()) ||
//         dog.description.toLowerCase().includes(query.toLowerCase())
//       );
//     }
//   }
// };

// export const chatService = {
//   sendMessage: async (message) => {
//     try {
//       const response = await api.post('/chat', { message });
//       return response.data;
//     } catch (error) {
//       // Mock chat response
//       const randomResponse = CHAT_RESPONSES[Math.floor(Math.random() * CHAT_RESPONSES.length)];
//       return new Promise(resolve => {
//         setTimeout(() => resolve({ message: randomResponse }), 800);
//       });
//     }
//   }
// };

// export const chatService = {
//   sendMessage: async (message) => {
//     const response = await api.get('/user/inquire', { message }); // or '/api/chat' if that's your backend endpoint
//     return response.data;
//   }
// };

export const chatService = {
  sendMessage: async (message) => {
    console.log('Sending message to backend:', message);
    try {
      // Use GET request with question as query param
      const response = await api.get('/user/inquire', {
        params: { question: message }
      });
      // Adjust this if your backend response structure is different
      console.log('Chat response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error sending message to backend:', error);
      throw new Error("Backend unavailable. Please try again later.");
    }
  }
};


export default api;