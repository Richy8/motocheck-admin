import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// IMPORT ROUTE PAGES LAZILY
import { BaseLayout, LoadingLayout } from "layouts";
import { DashboardArea } from "pages";

export default function PageRoutes() {
  return (
    <React.Suspense fallback={<LoadingLayout />}>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardArea />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}
