import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notifications from '../Notifications/Notifications.js';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div id='root-notifications'>
        <Notifications />
      </div>
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
