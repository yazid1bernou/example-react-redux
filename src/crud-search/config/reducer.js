

const initialState =  {

    villes : [
        { id : 1 ,  nom : "Alger"} ,
        { id : 2 ,  nom : "Annaba"} ,
        { id : 3 ,  nom : "Oran"} ,
    ] ,
    
    users : [
        { id : 1 , nom : "bernou" , prenom : "yazid"  , ville : 1} ,
        { id : 2 , nom : "bernou" , prenom : "adem"  , ville : 3} ,
        { id : 3 , nom : "adami" , prenom : "khaoula"  , ville : 2} 
    ]
}

const reducer  = (state = initialState  , action ) => {
     switch (action.type) {
        case "Add_User" : 
           return {
             ...state ,
             users : [...state.users , action.payload] ,
           };
        case "Update_User" :
            const user =  state.users.find( (u) => u.id === parseInt(action.payload.id));
            if(user) {
                user.nom = action.payload.nom ;
                user.prenom =  action.payload.prenom ;
                user.ville =  action.payload.ville 
            }
            return  state ;
        case "Delete_User" : 
           return {
            ...state ,
            users : [...state.users.filter((u) => u.id !== parseInt(action.payload))] 
           }
        case "Filter_User" :
            return {
                ...state ,
               filterUsers : [...state.users.filter((u) => u.ville === parseInt(action.payload))]
            }
        case "clearFilterUserAction" : 
            return {
             ...state ,
             filterUsers : null 
            }
            
        default :
        return state ;
     }
}


export default reducer ;