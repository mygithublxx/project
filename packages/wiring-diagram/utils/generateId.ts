const generateId = () => {
  if (window.crypto && window.crypto.getRandomValues) {
    const array = new Uint32Array(11); // 生成 11 个随机数
    window.crypto.getRandomValues(array);
    return Array.from(array, (num) => (num % 10).toString()).join("");
  } else {
    // 兼容性回退方法
    let id = "";
    for (let i = 0; i < 11; i++) {
      id += Math.floor(Math.random() * 10).toString();
    }
    return id;
  }
};

export default generateId;
