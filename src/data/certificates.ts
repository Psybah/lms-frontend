export interface Certificate {
    id: string;
    courseTitle: string;
    issueDate: string;
    credentialId: string;
    imageUrl: string;
}

export const certificates: Certificate[] = [
    {
        id: "cert-1",
        courseTitle: "Tech Odyssey",
        issueDate: "Jan 12, 2026",
        credentialId: "APS-2026-001-892",
        imageUrl: "https://static.vecteezy.com/system/resources/previews/019/619/359/non_2x/dummy-certificate-template-in-high-education-certificate-free-vector.jpg"
    },
    {
        id: "cert-2",
        courseTitle: "Python Programming",
        issueDate: "Feb 05, 2026",
        credentialId: "CSF-2026-045-112",
        imageUrl: "https://static.vecteezy.com/system/resources/previews/019/619/359/non_2x/dummy-certificate-template-in-high-education-certificate-free-vector.jpg"
    },
    {
        id: "cert-3",
        courseTitle: "Digital Literacy",
        issueDate: "Dec 20, 2025",
        credentialId: "WPE-2025-221-554",
        imageUrl: "https://static.vecteezy.com/system/resources/previews/019/619/359/non_2x/dummy-certificate-template-in-high-education-certificate-free-vector.jpg"
    },
    {
        id: "cert-4",
        courseTitle: "Web Development",
        issueDate: "Nov 15, 2025",
        credentialId: "PM-2025-088-332",
        imageUrl: "https://static.vecteezy.com/system/resources/previews/019/619/359/non_2x/dummy-certificate-template-in-high-education-certificate-free-vector.jpg"
    }
];
