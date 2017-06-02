/**
 * Created by vlada on 5/30/17.
 */

export const updateJsonData = ({commit},payload)=>{
  commit('setJsonData',payload);
}



export const updateUserData = ({commit},payload)=>{
  commit('setUserData',payload);
}
