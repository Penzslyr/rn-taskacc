export function addTask(data){
    return{
        type: "@APP/SAVE/ADDTASK",
        payload: data,
    }
}