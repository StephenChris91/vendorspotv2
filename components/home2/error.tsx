// pages/404.tsx

import React from "react";

interface errorProps {
  title: string;
  message: string;
  statusCode?: number;
  icon?: string;
}

const ErrorPage = ({ title, message, statusCode, icon }: errorProps) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-4xl font-semibold mb-4">{title}</h1>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
