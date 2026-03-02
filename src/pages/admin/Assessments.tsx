import { useState } from "react";
import { questionBank, scoringRules } from "@/data/admin";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Search01Icon,
    Add01Icon,
    Edit01Icon,
    Delete01Icon,
    Task01Icon,
    Settings01Icon,
    CheckmarkCircle01Icon,
} from "hugeicons-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import type { QuestionBank, ScoringRule } from "@/data/admin-types";

export default function Assessments() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState<"questions" | "scoring">("questions");
    const [editQuestion, setEditQuestion] = useState<QuestionBank | null>(null);
    const [createOpen, setCreateOpen] = useState(false);
    const [deleteTarget, setDeleteTarget] = useState<QuestionBank | null>(null);
    const [editScoringRule, setEditScoringRule] = useState<ScoringRule | null>(null);

    const filteredQuestions = questionBank.filter(
        (q) =>
            q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const difficultyColors = {
        easy: "bg-emerald-50 text-emerald-600",
        medium: "bg-amber-50 text-amber-600",
        hard: "bg-red-50 text-red-500",
    };

    const handleSaveQuestion = () => {
        if (editQuestion) {
            toast.success("Question updated", { description: "Changes have been saved to the question bank." });
            setEditQuestion(null);
        } else {
            toast.success("Question created", { description: "Added to the question bank." });
            setCreateOpen(false);
        }
    };

    const handleDeleteQuestion = () => {
        if (deleteTarget) {
            toast.success("Question removed", { description: `"${deleteTarget.question.slice(0, 40)}..." deleted from the bank.` });
            setDeleteTarget(null);
        }
    };

    const handleUpdateScoringRule = () => {
        if (editScoringRule) {
            toast.success(`Scoring updated for ${editScoringRule.courseTitle}`, {
                description: `Passing: ${editScoringRule.passingScore}% · ${editScoringRule.totalQuestions} questions · ${editScoringRule.timeLimit}min limit`,
            });
            setEditScoringRule(null);
        }
    };

    return (
        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between px-2">
                <div className="space-y-1">
                    <h1 className="text-3xl font-medium tracking-tight text-slate-800">Assessment Engine</h1>
                    <p className="text-slate-400 font-medium text-sm">Manage question banks, difficulty levels and scoring rules.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative group lg:w-72">
                        <Search01Icon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Search questions or tags..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            aria-label="Search questions"
                            className="h-11 w-full pl-11 pr-4 rounded-xl bg-slate-100 border-none text-sm focus:ring-2 focus:ring-primary/10 transition-all outline-none placeholder:text-slate-400"
                        />
                    </div>
                    {activeTab === "questions" && (
                        <Button
                            onClick={() => setCreateOpen(true)}
                            className="h-11 px-6 rounded-full bg-primary hover:bg-primary/90 text-white font-medium shadow-lg shadow-primary/10 gap-2"
                        >
                            <Add01Icon size={16} />
                            <span className="hidden sm:inline">Add Question</span>
                        </Button>
                    )}
                </div>
            </div>

            {/* Tabs */}
            <div className="px-2">
                <div className="flex items-center gap-8 border-b border-slate-100">
                    <button
                        onClick={() => setActiveTab("questions")}
                        className={cn("pb-4 text-sm font-medium transition-all relative", activeTab === "questions" ? "text-primary" : "text-slate-400 hover:text-slate-600")}
                    >
                        Question Bank
                        <Badge variant="secondary" className={cn("ml-2 border-none text-[10px] px-1.5 h-4", activeTab === "questions" ? "bg-accent/50 text-primary" : "bg-slate-50 text-slate-400")}>
                            {questionBank.length}
                        </Badge>
                        {activeTab === "questions" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />}
                    </button>
                    <button
                        onClick={() => setActiveTab("scoring")}
                        className={cn("pb-4 text-sm font-medium transition-all relative", activeTab === "scoring" ? "text-primary" : "text-slate-400 hover:text-slate-600")}
                    >
                        Scoring Rules
                        <Badge variant="secondary" className={cn("ml-2 border-none text-[10px] px-1.5 h-4", activeTab === "scoring" ? "bg-accent/50 text-primary" : "bg-slate-50 text-slate-400")}>
                            {scoringRules.length}
                        </Badge>
                        {activeTab === "scoring" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />}
                    </button>
                </div>
            </div>

            {/* Questions Tab */}
            {activeTab === "questions" ? (
                filteredQuestions.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in-95 duration-500">
                        <div className="h-20 w-20 rounded-full bg-slate-50 flex items-center justify-center text-slate-200 mb-6">
                            <Task01Icon size={40} />
                        </div>
                        <h2 className="text-2xl font-medium text-slate-900 mb-2">No Questions Found</h2>
                        <p className="text-slate-500 max-w-sm mx-auto mb-8 font-medium text-sm leading-relaxed">Try adjusting your search or add a new question.</p>
                        <Button onClick={() => setCreateOpen(true)} className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-medium shadow-lg shadow-primary/10">
                            <Add01Icon size={16} className="mr-2" /> Add Question
                        </Button>
                    </div>
                ) : (
                    <div className="space-y-3 px-2">
                        {filteredQuestions.map((q, idx) => (
                            <Card key={q.id} className="border-slate-100 rounded-2xl shadow-none hover:shadow-sm transition-all">
                                <CardContent className="p-5 flex flex-col sm:flex-row sm:items-start gap-4">
                                    <div className="flex-1 space-y-2">
                                        <div className="flex items-start gap-3">
                                            <span className="text-xs font-medium text-slate-300 pt-0.5">Q{idx + 1}</span>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-slate-800 leading-relaxed">{q.question}</p>
                                                <div className="flex flex-wrap items-center gap-2 mt-2">
                                                    <Badge variant="secondary" className={cn("text-[9px] font-medium px-2 h-5 border-none rounded-full", difficultyColors[q.difficulty])}>
                                                        {q.difficulty}
                                                    </Badge>
                                                    {q.tags.map((tag) => (
                                                        <Badge key={tag} variant="secondary" className="bg-slate-50 text-slate-400 border-none text-[9px] font-medium rounded-full px-2 h-5">
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                                    {q.options.map((opt, i) => (
                                                        <div
                                                            key={i}
                                                            className={cn(
                                                                "flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg",
                                                                i === q.correctIndex ? "bg-emerald-50 text-emerald-700 font-medium" : "bg-slate-50 text-slate-500"
                                                            )}
                                                        >
                                                            {i === q.correctIndex && <CheckmarkCircle01Icon size={12} />}
                                                            <span>{String.fromCharCode(65 + i)}. {opt}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 shrink-0">
                                        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-slate-400 hover:text-primary hover:bg-primary/5" onClick={() => setEditQuestion(q)} aria-label="Edit question">
                                            <Edit01Icon size={16} />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-slate-400 hover:text-destructive hover:bg-destructive/5" onClick={() => setDeleteTarget(q)} aria-label="Delete question">
                                            <Delete01Icon size={16} />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )
            ) : (
                /* Scoring Rules Tab */
                <Card className="border-slate-100 rounded-2xl shadow-none mx-2">
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader>
                                <TableRow className="border-slate-100 hover:bg-transparent">
                                    <TableHead className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Course</TableHead>
                                    <TableHead className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Passing Score</TableHead>
                                    <TableHead className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Questions</TableHead>
                                    <TableHead className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Time Limit</TableHead>
                                    <TableHead className="text-[10px] font-medium text-slate-400 uppercase tracking-widest text-right">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {scoringRules.map((rule) => (
                                    <TableRow key={rule.id} className="border-slate-50 hover:bg-slate-50/50 transition-colors">
                                        <TableCell className="text-sm font-medium text-slate-800">{rule.courseTitle}</TableCell>
                                        <TableCell>
                                            <Badge variant="secondary" className="bg-primary/5 text-primary border-none text-xs font-medium rounded-full">
                                                {rule.passingScore}%
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-sm text-slate-600">{rule.totalQuestions}</TableCell>
                                        <TableCell className="text-sm text-slate-600">{rule.timeLimit} min</TableCell>
                                        <TableCell className="text-right">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-9 w-9 rounded-full text-slate-400 hover:text-primary hover:bg-primary/5"
                                                onClick={() => setEditScoringRule(rule)}
                                                aria-label={`Configure ${rule.courseTitle} scoring`}
                                            >
                                                <Settings01Icon size={16} />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            )}

            {/* Create / Edit Question Dialog */}
            <Dialog open={!!editQuestion || createOpen} onOpenChange={(open) => { if (!open) { setEditQuestion(null); setCreateOpen(false); } }}>
                <DialogContent className="rounded-2xl border-slate-100 shadow-xl max-w-lg">
                    <DialogHeader>
                        <DialogTitle className="text-lg font-medium text-slate-900">
                            {editQuestion ? "Edit Question" : "Add New Question"}
                        </DialogTitle>
                        <DialogDescription className="text-slate-500 text-sm">
                            {editQuestion ? "Update the question details." : "Create a new MCQ for the assessment bank."}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <label htmlFor="q-text" className="text-sm font-medium text-slate-700">Question</label>
                            <textarea
                                id="q-text"
                                rows={2}
                                defaultValue={editQuestion?.question || ""}
                                placeholder="Enter the question text..."
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:ring-2 focus:ring-primary/10 transition-all outline-none resize-none placeholder:text-slate-400"
                            />
                        </div>
                        {[0, 1, 2, 3].map((i) => (
                            <div key={i} className="space-y-1">
                                <label htmlFor={`q-opt-${i}`} className="text-xs font-medium text-slate-500">
                                    Option {String.fromCharCode(65 + i)} {editQuestion && i === editQuestion.correctIndex ? "(correct)" : ""}
                                </label>
                                <input
                                    id={`q-opt-${i}`}
                                    defaultValue={editQuestion?.options[i] || ""}
                                    placeholder={`Option ${String.fromCharCode(65 + i)}...`}
                                    className="h-10 w-full px-4 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:ring-2 focus:ring-primary/10 transition-all outline-none placeholder:text-slate-400"
                                />
                            </div>
                        ))}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="q-diff" className="text-sm font-medium text-slate-700">Difficulty</label>
                                <select
                                    id="q-diff"
                                    defaultValue={editQuestion?.difficulty || "medium"}
                                    className="h-10 w-full px-4 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                                >
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="q-tags" className="text-sm font-medium text-slate-700">Tags</label>
                                <input
                                    id="q-tags"
                                    defaultValue={editQuestion?.tags.join(", ") || ""}
                                    placeholder="e.g. Security, Python"
                                    className="h-10 w-full px-4 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:ring-2 focus:ring-primary/10 transition-all outline-none placeholder:text-slate-400"
                                />
                            </div>
                        </div>
                    </div>
                    <DialogFooter className="gap-2 sm:gap-2">
                        <DialogClose asChild>
                            <Button variant="outline" className="rounded-full h-10 border-slate-200 text-slate-500 font-normal">Cancel</Button>
                        </DialogClose>
                        <Button onClick={handleSaveQuestion} className="rounded-full h-10 bg-primary hover:bg-primary/90 text-white font-normal shadow-lg shadow-primary/10">
                            {editQuestion ? "Save Changes" : "Add Question"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Delete Question Confirmation */}
            <AlertDialog open={!!deleteTarget} onOpenChange={(open) => { if (!open) setDeleteTarget(null); }}>
                <AlertDialogContent className="rounded-2xl border-slate-100 shadow-xl max-w-sm">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-lg font-medium text-slate-900">Delete Question?</AlertDialogTitle>
                        <AlertDialogDescription className="text-slate-500 text-sm">
                            This will permanently remove this question from the assessment bank. This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="gap-2 sm:gap-2">
                        <AlertDialogCancel className="rounded-full h-10 border-slate-200 text-slate-500 font-normal">
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleDeleteQuestion}
                            className="rounded-full h-10 bg-destructive hover:bg-destructive/90 text-white font-normal"
                        >
                            Delete Question
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {/* Scoring Rule Edit Dialog */}
            <Dialog open={!!editScoringRule} onOpenChange={(open) => { if (!open) setEditScoringRule(null); }}>
                <DialogContent className="rounded-2xl border-slate-100 shadow-xl max-w-sm">
                    <DialogHeader>
                        <DialogTitle className="text-lg font-medium text-slate-900">Configure Scoring</DialogTitle>
                        <DialogDescription className="text-slate-500 text-sm">
                            Update scoring rules for <span className="font-medium text-slate-700">{editScoringRule?.courseTitle}</span>.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="py-4 space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="sr-passing" className="text-sm font-medium text-slate-700">Passing Score (%)</label>
                            <input
                                id="sr-passing"
                                type="number"
                                min={0}
                                max={100}
                                defaultValue={editScoringRule?.passingScore || 70}
                                className="h-11 w-full px-4 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:ring-2 focus:ring-primary/10 transition-all outline-none placeholder:text-slate-400"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="sr-questions" className="text-sm font-medium text-slate-700">Total Questions</label>
                                <input
                                    id="sr-questions"
                                    type="number"
                                    min={1}
                                    defaultValue={editScoringRule?.totalQuestions || 20}
                                    className="h-11 w-full px-4 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:ring-2 focus:ring-primary/10 transition-all outline-none placeholder:text-slate-400"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="sr-time" className="text-sm font-medium text-slate-700">Time Limit (min)</label>
                                <input
                                    id="sr-time"
                                    type="number"
                                    min={1}
                                    defaultValue={editScoringRule?.timeLimit || 30}
                                    className="h-11 w-full px-4 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:ring-2 focus:ring-primary/10 transition-all outline-none placeholder:text-slate-400"
                                />
                            </div>
                        </div>
                    </div>
                    <DialogFooter className="gap-2 sm:gap-2">
                        <DialogClose asChild>
                            <Button variant="outline" className="rounded-full h-10 border-slate-200 text-slate-500 font-normal">Cancel</Button>
                        </DialogClose>
                        <Button
                            onClick={handleUpdateScoringRule}
                            className="rounded-full h-10 bg-primary hover:bg-primary/90 text-white font-normal shadow-lg shadow-primary/10"
                        >
                            Save Rules
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}