import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {UpdateUserAction} from "../actions";
import { useNavigate } from "react-router-dom";

const UpdateUser = () => {
    const {id} = useParams();
    const user =  useSelector(data => data.users.find((u) => u.id === parseInt(id)));
    const [name , setName] = useState(user.name); 
    const [email , setEmail] = useState(user.email); 
    const dispatch =  useDispatch();
    const navigate =  useNavigate();
    

    const handleClick = () => {
        dispatch(UpdateUserAction({
            id :id ,
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

export default UpdateUser ;