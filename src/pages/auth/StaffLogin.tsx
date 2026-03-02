import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AuthFormField } from "@/components/auth/AuthFormField";
import { Badge } from "@/components/ui/badge";
import {
    ShieldKeyIcon,
    UserMultiple02Icon,
    ArrowRight01Icon,
} from "hugeicons-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type StaffRole = "admin" | "instructor";

const roles: { key: StaffRole; label: string; description: string; icon: React.ComponentType<{ size?: number; className?: string }> }[] = [
    {
        key: "admin",
        label: "Administrator",
        description: "Full system access, analytics, user & course management",
        icon: ShieldKeyIcon,
    },
    {
        key: "instructor",
        label: "Instructor",
        description: "QR scanning, attendance, cohort & grading tools",
        icon: UserMultiple02Icon,
    },
];

export default function StaffLogin() {
    const navigate = useNavigate();
    const [selectedRole, setSelectedRole] = useState<StaffRole>("admin");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim() || !password.trim()) return;

        setLoading(true);
        // Simulate auth call
        setTimeout(() => {
            setLoading(false);
            toast.success(`Signed in as ${selectedRole === "admin" ? "Administrator" : "Instructor"}`, {
                description: "Redirecting to your dashboard...",
            });
            navigate(selectedRole === "admin" ? "/admin" : "/instructor");
        }, 1200);
    };

    return (
        <div className="w-full space-y-8">
            {/* Header */}
            <div className="space-y-1">
                <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="bg-primary/5 text-primary border-none text-[10px] font-medium px-2.5 py-1 rounded-full uppercase tracking-widest">
                        Staff Portal
                    </Badge>
                </div>
                <h1 className="text-2xl font-medium text-slate-900">Staff Sign In</h1>
                <p className="text-sm text-slate-500 font-normal">
                    Access the administration or instructor portal.
                </p>
            </div>

            {/* Role Selector */}
            <div className="space-y-2">
                <label className="text-xs font-medium text-slate-600">Sign in as</label>
                <div className="grid grid-cols-2 gap-3">
                    {roles.map((role) => {
                        const isActive = selectedRole === role.key;
                        return (
                            <button
                                key={role.key}
                                type="button"
                                onClick={() => setSelectedRole(role.key)}
                                className={cn(
                                    "flex flex-col items-start gap-3 p-4 rounded-2xl border text-left transition-all duration-300",
                                    isActive
                                        ? "border-primary bg-primary/5 shadow-sm shadow-primary/5"
                                        : "border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50/50"
                                )}
                            >
                                <div className={cn(
                                    "h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300",
                                    isActive ? "bg-primary text-white" : "bg-slate-100 text-slate-400"
                                )}>
                                    <role.icon size={18} />
                                </div>
                                <div>
                                    <span className={cn(
                                        "text-sm font-medium block",
                                        isActive ? "text-primary" : "text-slate-700"
                                    )}>
                                        {role.label}
                                    </span>
                                    <span className="text-[11px] text-slate-400 leading-snug block mt-0.5">
                                        {role.description}
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <AuthFormField
                    label="Staff Email"
                    id="staff-email"
                    type="email"
                    placeholder="your.name@trd.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                />
                <AuthFormField
                    label="Password"
                    id="staff-password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                />

                <div className="flex justify-end">
                    <Link
                        to="/forgot-password"
                        className="text-xs font-medium text-primary hover:underline"
                    >
                        Forgot password?
                    </Link>
                </div>

                <Button
                    type="submit"
                    disabled={loading || !email || !password}
                    className="w-full h-12 rounded-full bg-primary hover:bg-primary/90 text-white font-medium text-sm transition-all shadow-lg shadow-primary/10 gap-2"
                >
                    {loading ? (
                        <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        <>
                            Sign In as {selectedRole === "admin" ? "Admin" : "Instructor"}
                            <ArrowRight01Icon size={16} />
                        </>
                    )}
                </Button>
            </form>

            {/* Footer links */}
            <div className="space-y-3 pt-2">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-100" />
                    </div>
                    <div className="relative flex justify-center text-xs">
                        <span className="bg-white px-3 text-slate-300 font-medium">or</span>
                    </div>
                </div>
                <p className="text-center text-sm text-slate-500 font-normal">
                    Are you a student?{" "}
                    <Link to="/login" className="font-medium text-primary hover:underline">
                        Student login
                    </Link>
                </p>
            </div>
        </div>
    );
}
