
import './App.css';
import Blog from './Blog';
import { BrowserRouter as Router ,Route, Routes } from "react-router-dom";

import Top from './components/Top'
import FindingFaith from './components/FindingFaith'
import Endorsement from './components/Endorsement'

import Good from './components/Good';
import Notion from './components/Notion';
function App() {
  return (
    <div className="App">
      <Notion />
      <Router>
        <Routes>
          <Route path="/endorsement" element={<Endorsement />} />
          <Route path="/finding" element={<FindingFaith />} />
          <Route path="/top" element={<Top />} />
          <Route path="/good" element={<Good />} />
          <Route path="/" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
