import DashboardNav from "@/components/DashboardNav";
import Header from "@/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <div>
        <Header />
        <div className="flex h-screen overflow-hidden">
          <DashboardNav />
          <main className="pt-14 w-full overflow-y-auto">{children}</main>
        </div>
      </div>
    </body>
  );
}
