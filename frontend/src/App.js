
import './App.css';
import Nav from './component/nav'
import {BrowserRouter,Routes , Route} from 'react-router-dom';
import AddTask from './component/addtask';
import TaskList from './component/tasklist';
import UpdateTask from './component/update';
//const cors = require('cors');


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
       
        <Route path="/" element={<TaskList/>}/>
        <Route path="/add" element={<AddTask/>}/>
        <Route path="/update/:id" element={<UpdateTask/>}/>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
