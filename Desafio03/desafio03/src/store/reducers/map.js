const initialState = {
  modal: false,
  markers: {},
  info: [],
  loading: false,
  error: null,
};

export default function map(state = initialState, action) {
  switch (action.type) {
    case 'TOOGLE_MODAL':
      return {
        ...state,
        modal: action.payload.modal,
      };
    case 'ADD_MARKER':
      return {
        ...state,
        markers: action.payload.coords,
      };
    case 'ADD_INFO_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_INFO_SUCCESS':
      return {
        ...state,
        loading: false,
        modal: false,
        error: null,
        info: [...state.info, action.payload.info],
      };
    case 'ADD_INFO_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
}
