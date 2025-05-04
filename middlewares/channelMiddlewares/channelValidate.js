const channelValidate = (req, res, next) => {
  const errors = [];
  const { channelName, handle, description, channelBanner, avatar } = req.body;
  console.log(req.body);
  if (!channelName) return errors.push("channel name required");
  if (!handle) return errors.push("handle name required");
  if (!description) return errors.push("description required");
  if (!channelBanner) return errors.push("channelBanner required");
  if (!avatar) return errors.push("avatar required");

  if (errors.length > 0) {
    const err = new Error(errors.join(", "));
    err.statuscode = 400; // Custom status code for client-side error
    return next(err);
  }
  next();
};

export { channelValidate };
