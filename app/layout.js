"use client"
import React from "react";
import "./globals.css";
import { AuthProvider } from "./ContextApi/AuthContext";
export default function RootLayout({ children }) {
  return (
    <html>
        <body>
        <AuthProvider>
          {children}
        </AuthProvider>
        </body>
      </html>
  );
}
