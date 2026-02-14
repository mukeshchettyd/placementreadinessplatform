function Resume() {
    return (
        <div className="page-shell">
            <div className="page-header">
                <h1 className="page-title">Resume</h1>
                <p className="page-subtitle">Build a structured resume and verify it against placement standards.</p>
            </div>
            <div className="page-body">
                <div className="empty-state-card">
                    <div className="empty-state-icon-wrap">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <rect x="12" y="6" width="24" height="36" rx="3" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M18 14h12M18 20h12M18 26h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <circle cx="24" cy="34" r="3" stroke="currentColor" strokeWidth="1.2" />
                        </svg>
                    </div>
                    <h3 className="empty-state-title">Resume builder coming soon</h3>
                    <p className="empty-state-text">
                        A structured resume builder with section checklists and formatting review.
                        Coming up in a future update.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Resume
