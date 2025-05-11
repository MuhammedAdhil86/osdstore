import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VerifyOtp = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

    const handleVerify = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/api/accounts/verify-otp/', { email, otp });
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleVerify} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold">Verify OTP</h2>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded mt-2" required />
                <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} className="w-full p-2 border rounded mt-2" required />
                <button type="submit" className="w-full bg-green-500 text-white p-2 mt-3 rounded">Verify</button>
            </form>
        </div>
    );
};

export default VerifyOtp;