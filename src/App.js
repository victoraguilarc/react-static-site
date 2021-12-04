import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Devfest 2021 - GDG La Paz
        </p>
        <a
          className="App-link"
          href="https://gdg.community.dev/gdg-la-paz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Entrar
        </a>
      </header>
    </div>
  );
}

export default App;
