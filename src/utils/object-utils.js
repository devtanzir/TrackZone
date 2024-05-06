export const isObjectEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const mapStateToKeys = (obj, key) => {
  return Object.keys(obj).reduce((acc, cur) => {
    acc[cur] = obj[cur][key];
    return acc;
  }, {});
};
export const mapValuesToState = (obj, shouldClear = false) => {
  return Object.keys(obj).reduce((acc, cur) => {
    acc[cur] = {
      value: shouldClear ? "" : obj[cur],
      error: "",
      focused: false,
      touched: false,
    };
    return acc;
  }, {});
};

export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
