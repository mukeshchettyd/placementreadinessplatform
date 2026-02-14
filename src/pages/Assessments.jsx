import { ClipboardCheck } from 'lucide-react'

function Assessments() {
    return (
        <div className="max-w-5xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight mb-1">Assessments</h1>
                <p className="text-gray-500">Test your knowledge with timed assessments and mock interviews.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-400 flex items-center justify-center mx-auto mb-5">
                    <ClipboardCheck className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessments coming soon</h3>
                <p className="text-sm text-gray-400 max-w-sm mx-auto leading-relaxed">
                    Timed coding challenges, aptitude tests, and mock interview simulations are on the way.
                </p>
            </div>
        </div>
    )
}

export default Assessments
