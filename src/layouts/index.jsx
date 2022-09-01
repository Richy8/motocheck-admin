import React from "react";

export { default as LoadingLayout } from "./LoadingLayout";
export const BaseLayout = React.lazy(() => import("./BaseLayout")); // LAZY LOADED
