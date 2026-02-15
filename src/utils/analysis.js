
const SKILL_CATEGORIES = {
    'Core CS': ['DSA', 'OOP', 'DBMS', 'OS', 'Networks'],
    'Languages': ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'C#', 'Go'],
    'Web': ['React', 'Next.js', 'Node.js', 'Express', 'REST', 'GraphQL'],
    'Data': ['SQL', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
    'Cloud/DevOps': ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Linux'],
    'Testing': ['Selenium', 'Cypress', 'Playwright', 'JUnit', 'PyTest']
};

export function extractSkills(jdText) {
    const detected = {};
    const lowerJD = jdText.toLowerCase();

    Object.entries(SKILL_CATEGORIES).forEach(([category, skills]) => {
        const found = skills.filter(skill => {
            const escapedSkill = skill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            // Improved regex to handle special characters like C++, C#, .js extensions
            // Matches skill name with word boundaries or special handling for symbols
            const regex = new RegExp(`(?:^|[^a-zA-Z0-9+#])${escapedSkill}(?![a-zA-Z0-9+#])`, 'i');
            return regex.test(jdText);
        });
        if (found.length > 0) {
            detected[category] = found;
        }
    });

    return detected;
}

export function calculateReadinessScore(data) {
    let score = 35;
    const { detectedSkills, company, role, jdText } = data;

    // 1. +5 per detected category (max 30)
    const categoryCount = Object.keys(detectedSkills).length;
    score += Math.min(categoryCount * 5, 30);

    // 2. +10 if company name provided
    if (company && company.trim().length > 0) score += 10;

    // 3. +10 if role provided
    if (role && role.trim().length > 0) score += 10;

    // 4. +10 if JD length > 800 chars
    if (jdText && jdText.length > 800) score += 10;

    return Math.min(score, 100);
}

export function generateChecklist(detectedSkills) {
    const all = Object.values(detectedSkills).flat();
    const hasCore = !!detectedSkills['Core CS'];
    const hasWeb = !!detectedSkills['Web'];
    const hasData = !!detectedSkills['Data'];
    const hasTesting = !!detectedSkills['Testing'];

    return [
        {
            title: 'Round 1: Aptitude / Basics',
            items: [
                'Quantitative Aptitude (Time, Work, Speed)',
                'Logical Reasoning & Puzzles',
                'Verbal Ability (Comprehension & Grammar)',
                'Basic Programming Syntax & Dry Runs',
                'Mental Math & Estimation techniques',
                'Mock Aptitude Test (30 mins)'
            ]
        },
        {
            title: 'Round 2: DSA + Core CS',
            items: [
                'Data Structures (Arrays, Strings, Linked Lists)',
                'Algorithm Optimization (Time/Space Complexity)',
                hasCore ? 'Advanced Core CS (Virtual Memory, Deadlocks, Normalization)' : 'Basics of OS and DBMS',
                'Object Oriented Programming (Inheritance, Polymorphism)',
                'Searching & Sorting Variations',
                'Bit Manipulation & Recursion basics'
            ]
        },
        {
            title: 'Round 3: Tech Interview (Projects + Stack)',
            items: [
                'Detailed walkthrough of 2 Major Projects',
                'System Architecture & Design Decisions',
                hasWeb ? 'Frontend/Backend integration & State' : 'Software Logic Flow',
                hasData ? 'Query optimization & Database schemas' : 'Data flow analysis',
                hasTesting ? 'Unit testing & QA methodologies' : 'Code debugging practice',
                'Explain your biggest technical challenge'
            ]
        },
        {
            title: 'Round 4: Managerial / HR',
            items: [
                'STAR method preparation for behaviorals',
                'Why this company and this specific role?',
                'Strengths, Weaknesses, and Failure analysis',
                'Conflict resolution & Team scenario prep',
                'Questions to ask the interviewer',
                'Role-specific career goals (2-5 years)'
            ]
        }
    ];
}

export function generatePlan(detectedSkills) {
    const all = Object.values(detectedSkills).flat().map(s => s.toLowerCase());
    const hasFrontend = all.includes('react') || all.includes('next.js');
    const hasBackend = all.includes('node.js') || all.includes('express') || all.includes('python');
    const hasCloud = !!detectedSkills['Cloud/DevOps'];

    const plan = [
        { day: 'Day 1–2', title: 'Basics + Core CS', desc: 'Deep dive into OOP principles, DBMS normalization, and OS scheduling. Focus on fundamental definitions.' },
        { day: 'Day 3–4', title: 'DSA + Coding Practice', desc: 'Focus on Arrays, Strings, and most common 50 LeetCode problems. Practice dry-running on paper.' },
        { day: 'Day 5', title: 'Project + Resume Alignment', desc: `Review project logic.${hasFrontend ? ' Focus on state management/component lifecycle.' : ''}${hasBackend ? ' Focus on API design and data models.' : ''}` },
        { day: 'Day 6', title: 'Mock Interview Questions', desc: `Practice with peer/AI on top ${all.slice(0, 3).join(', ') || 'General'} questions.${hasCloud ? ' Brush up on CI/CD and Containerization.' : ''}` },
        { day: 'Day 7', title: 'Revision + Weak Areas', desc: 'Final polish of "About Me", weak concepts identified in Day 6, and company values.' }
    ];

    return plan;
}

export function generateQuestions(detectedSkills) {
    const all = Object.values(detectedSkills).flat().map(s => s.toLowerCase());
    const questions = [];

    // Specific Skill Questions
    if (all.includes('sql')) questions.push('Explain indexing and when it helps with performance.');
    if (all.includes('react')) questions.push('Explain state management options in React and when to use Redux vs Context.');
    if (all.includes('dsa')) questions.push('Explain the difference between a Hash Map and a Tree Map in terms of time complexity.');
    if (all.includes('javascript')) questions.push('What are closures and how do they help in data encapsulation?');
    if (all.includes('java')) questions.push('Explain the difference between interface and abstract class with real-world examples.');
    if (all.includes('python')) questions.push('How does Python manage memory? Explain the Global Interpreter Lock (GIL).');
    if (all.includes('node.js')) questions.push('Explain the concept of streams in Node.js and why they are useful.');
    if (all.includes('docker')) questions.push('How would you reduce the size of a Docker image for production?');
    if (all.includes('mongodb')) questions.push('Explain the differences between embedding and referencing documents in MongoDB.');
    if (all.includes('aws')) questions.push('What is the AWS Well-Architected Framework? Mention its 5 pillars.');
    if (all.includes('typescript')) questions.push('Explain the utility types in TypeScript like Pick, Omit, and Partial.');
    if (all.includes('git') || all.includes('ci/cd')) questions.push('What is Git Rebase vs Git Merge and when would you use each?');

    // Generic fallback questions to ensure 10 total
    const generic = [
        'Walk me through your most challenging project and what you would do differently.',
        'Tell me about a time you worked in a team and had a technical disagreement.',
        'How do you optimize a slow-performing web application?',
        'Explain ACID properties in Database Management.',
        'What is your approach to learning a new technology quickly?',
        'Tell me about a time you missed a deadline and how you handled it.',
        'What are RESTful APIs and what are their best practices?',
        'Explain the OSI model and why it is important for developers.',
        'How do you stay updated with latest industry trends?',
        'Why should we hire you over other candidates with similar skills?'
    ];

    while (questions.length < 10) {
        const next = generic.shift();
        if (!next) break;
        if (!questions.includes(next)) questions.push(next);
    }

    return questions.slice(0, 10);
}
