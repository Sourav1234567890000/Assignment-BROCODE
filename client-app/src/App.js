import './App.css';

// components 
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import CrudApp from './components/CrudApp';
import EditUser from './components/EditUser';
import Location from './components/Location';
import NavBar from './components/NavBar';

import{ BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>BROCODE APPLICATION</h1>
          <NavBar/>
              <Routes>
                  <Route path='/' element={<CrudApp/>}/>
                 <Route path='/all' element={<AllUser/>}/> 
                 <Route path='/add' element={<AddUser/>}/>
                 <Route path='/edit/:id' element={<EditUser/>}/>
                 <Route path='/addlocation' element={<Location/>}/>
              </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
