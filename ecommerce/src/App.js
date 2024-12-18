
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';

function App() {
  return (


<Routes>

<Route exact path='/' element={<Home/>}/>
<Route  path='/login' element={<Login/>}/>
<Route  path='/register' element={<Register/>}/>
</Routes>


  );
}

export default App;
