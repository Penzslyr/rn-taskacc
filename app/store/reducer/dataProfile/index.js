const initialState = {
  dataProfile: [],
};

function data(state = initialState, action) {
  switch (action.type) {
    case '@APP/SAVE/PROFILE':
      return {
        ...state,
        dataProfile: action.payload,
      };
    case "@APP/SAVE/LOGOUT": 
    return {
      ...state,
      dataProfile: []
    }
  }
  return state;
}

export default data;
