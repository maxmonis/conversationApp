export const getConversation = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(
      'http://localhost:4000/conversation/5e80d69979c89112f4c914e7'
    );
    const data = res.json();
    dispatch({ type: 'GET_CONVERSATION', payload: data });
  } catch (err) {
    dispatch({ type: 'CONVERSATION_ERROR', payload: err.response.data });
  }
};

export const setLoading = () => {
  return {
    type: 'SET_LOADING',
  };
};
