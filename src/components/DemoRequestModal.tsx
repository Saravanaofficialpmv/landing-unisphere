import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2, ArrowRight, Building, Mail, User } from 'lucide-react';

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoRequestModal: React.FC<DemoRequestModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: 'Administrator',
    institution: 'SRM Institute of Science and Technology',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2400);
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

        {/* Modal Content */}
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
              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-content-primary">
                  Get Started with Unisphere
                </h3>
                <p className="text-xs text-content-secondary">
                  Schedule an institutional walkthrough or request sandbox access
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

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {submitted ? (
              <div className="p-8 text-center space-y-3 bg-emerald-50 rounded-2xl border border-emerald-200">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-extrabold text-emerald-900">
                  Request Received!
                </h4>
                <p className="text-xs text-emerald-700 max-w-xs mx-auto leading-relaxed">
                  Thank you. Our campus technology specialist will contact you with customized Unisphere sandbox credentials.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-xs font-bold text-content-primary block mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-content-tertiary absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Dr. Anand S."
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-xs sm:text-sm text-content-primary outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-content-primary block mb-1.5">
                      Official Email
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-content-tertiary absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="anand.s@srmist.edu.in"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-xs sm:text-sm text-content-primary outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-xs font-bold text-content-primary block mb-1.5">
                      Campus Role
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-xs sm:text-sm text-content-primary outline-none transition-all bg-white"
                    >
                      <option value="Administrator">Administrator / Dean</option>
                      <option value="HOD">Head of Department (HOD)</option>
                      <option value="Faculty">Professor / Faculty</option>
                      <option value="Student">Student Council / Lead</option>
                      <option value="Parent">Parent Representative</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-content-primary block mb-1.5">
                      Institution Name
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-content-tertiary absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        placeholder="SRM Institute of Science and Technology"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-xs sm:text-sm text-content-primary outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-content-primary block mb-1.5">
                    Specific Requirements or Modules of Interest
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="E.g., We are looking to unify attendance, continuous assessment gradebook, and parent updates for 5,000+ students..."
                    className="w-full p-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-xs sm:text-sm text-content-primary outline-none transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-primary hover:bg-primary-dark shadow-md shadow-primary/25 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
                  >
                    <span>Confirm Demo Request</span>
                    <ArrowRight className="w-4 h-4" />
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
