// import React, { useState } from 'react';
// import { MessageCircle, Send, X, Bot } from 'lucide-react';
// import { chatService } from '../../services/api';

// const ChatWidget = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       text: "Hi! I'm here to help you find the perfect furry companion. How can I assist you today?",
//       isBot: true,
//       timestamp: new Date()
//     }
//   ]);
//   const [newMessage, setNewMessage] = useState('');
//   const [isTyping, setIsTyping] = useState(false);

//   const sendMessage = async (e) => {
//     e.preventDefault();
//     if (!newMessage.trim()) return;

//     const userMessage = {
//       id: Date.now(),
//       text: newMessage,
//       isBot: false,
//       timestamp: new Date()
//     };

//     setMessages(prev => [...prev, userMessage]);
//     setNewMessage('');
//     setIsTyping(true);

//     try {
//       const response = await chatService.sendMessage(newMessage);
      
//       setTimeout(() => {
//         const botMessage = {
//           id: Date.now() + 1,
//           text: response.message,
//           isBot: true,
//           timestamp: new Date()
//         };
//         setMessages(prev => [...prev, botMessage]);
//         setIsTyping(false);
//       }, 1000);
//     } catch (error) {
//       setIsTyping(false);
//     }
//   };

//   return (
//     <>
//       {/* Chat Toggle Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
//       >
//         {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
//       </button>

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="fixed bottom-24 right-6 w-80 h-96 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 flex flex-col z-40">
//           {/* Header */}
//           <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-2xl">
//             <div className="flex items-center space-x-3">
//               <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
//                 <Bot className="w-5 h-5" />
//               </div>
//               <div>
//                 <h3 className="font-semibold">Adoption Assistant</h3>
//                 <p className="text-xs opacity-80">Here to help you find your perfect match</p>
//               </div>
//             </div>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto p-4 space-y-3">
//             {messages.map((message) => (
//               <div
//                 key={message.id}
//                 className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
//               >
//                 <div
//                   className={`max-w-xs px-4 py-2 rounded-2xl ${
//                     message.isBot
//                       ? 'bg-gray-100 text-gray-800'
//                       : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
//                   }`}
//                 >
//                   <p className="text-sm">{message.text}</p>
//                 </div>
//               </div>
//             ))}
            
//             {isTyping && (
//               <div className="flex justify-start">
//                 <div className="bg-gray-100 px-4 py-2 rounded-2xl">
//                   <div className="flex space-x-1">
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Input */}
//           <form onSubmit={sendMessage} className="p-4 border-t border-gray-200">
//             <div className="flex space-x-2">
//               <input
//                 type="text"
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//                 placeholder="Ask about our dogs..."
//                 className="flex-1 px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
//               />
//               <button
//                 type="submit"
//                 disabled={!newMessage.trim()}
//                 className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <Send className="w-4 h-4" />
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </>
//   );
// };

// export default ChatWidget;

import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';
import { chatService } from '../../services/api';

const ChatWidget = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm here to help you find the perfect furry companion. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: newMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    try {
      const response = await chatService.sendMessage(newMessage);
      console.log('Response from chat service:', response);
      setTimeout(() => {
        const botMessage = {
          id: Date.now() + 1,
          text: response.message || response.answer || JSON.stringify(response),
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000);
    } catch (error) {
      setIsTyping(false);
    }
  };

  return (
    // <div className="fixed bottom-6 right-6 w-80 h-96 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 flex flex-col z-40">
    <div className="mx-auto my-12 w-full max-w-2xl h-[600px] bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 flex flex-col z-40 relative overflow-hidden" 
    style={{
    backgroundImage: "url('/dog.png')", // If in public folder
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom right",
    backgroundSize: "200px auto", // Adjust as needed
    // Optional: add a gradient overlay for readability
    // background: "linear-gradient(180deg, rgba(255,255,255,0.90) 60%, rgba(255,255,255,0.7) 100%), url('/dog-bg.png')"
  }}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-2xl">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold">Adoption Assistant</h3>
            <p className="text-xs opacity-80">Here to help you find your perfect match</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl ${
                message.isBot
                  ? 'bg-gray-100 text-gray-800'
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 px-4 py-2 rounded-2xl">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={sendMessage} className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Ask about our dogs..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
          <button
            type="submit"
            disabled={!newMessage.trim()}
            className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatWidget;
