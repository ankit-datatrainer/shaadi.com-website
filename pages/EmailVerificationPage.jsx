import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';

const schema = z.object({
    email: z.string().email(),
    code: z.string().min(4)
});

export default function EmailVerificationPage() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(schema)
    });

    const onSubmit = async (data) => {
        await axios.post('/api/auth/verify-email', data);
        alert('Email verified. You can now login.');
        window.location.href = '/login';
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">Verify Email</h2>
                <div className="mb-4">
                    <label className="block mb-1">Email</label>
                    <input type="email" {...register('email')} className="w-full border px-3 py-2 rounded" />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Verification Code</label>
                    <input type="text" {...register('code')} className="w-full border px-3 py-2 rounded" />
                    {errors.code && <p className="text-red-500 text-sm">{errors.code.message}</p>}
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded" disabled={isSubmitting}>
                    {isSubmitting ? 'Verifying...' : 'Verify'}
                </button>
                <div className="mt-4 text-center">
                    <a href="/login" className="text-blue-600">Back to Login</a>
                </div>
            </form>
        </div>
    );
}
