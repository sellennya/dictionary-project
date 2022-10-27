import './App.css';
import Dictionary from './components/Dictionary';

export default function App() {
  return (
    <div className='App'>
      <div className='container'>
        <header className='App-header'>
          <img
            src={require('./assets/shecodes-logo.png')}
            alt='shecodes-logo'
            className='logo'
          />
        </header>
        <main>
          <Dictionary defaultKeyword='sunset' />
        </main>
        <footer className='App-footer'>
          <small>
            Coded by Sandra Cardoso and is{' '}
            <a
              className='App-link'
              href='https://github.com/sellennya/dictionary-project'
              target='_blank'
              rel='noreferrer'
            >
              open-sourced on GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
