import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

export function RecentTransaction() {
  return (
    <span className="group flex items-center justify-between rounded-md p-3 text-lg font-medium hover:bg-primary/10 hover:text-accent-foreground">
      <div className="flex">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0">
          <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Jackson Lee</p>
          <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
        </div>
      </div>
      <div className="flex items-center justify-between space-x-1 ">
        <Button
          className="h-auto w-16 text-success hover:text-success"
          variant={"outline"}
        >
          Request
        </Button>
        <Button
          className="h-auto w-16 text-red-500 hover:text-red-500"
          variant={"outline"}
        >
          Pay
        </Button>
      </div>
    </span>
  );
}
