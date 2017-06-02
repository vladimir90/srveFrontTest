/**
 * Created by vlada on 5/30/17.
 */
export const setJsonData = (state,payload)=>{
  payload.map(data => state.jsonData.push(data));
}

export const setUserData = (state,payload)=>{
  state.userData = payload;
}
