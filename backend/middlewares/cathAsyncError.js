const catchAsyncError = (fn) => (req, res, next) => {
  Promise.resolve(fn()).catch(next);
};

export default catchAsyncError;
