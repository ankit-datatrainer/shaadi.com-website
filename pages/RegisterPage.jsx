import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
    profileFor: z.string().min(1, 'Please select who you are creating profile for'),
    name: z.string().min(2, 'Name must be at least 2 characters'),
    gender: z.enum(['Male', 'Female'], { required_error: 'Please select gender' }),
    religion: z.string().min(1, 'Please select religion'),
    motherTongue: z.string().min(1, 'Please select mother tongue'),
    country: z.string().min(1, 'Please select country'),
    phone: z.string().min(10, 'Please enter valid phone number'),
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    terms: z.boolean().optional()
});

export default function RegisterPage() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [step, setStep] = useState(1);

    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            profileFor: 'Myself',
            gender: 'Male'
        }
    });

    const profileForOptions = ['Myself', 'Son', 'Daughter', 'Brother', 'Sister', 'Friend', 'Relative'];
    const religions = ['Hindu', 'Muslim', 'Christian', 'Sikh', 'Buddhist', 'Jain', 'Other'];
    const motherTongues = ['Hindi', 'Marathi', 'Tamil', 'Telugu', 'Kannada', 'Malayalam', 'Bengali', 'Gujarati', 'Punjabi', 'Urdu'];
    const countries = ['India', 'USA', 'UK', 'Canada', 'Australia', 'UAE', 'Singapore', 'Other'];

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            // Simulate API call for demo
            await new Promise(resolve => setTimeout(resolve, 1500));
            // For demo, navigate to login
            navigate('/login');
        } catch (error) {
            console.error('Registration failed:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
            {/* Header */}
            <header className="w-full bg-white border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link to="/" className="flex items-center">
                            <span className="text-2xl sm:text-3xl font-bold">
                                <span className="text-pink-600">shaadi</span>
                                <span className="text-gray-700">.com</span>
                            </span>
                        </Link>
                        <div className="flex items-center gap-4">
                            <span className="text-gray-600 text-sm hidden sm:block">Already have an account?</span>
                            <Link
                                to="/login"
                                className="text-pink-600 hover:text-pink-700 font-medium text-sm"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="py-8 px-4">
                <div className="max-w-2xl mx-auto">
                    {/* Progress Steps */}
                    <div className="flex items-center justify-center mb-8">
                        <div className="flex items-center">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-pink-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                                1
                            </div>
                            <div className={`w-20 h-1 ${step >= 2 ? 'bg-pink-600' : 'bg-gray-200'}`}></div>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-pink-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                                2
                            </div>
                            <div className={`w-20 h-1 ${step >= 3 ? 'bg-pink-600' : 'bg-gray-200'}`}></div>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-pink-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                                3
                            </div>
                        </div>
                    </div>

                    {/* Registration Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Create Your Profile</h1>
                            <p className="text-gray-600">Join millions who found their perfect match</p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            {step === 1 && (
                                <>
                                    {/* Profile For */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Profile For
                                        </label>
                                        <select
                                            {...register('profileFor')}
                                            className={`w-full px-4 py-3 border ${errors.profileFor ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm`}
                                        >
                                            {profileForOptions.map(opt => (
                                                <option key={opt} value={opt}>{opt}</option>
                                            ))}
                                        </select>
                                        {errors.profileFor && <p className="text-red-500 text-sm mt-1">{errors.profileFor.message}</p>}
                                    </div>

                                    {/* Gender */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Gender
                                        </label>
                                        <div className="flex gap-6">
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    value="Male"
                                                    {...register('gender')}
                                                    className="w-4 h-4 text-pink-600"
                                                />
                                                <span className="text-gray-700">Male</span>
                                            </label>
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    value="Female"
                                                    {...register('gender')}
                                                    className="w-4 h-4 text-pink-600"
                                                />
                                                <span className="text-gray-700">Female</span>
                                            </label>
                                        </div>
                                        {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
                                    </div>

                                    {/* Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            {...register('name')}
                                            placeholder="Enter your full name"
                                            className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm`}
                                        />
                                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                                    </div>

                                    {/* Religion */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Religion
                                        </label>
                                        <select
                                            {...register('religion')}
                                            className={`w-full px-4 py-3 border ${errors.religion ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm`}
                                        >
                                            <option value="">Select Religion</option>
                                            {religions.map(rel => (
                                                <option key={rel} value={rel}>{rel}</option>
                                            ))}
                                        </select>
                                        {errors.religion && <p className="text-red-500 text-sm mt-1">{errors.religion.message}</p>}
                                    </div>

                                    {/* Mother Tongue */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Mother Tongue
                                        </label>
                                        <select
                                            {...register('motherTongue')}
                                            className={`w-full px-4 py-3 border ${errors.motherTongue ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm`}
                                        >
                                            <option value="">Select Mother Tongue</option>
                                            {motherTongues.map(mt => (
                                                <option key={mt} value={mt}>{mt}</option>
                                            ))}
                                        </select>
                                        {errors.motherTongue && <p className="text-red-500 text-sm mt-1">{errors.motherTongue.message}</p>}
                                    </div>
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    {/* Country */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Country
                                        </label>
                                        <select
                                            {...register('country')}
                                            className={`w-full px-4 py-3 border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm`}
                                        >
                                            <option value="">Select Country</option>
                                            {countries.map(ctry => (
                                                <option key={ctry} value={ctry}>{ctry}</option>
                                            ))}
                                        </select>
                                        {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Mobile Number
                                        </label>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-4 py-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 text-sm text-gray-600">
                                                +91
                                            </span>
                                            <input
                                                type="tel"
                                                {...register('phone')}
                                                placeholder="Enter mobile number"
                                                className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-r-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm`}
                                            />
                                        </div>
                                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            {...register('email')}
                                            placeholder="Enter your email"
                                            className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm`}
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                {...register('password')}
                                                placeholder="Create a password"
                                                className={`w-full px-4 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm`}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                            >
                                                {showPassword ? (
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                                    </div>
                                </>
                            )}

                            {step === 3 && (
                                <>
                                    {/* Summary */}
                                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                                        <h3 className="font-bold text-gray-900 mb-4">Profile Summary</h3>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Profile For:</span>
                                                <span className="font-medium">{watch('profileFor')}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Name:</span>
                                                <span className="font-medium">{watch('name')}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Gender:</span>
                                                <span className="font-medium">{watch('gender')}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Religion:</span>
                                                <span className="font-medium">{watch('religion')}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Mother Tongue:</span>
                                                <span className="font-medium">{watch('motherTongue')}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Country:</span>
                                                <span className="font-medium">{watch('country')}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Email:</span>
                                                <span className="font-medium">{watch('email')}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Terms */}
                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            {...register('terms')}
                                            className="w-4 h-4 mt-1 text-pink-600 rounded"
                                        />
                                        <span className="text-sm text-gray-600">
                                            I agree to the{' '}
                                            <a href="#" className="text-pink-600 hover:underline">Terms of Service</a>
                                            {' '}and{' '}
                                            <a href="#" className="text-pink-600 hover:underline">Privacy Policy</a>
                                        </span>
                                    </div>
                                    {errors.terms && <p className="text-red-500 text-sm">{errors.terms.message}</p>}
                                </>
                            )}

                            {/* Navigation Buttons */}
                            <div className="flex gap-4 pt-4">
                                {step > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => setStep(step - 1)}
                                        className="flex-1 border border-gray-300 text-gray-700 font-bold py-4 rounded-lg hover:bg-gray-50 transition"
                                    >
                                        Back
                                    </button>
                                )}
                                {step < 3 ? (
                                    <button
                                        type="button"
                                        onClick={() => setStep(step + 1)}
                                        className="flex-1 bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-lg transition"
                                    >
                                        Continue
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="flex-1 bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isLoading ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Creating Profile...
                                            </>
                                        ) : (
                                            'Create Profile'
                                        )}
                                    </button>
                                )}
                            </div>
                        </form>

                        {/* Login Link */}
                        <p className="text-center mt-8 text-gray-600 text-sm">
                            Already have an account?{' '}
                            <Link to="/login" className="text-pink-600 hover:text-pink-700 font-bold">
                                Login
                            </Link>
                        </p>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                            <span className="text-green-500">{'\u2713'}</span>
                            <span className="text-sm text-gray-600">Free Registration</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                            <span className="text-green-500">{'\u2713'}</span>
                            <span className="text-sm text-gray-600">100% Secure</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                            <span className="text-green-500">{'\u2713'}</span>
                            <span className="text-sm text-gray-600">Verified Profiles</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
