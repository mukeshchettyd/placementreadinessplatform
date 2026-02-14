import { Link } from 'react-router-dom'
import { Code2, Video, BarChart3, Sparkles, Target, BookOpen } from 'lucide-react'

const features = [
    {
        icon: Code2,
        title: 'Practice Problems',
        desc: 'Curated coding challenges across DSA, aptitude, and system design.',
    },
    {
        icon: Video,
        title: 'Mock Interviews',
        desc: 'Simulate real interviews with timed sessions and structured feedback.',
    },
    {
        icon: BarChart3,
        title: 'Track Progress',
        desc: 'Visualize your growth with detailed analytics and streak tracking.',
    },
]

function Landing() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* ── Navbar ── */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-lg font-bold text-gray-900 tracking-tight">Placement Prep</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-8">
                        <a href="#features" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Features</a>
                        <Link to="/dashboard" className="text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-lg transition-colors">
                            Get Started
                        </Link>
                    </div>
                </div>
            </nav>

            {/* ── Hero ── */}
            <section className="flex-1 flex items-center justify-center px-6 py-24 sm:py-32">
                <div className="max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wider mb-8">
                        <Target className="w-3.5 h-3.5" />
                        Placement Readiness Platform
                    </div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
                        Ace Your<br />
                        <span className="text-primary-500">Placement</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
                        Practice, assess, and prepare for your dream job — with structured modules,
                        real-time progress tracking, and focused preparation.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/dashboard"
                            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5"
                            id="cta-get-started"
                        >
                            Get Started
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                        <a href="#features" className="inline-flex items-center gap-2 px-8 py-3.5 border border-gray-200 hover:border-gray-300 text-gray-700 font-medium rounded-xl transition-all duration-200 hover:bg-gray-50">
                            <BookOpen className="w-4 h-4" />
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Features ── */}
            <section id="features" className="px-6 py-24 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-3">Everything you need</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Prepare smarter, not harder</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feat) => (
                            <div
                                key={feat.title}
                                className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-primary-200 transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/5"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-500 flex items-center justify-center mb-5 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-200">
                                    <feat.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feat.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Footer ── */}
            <footer className="px-6 py-8 border-t border-gray-100 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-primary-500 flex items-center justify-center">
                            <Sparkles className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-gray-900">Placement Prep</span>
                    </div>
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Placement Readiness Platform. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Landing
