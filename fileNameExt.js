const checkFileExt = (fileName) => {
  const parts = fileName.slice(fileName.lastIndexOf("."));
  console.log(parts);
};
console.log(checkFileExt("index.jjkjk.js"));
