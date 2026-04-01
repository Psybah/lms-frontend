import { Badge } from "@/components/ui/badge";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Who can enrol in TRD programmes?",
        answer: "TRD programmes are open to University of Ibadan staff, current students, and external professionals looking to advance their skills. Select courses may have specific prerequisite requirements.",
    },
    {
        question: "Are the certificates institutionally recognised?",
        answer: "Yes. All certificates issued upon successful completion of a programme are fully recognised by the Training, Research and Development Unit (TRD) and ITeMS, University of Ibadan.",
    },
    {
        question: "How are the classes delivered?",
        answer: "We offer flexible learning options including fully physical classes, hybrid sessions, and entirely virtual courses. The delivery method depends on the specific programme you enrol in.",
    },
    {
        question: "What is the duration of a typical programme?",
        answer: "Programme lengths vary based on depth and complexity, ranging from intensive two-day bootcamps to comprehensive 12-week certification pathways.",
    },
    {
        question: "How do I make payment for a course?",
        answer: "Payments can be made securely online through our student portal using your preferred payment method once you have formally applied and been accepted into a programme.",
    },
];

export function FAQ() {
    return (
        <section id="faq" className="py-20 lg:py-28 bg-slate-50/50">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <Badge variant="secondary" className="bg-primary/5 text-primary border-none text-xs font-medium px-3 py-1 rounded-full">
                        Got Questions?
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto font-normal text-base leading-relaxed">
                        Find quick answers to common questions about our programmes, certification, and learning experience.
                    </p>
                </div>

                <div className="bg-white rounded-[2rem] p-4 sm:p-6 lg:p-10 border border-slate-100">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-slate-100">
                                <AccordionTrigger className="text-left py-5 text-base font-medium text-slate-900 hover:text-primary hover:no-underline transition-colors">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-500 font-normal leading-relaxed pb-6 pr-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
