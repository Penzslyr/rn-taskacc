const initialState = {
  dataTask: [],
};

function data(state = initialState, action) {
  switch (action.type) {
    case '@APP/SAVE/ADDTASK': state.dataTask.push(action.payload)
  }
  return state;
}

export default data;
