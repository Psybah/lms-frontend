export interface EntryPass {
    id: string;
    eventTitle: string;
    date: string;
    venue: string;
    passCode: string;
    qrUrl: string;
}

export const entryPasses: EntryPass[] = [
    {
        id: "pass-1",
        eventTitle: "Physical Security Workshop 2026",
        date: "March 15, 2026",
        venue: "ITeMS Building, University of Ibadan",
        passCode: "PSW-UI-2026-001",
        qrUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PSW-UI-2026-001"
    },
    {
        id: "pass-2",
        eventTitle: "LMS Onboarding Session",
        date: "April 10, 2026",
        venue: "Virtual Room 4 (Google Meet)",
        passCode: "LOS-VIRT-2026-045",
        qrUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=LOS-VIRT-2026-045"
    }
];
