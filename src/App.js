import './App.css';
import Login from './page';
import Signup from './signup';
import NavBar from './components/NavBar';
import PostOverview from './postoverview'
import './page.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} ></Route>
          <Route exact path='/Login' element={<Login />} ></Route>
          <Route exact path='/Signup' element={<Signup />} ></Route>
          <Route exact path='/Posts' element={<PostOverview />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
