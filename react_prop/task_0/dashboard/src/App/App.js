import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main role='main'>
        <Login />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
