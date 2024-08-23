import { createContext } from "react";
import { INodeItem } from "../dto";

const ProgressContext = createContext<INodeItem[]>([]);
export default ProgressContext;
