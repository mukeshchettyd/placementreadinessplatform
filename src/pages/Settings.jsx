function Settings() {
    return (
        <div className="page-shell">
            <div className="page-header">
                <h1 className="page-title">Settings</h1>
                <p className="page-subtitle">Configure your profile, target role, and preparation goals.</p>
            </div>
            <div className="page-body">
                <div className="empty-state-card">
                    <div className="empty-state-icon-wrap">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M24 8v6M24 34v6M8 24h6M34 24h6M12 12l4.2 4.2M31.8 31.8l4.2 4.2M12 36l4.2-4.2M31.8 16.2l4.2-4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </div>
                    <h3 className="empty-state-title">Settings coming soon</h3>
                    <p className="empty-state-text">
                        Set your target role, experience level, preferred locations, and preparation timeline.
                        All preferences will persist in localStorage.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Settings
