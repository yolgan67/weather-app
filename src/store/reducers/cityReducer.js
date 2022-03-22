const initialState = {
  data:"",
  error:"",
  fetching:false,
  fetched:false
}

export const cityReducer= (state = initialState, { type, payload}) => {
 
  switch (type) {

  case "FETCH_CITY_PENDING":
    return { ...state, fetching:true,error:"",data:"" }
  case "FETCH_CITY_FULFILLED":
    return { ...state,data:payload,fetched:true,fetching:false }
  case "FETCH_CITY_REJECTED":
    return { ...state, error:payload.message,fetching:false }

  default:
    return state
  }
}
