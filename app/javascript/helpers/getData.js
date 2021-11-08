const getData = async () => {
  const request = await fetch('v1/greeting.json');
  const response = await request.json();
  const data = await response.greeting;
  return data;
};

export default getData;
