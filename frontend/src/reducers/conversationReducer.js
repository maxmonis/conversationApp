const initialState = {
  conversation: {
    messages: [
      {
        user: {
          name: `Kendrick Lamar`,
          profilePicture: `https://www.thesprucepets.com/thmb/iUPr_d3DJ78DFE_7q6FcPxeGaHU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/twenty20_d2b57e80-6815-4c83-9ea6-0e1438e9b79f-5ac3b27deb97de0037092d49.jpg`,
          status: `ACTIVE`,
        },
        body: 'Hello',
      },
      {
        user: {
          name: `Kendrick Lamar`,
          profilePicture: `https://www.thesprucepets.com/thmb/iUPr_d3DJ78DFE_7q6FcPxeGaHU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/twenty20_d2b57e80-6815-4c83-9ea6-0e1438e9b79f-5ac3b27deb97de0037092d49.jpg`,
          status: `ACTIVE`,
        },
        body: 'How are you?',
      },
    ],
  },

  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CONVERSATION':
      return {
        ...state,
        conversation: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return { ...state, loading: true };
    case 'CONVERSATION_ERROR':
      console.log(action.payload);
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
