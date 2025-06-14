import React from 'react';
import Header from '../common/Header';
import ChatWidget from '../chat/ChatWidget';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main className="relative">
        {children}
      </main>
      {/* <ChatWidget /> */}
    </div>
  );
};

export default Layout;