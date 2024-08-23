import React, {
  useCallback,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import classNames from "classnames";
import { Checkbox } from "@gw/web-basic-components";
import { flat2TreeWrapper } from "@gw/gw-utils";
import type {
  CheckboxProps,
  TreeProps,
  TreeDataNode,
} from "@gw/web-basic-components";
import type { IndentifyTreeComponents } from "./dto";
import styles from "./index.module.less";

/**
 * 身份权限选中树
 */
const TreeWrapper: IndentifyTreeComponents = (props, ref) => {
  /**
   * 树全部展开
   */
  const [expandAll, setExpandAll] = useState(true);
  /**
   * 是否全选
   */
  const [selectAll, setSelectAll] = useState(false);
  /**
   * 树数据
   */
  const treeData: Array<TreeDataNode & typeof props.data[number]> =
    useMemo(() => {
      const pageIds = props.data
        ?.filter((m) => m.componentType !== 2 && m.id)
        .map((m) => m.id);
      // 保障按钮存在父节点
      const cleanPermission =
        props.data?.filter(
          (m) => m.componentType !== 2 || pageIds.includes(m.parentId)
        ) || [];
      /**
       * 节点树
       */
      return flat2TreeWrapper(cleanPermission, { key: "id", title: "name" });
    }, [props.data]);
  /**
   * 选中的叶子节点
   */
  const checkedKeys = useMemo(() => {
    const keys = [];
    function getCheckedKeys(
      _treeData: Array<TreeDataNode & typeof props.data[number]>
    ) {
      _treeData?.forEach((m) => {
        if (!Array.isArray(m.children)) {
          if (props.selectKeys.includes(m.id)) {
            keys.push(m.id);
          }
        } else {
          getCheckedKeys(
            m.children as Array<TreeDataNode & typeof props.data[number]>
          );
        }
      });
    }
    getCheckedKeys(treeData);
    return keys;
  }, [props.selectKeys, treeData]);

  /**
   * 公开方法
   */
  useImperativeHandle(
    ref,
    () => ({
      resetCheckBox: () => {
        setExpandAll(true);
        setSelectAll(false);
      },
    }),
    []
  );

  /**
   * 展开/折叠
   */
  const handleExpandChange: CheckboxProps["onChange"] = useCallback((e) => {
    setExpandAll(e.target.checked);
  }, []);

  /**
   * 全选/取消全选，事件
   */
  const handleSelectAllChange: CheckboxProps["onChange"] = (e) => {
    setSelectAll(e.target.checked);
    if (e.target.checked) {
      props.onCheckedChange?.(props.data?.map((m) => m.id) || []);
    } else {
      props.onCheckedChange?.([]);
    }
  };

  /**
   * 树节点发生变化
   * @description 树组件，当修改 selectedKeys 的时候，也会触发 change 事件，但是第二个参数可能为空，可用户判断是否用户交互
   */
  const handleCheck: TreeProps["onCheck"] = (_checkedKeys, _checkedInfo) => {
    let keys = [];
    if (Array.isArray(_checkedKeys)) {
      keys = [...keys, ..._checkedKeys];
    }
    if (Array.isArray(_checkedInfo?.halfCheckedKeys)) {
      keys = [...keys, ..._checkedInfo.halfCheckedKeys];
    }
    const res = Array.from(new Set(keys));
    /**
     * 只触发手动的动作
     */
    if (_checkedInfo?.nativeEvent) {
      props.onCheckedChange?.(res);
    }
  };

  return (
    <div
      style={props.style}
      className={classNames(styles.permissionForm, props.className)}
    >
      <div className={styles.toolbar}>
        <Checkbox checked={expandAll} onChange={handleExpandChange}>
          展开/折叠
        </Checkbox>
        <Checkbox checked={selectAll} onChange={handleSelectAllChange}>
          全选/全不选
        </Checkbox>
      </div>
    </div>
  );
};

export default React.forwardRef(TreeWrapper);
