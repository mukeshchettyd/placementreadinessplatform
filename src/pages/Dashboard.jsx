import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
    ResponsiveContainer,
} from 'recharts'
import {
    CalendarDays, ChevronRight, Clock, Flame, Play, Target,
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../components/ui/Card'

/* ================================================================
   MOCK DATA
   ================================================================ */
const READINESS_SCORE = 72

const SKILL_DATA = [
    { subject: 'DSA', score: 75, fullMark: 100 },
    { subject: 'System Design', score: 60, fullMark: 100 },
    { subject: 'Communication', score: 80, fullMark: 100 },
    { subject: 'Resume', score: 85, fullMark: 100 },
    { subject: 'Aptitude', score: 70, fullMark: 100 },
]

const WEEKLY_GOAL = { solved: 12, target: 20 }

const ACTIVITY_DAYS = [
    { day: 'Mon', active: true },
    { day: 'Tue', active: true },
    { day: 'Wed', active: true },
    { day: 'Thu', active: false },
    { day: 'Fri', active: true },
    { day: 'Sat', active: false },
    { day: 'Sun', active: false },
]

const UPCOMING = [
    { title: 'DSA Mock Test', date: 'Tomorrow', time: '10:00 AM', accent: 'bg-primary-50 text-primary-500' },
    { title: 'System Design Review', date: 'Wed', time: '2:00 PM', accent: 'bg-emerald-50 text-emerald-500' },
    { title: 'HR Interview Prep', date: 'Friday', time: '11:00 AM', accent: 'bg-amber-50 text-amber-500' },
]

/* ================================================================
   CIRCULAR PROGRESS
   ================================================================ */
function CircularProgress({ value, size = 180, strokeWidth = 12 }) {
    const [offset, setOffset] = useState(283)

    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const targetOffset = circumference - (value / 100) * circumference

    useEffect(() => {
        const timer = setTimeout(() => setOffset(targetOffset), 100)
        return () => clearTimeout(timer)
    }, [targetOffset])

    return (
        <div className="relative inline-flex items-center justify-center">
            <svg width={size} height={size} className="-rotate-90">
                {/* Track */}
                <circle
                    cx={size / 2} cy={size / 2} r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    className="text-gray-100"
                />
                {/* Progress */}
                <circle
                    cx={size / 2} cy={size / 2} r={radius}
                    fill="none"
                    stroke="url(#progressGrad)"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{ transition: 'stroke-dashoffset 1.2s ease-in-out' }}
                />
                <defs>
                    <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(245, 58%, 51%)" />
                        <stop offset="100%" stopColor="hsl(275, 58%, 55%)" />
                    </linearGradient>
                </defs>
            </svg>
            {/* Center label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-extrabold text-gray-900 tracking-tight">{value}</span>
                <span className="text-xs text-gray-400 mt-1 font-medium">/ 100</span>
            </div>
        </div>
    )
}

/* ================================================================
   DASHBOARD PAGE
   ================================================================ */
function Dashboard() {
    return (
        <div className="max-w-6xl mx-auto">
            {/* Page heading */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight mb-1">Dashboard</h1>
                <p className="text-gray-500">Welcome back. Here's your preparation snapshot.</p>
            </div>

            {/* ── Grid ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* 1. OVERALL READINESS */}
                <Card id="card-readiness">
                    <CardHeader>
                        <CardTitle>Overall Readiness</CardTitle>
                        <CardDescription>Your placement readiness score</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center pt-6 pb-8">
                        <CircularProgress value={READINESS_SCORE} />
                        <p className="mt-4 text-sm font-medium text-gray-500">Readiness Score</p>
                    </CardContent>
                </Card>

                {/* 2. SKILL BREAKDOWN — Radar Chart */}
                <Card id="card-skills">
                    <CardHeader>
                        <CardTitle>Skill Breakdown</CardTitle>
                        <CardDescription>Performance across key areas</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-2">
                        <ResponsiveContainer width="100%" height={280}>
                            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILL_DATA}>
                                <PolarGrid stroke="#e5e7eb" />
                                <PolarAngleAxis
                                    dataKey="subject"
                                    tick={{ fontSize: 12, fill: '#6b7280', fontWeight: 500 }}
                                />
                                <PolarRadiusAxis
                                    angle={90}
                                    domain={[0, 100]}
                                    tick={false}
                                    axisLine={false}
                                />
                                <Radar
                                    name="Score"
                                    dataKey="score"
                                    stroke="hsl(245, 58%, 51%)"
                                    fill="hsl(245, 58%, 51%)"
                                    fillOpacity={0.15}
                                    strokeWidth={2}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* 3. CONTINUE PRACTICE */}
                <Card id="card-practice">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>Continue Practice</CardTitle>
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary-50 text-primary-600 text-xs font-semibold rounded-full">
                                <Flame className="w-3 h-3" /> In Progress
                            </span>
                        </div>
                    </CardHeader>
                    <CardContent className="pt-5">
                        <div className="mb-4">
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">Dynamic Programming</h4>
                            <p className="text-sm text-gray-400">3 of 10 problems completed</p>
                        </div>
                        {/* Progress bar */}
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-5">
                            <div
                                className="h-full rounded-full bg-primary-500 transition-all duration-500"
                                style={{ width: '30%' }}
                            />
                        </div>
                        <Link
                            to="/practice"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-lg transition-colors duration-150"
                            id="btn-continue-practice"
                        >
                            <Play className="w-4 h-4" /> Continue
                        </Link>
                    </CardContent>
                </Card>

                {/* 4. WEEKLY GOALS */}
                <Card id="card-weekly">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>Weekly Goals</CardTitle>
                            <span className="text-sm font-semibold text-primary-500">{WEEKLY_GOAL.solved}/{WEEKLY_GOAL.target}</span>
                        </div>
                        <CardDescription>Problems solved this week</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-5">
                        {/* Progress bar */}
                        <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden mb-6">
                            <div
                                className="h-full rounded-full bg-primary-500 transition-all duration-500"
                                style={{ width: `${(WEEKLY_GOAL.solved / WEEKLY_GOAL.target) * 100}%` }}
                            />
                        </div>

                        {/* Day circles */}
                        <div className="flex items-center justify-between">
                            {ACTIVITY_DAYS.map((d) => (
                                <div key={d.day} className="flex flex-col items-center gap-2">
                                    <div
                                        className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold transition-colors
                      ${d.active
                                                ? 'bg-primary-500 text-white shadow-md shadow-primary-500/25'
                                                : 'bg-gray-100 text-gray-400'
                                            }`}
                                    >
                                        {d.day[0]}
                                    </div>
                                    <span className="text-[10px] text-gray-400 font-medium">{d.day}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* 5. UPCOMING ASSESSMENTS */}
                <Card className="lg:col-span-2" id="card-upcoming">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>Upcoming Assessments</CardTitle>
                            <Link to="/assessments" className="inline-flex items-center gap-1 text-sm text-primary-500 hover:text-primary-600 font-medium transition-colors">
                                View all <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <CardDescription>Your scheduled tests and interviews</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {UPCOMING.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-primary-200 transition-all duration-150 hover:shadow-sm"
                                >
                                    <div className={`w-10 h-10 rounded-lg ${item.accent} flex items-center justify-center flex-shrink-0`}>
                                        <Target className="w-5 h-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="text-sm font-semibold text-gray-900 mb-1 truncate">{item.title}</h4>
                                        <div className="flex items-center gap-3 text-xs text-gray-400">
                                            <span className="inline-flex items-center gap-1">
                                                <CalendarDays className="w-3 h-3" /> {item.date}
                                            </span>
                                            <span className="inline-flex items-center gap-1">
                                                <Clock className="w-3 h-3" /> {item.time}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Dashboard
