import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit | The Hungry Host",
  description: "The Hungry Host Website",
};

export default function EditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
