import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Outlet } from "react-router-dom";
import { Notification01Icon, Search01Icon } from "hugeicons-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DashboardLayout() {
    return (
        <SidebarProvider defaultOpen={true}>
            <div className="flex h-screen w-full bg-slate-100 overflow-hidden font-sans">
                <AppSidebar />
                <SidebarInset className="flex flex-col bg-slate-100 overflow-hidden">
                    <div className="flex-1 my-3 mr-3 rounded-3xl bg-white border border-slate-200 overflow-hidden flex flex-col">
                        <header className="flex h-20 shrink-0 items-center justify-between px-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 w-1/3">
                                <div className="relative group w-full max-w-sm">
                                    <Search01Icon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
                                    <input
                                        type="text"
                                        placeholder="Search anything..."
                                        className="h-11 w-full pl-11 pr-4 rounded-xl bg-slate-100 border-none text-sm focus:ring-2 focus:ring-primary/10 transition-all outline-none placeholder:text-slate-400"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-end gap-4 w-1/3">
                                <Button variant="ghost" size="icon" className="rounded-full relative hover:bg-slate-50 transition-colors h-11 w-11">
                                    <Notification01Icon size={22} className="text-slate-600" />
                                    <span className="absolute top-3 right-3 flex h-2 w-2 rounded-full bg-red-500 border-2 border-white" />
                                </Button>

                                <div className="flex items-center gap-3 pl-2 border-l border-slate-100">
                                    <div className="flex flex-col items-end mr-1">
                                        <span className="text-sm font-medium text-slate-800">Cyber Smith</span>
                                        <span className="text-[10px] font-medium text-slate-400 uppercase tracking-tight">Student</span>
                                    </div>
                                    <Avatar className="h-11 w-11 border rounded-full border-slate-100 bg-accent shadow-sm">
                                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=CyberSmith" />
                                        <AvatarFallback className="bg-primary/5 text-primary text-xs font-medium">CS</AvatarFallback>
                                    </Avatar>
                                </div>
                            </div>
                        </header>

                        <main className="flex-1 overflow-auto p-10">
                            <div className="mx-auto max-w-7xl">
                                <Outlet />
                            </div>
                        </main>
                    </div>
                </SidebarInset>
            </div>
        </SidebarProvider>
    );
}
