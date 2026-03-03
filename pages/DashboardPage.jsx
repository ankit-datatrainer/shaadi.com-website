import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function DashboardPage() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('matches');

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const matches = [
        { id: 1, name: 'Priya Sharma', age: 26, location: 'Mumbai', education: 'MBA', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b593a4?w=150&h=150&fit=crop', match: 92 },
        { id: 2, name: 'Anjali Patel', age: 25, location: 'Delhi', education: 'B.Tech', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d35?w=150&h=150&fit=crop', match: 88 },
        { id: 3, name: 'Neha Gupta', age: 27, location: 'Bangalore', education: 'MBBS', image: 'https://images.unsplash.com/photo-1489424731084-a5d82b5ab2a1?w=150&h=150&fit=crop', match: 85 },
        { id: 4, name: 'Pooja Reddy', age: 24, location: 'Hyderabad', education: 'M.Tech', image: 'https://images.unsplash.com/photo-1487412729225-b1ba1d9a6c29?w=150&h=150&fit=crop', match: 82 },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link to="/" className="flex items-center">
                            <span className="text-2xl font-bold">
                                <span className="text-pink-600">shaadi</span>
                                <span className="text-gray-700">.com</span>
                            </span>
                        </Link>

                        <nav className="hidden md:flex items-center gap-6">
                            <button
                                onClick={() => setActiveTab('matches')}
                                className={`text-sm font-medium ${activeTab === 'matches' ? 'text-pink-600' : 'text-gray-600 hover:text-pink-600'} transition`}
                            >
                                My Matches
                            </button>
                            <button
                                onClick={() => setActiveTab('inbox')}
                                className={`text-sm font-medium ${activeTab === 'inbox' ? 'text-pink-600' : 'text-gray-600 hover:text-pink-600'} transition`}
                            >
                                Inbox
                            </button>
                            <button
                                onClick={() => setActiveTab('profile')}
                                className={`text-sm font-medium ${activeTab === 'profile' ? 'text-pink-600' : 'text-gray-600 hover:text-pink-600'} transition`}
                            >
                                My Profile
                            </button>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                                    <span className="text-pink-600 font-bold text-sm">
                                        {user?.name?.charAt(0) || 'U'}
                                    </span>
                                </div>
                                <span className="text-sm font-medium text-gray-700 hidden sm:block">
                                    {user?.name || 'User'}
                                </span>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="text-gray-600 hover:text-pink-600 text-sm font-medium"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Welcome Banner */}
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-6 sm:p-8 text-white mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                        Welcome, {user?.name || 'User'}!
                    </h1>
                    <p className="text-pink-100">
                        Start your journey to find your perfect match
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <p className="text-2xl font-bold text-pink-600">24</p>
                        <p className="text-sm text-gray-600">Profile Views</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <p className="text-2xl font-bold text-pink-600">12</p>
                        <p className="text-sm text-gray-600">New Matches</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <p className="text-2xl font-bold text-pink-600">8</p>
                        <p className="text-sm text-gray-600">Interests Received</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <p className="text-2xl font-bold text-pink-600">5</p>
                        <p className="text-sm text-gray-600">Messages</p>
                    </div>
                </div>

                {/* Matches Section */}
                {activeTab === 'matches' && (
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">Your Matches</h2>
                            <button className="text-pink-600 text-sm font-medium hover:text-pink-700">
                                View All
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {matches.map((match) => (
                                <div key={match.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition group">
                                    <div className="relative">
                                        <img
                                            src={match.image}
                                            alt={match.name}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                                        />
                                        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                            {match.match}% Match
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-gray-900">{match.name}</h3>
                                        <p className="text-sm text-gray-600">{match.age} yrs, {match.location}</p>
                                        <p className="text-sm text-gray-500">{match.education}</p>
                                        <div className="flex gap-2 mt-4">
                                            <button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium py-2 rounded-lg transition">
                                                Connect
                                            </button>
                                            <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Inbox Section */}
                {activeTab === 'inbox' && (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="p-6 border-b border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900">Inbox</h2>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="p-4 hover:bg-gray-50 transition cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={`https://images.unsplash.com/photo-${1494790108377 + i * 1000}?w=50&h=50&fit=crop`}
                                            alt="User"
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div className="flex-1">
                                            <p className="font-medium text-gray-900">Priya Sharma</p>
                                            <p className="text-sm text-gray-500 truncate">Hi! I liked your profile and would like to connect...</p>
                                        </div>
                                        <span className="text-xs text-gray-400">2h ago</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Profile Section */}
                {activeTab === 'profile' && (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">My Profile</h2>
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center">
                                <span className="text-3xl font-bold text-pink-600">
                                    {user?.name?.charAt(0) || 'U'}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">{user?.name || 'User'}</h3>
                                <p className="text-gray-600">{user?.email || 'user@example.com'}</p>
                                <button className="mt-2 text-pink-600 text-sm font-medium hover:text-pink-700">
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Profile For</label>
                                <p className="text-gray-900">Myself</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                                <p className="text-gray-900">28 years</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Religion</label>
                                <p className="text-gray-900">Hindu</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                <p className="text-gray-900">Mumbai, India</p>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
