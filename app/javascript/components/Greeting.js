import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadGreetingThunk } from '../redux/greeting/greeting';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGreetingThunk());
  }, [dispatch]);

  const greeting = useSelector((state) => state.greetingReducer.greetings);

  return (
    <div>
      <h1>
        Greeting:
        {greeting}
      </h1>
    </div>
  );
};

export default Greeting;
