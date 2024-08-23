import React, { createContext, useState } from "react";

const defaultValue = {
  isSettingState: false,
  savingState: false,
};
const EditorContext = createContext({
  editorState: defaultValue, // 确保提供一个有效的初始状态
  setEditorState: (editorState) => {}, // 提供一个空函数，以防万一
});

const EditorContextProvider = (props) => {
  const [editorState, setEditorState] = useState(defaultValue);
  return (
    <EditorContext.Provider
      value={{
        editorState,
        setEditorState,
      }}
    >
      {props.children}
    </EditorContext.Provider>
  );
};

export { EditorContext, EditorContextProvider };
