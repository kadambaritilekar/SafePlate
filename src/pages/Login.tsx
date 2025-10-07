import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Lock, Eye, EyeOff, LogIn, ShieldCheck } from 'lucide-react';

export function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    // In a real app, redirect to dashboard or home page
    alert('Login successful! (This is a demo)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen py-12 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          {/* Logo/Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#629460] rounded-full flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="mb-2">Welcome Back</h1>
            <p className="text-[#243119]/80">Sign in to access your Safe Plate account</p>
          </motion.div>

          {/* Login Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl p-8 border-2 border-[#96be8c] shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block mb-2 text-[#243119]">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Mail className="w-5 h-5 text-[#629460]" />
                  </div>
                  <motion.input
                    animate={errors.email ? { x: [-10, 10, -10, 10, 0] } : {}}
                    transition={{ duration: 0.4 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-11 pr-4 py-3 bg-white border-2 rounded-lg focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-500'
                        : formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
                        ? 'border-[#629460]'
                        : 'border-[#96be8c] focus:border-[#629460]'
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block mb-2 text-[#243119]">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Lock className="w-5 h-5 text-[#629460]" />
                  </div>
                  <motion.input
                    animate={errors.password ? { x: [-10, 10, -10, 10, 0] } : {}}
                    transition={{ duration: 0.4 }}
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full pl-11 pr-11 py-3 bg-white border-2 rounded-lg focus:outline-none transition-colors ${
                      errors.password
                        ? 'border-red-500'
                        : formData.password.length >= 6
                        ? 'border-[#629460]'
                        : 'border-[#96be8c] focus:border-[#629460]'
                    }`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#629460] hover:text-[#243119]"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.password}
                  </motion.p>
                )}
              </div>

              {/* Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-[#629460] cursor-pointer"
                  />
                  <span className="text-sm text-[#243119]/80">Remember me</span>
                </label>
                <Link
                  to="#"
                  className="text-sm text-[#629460] hover:text-[#243119] transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#629460] text-white rounded-lg hover:bg-[#aceda1] hover:text-[#243119] transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Signing In...
                  </>
                ) : (
                  <>
                    <LogIn className="w-5 h-5" />
                    Sign In
                  </>
                )}
              </motion.button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-[#96be8c]"></div>
              <span className="text-sm text-[#243119]/60">OR</span>
              <div className="flex-1 h-px bg-[#96be8c]"></div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-[#243119]/80">
                Don't have an account?{' '}
                <Link
                  to="/signup"
                  className="text-[#629460] hover:text-[#243119] transition-colors"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-center text-sm text-[#243119]/60"
          >
            <p>
              By signing in, you agree to our{' '}
              <Link to="#" className="text-[#629460] hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="#" className="text-[#629460] hover:underline">
                Privacy Policy
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
