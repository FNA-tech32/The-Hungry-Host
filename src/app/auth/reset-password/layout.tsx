import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | The Hungry Host",
  description: "The Hungry Host Website",
};

export default function ResetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
