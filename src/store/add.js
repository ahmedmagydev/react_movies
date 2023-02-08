const initialState = {
    favorit: []
};

const AddFavereducer = (state = initialState, action )=>{
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
export default AddFavereducer