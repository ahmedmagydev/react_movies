





export const changestar = (payload) => {
    return {
        type: "CHS",
        payload
    }
}



export const addfavorit = movie => ({
type : "ADDFAVORIT",
payload: movie

})
export const remove = movie => ({
    type : "REMOVEFAV",
    payload: movie

})


