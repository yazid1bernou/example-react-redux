
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css';
import { useSelector  , useDispatch} from 'react-redux';
import { useState } from 'react';
import {addUserAction , updateUserAction ,  deleteUserAction , FilterUserAction , clearFilterUserAction} from "./crud-search/config/actions";
function App() {
  
  const villes =  useSelector(data => data.villes)
  const users =  useSelector(data => data.users)
  const countId = users.length ;  
  const [id ,  setId] =  useState("");
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

  const handleRemplirForme = (id) => {
       const user = users.find((u) => u.id === parseInt(id)) 
       setId(id);
       setNom(user.nom);
       setPrenom(user.prenom);
       setVille(user.ville);
  }
  
  const handleModifier = () => {
      dispatch(updateUserAction ({
        id : id ,
        nom : nom ,
        prenom : prenom ,
        ville : ville 
      }))

      handleClear()
      setId("")

  }
  
  const handleDelete = (id) => {
    dispatch(deleteUserAction(id))
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
                  {id ? <button onClick={handleModifier}>Modifier</button> :
                        <button onClick={handleEnregister}>Enregistrer</button>
                  }
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
                            <button onClick={() =>handleRemplirForme(user.id)}>Modifier</button>
                            <button onClick={() => handleDelete(user.id)}>Supprimer</button>
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

