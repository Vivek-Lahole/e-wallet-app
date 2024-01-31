"use client";

import { cn } from "@/lib/utils";
import {
  Sidebar,
  LayoutDashboard,
  Users,
  IndianRupee,
  GitCompareArrows,
  Info,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const sidebarNav = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Users",
    icon: Users,
    path: "/users",
  },
  {
    title: "Transaction",
    icon: IndianRupee,
    path: "/dashboard/transactions",
  },
  {
    title: "Request",
    icon: GitCompareArrows,
    path: "/dashboard/request",
  },
  {
    title: "Profile",
    icon: Info,
    path: "/dashboard/profile",
  },
];

export default function DashboardNav() {
  const path = usePathname();
  const router = useRouter();
  return (
    <nav
      className={cn(`relative hidden h-screen border-r lg:block w-64 pt-20`)}
    >
      <div className="space-y-2 py-2">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h2 className="mb-2 px-2 text-xl font-semibold tracking-tight border-b pb-2">
              Overview
            </h2>
            <nav className="flex flex-col gap-2 py-2">
              {sidebarNav.map((item) => {
                return (
                  <span
                    className={cn(
                      "group flex items-center rounded-md px-2 py-2 text-lg font-medium hover:bg-accent hover:text-accent-foreground cursor-pointer",
                      path === item.path ? "bg-accent" : "transparent"
                    )}
                    onClick={() => {
                      router.push(item.path);
                    }}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <span className="text-sm">{item.title}</span>
                  </span>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}
