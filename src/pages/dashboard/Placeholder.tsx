export default function Placeholder({ title }: { title: string }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-4 animate-in fade-in duration-700">
            <div className="p-8 rounded-full bg-primary/5">
                <div className="text-4xl">🚧</div>
            </div>
            <div>
                <h1 className="text-2xl font-bold">{title} Page</h1>
                <p className="text-muted-foreground">This feature is currently under development.</p>
            </div>
        </div>
    );
}
