const initialState =  {
    users : [
        { id : 1 , name : "yazid" , email : "yazid@gmail.com"} ,
        { id : 2 , name : "adem" , email : "adem@gmail.com"} ,
        { id : 3 , name : "khaoula" , email : "khaoula@gmail.com"} ,
    ]
};

const reducer  = (state = initialState , action) => {
    switch (action.type) {
        case "Add_user" : 
            return { 
                ...state , 
                users : [...state.users , action.payload] 
            };
        case "Update_user" : 
            //const {id , name , email } =  action.payload ;
            const user =  state.users.find( (u)=> u.id === parseInt(action.payload.id));
            if (user) {
                user.name =  action.payload.name ;
                user.email =  action.payload.email ;
                
            }
            return state ;
        
        case "Delete_user" : 
            return {
                ...state ,
                users :  [...state.users.filter( (u) => u.id !== parseInt(action.payload))]
            }

        default :
          return state ;
    }
}

export default reducer ;