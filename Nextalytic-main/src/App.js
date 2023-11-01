import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import AddStudent from './pages/addStudent/AddStudent';
import HistoryStudent from './pages/historyStudent/HistoryStudent';
import CompleteData from './pages/completeData/CompleteData';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addStudent' element={<AddStudent/>} />
        <Route path='/historyStudent' element={<HistoryStudent/>} />
        <Route path='/completeData/:id' element={<CompleteData/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
