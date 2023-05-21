export function saveProfile(data){
    return{
        type: "@APP/SAVE/PROFILE",
        payload: data,
    }
}