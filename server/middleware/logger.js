const logger = (req, res, next) => {
  console.log("hi I'am logger");

  next(); // we add next() in order to continue to nex middleware
};

module.exports = logger;
