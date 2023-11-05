const log = (store) => (next) => (action) => {
  console.log("st", store);
  console.log("action", action);
  return next(action); // Call next(action) to pass the action along to the next middleware or the reducer.
};

export default log;
