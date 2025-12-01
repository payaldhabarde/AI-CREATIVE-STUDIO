import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PopupProvider } from "./assets/PopupContext";
import FirstScreen from "./pages/FirstScreen";

function App() {
  return (
    <Router>
      <PopupProvider>
        <Routes>
          <Route path="/" element={<FirstScreen />} />
        </Routes>
      </PopupProvider>
    </Router>
  );
}

export default App;
