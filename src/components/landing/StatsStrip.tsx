const stats = [
    { label: "Active Learners", value: "1,200+" },
    { label: "Programmes Available", value: "14" },
    { label: "Completion Rate", value: "78%" },
    { label: "Certificates Issued", value: "840+" },
];

export function StatsStrip() {
    return (
        <section className="border-y border-slate-100 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 lg:divide-x divide-slate-200/60">
                    {stats.map((stat, idx) => (
                        <div
                            key={stat.label}
                            className={`flex flex-col items-center justify-center text-center px-4 ${idx % 2 !== 0 ? "border-l border-slate-200/60 lg:border-l-0" : ""
                                }`}
                        >
                            <p className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 mb-2">{stat.value}</p>
                            <p className="text-[10px] sm:text-xs text-slate-400 font-normal">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
