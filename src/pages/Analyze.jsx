
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../components/ui/Card'
import { Search, Building2, Briefcase, FileText, Sparkles } from 'lucide-react'
import { extractSkills, calculateReadinessScore, generateChecklist, generatePlan, generateQuestions } from '../utils/analysis'

function Analyze() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        company: '',
        role: '',
        jdText: ''
    })
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        // Simulate analysis delay
        setTimeout(() => {
            const detectedSkills = extractSkills(formData.jdText)
            const readinessScore = calculateReadinessScore({ ...formData, detectedSkills })
            const checklist = generateChecklist(detectedSkills)
            const plan = generatePlan(detectedSkills)
            const questions = generateQuestions(detectedSkills)

            const entry = {
                id: Date.now().toString(),
                createdAt: new Date().toISOString(),
                ...formData,
                extractedSkills: detectedSkills,
                readinessScore,
                checklist,
                plan,
                questions
            }

            // Save to history
            const history = JSON.parse(localStorage.getItem('placement_history') || '[]')
            history.unshift(entry)
            localStorage.setItem('placement_history', JSON.stringify(history))

            // Save as latest analysis for results page
            localStorage.setItem('latest_analysis', JSON.stringify(entry))

            setLoading(false)
            navigate('/results')
        }, 1500)
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight mb-1">Analyze Job Description</h1>
                <p className="text-gray-500">Extract key skills and generate a personalized preparation plan.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Analysis Input</CardTitle>
                    <CardDescription>Enter the job details to get started.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                    <Building2 className="w-4 h-4 text-primary-500" /> Company Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Google, McKinsey, Stripe"
                                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                    <Briefcase className="w-4 h-4 text-primary-500" /> Job Role
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Full Stack Developer, Data Analyst"
                                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                                    value={formData.role}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <FileText className="w-4 h-4 text-primary-500" /> Job Description
                            </label>
                            <textarea
                                required
                                rows={10}
                                placeholder="Paste the full job description here..."
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none"
                                value={formData.jdText}
                                onChange={(e) => setFormData({ ...formData, jdText: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`
                w-full py-3.5 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2
                ${loading
                                    ? 'bg-primary-300 cursor-not-allowed'
                                    : 'bg-primary-500 hover:bg-primary-600 shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 active:scale-[0.98]'
                                }
              `}
                        >
                            {loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Analyzing Skills...
                                </>
                            ) : (
                                <>
                                    <Sparkles className="w-5 h-5" />
                                    Start Analysis
                                </>
                            )}
                        </button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Analyze
