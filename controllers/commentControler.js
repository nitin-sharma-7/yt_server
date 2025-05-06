const postComment = async (req, res, next) => {
  try {
    const comment = req.body;
  } catch (error) {
    console.error("Error in posting comment:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export { postComment };
