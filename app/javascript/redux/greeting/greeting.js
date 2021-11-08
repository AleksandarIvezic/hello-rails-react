import getData from "../../helpers/getData";

const LOAD = 'hello-rails-react/greeting/LOAD';

const initialValue = {};

const loadGreeting = (payload) => ({
  type: LOAD,
  payload,
});

const loadGreetingThunk = () => async (dispatch) => {
  const data = await getData();
  if (data) {
    dispatch(loadGreeting(data));
  }
}

const greetingReducer = (state = initialValue, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        greetings: action.payload,
      };
    default:
      return state;
  }
}

export { greetingReducer, loadGreetingThunk };
