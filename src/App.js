import { OPSFooter, OPSHeader } from "./components/Layout";
import "./App.css";
import SearchForm from "./components/SearchForm";
import "./ODS/styles/ds-theme.css";

function App() {
  return (
    <div className="App">
      <OPSHeader />
      <SearchForm />
      <OPSFooter />
    </div>
  );
}

export default App;
