function Practice() {
    return (
        <div className="page-shell">
            <div className="page-header">
                <h1 className="page-title">Practice</h1>
                <p className="page-subtitle">Sharpen your problem-solving across DSA, aptitude, and system design.</p>
            </div>
            <div className="page-body">
                <div className="empty-state-card">
                    <div className="empty-state-icon-wrap">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <rect x="8" y="12" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M18 22l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h3 className="empty-state-title">Practice module coming soon</h3>
                    <p className="empty-state-text">
                        Curated DSA problems, aptitude drills, and coding exercises will appear here.
                        Check back after we add the practice dataset.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Practice
