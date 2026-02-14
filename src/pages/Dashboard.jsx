import { Link } from 'react-router-dom'

function Dashboard() {
    const modules = [
        {
            id: 'practice',
            title: 'Practice',
            desc: 'DSA, aptitude, and coding problems to sharpen your skills.',
            link: '/practice',
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="4" y="6" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 14l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            id: 'companies',
            title: 'Companies',
            desc: 'Research companies, track application status, and prepare.',
            link: '/companies',
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="6" y="10" width="8" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="18" y="6" width="8" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M10 14h0M10 18h0M10 22h0M22 10h0M22 14h0M22 18h0M22 22h0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            id: 'resume',
            title: 'Resume',
            desc: 'Build and review your resume with structured checklists.',
            link: '/resume',
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="8" y="4" width="16" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 10h8M12 14h8M12 18h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            id: 'settings',
            title: 'Settings',
            desc: 'Configure your profile, target role, and preparation goals.',
            link: '/settings',
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M16 4v4M16 24v4M4 16h4M24 16h4M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M7.5 24.5l2.8-2.8M21.7 10.3l2.8-2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            ),
        },
    ]

    return (
        <div className="page-shell">
            <div className="page-header">
                <h1 className="page-title">Dashboard</h1>
                <p className="page-subtitle">Your preparation at a glance. Pick a module and begin.</p>
            </div>
            <div className="page-body">
                <div className="module-grid">
                    {modules.map(mod => (
                        <Link to={mod.link} className="module-card" key={mod.id} id={`module-${mod.id}`}>
                            <div className="module-card-icon">{mod.icon}</div>
                            <h3 className="module-card-title">{mod.title}</h3>
                            <p className="module-card-desc">{mod.desc}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
