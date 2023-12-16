import { useParams } from "react-router-dom";

const UpdateUser = () => {
    const {id} = useParams();
    return (
        <div>
              UpdateUser :  {id}
        </div>
    )
}

export default UpdateUser ;