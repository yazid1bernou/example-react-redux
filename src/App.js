
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css';
import ListUsers from "./Users/components/ListUsers";
import AddUser from "./Users/components/AddUser";
import UpdateUser from "./Users/components/UpdateUser";

function App() {

  
  return (
    <div className="App">
         <h1> App Users </h1>

         <BrowserRouter>
            <Routes>
                    <Route path="/" element={<ListUsers />} />
                    <Route path="/add-user" element={<AddUser />} />
                    <Route path="/update-user/:id" element={<UpdateUser />} />
            </Routes>
         </BrowserRouter>
    </div>
  );
}


export default App; 

