
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../components/ui/Card'
import { Clock, Building2, Briefcase, ChevronRight, Trash2, Search } from 'lucide-react'

function History() {
    const navigate = useNavigate()
    const [history, setHistory] = useState([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('placement_history') || '[]')
        setHistory(saved)
    }, [])

    const handleItemClick = (entry) => {
        navigate('/results', { state: { entry } })
    }

    const deleteEntry = (e, id) => {
        e.stopPropagation()
        const updated = history.filter(item => item.id !== id)
        setHistory(updated)
        localStorage.setItem('placement_history', JSON.stringify(updated))
    }

    const formatDate = (isoString) => {
        const date = new Date(isoString)
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        })
    }

    return (
        <div className="max-w-5xl mx-auto">
            <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight mb-1">Analysis History</h1>
                    <p className="text-gray-500">View and revisit your past job descriptions and preparation plans.</p>
                </div>
                <button
                    onClick={() => navigate('/analyze')}
                    className="px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-bold rounded-lg transition-all flex items-center gap-2 shadow-sm"
                >
                    <Search className="w-4 h-4" /> New Analysis
                </button>
            </div>

            {history.length > 0 ? (
                <div className="grid gap-4">
                    {history.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => handleItemClick(item)}
                            className="group bg-white border border-gray-100 rounded-2xl p-5 hover:border-primary-200 hover:shadow-lg transition-all cursor-pointer flex items-center justify-between"
                        >
                            <div className="flex items-center gap-5 min-w-0">
                                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-500 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="text-lg font-bold text-gray-900 truncate">{item.company}</h3>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                                        <span className="text-sm text-gray-500 flex items-center gap-1.5 whitespace-nowrap">
                                            <Briefcase className="w-3.5 h-3.5" /> {item.role}
                                        </span>
                                        <span className="text-sm text-gray-400 flex items-center gap-1.5 whitespace-nowrap">
                                            <Clock className="w-3.5 h-3.5" /> {formatDate(item.createdAt)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="hidden sm:flex flex-col items-end">
                                    <span className="text-xl font-extrabold text-gray-900 leading-none">{item.readinessScore}</span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase mt-1">Score</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={(e) => deleteEntry(e, item.id)}
                                        className="p-2 text-gray-300 hover:text-red-500 rounded-lg hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary-500 transition-colors" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <Card className="border-dashed py-16">
                    <CardContent className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-300">
                            <Clock className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">No history yet</h3>
                        <p className="text-sm text-gray-500 max-w-xs mx-auto mt-2 mb-8">
                            Analyze your first job description to start building your preparation history.
                        </p>
                        <button
                            onClick={() => navigate('/analyze')}
                            className="px-8 py-3 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/20"
                        >
                            Analyze Now
                        </button>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}

export default History
