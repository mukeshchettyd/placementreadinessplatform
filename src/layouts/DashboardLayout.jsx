import { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import {
    LayoutDashboard,
    Code2,
    ClipboardCheck,
    BookOpen,
    User,
    Sparkles,
    Menu,
    X,
} from 'lucide-react'

const sidebarLinks = [
    { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/practice', label: 'Practice', icon: Code2 },
    { to: '/assessments', label: 'Assessments', icon: ClipboardCheck },
    { to: '/resources', label: 'Resources', icon: BookOpen },
    { to: '/profile', label: 'Profile', icon: User },
]

function DashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* ── Mobile overlay ── */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* ── Sidebar ── */}
            <aside
                className={`
          fixed lg:sticky top-0 left-0 z-50 h-screen w-64 bg-white border-r border-gray-100
          flex flex-col transition-transform duration-200 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
            >
                {/* Brand */}
                <div className="h-16 px-6 flex items-center justify-between border-b border-gray-100">
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-base font-bold text-gray-900 tracking-tight">Placement Prep</span>
                    </div>
                    <button
                        className="lg:hidden p-1 text-gray-400 hover:text-gray-600"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Nav */}
                <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
                    {sidebarLinks.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            onClick={() => setSidebarOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ${isActive
                                    ? 'bg-primary-50 text-primary-600'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                }`
                            }
                        >
                            <item.icon className="w-5 h-5 flex-shrink-0" />
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Bottom */}
                <div className="p-4 border-t border-gray-100">
                    <div className="bg-primary-50 rounded-xl p-4">
                        <p className="text-xs font-semibold text-primary-700 mb-1">Pro Tip</p>
                        <p className="text-xs text-primary-600/70 leading-relaxed">
                            Consistent daily practice is more effective than long cram sessions.
                        </p>
                    </div>
                </div>
            </aside>

            {/* ── Main ── */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Header */}
                <header className="sticky top-0 z-30 h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button
                            className="lg:hidden p-2 -ml-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                        <h1 className="text-base font-semibold text-gray-900">Placement Prep</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center" id="user-avatar">
                            <User className="w-4 h-4 text-primary-600" />
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout
