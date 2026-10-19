import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | The Hungry Host",
  description: "The Hungry Host Website",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
