const standardWidth = 1920;
const defaultFontsize = 16;
const miniFontsize = 12;

window.remRatio = 1;

const debounce = (cb, timeout, args) => {
  let id = 0;
  return () => {
    if (id > 0) clearTimeout(id);
    id = setTimeout(() => {
      id = 0;
      cb.call(null, args);
    }, timeout);
  };
};

const updateGlobalRemRatio = (fontsize) => {
  window.remRatio = fontsize / defaultFontsize;
};

const setRootFontsize = (number) => {
  const fontsize = Math.max(number, miniFontsize);
  const element = document.documentElement;
  element.style.fontSize = `${fontsize}px`;
  updateGlobalRemRatio(fontsize);
};

const handleResize = () => {
  console.log(`handle resize`);
  const element = document.documentElement;
  const { clientWidth } = element;
  setRootFontsize((defaultFontsize * clientWidth) / standardWidth);
};

handleResize(defaultFontsize);

const addResizeListener = () => {
  const debounceResize = debounce(handleResize, 300);
  window.addEventListener("resize", debounceResize);
  return () => {
    window.removeEventListener("resize", debounceResize);
  };
};

window.removeResizeListener = addResizeListener();
