import { useEffect, useRef } from "react";
import _ from "lodash";
const useDeepCompareEffect = (callback, dependencies) => {
  const previousDepsRef = useRef();

  // 检查是否是首次渲染
  const isFirstRender = useRef(true);

  useEffect(() => {
    const hasChanged =
      isFirstRender.current ||
      !_.isEqual(previousDepsRef.current, dependencies);

    if (hasChanged) {
      callback();
    }

    previousDepsRef.current = dependencies;
    isFirstRender.current = false;
  }, [callback, dependencies]);
};
export default useDeepCompareEffect;
