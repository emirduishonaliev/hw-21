const initState = {
  items: null,
  selectValue: localStorage.getItem("key") || "all",
};

export const todoActionTypes = {
  GET_TODO: "GET_TODO",
  SELECT_VALUE: "SELECT_VALUE",
};

export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case todoActionTypes.GET_TODO: {
      if (state.selectValue === "all") {
        return { ...state, items: action.payload };
      }
      if (state.selectValue === "completed") {
        return {
          ...state,
          items: action.payload.filter((el) => el.completed === true),
        };
      }
      if (state.selectValue === "incompleted") {
        return {
          ...state,
          items: action.payload.filter((el) => el.completed === false),
        };
      }
    }

    case todoActionTypes.SELECT_VALUE:
      return { ...state, selectValue: action.payload };

    default:
      return state;
  }
};
