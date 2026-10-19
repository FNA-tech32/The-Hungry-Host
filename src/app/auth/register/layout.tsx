import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | The Hungry Host",
  description: "The Hungry Host Website",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
