import { User } from 'lucide-react'

function Profile() {
    return (
        <div className="max-w-5xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight mb-1">Profile</h1>
                <p className="text-gray-500">Manage your account, preferences, and preparation goals.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-400 flex items-center justify-center mx-auto mb-5">
                    <User className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Profile settings coming soon</h3>
                <p className="text-sm text-gray-400 max-w-sm mx-auto leading-relaxed">
                    Set your target role, experience level, and preparation timeline here.
                </p>
            </div>
        </div>
    )
}

export default Profile
