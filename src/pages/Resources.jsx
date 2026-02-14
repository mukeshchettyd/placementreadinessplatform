import { BookOpen } from 'lucide-react'

function Resources() {
    return (
        <div className="max-w-5xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight mb-1">Resources</h1>
                <p className="text-gray-500">Curated learning materials, guides, and reference documents.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-400 flex items-center justify-center mx-auto mb-5">
                    <BookOpen className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Resources coming soon</h3>
                <p className="text-sm text-gray-400 max-w-sm mx-auto leading-relaxed">
                    Study guides, interview prep cheat sheets, and curated video playlists will be available here.
                </p>
            </div>
        </div>
    )
}

export default Resources
