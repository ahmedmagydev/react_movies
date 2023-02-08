const initialState = {
    favorit: []
};

const Favereducer = (state = initialState, action )=>{
    switch (action.type){
    case "ADDFAVORIT":
        return {
...state ,
 favorit: action.payload

        }
default:
    return state
}
}
export default Favereducer