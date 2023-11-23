import Mainpage from './Components/MainPage/';
import './Style/Main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
 <BrowserRouter>
    <Routes>
        <Route path='*' element={<Mainpage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;


