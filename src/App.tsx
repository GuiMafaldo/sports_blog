import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import ContainerPages from "./components/Container";
import PageFutebol from './pages/Futebol';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<ContainerPages />} />
          <Route path='/futebol' element={<PageFutebol />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
