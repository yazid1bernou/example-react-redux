
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css';
import { useSelector  , useDispatch} from 'react-redux';


function App() {
  
  const villes =  useSelector(data => data.villes)
  const users =  useSelector(data => data.users)
  
  
  return (
    <div className="App">
         <h1> Crud App Search </h1>

         <div>
            <label>Nom</label>
            <input type="text" />
            <label>Prénom</label>
            <input type="text" />
            <label>Ville</label>
            <select>
              {villes?.map((ville , i) => 
               
                  <option  key={i} value={ville.id}> {ville.nom} </option>
               
               )}
              
            </select>
            <button>Enregistrer</button>
            <button>Clear</button>
         </div>
         <div>
           
            <label>Filter par ville</label>
            <select>
              {villes?.map((ville , i) => 
               
                  <option  key={i} value={ville.id}> {ville.nom} </option>
               
               )}
              
            </select>
            <button>Filtrer</button>
            <button>Clear</button>
         </div>

         <div>
             <table>
                <thead>
                    <th>ID</th>
                    <th>NOM</th>
                    <th>PRENOM</th>
                    <th>VILLE</th>
                    <th>ACTION</th>
                </thead>
                <tbody>
                   {users.map( (user ,  index) => {
                      const ville =  villes.find((v) => v.id === parseInt(user.ville));
                      return (
                       <tr>
                          <td>{user.id}</td>
                          <td>{user.nom}</td>
                          <td>{user.prenom}</td>
                          <td>{ville.nom}</td>
                          <td>
                            <button>Modifier</button>
                            <button>Supprimer</button>
                          </td>
                        </tr>
                      )
                   })}
                </tbody>
             </table>
         </div>

       {/*   <BrowserRouter>
            <Routes>
                    <Route path="/" element={<ListUsers />} />
                    <Route path="/add-user" element={<AddUser />} />
                    <Route path="/update-user/:id" element={<UpdateUser />} />
            </Routes>
         </BrowserRouter> */}
    </div>
  );
}


export default App; 

