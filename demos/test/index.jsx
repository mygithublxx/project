import React from "react";
import { EditorContextProvider } from "../../packages/wiring-diagram";
import WiringDiagramDemo from "../wiring-diagram";
import { MqttReduxProvider } from "@gw/gw-arch";
import styles from "./index.module.less";

const test = () => {
  return (
    <div className={styles.containerwrap}>
      <EditorContextProvider>
        <MqttReduxProvider>
          <WiringDiagramDemo />
        </MqttReduxProvider>
      </EditorContextProvider>
    </div>
  );
};

export default test;
