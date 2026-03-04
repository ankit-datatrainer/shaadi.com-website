import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CoupleReviews from "../components/CoupleReviews";

const HomePage = () => {
    const navigate = useNavigate();
    const [expandedFAQ, setExpandedFAQ] = useState(null);
    const [loginDropdown, setLoginDropdown] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Registration form state
    const [formData, setFormData] = useState({
        profileFor: "Myself",
        gender: "Male",
        name: "",
        religion: "",
        motherTongue: "",
        country: "",
        phone: "",
        email: "",
        password: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const faqData = [
        {
            id: 1,
            question: "Why is Shaadi.com better compared to other matrimonial websites?",
            answer: "Shaadi.com stands out as India's leading matchmaking platform with over 80 Lakh success stories. We offer verified profiles, personalized matchmaking services, and advanced search tools that help you find compatible partners with ease and confidence."
        },
        {
            id: 2,
            question: "Is Shaadi.com a trustworthy matchmaking platform?",
            answer: "Yes, Shaadi.com is highly trustworthy with rigorous profile verification, robust security measures, and millions of success stories. We ensure a safe and reliable experience for all our users."
        },
        {
            id: 3,
            question: "What is the difference between free membership vs paid membership?",
            answer: "Free Membership allows you to create a profile and browse. Paid membership enables messaging, advanced search filters, priority support, and access to contact information of interested members."
        },
        {
            id: 4,
            question: "What additional benefits do I get as a Premium Member?",
            answer: "Premium members get message initiation, advanced search filters, priority customer support, profile boosts, and access to contact information for better matchmaking."
        },
        {
            id: 5,
            question: "How can I contact other members on Shaadi.com?",
            answer: "With premium membership, you can chat and video call on the app, and get contact details for interested members to take conversations forward."
        }
    ];

    const successStories = [
        {
            id: 1,
            names: "Ajinkya & Ashwini",
            story: "Thank you Shaadi.com! I found my soulmate here. After chatting, we involved our families—now we're happily engaged as of 9th May 2025!",
            location: "Mumbai, Maharashtra"
        },
        {
            id: 2,
            names: "Rahul & Priya",
            story: "We connected on Shaadi.com and instantly knew there was something special. The platform made it so easy to find someone who shares our values.",
            location: "Delhi"
        },
        {
            id: 3,
            names: "Vikram & Sneha",
            story: "After years of searching, I finally found my perfect match on Shaadi.com. The verification process gave us confidence to connect.",
            location: "Bangalore, Karnataka"
        }
    ];

    const communities = [
        "Rajput", "Maratha", "Yadav", "Agarwal", "Brahmin", "Reddy", "Kapu", "Jat",
        "Kshatriya", "Kayastha", "Kurmi", "Lingayat", "Nair", "Patel", "Sharma", "Singh"
    ];

    const religions = [
        "Hindu", "Muslim", "Christian", "Sikh", "Buddhist", "Jain", "Other"
    ];

    const motherTongues = [
        "Hindi", "Marathi", "Tamil", "Telugu", "Kannada", "Malayalam", "Bengali", "Gujarati", "Punjabi", "Urdu"
    ];

    const countries = [
        "India", "USA", "UK", "Canada", "Australia", "UAE", "Singapore", "Other"
    ];

    return (
        <div className="w-full min-h-screen bg-white">
            {/* ===== HEADER ===== */}
            <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center">
                                <span className="text-2xl sm:text-3xl font-bold">
                                    <span className="text-pink-600">shaadi</span>
                                    <span className="text-gray-700">.com</span>
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-6">
                            <a href="#about" className="text-gray-600 hover:text-pink-600 font-medium text-sm transition">
                                About Us
                            </a>
                            <a href="#help" className="text-gray-600 hover:text-pink-600 font-medium text-sm transition">
                                Help
                            </a>
                            <div className="relative">
                                <button
                                    onClick={() => setLoginDropdown(!loginDropdown)}
                                    className="text-gray-600 hover:text-pink-600 font-medium text-sm flex items-center gap-1 transition"
                                >
                                    Login
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {loginDropdown && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                                        <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition text-sm">
                                            Member Login
                                        </Link>
                                        <hr className="my-1" />
                                        <Link to="/register" className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition text-sm">
                                            Register Free
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <Link to="/register" className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-5 py-2 rounded-full text-sm transition">
                                Register Free
                            </Link>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-gray-700 hover:text-pink-600 p-2"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden bg-white border-t border-gray-100 py-4">
                            <div className="flex flex-col gap-3">
                                <a href="#about" className="text-gray-600 hover:text-pink-600 font-medium text-sm px-4 py-2">About Us</a>
                                <a href="#help" className="text-gray-600 hover:text-pink-600 font-medium text-sm px-4 py-2">Help</a>
                                <Link to="/login" className="text-gray-600 hover:text-pink-600 font-medium text-sm px-4 py-2">Login</Link>
                                <Link to="/register" className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-5 py-2 rounded-full text-sm mx-4 text-center">
                                    Register Free
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* ===== HERO SECTION WITH REGISTRATION FORM ===== */}
            <section className="w-full bg-gradient-to-br from-pink-50 via-white to-purple-50 py-8 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* Left Content */}
                        <div className="flex flex-col justify-center order-2 lg:order-1">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                                India's No.1 Matrimony & Matchmaking Service
                            </h1>
                            <p className="text-lg text-gray-600 mb-6">
                                Trusted by millions for over 2 decades. Find your perfect life partner with India's most trusted matchmaking platform.
                            </p>

                            {/* Trust Indicators */}
                            <div className="flex flex-wrap gap-4 mb-6">
                                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                                    <span className="text-green-500 text-xl">✓</span>
                                    <span className="text-sm text-gray-700">35+ Lakh Verified Profiles</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                                    <span className="text-green-500 text-xl">✓</span>
                                    <span className="text-sm text-gray-700">80 Lakh+ Success Stories</span>
                                </div>
                            </div>

                            {/* Couple Image */}
                            <div className="relative mt-4 hidden lg:block">
                                <img
                                    src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop"
                                    alt="Happy Couple"
                                    className="w-full max-w-md rounded-2xl shadow-xl"
                                />
                                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <span className="text-yellow-400 text-2xl">★★★★★</span>
                                        <span className="text-sm text-gray-600">4.5/5 on Play Store</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right - Registration Form */}
                        <div className="order-1 lg:order-2">
                            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Register for FREE</h2>
                                <p className="text-gray-600 mb-6">Find your perfect match today!</p>

                                <form className="space-y-4">
                                    {/* Profile For */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Profile For</label>
                                        <select
                                            name="profileFor"
                                            value={formData.profileFor}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
                                        >
                                            <option>Myself</option>
                                            <option>Son</option>
                                            <option>Daughter</option>
                                            <option>Brother</option>
                                            <option>Sister</option>
                                            <option>Friend</option>
                                            <option>Relative</option>
                                        </select>
                                    </div>

                                    {/* Gender */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                                        <div className="flex gap-4">
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value="Male"
                                                    checked={formData.gender === "Male"}
                                                    onChange={handleInputChange}
                                                    className="w-4 h-4 text-pink-600"
                                                />
                                                <span className="text-sm text-gray-700">Male</span>
                                            </label>
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value="Female"
                                                    checked={formData.gender === "Female"}
                                                    onChange={handleInputChange}
                                                    className="w-4 h-4 text-pink-600"
                                                />
                                                <span className="text-sm text-gray-700">Female</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Enter your name"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
                                        />
                                    </div>

                                    {/* Religion */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Religion</label>
                                        <select
                                            name="religion"
                                            value={formData.religion}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
                                        >
                                            <option value="">Select Religion</option>
                                            {religions.map((rel, idx) => (
                                                <option key={idx} value={rel}>{rel}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Mother Tongue */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Mother Tongue</label>
                                        <select
                                            name="motherTongue"
                                            value={formData.motherTongue}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
                                        >
                                            <option value="">Select Mother Tongue</option>
                                            {motherTongues.map((mt, idx) => (
                                                <option key={idx} value={mt}>{mt}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Country */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                                        <select
                                            name="country"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
                                        >
                                            <option value="">Select Country</option>
                                            {countries.map((ctry, idx) => (
                                                <option key={idx} value={ctry}>{ctry}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-4 py-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 text-sm text-gray-600">
                                                +91
                                            </span>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="Enter mobile number"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Enter your email"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
                                        />
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            placeholder="Create a password"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="button"
                                        onClick={() => navigate('/register')}
                                        className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-lg transition text-lg"
                                    >
                                        Register Free
                                    </button>

                                    {/* Terms */}
                                    <p className="text-xs text-gray-500 text-center">
                                        By registering, you agree to our{' '}
                                        <a href="#" className="text-pink-600 hover:underline">Terms of Service</a>
                                        {' '}and{' '}
                                        <a href="#" className="text-pink-600 hover:underline">Privacy Policy</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== STATS BAR ===== */}
            <section className="w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold">80 Lakh+</h3>
                            <p className="text-pink-100 text-sm mt-1">Success Stories</p>
                        </div>
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold">35 Lakh+</h3>
                            <p className="text-pink-100 text-sm mt-1">Verified Profiles</p>
                        </div>
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold">25+ Years</h3>
                            <p className="text-pink-100 text-sm mt-1">Of Trust</p>
                        </div>
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold">4.5 ★</h3>
                            <p className="text-pink-100 text-sm mt-1">App Rating</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== THE SHAADI EXPERIENCE ===== */}
            <section className="w-full py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Why Choose Shaadi.com?
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            India's most trusted matrimonial platform with features designed for your perfect match
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Feature 1 */}
                        <div className="group bg-gradient-to-br from-pink-50 to-white p-6 rounded-2xl border border-pink-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink-200 transition">
                                <svg className="w-7 h-7 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Profiles</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                100% verified profiles with ID proof verification for authentic connections
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="group bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
                                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">30 Day Guarantee</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Get matched within 30 days or get your money back - guaranteed!
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="group bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition">
                                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">AI Powered</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Smart AI algorithms to find your most compatible matches
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="group bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition">
                                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Privacy Control</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Complete control over your profile visibility and contact information
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== VIP SHAADI ===== */}
            <section className="w-full py-16 md:py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block bg-yellow-500 text-purple-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
                                PREMIUM SERVICE
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                                VIP Shaadi
                            </h2>
                            <p className="text-lg text-purple-100 mb-6 leading-relaxed">
                                Experience the world of elite personalized matchmaking with our dedicated team of relationship experts. Get exclusive access to high-profile matches and personalized assistance.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <span className="text-yellow-400">✓</span>
                                    <span>Personal Matchmaking Manager</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-yellow-400">✓</span>
                                    <span>Priority Profile Listing</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-yellow-400">✓</span>
                                    <span>Exclusive VIP Events</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-yellow-400">✓</span>
                                    <span>Background Verification</span>
                                </li>
                            </ul>
                            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 font-bold px-8 py-4 rounded-full hover:shadow-lg transition transform hover:scale-105">
                                Get Free Consultation
                            </button>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/20">
                            <p className="text-xl text-white mb-8 italic leading-relaxed">
                                "At Shaadi.com, it is our life's mission to use technology for good and bring back deep and meaningful relationships."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold">
                                    AM
                                </div>
                                <div>
                                    <p className="text-xl font-bold">Anupam Mittal</p>
                                    <p className="text-purple-200 text-sm">Founder & CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SUCCESS STORIES ===== */}
            <section className="w-full py-16 md:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Real Stories, True Connections
                        </h2>
                        <p className="text-gray-600 text-lg">Discover how Shaadi has brought couples together</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {successStories.map((story) => (
                            <div key={story.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
                                <div className="h-48 bg-gradient-to-br from-pink-300 to-purple-400 relative overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=200&fit=crop"
                                        alt={story.names}
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <p className="font-bold text-lg">{story.names}</p>
                                        <p className="text-sm opacity-90">{story.location}</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        "{story.story}"
                                    </p>
                                    <button className="text-pink-600 font-medium text-sm hover:text-pink-700 transition flex items-center gap-1">
                                        Read Full Story
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="bg-gray-900 text-white font-bold px-10 py-4 rounded-full hover:bg-gray-800 transition shadow-lg">
                            Explore More Success Stories
                        </button>
                    </div>
                </div>
            </section>

            {/* ===== EXPLORE BY COMMUNITY ===== */}
            <section className="w-full py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Explore By Community
                        </h2>
                        <p className="text-gray-600 text-lg">Find matches from your community</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {communities.map((community, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="bg-gradient-to-br from-pink-50 to-orange-50 hover:from-pink-100 hover:to-orange-100 rounded-xl p-4 text-center font-medium text-gray-800 border border-gray-200 hover:border-pink-300 transition transform hover:scale-105 hover:shadow-md"
                            >
                                {community} Matrimony
                            </a>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <a href="#" className="text-pink-600 font-medium hover:text-pink-700 transition">
                            View All Communities →
                        </a>
                    </div>
                </div>
            </section>

            {/* ===== COUPLE REVIEWS ===== */}
            <CoupleReviews />

            {/* ===== APP DOWNLOAD SECTION ===== */}
            <section className="w-full py-16 md:py-24 bg-gradient-to-br from-pink-500 to-purple-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                                Download the Shaadi App
                            </h2>
                            <p className="text-lg text-pink-100 mb-8 leading-relaxed">
                                Find your perfect match on the go! Get instant notifications, chat with matches, and manage your profile from anywhere.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="#" className="bg-black hover:bg-gray-900 px-6 py-3 rounded-xl flex items-center gap-3 transition">
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                    </svg>
                                    <div className="text-left">
                                        <p className="text-xs opacity-80">Download on the</p>
                                        <p className="font-bold">App Store</p>
                                    </div>
                                </a>
                                <a href="#" className="bg-black hover:bg-gray-900 px-6 py-3 rounded-xl flex items-center gap-3 transition">
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                                    </svg>
                                    <div className="text-left">
                                        <p className="text-xs opacity-80">GET IT ON</p>
                                        <p className="font-bold">Google Play</p>
                                    </div>
                                </a>
                            </div>
                            <div className="mt-8 flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <span className="text-yellow-300 text-xl">★★★★★</span>
                                </div>
                                <span className="text-sm text-pink-100">4.5 Rating • 2.4 Lakh+ Reviews</span>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="w-64 h-[500px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=500&fit=crop"
                                            alt="App Preview"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FAQ SECTION ===== */}
            <section className="w-full py-16 md:py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600 text-lg">Got questions? We've got answers</p>
                    </div>

                    <div className="space-y-4">
                        {faqData.map((faq) => (
                            <div key={faq.id} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-pink-300 transition shadow-sm">
                                <button
                                    onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                                    className="w-full px-6 sm:px-8 py-5 flex items-start justify-between hover:bg-gray-50 transition"
                                >
                                    <div className="text-left flex-1 pr-4">
                                        <p className="text-pink-600 font-bold text-sm mb-2">{`0${faq.id}`}</p>
                                        <h3 className="text-base sm:text-lg font-bold text-gray-900">{faq.question}</h3>
                                    </div>
                                    <span className={`text-2xl text-pink-600 flex-shrink-0 font-light transition-transform duration-300 ${expandedFAQ === faq.id ? 'rotate-45' : ''}`}>
                                        +
                                    </span>
                                </button>
                                {expandedFAQ === faq.id && (
                                    <div className="px-6 sm:px-8 py-6 bg-gray-50 border-t border-gray-200">
                                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== ABOUT SECTION ===== */}
            <section id="about" className="w-full py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            About Shaadi.com
                        </h2>
                    </div>
                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                        <p>
                            For over two decades, Shaadi.com has been pioneering the Indian matrimonial space with an aim to give you complete control over your matrimonial search, and help you discover blissful, meaningful connections that last a lifetime.
                        </p>
                        <p>
                            With over 80 lakh success stories and 35+ lakh verified profiles, Shaadi.com empowers you to easily find your soulmate, regardless of age, community, faith, location, or occupation.
                        </p>
                        <p>
                            Our cutting-edge AI algorithms, rigorous verification checks, and blue-tick verification system ensure you get 40% more matches while maintaining the highest safety standards.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== CTA SECTION ===== */}
            <section className="w-full py-12 md:py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                        Ready to find your forever?
                    </h2>
                    <p className="text-lg mb-8 opacity-95">Join 80 Lakh+ happy couples today!</p>
                    <button
                        onClick={() => navigate('/register')}
                        className="bg-white text-pink-600 font-bold px-10 md:px-14 py-4 md:py-5 rounded-full text-lg hover:bg-gray-50 transition shadow-lg transform hover:scale-105"
                    >
                        Register Free Now
                    </button>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="w-full bg-gray-900 text-gray-300 py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                        {/* Logo & Description */}
                        <div className="col-span-2">
                            <div className="text-2xl font-bold mb-4">
                                <span className="text-pink-500">shaadi</span>
                                <span className="text-white">.com</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                India's No.1 Matrimony & Matchmaking Service. Trusted by millions for over 25 years.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition">
                                    <span className="text-sm font-bold">f</span>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition">
                                    <span className="text-sm font-bold">in</span>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition">
                                    <span className="text-sm font-bold">X</span>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition">
                                    <span className="text-sm font-bold">▶</span>
                                </a>
                            </div>
                        </div>

                        {/* Help */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-4">Help</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-pink-400 transition">Member Login</a></li>
                                <li><a href="#" className="hover:text-pink-400 transition">Sign Up</a></li>
                                <li><a href="#" className="hover:text-pink-400 transition">Customer Support</a></li>
                                <li><a href="#" className="hover:text-pink-400 transition">Feedback</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-4">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-pink-400 transition">About Us</a></li>
                                <li><a href="#" className="hover:text-pink-400 transition">Careers</a></li>
                                <li><a href="#" className="hover:text-pink-400 transition">Blog</a></li>
                                <li><a href="#" className="hover:text-pink-400 transition">Press</a></li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-4">Legal</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-pink-400 transition">Terms of Use</a></li>
                                <li><a href="#" className="hover:text-pink-400 transition">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-pink-400 transition">Safety Tips</a></li>
                                <li><a href="#" className="hover:text-pink-400 transition">Report Misuse</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Partners */}
                    <div className="border-t border-gray-800 pt-8 mb-8">
                        <p className="text-sm text-gray-500 mb-4">Our Partner Sites:</p>
                        <div className="flex flex-wrap gap-4 text-sm">
                            <a href="#" className="text-gray-400 hover:text-pink-400 transition">Makaan.com</a>
                            <span className="text-gray-700">|</span>
                            <a href="#" className="text-gray-400 hover:text-pink-400 transition">Mauj</a>
                            <span className="text-gray-700">|</span>
                            <a href="#" className="text-gray-400 hover:text-pink-400 transition">Fropper</a>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                        <p>&copy; 2025 Shaadi.com. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
