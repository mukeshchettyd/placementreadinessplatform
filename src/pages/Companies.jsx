function Companies() {
    return (
        <div className="page-shell">
            <div className="page-header">
                <h1 className="page-title">Companies</h1>
                <p className="page-subtitle">Research target companies, track your applications, and prepare for each.</p>
            </div>
            <div className="page-body">
                <div className="empty-state-card">
                    <div className="empty-state-icon-wrap">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <rect x="10" y="16" width="12" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
                            <rect x="26" y="10" width="12" height="26" rx="2" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M16 20h0M16 24h0M16 28h0M16 32h0M32 14h0M32 18h0M32 22h0M32 26h0M32 30h0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                    </div>
                    <h3 className="empty-state-title">Company tracker coming soon</h3>
                    <p className="empty-state-text">
                        Add target companies, track application stages, and store interview notes.
                        This module will be activated next.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Companies
