import React from "react";
import { ILayoutContent } from "../layout/util";
declare const WithGridArea: (gridArea: string) => (WrappedComponent: React.FC<ILayoutContent>) => (props: ILayoutContent) => JSX.Element;
export default WithGridArea;
