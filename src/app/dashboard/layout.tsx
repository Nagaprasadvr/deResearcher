import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UIProvider } from "@/components/providers/UIProvider";
import Sidebar from "@/components/Dashboard/Sidebar";
import DashboardNavbar from "@/components/Dashboard/Navbar";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-zinc-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <DashboardNavbar />
        <div className="flex-1 overflow-x-hidden bg-zinc-100">
          <div className="container mx-auto px-6 py-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
