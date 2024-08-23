import React, { useEffect, useMemo, useState, useRef } from "react";
import { Cascader } from "@gw/web-basic-components";
import apis from "../../../packages/wiring-diagram/api";
import useRequest from "../../../packages/wiring-diagram/utils/use-request-temp";
import { IGridList, categoriesFull } from "./dto";
import _ from "lodash";
import styles from "./index.module.less";

interface IProjectSelectorProps {
  currentProject: IGridList;
  setCurrentProject: (project: IGridList) => void;
  isSettingState?: boolean;
  hide: boolean;
}

const ProjectSelector = (props: IProjectSelectorProps) => {
  const { currentProject, setCurrentProject, isSettingState, hide } = props;
  const allGridList = useRef([]);
  // 获取用户下的微网
  const [, fetchAllGrids] = useRequest<any, any>(apis.microGrid.gridList);

  const [gridList, setGridList] = useState<IGridList[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const getAllGrids = (v?) => {
    fetchAllGrids({ range: 1, thingName: v })
      .then((res) => {
        setGridList(res?.dataList || []);
        if (!v) {
          allGridList.current = res?.dataList || [];
        }
        if (res?.dataList?.length) {
          setCurrentProject({
            ...res.dataList[0],
            category: categoriesFull[0].value,
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    // Opp的数据权限是全平台下微网 range-2
    getAllGrids();
  }, []);

  const options = useMemo(() => {
    return gridList.map((grid) => ({
      value: grid.id,
      label: grid.name,
      children: categoriesFull,
    }));
  }, [gridList]);

  const onChange = (e) => {
    if (e) {
      const id = e?.[0];
      const category = e?.[1];
      const project = allGridList.current.find((grid) => grid.id === id);
      setCurrentProject({ ...project, category });
    }
  };

  // 防抖获取搜索数据
  const onSearch = (e) => {
    setSearchValue(e?.trim() || "");
  };

  useEffect(() => {
    _.debounce(() => getAllGrids(searchValue), 500);
  }, [searchValue]);

  const onClear = () => {
    if (allGridList.current.length) {
      setCurrentProject({
        ...allGridList.current[0],
        category: categoriesFull[0].value,
      });
    }
  };

  if (hide) {
    return null;
  }

  return (
    <Cascader
      value={[currentProject?.id, currentProject?.category].filter(Boolean)}
      style={{ width: 300 }}
      options={options}
      onChange={onChange}
      showSearch={{ limit: 9999 }}
      onSearch={onSearch}
      searchValue={searchValue}
      onClear={onClear}
      popupClassName={styles.cascader}
      disabled={isSettingState}
    />
  );
};

export default ProjectSelector;
