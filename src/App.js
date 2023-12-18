
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css';
import { useSelector  , useDispatch} from 'react-redux';
import { useState } from 'react';
import {addUserAction} from "./crud-search/config/actions";
function App() {
  
  const villes =  useSelector(data => data.villes)
  const users =  useSelector(data => data.users)
  const countId = users.length ;  
  const [nom , setNom ] = useState("");
  const [prenom , setPrenom] = useState("");
  const [ville , setVille] = useState(1);
  
  const dispatch =  useDispatch();

  const handleEnregister = () => {
    dispatch(addUserAction ({
      id : countId + 1 ,
      nom : nom ,
      prenom : prenom ,
      ville : ville 
    }) )
    handleClear()
  
  }

  const handleClear = () => {
     setNom("");
     setPrenom("");
     setVille(1)
  }

  return (
    <div className="App">
         <h1> Crud App Search </h1>
    
         <div>
           
                  <label>Nom</label>
                  <input type="text" value={nom} onChange={(e) => setNom(e.target.value)}/>
                  <label>Prénom</label>
                  <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                  <label>Ville</label>
                  <select value={ville} onChange={(e) => setVille(e.target.value)} >
                  {villes?.map((ville , i) => 
                     
                        <option  key={i} value={ville.id}> {ville.nom} </option>
                     
                     )}
                  
                  </select>
                  <button onClick={handleEnregister}>Enregistrer</button>
                  <button onClick={handleClear}>Clear</button>
            
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
                  <tr>
                    <th>ID</th>
                    <th>NOM</th>
                    <th>PRENOM</th>
                    <th>VILLE</th>
                    <th>ACTION</th>

                  </tr>
                    
                </thead>
                <tbody>
                 {users.map( (user ,  index) => {
                      const ville =  villes.find((v) => v.id === parseInt(user.ville));
                      return (
                       <tr key={index}>
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

