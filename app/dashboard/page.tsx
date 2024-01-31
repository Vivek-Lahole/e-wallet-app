import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LoadChart } from "@/components/LoadChart";
import { RecentTransaction } from "@/components/RecentTransaction";

const greetings = ["Hello", "Namaste", "Bonjour", "Hola", "Ciao", "Hallo"];

const dashboard = () => {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:pt-8 pt-6">
        <h2 className="text-3xl font-bold tracking-tight px-1">
          {greetings[Math.floor(Math.random() * greetings.length)]} {"Vivek"}{" "}
          Welcome back👋 !
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-4">
        <Card className="bg-primary/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Balance</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent className="flex pr-2 mt-2 items-center justify-between">
            <div className="text-2xl font-bold">$45,231.89</div>
            <Button
              variant={"outline"}
              className="hover:scale-90 transition ease-out  bg-success hover:bg-success"
            >
              Add
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-primary/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Paid</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent className="flex pr-2 mt-2 items-center justify-between">
            <div className="text-2xl font-bold">-$ 2350</div>
            <Button
              variant={"outline"}
              className="hover:scale-90 transition ease-out  bg-success hover:bg-success"
            >
              History
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-primary/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Received</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent className="flex pr-2 mt-2 items-center justify-between">
            <div className="text-2xl font-bold">+ 12,234</div>
            <Button
              variant={"outline"}
              className="hover:scale-90 transition ease-out  bg-success hover:bg-success"
            >
              History
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-primary/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Friends</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent className="flex pr-2 mt-2 items-center justify-between">
            <div className="text-2xl font-bold">+573</div>
            <Button
              variant={"outline"}
              className="hover:scale-90 transition ease-out bg-success hover:bg-success"
            >
              Add
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-96 px-4">
        <Card className="bg-primary/10">
          <CardHeader>
            <CardTitle className="text-lg font-medium">
              Total Spent Distribuiton
            </CardTitle>
          </CardHeader>
          <CardContent>
            <LoadChart />
          </CardContent>
        </Card>
        <Card className="bg-primary/10 w-full overflow-y-auto">
          <CardHeader>
            <CardTitle className="text-lg font-medium flex items-center justify-between">
              <span>Recent Transaction</span>
              <span className="text-muted-foreground hover:text-foreground">
                view more
              </span>
            </CardTitle>
            <CardDescription>
              You made 69 transaction in last month
            </CardDescription>
            <CardContent className="overflow-y-auto p-0">
              <RecentTransaction />
              <RecentTransaction />
              <RecentTransaction />
              <RecentTransaction />
              <RecentTransaction />
              <RecentTransaction />
              <RecentTransaction />
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </ScrollArea>
  );
};

export default dashboard;
