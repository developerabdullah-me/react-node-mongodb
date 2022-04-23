
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './Component/AddUser/AddUser';
import Home from './Component/Home/Home';


function App() {

  return (
    <div className="App">
     <Routes>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/adduser' element={<AddUser></AddUser>}></Route>
     </Routes>
    </div>
  );
}

export default App;
