export const toogleModal = modal => ({
  type: 'TOOGLE_MODAL',
  payload: {
    modal,
  },
});

export const addMarker = coords => ({
  type: 'ADD_MARKER',
  payload: {
    coords,
  },
});

export const addInfoRequest = user => ({
  type: 'ADD_INFO_REQUEST',
  payload: {
    user,
  },
});

export const addInfoSuccess = info => ({
  type: 'ADD_INFO_SUCCESS',
  payload: {
    info,
  },
});

export const addInfoError = message => ({
  type: 'ADD_INFO_ERROR',
  payload: {
    message,
  },
});

