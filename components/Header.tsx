import { UserNav } from "./UserNav";
import { ModeToggle } from "./theme-dropdown";
import { Sidebar, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileSidebar } from "./MobileSidebar";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 p-4 flex items-center justify-between  supports-backdrop-blur:bg-background/60 border-b  backdrop-blur z-20 font-extrabold">
      <nav className="h-8 w-full flex items-center justify-between px-4 gap-3 ">
        <div className={cn("block lg:!hidden")}>
          <MobileSidebar />
        </div>
        <Wallet className={cn("w-8 h-8 hidden lg:!block")} />
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight transition-colors first:mt-0 w-full">
          E-Wallet
        </h2>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <UserNav />
        </div>
      </nav>
    </div>
  );
};

export default Header;
