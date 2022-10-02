import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className='App'>
      <div className='container'>
        <header className='App-header'>
          <h1>Dictionary Project</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className='App-footer'>
          <small>Coded by Sandra Cardoso</small>
        </footer>
      </div>
    </div>
  );
}
