
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../components/ui/Card'
import {
    CheckCircle2, Calendar, HelpCircle, ArrowLeft, Trophy,
    ChevronRight, Brain, Briefcase, Building2, Tag
} from 'lucide-react'

function Results() {
    const location = useLocation()
    const [data, setData] = useState(null)

    useEffect(() => {
        // If we passed state (from history click), use that.
        // Otherwise, use the latest_analysis from localStorage.
        if (location.state && location.state.entry) {
            setData(location.state.entry)
        } else {
            const latest = localStorage.getItem('latest_analysis')
            if (latest) {
                setData(JSON.parse(latest))
            }
        }
    }, [location])

    if (!data) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Brain className="w-8 h-8 text-gray-400" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">No analysis found</h2>
                <p className="text-gray-500 mb-6">Start by analyzing a job description to see your results.</p>
                <Link to="/analyze" className="px-6 py-2.5 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors">
                    Go to Analyze
                </Link>
            </div>
        )
    }

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <Link to="/history" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary-500 font-medium mb-4 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to History
                    </Link>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-500 flex items-center justify-center">
                            <Building2 className="w-5 h-5" />
                        </div>
                        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">{data.company}</h1>
                    </div>
                    <p className="text-gray-500 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" /> {data.role}
                    </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center gap-6 shadow-sm">
                    <div className="relative inline-flex items-center justify-center">
                        <svg width="80" height="80" className="-rotate-90">
                            <circle cx="40" cy="40" r="34" fill="none" stroke="#f1f5f9" strokeWidth="6" />
                            <circle
                                cx="40" cy="40" r="34" fill="none" stroke="currentColor" strokeWidth="6"
                                strokeLinecap="round"
                                className="text-primary-500"
                                strokeDasharray={213.6}
                                strokeDashoffset={213.6 - (data.readinessScore / 100) * 213.6}
                                style={{ transition: 'stroke-dashoffset 1s ease' }}
                            />
                        </svg>
                        <span className="absolute text-xl font-bold text-gray-900">{data.readinessScore}</span>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-900">Readiness Score</p>
                        <p className="text-xs text-gray-400 mt-0.5">Based on skill match & JD detail</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Skills & Checklist */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Extracted Skills */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Tag className="w-5 h-5 text-primary-500" /> Extracted Skills
                            </CardTitle>
                            <CardDescription>Key competencies detected from the job description.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {Object.keys(data.extractedSkills).length > 0 ? (
                                <div className="space-y-6">
                                    {Object.entries(data.extractedSkills).map(([cat, skills]) => (
                                        <div key={cat}>
                                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">{cat}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {skills.map(skill => (
                                                    <span key={skill} className="px-3 py-1.5 bg-gray-50 border border-gray-100 text-gray-700 text-sm font-medium rounded-lg">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="py-4 text-center bg-gray-50 rounded-xl border border-dashed border-gray-200">
                                    <span className="text-sm text-gray-500 font-medium">General fresher stack</span>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Round-wise Checklist */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Preparation Checklist
                            </CardTitle>
                            <CardDescription>Tailored checklist for each interview round.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {data.checklist.map((round, idx) => (
                                    <div key={idx} className="space-y-3">
                                        <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                                            <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-[10px]">{idx + 1}</span>
                                            {round.title}
                                        </h4>
                                        <ul className="space-y-2">
                                            {round.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 p-3 bg-white border border-gray-50 rounded-xl shadow-sm">
                                                    <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                                                    <span className="text-sm text-gray-600 leading-tight">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column: Plan & Questions */}
                <div className="space-y-8">

                    {/* 7-Day Plan */}
                    <Card className="bg-primary-900 border-none text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 rounded-full -mr-16 -mt-16 blur-3xl" />
                        <CardHeader>
                            <CardTitle className="text-white flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-primary-300" /> 7-Day Plan
                            </CardTitle>
                            <CardDescription className="text-primary-200/60">Accelerated preparation strategy.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {data.plan.map((day, idx) => (
                                    <div key={idx} className="group relative pl-10">
                                        <div className="absolute left-0 top-0 bottom-0 w-px bg-primary-700/50 ml-[7px]" />
                                        <div className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-primary-900 z-10 ${idx === 0 ? 'bg-primary-400' : 'bg-primary-700'}`} />
                                        <div>
                                            <span className="text-[10px] font-bold text-primary-400 uppercase tracking-widest">{day.day}</span>
                                            <h4 className="text-sm font-semibold text-white mt-0.5">{day.title}</h4>
                                            <p className="text-xs text-primary-200/70 mt-1 leading-relaxed">{day.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Likely Questions */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <HelpCircle className="w-5 h-5 text-amber-500" /> Likely Questions
                            </CardTitle>
                            <CardDescription>Based on detected skills and role context.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {data.questions.map((q, idx) => (
                                    <div key={idx} className="p-4 rounded-xl border border-gray-100 hover:border-amber-100 bg-gray-50/50 transition-all group">
                                        <p className="text-sm text-gray-700 font-medium leading-relaxed group-hover:text-gray-900">
                                            <span className="text-amber-500 font-bold mr-2">Q{idx + 1}.</span> {q}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Results
