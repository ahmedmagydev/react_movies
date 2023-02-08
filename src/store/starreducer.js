const InitialValue ={
    star: "fa-regular"
}

export default function starReducer(state = InitialValue, action ){
    switch(action.type){
        case "CHS": 
            return {
                ...state,
               star: action.payload
            }
        default: 
            return state
    }
}


