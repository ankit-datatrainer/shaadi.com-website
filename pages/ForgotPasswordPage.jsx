import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
    email: z.string().email('Please enter a valid email address')
});

export default function ForgotPasswordPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    });

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            setIsSubmitted(true);
        } catch (error) {
            console.error('Reset failed:', error);
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
                            <Link
                                to="/login"
                                className="text-pink-600 hover:text-pink-700 font-medium text-sm"
                            >
                                Back to Login
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex items-center justify-center py-12 px-4">
                <div className="w-full max-w-md">
                    {/* Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                        {!isSubmitted ? (
                            <>
                                <div className="text-center mb-8">
                                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.878L11 17l-1.257-.872A6 6 0 0112.257 5.878L11 7l1.257.872A6 6 0 0118 13a6 6 0 01-6 6H7a2 2 0 01-2-2V9a2 2 0 012-2h2.257" />
                                        </svg>
                                    </div>
                                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Forgot Password?</h1>
                                    <p className="text-gray-600">Enter your email to receive a password reset link</p>
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            {...register('email')}
                                            className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm`}
                                            placeholder="Enter your registered email"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-lg transition text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isLoading ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            'Send Reset Link'
                                        )}
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h1 className="text-2xl font-bold text-gray-900 mb-2">Check Your Email</h1>
                                <p className="text-gray-600 mb-6">
                                    We've sent a password reset link to your email address. Please check your inbox.
                                </p>
                                <Link
                                    to="/login"
                                    className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold px-8 py-3 rounded-lg transition"
                                >
                                    Back to Login
                                </Link>
                            </div>
                        )}

                        <p className="text-center mt-8 text-gray-600 text-sm">
                            Remember your password?{' '}
                            <Link to="/login" className="text-pink-600 hover:text-pink-700 font-bold">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
