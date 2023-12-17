import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function  ListUsers () {
    
    const users = useSelector((data)=>data.users);
    return (
        <div>
              <div>
                  <Link to="/add-user"> Add user</Link>
              </div>
              <div>
                 <table>
                       <thead> 
                          <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>ACTION</th>
                           </tr>
                       </thead>
                       <tbody>
                          { 
                            users.map( (user , index) => {
                              return (
                                <tr >
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={`/update-user/${user.id}`}><button>Edit</button> </Link>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                              )
                          })
                            
                          } 
                       </tbody>
                 </table>
              </div>
        </div>
    )
}

export default ListUsers ;
