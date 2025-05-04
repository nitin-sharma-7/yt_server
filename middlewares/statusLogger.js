const statusLogger = (req, res, next) => {
  // Store original information

  const method = req.method;
  const url = req.originalUrl || req.url;

  // Listen for the 'finish' event which fires when the response is sent
  res.on("finish", () => {
    console.log({
      method,
      url,
      status: res.statusCode,
    });
  });

  next();
};

export { statusLogger };
