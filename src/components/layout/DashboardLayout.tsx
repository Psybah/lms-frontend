import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Outlet } from "react-router-dom";
import { Notification03Icon, Search01Icon } from "hugeicons-react";
import { Button } from "@/components/ui/button";

export function DashboardLayout() {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full bg-background">
                <AppSidebar />
                <SidebarInset className="flex flex-col">
                    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between border-b bg-background/80 px-6 backdrop-blur-md">
                        <div className="flex items-center gap-4">
                            <SidebarTrigger className="-ml-1" />
                            <div className="h-4 w-[1px] bg-border" />
                            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                                Student Portal
                            </h2>
                        </div>
                        <div className="flex items-center gap-3">
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <Search01Icon size={20} />
                            </Button>
                            <Button variant="ghost" size="icon" className="rounded-full relative">
                                <Notification03Icon size={20} />
                                <span className="absolute top-2 right-2 flex h-2 w-2 rounded-full bg-primary" />
                            </Button>
                        </div>
                    </header>
                    <main className="flex-1 overflow-auto p-8">
                        <div className="mx-auto max-w-7xl">
                            <Outlet />
                        </div>
                    </main>
                </SidebarInset>
            </div>
        </SidebarProvider>
    );
}
