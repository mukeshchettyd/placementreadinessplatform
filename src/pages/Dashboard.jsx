import { Code2, BarChart3, Target, Clock, TrendingUp } from 'lucide-react'

const stats = [
    { label: 'Problems Solved', value: '0', icon: Code2, color: 'bg-primary-50 text-primary-500' },
    { label: 'Mock Interviews', value: '0', icon: Target, color: 'bg-emerald-50 text-emerald-500' },
    { label: 'Hours Practiced', value: '0', icon: Clock, color: 'bg-amber-50 text-amber-500' },
    { label: 'Streak Days', value: '0', icon: TrendingUp, color: 'bg-rose-50 text-rose-500' },
]

function Dashboard() {
    return (
        <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight mb-1">Dashboard</h1>
                <p className="text-gray-500">Welcome back. Here's your preparation overview.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-5 hover:border-gray-200 transition-colors">
                        <div className="flex items-center justify-between mb-3">
                            <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                                <stat.icon className="w-5 h-5" />
                            </div>
                        </div>
                        <p className="text-2xl font-bold text-gray-900 mb-0.5">{stat.value}</p>
                        <p className="text-sm text-gray-400">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <BarChart3 className="w-5 h-5 text-primary-500" />
                    <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <a href="/placementreadinessplatform/practice" className="flex items-center gap-3 p-4 rounded-lg border border-gray-100 hover:border-primary-200 hover:bg-primary-50/50 transition-all group">
                        <Code2 className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
                        <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors">Start Practice</span>
                    </a>
                    <a href="/placementreadinessplatform/assessments" className="flex items-center gap-3 p-4 rounded-lg border border-gray-100 hover:border-primary-200 hover:bg-primary-50/50 transition-all group">
                        <Target className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
                        <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors">Take Assessment</span>
                    </a>
                    <a href="/placementreadinessplatform/resources" className="flex items-center gap-3 p-4 rounded-lg border border-gray-100 hover:border-primary-200 hover:bg-primary-50/50 transition-all group">
                        <BarChart3 className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
                        <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors">View Resources</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
