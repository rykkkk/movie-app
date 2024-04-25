import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>My Movie App</h1>
          <SearchForm />
      </header>
    </div>
  );
}

export default App;
