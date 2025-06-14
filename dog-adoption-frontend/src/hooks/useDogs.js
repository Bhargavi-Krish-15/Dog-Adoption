// import { useState, useEffect } from 'react';
// import { dogService } from '../services/api';

// export const useDogs = () => {
//   const [dogs, setDogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetchDogs();
//   }, []);

// //   const fetchDogs = async () => {
// //     try {
// //       setLoading(true);
// //       setError(null);
// //       const dogsData = await dogService.getAllDogs();
// //       setDogs(dogsData);
// //     } catch (err) {
// //       setError('Failed to fetch dogs');
// //       console.error('Error fetching dogs:', err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

//     const fetchDogs = async () => {
//   try {
//     setLoading(true);
//     setError(null);
//     const dogsData = await dogService.getAllDogs();
//     // If dogsData is an object with a "dogs" property, use that
//     setDogs(Array.isArray(dogsData) ? dogsData : dogsData.dogs || []);
//   } catch (err) {
//     setError('Failed to fetch dogs');
//     console.error('Error fetching dogs:', err);
//   } finally {
//     setLoading(false);
//   }
// };

// const searchDogs = async (query) => {
//   if (!query.trim()) {
//     fetchDogs();
//     return;
//   }

//   try {
//     setLoading(true);
//     const searchResults = await dogService.searchDogs(query);
//     setDogs(Array.isArray(searchResults) ? searchResults : searchResults.dogs || []);
//   } catch (err) {
//     setError('Failed to search dogs');
//   } finally {
//     setLoading(false);
//   }
// };


// //   const searchDogs = async (query) => {
// //     if (!query.trim()) {
// //       fetchDogs();
// //       return;
// //     }

// //     try {
// //       setLoading(true);
// //       const searchResults = await dogService.searchDogs(query);
// //       setDogs(searchResults);
// //     } catch (err) {
// //       setError('Failed to search dogs');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

//   const toggleFavorite = (dogId) => {
//     setDogs(dogs.map(dog =>
//       dog.id === dogId
//         ? { ...dog, isFavorited: !dog.isFavorited }
//         : dog
//     ));
//   };

//   const filteredDogs = dogs.filter(dog =>
//     dog.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     dog.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     dog.description.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return {
//     dogs: filteredDogs,
//     loading,
//     error,
//     searchTerm,
//     setSearchTerm,
//     searchDogs,
//     toggleFavorite,
//     refreshDogs: fetchDogs
//   };
// };