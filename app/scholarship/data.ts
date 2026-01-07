
export interface RegionData {
    region: string;
    studentCount: number;
    amount: number;
}

export interface ScholarshipData {
    year: number;
    totalStudents: number;
    totalAmount: number;
    highSchool: number;
    university: number;
    regions: RegionData[];
}

export interface StudentStory {
    id: string;
    name: string;
    year: number;
    school: string;
    message: string;
    photo?: string;
    category: 'highschool' | 'university';
}

export interface AnnualReport {
    year: number;
    title: string;
    fileUrl: string;
    fileSize: string;
    pageCount: number;
    publishedDate: string;
}

export const scholarshipData: ScholarshipData[] = [
    {
        year: 2024,
        totalStudents: 46,
        totalAmount: 92000000,
        highSchool: 20,
        university: 26,
        regions: [
            { region: "서울", studentCount: 15, amount: 30000000 },
            { region: "경기", studentCount: 12, amount: 24000000 },
            { region: "인천", studentCount: 8, amount: 16000000 },
            { region: "기타", studentCount: 11, amount: 22000000 }
        ]
    },
    {
        year: 2023,
        totalStudents: 35,
        totalAmount: 70000000,
        highSchool: 15,
        university: 20,
        regions: [
            { region: "서울", studentCount: 12, amount: 24000000 },
            { region: "경기", studentCount: 10, amount: 20000000 },
            { region: "인천", studentCount: 8, amount: 16000000 },
            { region: "기타", studentCount: 5, amount: 10000000 }
        ]
    },
    {
        year: 2022,
        totalStudents: 28,
        totalAmount: 56000000,
        highSchool: 12,
        university: 16,
        regions: [
            { region: "서울", studentCount: 10, amount: 20000000 },
            { region: "경기", studentCount: 8, amount: 16000000 },
            { region: "인천", studentCount: 5, amount: 10000000 },
            { region: "기타", studentCount: 5, amount: 10000000 }
        ]
    }
];

export const totalCumulative = {
    students: 119,
    amount: 238000000,
    schoolCount: 24, // Suggested in wireframe
    growthRate: 15   // Suggested in wireframe
};

export const studentStories: StudentStory[] = [
    {
        id: 's1',
        name: '김OO',
        year: 2024,
        school: '서울대학교',
        message: '신주장학재단의 지원 덕분에 학비 걱정 없이 학업에만 전념할 수 있었습니다. 받은 사랑을 사회에 환원하는 사람이 되겠습니다.',
        category: 'university'
    },
    {
        id: 's2',
        name: '이OO',
        year: 2023,
        school: '연세대학교',
        message: '가정 형편이 어려워 학업을 포기하려 했을 때, 신주장학재단이 저에게 희망의 불씨가 되어주었습니다.',
        category: 'university'
    },
    {
        id: 's3',
        name: '박OO',
        year: 2024,
        school: '고려대학교',
        message: '단순한 경제적 지원을 넘어, 저의 꿈을 믿어주는 분들이 계시다는 사실이 큰 힘이 되었습니다.',
        category: 'university'
    },
    {
        id: 's4',
        name: '최OO',
        year: 2023,
        school: '한양대학교',
        message: '장학생으로 선발된 자부심으로 더욱 열심히 공부하여 장학금을 기부하는 멋진 선배가 되고 싶습니다.',
        category: 'university'
    },
    {
        id: 's5',
        name: '정OO',
        year: 2022,
        school: '성균관대학교',
        message: '신주장학재단은 저에게 키다리 아저씨와 같습니다. 늘 감사한 마음을 잊지 않겠습니다.',
        category: 'university'
    }
];

export const annualReports: AnnualReport[] = [
    {
        year: 2024,
        title: '2024년도 연차보고서',
        fileUrl: '/reports/2024_report.pdf',
        fileSize: '3.2MB',
        pageCount: 24,
        publishedDate: '2025-02-15'
    },
    {
        year: 2023,
        title: '2023년도 연차보고서',
        fileUrl: '/reports/2023_report.pdf',
        fileSize: '2.8MB',
        pageCount: 20,
        publishedDate: '2024-02-10'
    },
    {
        year: 2022,
        title: '2022년도 연차보고서',
        fileUrl: '/reports/2022_report.pdf',
        fileSize: '2.5MB',
        pageCount: 18,
        publishedDate: '2023-02-12'
    }
];
