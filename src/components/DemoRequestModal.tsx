import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Mail, 
  User, 
  Phone, 
  MapPin, 
  Clock, 
  Check
} from 'lucide-react';

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EXPLORATION_MODULES = [
  'Student Management',
  'Faculty Management',
  'Attendance',
  'Examination & Marks',
  'Assignments',
  'Parent Portal',
  'HOD Dashboard',
  'Administration',
  'Fees & Payments',
  'Campus Communication',
  'Complete Platform'
];

const INSTITUTION_TYPES = [
  'Engineering College',
  'Autonomous University',
  'Arts & Science College',
  'Polytechnic / Diploma Institute',
  'Medical / Allied Health Institute',
  'Management Institute',
  'Other Higher-Education Institution'
];

const DESIGNATIONS = [
  'Principal / Director',
  'Dean / Academic Head',
  'Head of Department (HOD)',
  'IT Director / Systems Administrator',
  'Registrar / Controller of Examinations',
  'College Management / Trustee',
  'Academic Coordinator / Faculty Lead',
  'Other'
];

export const DemoRequestModal: React.FC<DemoRequestModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    institutionName: '',
    institutionType: INSTITUTION_TYPES[0],
    city: '',
    state: '',
    country: 'India',
    contactPerson: '',
    designation: DESIGNATIONS[0],
    email: '',
    phone: '',
    modules: ['Complete Platform'] as string[],
    preferredTime: 'Morning' as 'Morning' | 'Afternoon' | 'Evening'
  });

  const handleModuleToggle = (moduleName: string) => {
    setFormData(prev => {
      if (moduleName === 'Complete Platform') {
        return {
          ...prev,
          modules: prev.modules.includes('Complete Platform') ? [] : ['Complete Platform']
        };
      }

      let updated = prev.modules.filter(m => m !== 'Complete Platform');
      if (updated.includes(moduleName)) {
        updated = updated.filter(m => m !== moduleName);
      } else {
        updated.push(moduleName);
      }
      if (updated.length === 0) {
        updated = ['Complete Platform'];
      }
      return { ...prev, modules: updated };
    });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.institutionName.trim()) errs.institutionName = 'Institution name is required';
    if (!formData.city.trim()) errs.city = 'City is required';
    if (!formData.state.trim()) errs.state = 'State is required';
    if (!formData.country.trim()) errs.country = 'Country is required';
    if (!formData.contactPerson.trim()) errs.contactPerson = 'Contact person name is required';
    if (!formData.email.trim()) {
      errs.email = 'Official email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid official email';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 7) {
      errs.phone = 'Please enter a valid phone number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleResetAndClose}
          className="fixed inset-0 bg-content-primary/50 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl border border-border shadow-2xl overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-border flex items-center justify-between bg-surface-soft shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center shadow-xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-content-primary tracking-tight">
                  Book an Institutional Demo
                </h3>
                <p className="text-xs text-content-secondary">
                  Schedule a tailored platform walkthrough for your college or university
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleResetAndClose}
              className="p-2 rounded-xl text-content-secondary hover:text-content-primary hover:bg-white border border-transparent hover:border-border transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form / Success Screen */}
          <div className="p-5 sm:p-8 overflow-y-auto flex-1">
            {submitted ? (
              <div className="py-8 px-4 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-extrabold text-content-primary tracking-tight">
                  Your demo request has been received.
                </h4>
                <p className="text-sm text-content-secondary max-w-md mx-auto leading-relaxed">
                  Our team will review your institution details and get in touch to schedule a suitable demonstration.
                </p>

                <div className="pt-6">
                  <button
                    type="button"
                    onClick={handleResetAndClose}
                    className="px-6 py-2.5 rounded-xl bg-primary text-white text-xs sm:text-sm font-bold shadow-xs hover:bg-primary-dark transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* 1. Institution Name & Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-content-primary block mb-1.5">
                      Institution / College Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-content-tertiary absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.institutionName}
                        onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                        placeholder="e.g. SRM Institute of Science and Technology"
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-xs sm:text-sm text-content-primary outline-none transition-all ${
                          errors.institutionName ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-border focus:border-primary focus:ring-2 focus:ring-primary/20'
                        }`}
                      />
                    </div>
                    {errors.institutionName && (
                      <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.institutionName}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-content-primary block mb-1.5">
                      Institution Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.institutionType}
                      onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-xs sm:text-sm text-content-primary outline-none transition-all bg-white"
                    >
                      {INSTITUTION_TYPES.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 2. City, State, Country */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs font-bold text-content-primary block mb-1.5">
                      City <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-content-tertiary absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Chennai"
                        className={`w-full pl-9 pr-3 py-2 rounded-xl border text-xs text-content-primary outline-none transition-all ${
                          errors.city ? 'border-red-500' : 'border-border focus:border-primary'
                        }`}
                      />
                    </div>
                    {errors.city && <p className="text-[10px] text-red-500 mt-0.5">{errors.city}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-content-primary block mb-1.5">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="Tamil Nadu"
                      className={`w-full px-3 py-2 rounded-xl border text-xs text-content-primary outline-none transition-all ${
                        errors.state ? 'border-red-500' : 'border-border focus:border-primary'
                      }`}
                    />
                    {errors.state && <p className="text-[10px] text-red-500 mt-0.5">{errors.state}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-content-primary block mb-1.5">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="India"
                      className={`w-full px-3 py-2 rounded-xl border text-xs text-content-primary outline-none transition-all ${
                        errors.country ? 'border-red-500' : 'border-border focus:border-primary'
                      }`}
                    />
                    {errors.country && <p className="text-[10px] text-red-500 mt-0.5">{errors.country}</p>}
                  </div>
                </div>

                {/* 3. Contact Person & Designation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-content-primary block mb-1.5">
                      Contact Person <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-content-tertiary absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        placeholder="Dr. Anand S."
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-xs sm:text-sm text-content-primary outline-none transition-all ${
                          errors.contactPerson ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-border focus:border-primary focus:ring-2 focus:ring-primary/20'
                        }`}
                      />
                    </div>
                    {errors.contactPerson && (
                      <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.contactPerson}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-content-primary block mb-1.5">
                      Designation <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-xs sm:text-sm text-content-primary outline-none transition-all bg-white"
                    >
                      {DESIGNATIONS.map(des => (
                        <option key={des} value={des}>{des}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 4. Official Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-content-primary block mb-1.5">
                      Official Institution Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-content-tertiary absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="principal@college.edu.in"
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-xs sm:text-sm text-content-primary outline-none transition-all ${
                          errors.email ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-border focus:border-primary focus:ring-2 focus:ring-primary/20'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-content-primary block mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-content-tertiary absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-xs sm:text-sm text-content-primary outline-none transition-all ${
                          errors.phone ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-border focus:border-primary focus:ring-2 focus:ring-primary/20'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* 5. What would you like to explore? (Chips) */}
                <div>
                  <label className="text-xs font-bold text-content-primary block mb-2">
                    What would you like to explore?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {EXPLORATION_MODULES.map((moduleName) => {
                      const isSelected = formData.modules.includes(moduleName);
                      return (
                        <button
                          key={moduleName}
                          type="button"
                          onClick={() => handleModuleToggle(moduleName)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border flex items-center gap-1.5 cursor-pointer ${
                            isSelected
                              ? 'bg-primary text-white border-primary shadow-xs'
                              : 'bg-surface-soft text-content-secondary border-border hover:bg-white hover:text-content-primary'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          <span>{moduleName}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 6. Preferred Demo Time */}
                <div>
                  <label className="text-xs font-bold text-content-primary block mb-2">
                    Preferred Demo Time
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['Morning', 'Afternoon', 'Evening'] as const).map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setFormData({ ...formData, preferredTime: time })}
                        className={`py-2.5 px-3 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                          formData.preferredTime === time
                            ? 'bg-primary-subtle text-primary border-primary ring-1 ring-primary'
                            : 'bg-white text-content-secondary border-border hover:bg-surface-soft'
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5 mx-auto mb-1 opacity-70" />
                        <span>{time}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit CTA */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-5 rounded-xl text-sm font-extrabold text-white bg-primary hover:bg-primary-dark shadow-md shadow-primary/25 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 cursor-pointer ring-2 ring-primary/20"
                  >
                    <span>Request Institutional Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-content-tertiary text-center mt-2 font-medium">
                    Strict institutional privacy. No public data sharing.
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DemoRequestModal;
