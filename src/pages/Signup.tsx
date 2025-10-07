import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Lock, Eye, EyeOff, User, UserPlus, ShieldCheck, CheckCircle } from 'lucide-react';

export function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

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

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
    // In a real app, redirect to dashboard or login page
    alert('Account created successfully! (This is a demo)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const getPasswordStrength = () => {
    const password = formData.password;
    if (!password) return { strength: 0, label: '', color: '' };

    let strength = 0;
    if (password.length >= 6) strength++;
    if (password.length >= 10) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength <= 2) return { strength, label: 'Weak', color: '#d4183d' };
    if (strength <= 3) return { strength, label: 'Medium', color: '#f59e0b' };
    return { strength, label: 'Strong', color: '#629460' };
  };

  const passwordStrength = getPasswordStrength();

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
            <h1 className="mb-2">Create Your Account</h1>
            <p className="text-[#243119]/80">Join Safe Plate and start your food safety journey</p>
          </motion.div>

          {/* Signup Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl p-8 border-2 border-[#96be8c] shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block mb-2 text-[#243119]">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <User className="w-5 h-5 text-[#629460]" />
                  </div>
                  <motion.input
                    animate={errors.name ? { x: [-10, 10, -10, 10, 0] } : {}}
                    transition={{ duration: 0.4 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-11 pr-4 py-3 bg-white border-2 rounded-lg focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-red-500'
                        : formData.name
                        ? 'border-[#629460]'
                        : 'border-[#96be8c] focus:border-[#629460]'
                    }`}
                    placeholder="John Doe"
                  />
                  {formData.name && !errors.name && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <CheckCircle className="w-5 h-5 text-[#629460]" />
                    </div>
                  )}
                </div>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

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
                  {formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && !errors.email && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <CheckCircle className="w-5 h-5 text-[#629460]" />
                    </div>
                  )}
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
                    placeholder="Create a strong password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#629460] hover:text-[#243119]"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-[#243119]/60">Password strength:</span>
                      <span className="text-sm" style={{ color: passwordStrength.color }}>
                        {passwordStrength.label}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-[#96be8c]/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(passwordStrength.strength / 5) * 100}%` }}
                        transition={{ duration: 0.3 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: passwordStrength.color }}
                      />
                    </div>
                  </div>
                )}
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

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block mb-2 text-[#243119]">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Lock className="w-5 h-5 text-[#629460]" />
                  </div>
                  <motion.input
                    animate={errors.confirmPassword ? { x: [-10, 10, -10, 10, 0] } : {}}
                    transition={{ duration: 0.4 }}
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full pl-11 pr-11 py-3 bg-white border-2 rounded-lg focus:outline-none transition-colors ${
                      errors.confirmPassword
                        ? 'border-red-500'
                        : formData.confirmPassword && formData.password === formData.confirmPassword
                        ? 'border-[#629460]'
                        : 'border-[#96be8c] focus:border-[#629460]'
                    }`}
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#629460] hover:text-[#243119]"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                  {formData.confirmPassword &&
                    formData.password === formData.confirmPassword &&
                    !errors.confirmPassword && (
                      <div className="absolute right-11 top-1/2 -translate-y-1/2">
                        <CheckCircle className="w-5 h-5 text-[#629460]" />
                      </div>
                    )}
                </div>
                {errors.confirmPassword && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.confirmPassword}
                  </motion.p>
                )}
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 mt-1 accent-[#629460] cursor-pointer"
                  required
                />
                <label htmlFor="terms" className="text-sm text-[#243119]/80 cursor-pointer">
                  I agree to the{' '}
                  <Link to="#" className="text-[#629460] hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="#" className="text-[#629460] hover:underline">
                    Privacy Policy
                  </Link>
                </label>
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
                    Creating Account...
                  </>
                ) : (
                  <>
                    <UserPlus className="w-5 h-5" />
                    Create Account
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

            {/* Login Link */}
            <div className="text-center">
              <p className="text-[#243119]/80">
                Already have an account?{' '}
                <Link to="/login" className="text-[#629460] hover:text-[#243119] transition-colors">
                  Login
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
