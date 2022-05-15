const logger = (req, res, next) => {
  console.log("hi I'am logger");
  if (req.method === "PATCH") {
    console.log("hey you send patch req");
  }
  next(); // we add next() in order to continue to nex middleware
};

module.exports = logger;
