import { Code2 } from 'lucide-react'

function Practice() {
    return (
        <div className="max-w-5xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight mb-1">Practice</h1>
                <p className="text-gray-500">Sharpen your skills with curated coding challenges.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-400 flex items-center justify-center mx-auto mb-5">
                    <Code2 className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice module coming soon</h3>
                <p className="text-sm text-gray-400 max-w-sm mx-auto leading-relaxed">
                    Curated DSA problems, aptitude drills, and coding exercises will appear here. Stay tuned.
                </p>
            </div>
        </div>
    )
}

export default Practice
