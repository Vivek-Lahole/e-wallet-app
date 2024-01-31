"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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

export function MobileSidebar() {
  const path = usePathname();
  const router = useRouter();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Sidebar className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-[300px] sm:w-[400px]">
        <div className="space-y-4 py-4">
          <div className="py-2">
            <h2 className="mb-2 text-2xl font-semibold tracking-tight border-b p-2">
              Overview
            </h2>
            <nav className="flex flex-col gap-2 py-2 space-y-1">
              {sidebarNav.map((item) => {
                return (
                  <span
                    className={cn(
                      "group flex items-center rounded-md px-2 py-3 text-lg font-medium hover:bg-accent hover:text-accent-foreground",
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
      </SheetContent>
    </Sheet>
  );
}
