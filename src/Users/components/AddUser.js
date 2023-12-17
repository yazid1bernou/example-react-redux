import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {AddUserAction} from "../actions";
import { useNavigate } from "react-router-dom";
const AddUser = () => {
    const [name , setName] = useState(); 
    const [email , setEmail] = useState();
    const dispatch =  useDispatch();
    const count = useSelector(data => data.users.length);
    const navigate =  useNavigate();
    
    const handleClick = () => {
        dispatch(AddUserAction({
            id : count + 1 ,
            name : name ,
            email : email
        }))
        navigate('/')
    }
    return (
        <div>
              <form>
                <div>
                   <label> Name</label>
                   <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                 <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                 </div>
                 <div>
                    <button onClick={handleClick}>Submit</button>
                 </div>

              </form>
        </div>
    )
}

export default AddUser ;

