import React from 'react';
import './App.css';
import {Header} from './components/index'

function App() {
  return (
    <div>
      <header className="header">
       <Header />
      </header>
      <div className="main">
        <section className="main_section">
          <article></article>
        </section>
        <aside className="main_aside"></aside>
      </div>
      <footer className="footer">

      </footer>
    </div>
  );
}

export default App;
