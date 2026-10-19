import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | The Hungry Host",
  description: "The Hungry Host Website",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
