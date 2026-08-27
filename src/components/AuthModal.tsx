import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  GraduationCap, 
  BookOpenCheck, 
  Building2, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Mail,
  KeyRound
} from 'lucide-react';
import { UserRole } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: UserRole;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialRole = 'student'
}) => {
  const [selectedRole, setSelectedRole] = useState<UserRole>(initialRole);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync initialRole when modal opens
  React.useEffect(() => {
    setSelectedRole(initialRole);
    setIsSuccess(false);
  }, [initialRole, isOpen]);

  const roles = [
    { id: 'student', name: 'Student', icon: GraduationCap, color: '#2563EB', defaultEmail: 'alex.morgan@unisphere.edu' },
    { id: 'faculty', name: 'Faculty', icon: BookOpenCheck, color: '#7C3AED', defaultEmail: 'prof.rajiv@unisphere.edu' },
    { id: 'hod', name: 'HOD', icon: Building2, color: '#D97706', defaultEmail: 'hod.cse@unisphere.edu' },
    { id: 'parent', name: 'Parent', icon: Users, color: '#059669', defaultEmail: 'parent.morgan@gmail.com' },
    { id: 'admin', name: 'Admin', icon: ShieldCheck, color: '#DC2626', defaultEmail: 'admin@unisphere.edu' },
  ] as const;

  const currentRoleConfig = roles.find(r => r.id === selectedRole) || roles[0];

  const handleQuickLogin = (roleId: UserRole) => {
    setSelectedRole(roleId);
    const target = roles.find(r => r.id === roleId);
    if (target) {
      setEmail(target.defaultEmail);
      setPassword('••••••••••••');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-content-primary/40 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-white rounded-3xl border border-border shadow-2xl overflow-hidden z-10"
        >
          {/* Header */}
          <div className="p-6 border-b border-border/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-xs"
                style={{ backgroundColor: currentRoleConfig.color }}
              >
                {React.createElement(currentRoleConfig.icon, { className: 'w-5 h-5' })}
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-content-primary">
                  Sign In to Unisphere
                </h3>
                <p className="text-xs text-content-secondary">
                  Accessing {currentRoleConfig.name} Portal
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-content-secondary hover:text-content-primary hover:bg-surface-soft transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Role selector buttons */}
          <div className="px-6 pt-5">
            <label className="text-xs font-bold uppercase tracking-wider text-content-tertiary block mb-2">
              Select Your Role
            </label>
            <div className="grid grid-cols-5 gap-1.5 p-1 rounded-2xl bg-surface-soft border border-border">
              {roles.map((r) => {
                const Icon = r.icon;
                const isSelected = selectedRole === r.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => handleQuickLogin(r.id)}
                    className={`flex flex-col items-center py-2 px-1 rounded-xl text-center transition-all ${
                      isSelected
                        ? 'bg-white shadow-xs font-bold text-content-primary border border-border'
                        : 'text-content-secondary hover:text-content-primary'
                    }`}
                  >
                    <Icon className="w-4 h-4 mb-1" style={{ color: isSelected ? r.color : undefined }} />
                    <span className="text-[11px] truncate w-full">{r.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {isSuccess ? (
              <div className="p-6 text-center space-y-3 bg-emerald-50 rounded-2xl border border-emerald-200">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-extrabold text-emerald-900">
                  Authentication Successful
                </h4>
                <p className="text-xs text-emerald-700">
                  Redirecting to {currentRoleConfig.name} Portal workspace...
                </p>
              </div>
            ) : (
              <>
                <div>
                  <label className="text-xs font-bold text-content-primary block mb-1.5">
                    Campus Email / User ID
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-content-tertiary absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={currentRoleConfig.defaultEmail}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-xs sm:text-sm text-content-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-content-primary">
                      Password
                    </label>
                    <span className="text-xs text-primary font-semibold cursor-pointer hover:underline">
                      Forgot Password?
                    </span>
                  </div>
                  <div className="relative">
                    <KeyRound className="w-4 h-4 text-content-tertiary absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-xs sm:text-sm text-content-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white shadow-md shadow-primary/20 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
                    style={{ backgroundColor: currentRoleConfig.color }}
                  >
                    <span>Sign In to {currentRoleConfig.name} Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Quick Auto-Fill Demo Button */}
                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => handleQuickLogin(selectedRole)}
                    className="text-xs font-semibold text-content-secondary hover:text-primary underline"
                  >
                    Load Demo Credentials for {currentRoleConfig.name}
                  </button>
                </div>
              </>
            )}
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
