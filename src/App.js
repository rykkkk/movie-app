import { Layout, OPSFooter, OPSHeader } from './components/Layout';
import './App.css';
import SearchForm from './components/SearchForm';
import './ODS/styles/ds-theme.css';

function App() {
  return (
    <div className="App">
      <OPSHeader />
      <header className="App-header">
          <h1>My Movie App</h1>
          <SearchForm />
      </header>
      <OPSFooter />
    </div>
  );
}

export default App;
