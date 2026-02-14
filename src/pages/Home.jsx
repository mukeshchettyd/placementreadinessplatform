import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="landing" id="landing-page">
            <div className="landing-content">
                <span className="landing-eyebrow">Placement Readiness Platform</span>
                <h1 className="landing-headline">Prepare with precision. Land with confidence.</h1>
                <p className="landing-subtext">
                    Track your progress, practice consistently, research companies, and
                    build a polished resume — all in one calm, focused workspace.
                </p>
                <Link to="/dashboard" className="btn btn-primary landing-cta" id="cta-start">
                    Start Preparing
                </Link>

                <div className="landing-stats">
                    <div className="landing-stat">
                        <span className="landing-stat-number">5</span>
                        <span className="landing-stat-label">Modules</span>
                    </div>
                    <div className="landing-stat-divider"></div>
                    <div className="landing-stat">
                        <span className="landing-stat-number">50+</span>
                        <span className="landing-stat-label">Practice Items</span>
                    </div>
                    <div className="landing-stat-divider"></div>
                    <div className="landing-stat">
                        <span className="landing-stat-number">∞</span>
                        <span className="landing-stat-label">Attempts</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
