const checkPermission = (list, id) => {
  if (list && list.length) {
    return list.some((item) => item === id);
  } else {
    return false;
  }
};

export default checkPermission;
