import { OPSFooter, OPSHeader } from "./components/Layout";
import "./App.css";
import "./ODS/styles/ds-theme.css";
import Page1 from "./components/page";

function App() {
  return (
    <div className="App">
      <OPSHeader />
      <Page1 /> 
      <OPSFooter />
    </div>
  );
}

export default App;
