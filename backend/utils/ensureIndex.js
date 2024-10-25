import catchAsyncError from "./../middlewares/cathAsyncError.js";
export default catchAsyncError(async function (
  model,
  indexObj,
  schema,
  options
) {
  const indexList = await model.collection.indexes();
  const indexKeyObj = {};
  indexList.forEach((item) => (indexKeyObj[item.key] = true));
  console.log("indexList", indexList);
  console.log("indexKeyObj", indexKeyObj);
  if (Object.keys(indexObj).every((item) => indexKeyObj[item])) {
    return console.log("Not creating index}");
  }
  if (options) schema.index(indexObj, options);
  else schema.index(indexObj);
  console.log(`Index is created`);
});
