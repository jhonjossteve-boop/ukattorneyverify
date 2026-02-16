import React, { useState } from 'react';
import { Shield, Mail, Phone, CheckCircle, Copy, Check, BadgeCheck, Building2, ExternalLink, Briefcase } from 'lucide-react';
import { Lawyer } from './lawyerData';

interface ProfileCardProps {
  lawyer: Lawyer;
  onReset: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ lawyer, onReset }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }).catch(() => {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  const CopyButton: React.FC<{ text: string; field: string }> = ({ text, field }) => (
    <button
      onClick={() => handleCopy(text, field)}
      className="ml-2 p-1.5 rounded-md hover:bg-[#f0f4f8] transition-colors group/copy flex-shrink-0"
      title="Copy to clipboard"
    >
      {copiedField === field ? (
        <Check className="w-3.5 h-3.5 text-green-500" />
      ) : (
        <Copy className="w-3.5 h-3.5 text-[#8a9cc0] group-hover/copy:text-[#d4af37] transition-colors" />
      )}
    </button>
  );

  return (
    <div className="w-full max-w-2xl mx-auto animate-slideUp">
      {/* Verification Status Banner */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-t-2xl px-6 py-3 flex items-center justify-center gap-2 shadow-lg">
        <CheckCircle className="w-5 h-5 text-white" />
        <span className="text-white font-semibold text-sm tracking-wide">IDENTITY VERIFIED SUCCESSFULLY</span>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-b-2xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Top Section with Photo and Name */}
        <div className="relative bg-gradient-to-br from-[#0f1a2e] to-[#1a2e4a] px-6 sm:px-8 pt-8 pb-12">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(212,175,55,0.3) 35px, rgba(212,175,55,0.3) 36px)`
            }} />
          </div>

          <div className="relative flex flex-col sm:flex-row items-center gap-6">
            {/* Profile Photo */}
            <div className="relative flex-shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-[#d4af37] shadow-xl overflow-hidden">
                <img src={lawyer.image} alt={lawyer.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-9 h-9 bg-gradient-to-br from-[#d4af37] to-[#b8962e] rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Name and Badge */}
            <div className="text-center sm:text-left">
              <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-wide mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                {lawyer.name}
              </h2>
              {/* Verified Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d4af37] to-[#e8c84a] px-4 py-1.5 rounded-full shadow-md">
                <Shield className="w-4 h-4 text-[#0f1a2e]" />
                <span className="text-[#0f1a2e] text-xs font-bold tracking-wider uppercase">Verified Lawyer</span>
                <BadgeCheck className="w-4 h-4 text-[#0f1a2e]" />
              </div>
              {/* Specialization */}
              <div className="flex items-center justify-center sm:justify-start gap-2 mt-3">
                <Briefcase className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="text-[#d4af37] text-sm font-medium">{lawyer.specialization}</span>
              </div>
              <p className="text-[#8a9cc0] text-sm mt-1">
                Verification Code: <span className="text-[#d4af37] font-mono font-semibold">{lawyer.code}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="px-6 sm:px-8 py-6 space-y-1">
          <h3 className="text-[#0f1a2e] text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <div className="w-1 h-5 bg-[#d4af37] rounded-full" />
            Contact Information
          </h3>

          {/* Email */}
          <div className="flex items-center justify-between p-3.5 rounded-xl hover:bg-[#f8f9fc] transition-colors group">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-[#0f1a2e]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0f1a2e]/10 transition-colors">
                <Mail className="w-5 h-5 text-[#0f1a2e]" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-[#8a9cc0] font-semibold">Email Address</p>
                <a href={`mailto:${lawyer.email}`} className="text-[#0f1a2e] text-sm font-medium hover:text-[#d4af37] transition-colors truncate block">
                  {lawyer.email}
                </a>
              </div>
            </div>
            <CopyButton text={lawyer.email} field="email" />
          </div>

          {/* Phone */}
          <div className="flex items-center justify-between p-3.5 rounded-xl hover:bg-[#f8f9fc] transition-colors group">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-[#0f1a2e]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0f1a2e]/10 transition-colors">
                <Phone className="w-5 h-5 text-[#0f1a2e]" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-[#8a9cc0] font-semibold">Phone Number</p>
                <a href={`tel:${lawyer.phone.replace(/\s/g, '')}`} className="text-[#0f1a2e] text-sm font-medium hover:text-[#d4af37] transition-colors truncate block">
                  {lawyer.phone}
                </a>
              </div>
            </div>
            <CopyButton text={lawyer.phone} field="phone" />
          </div>

          {/* Address */}
          <div className="flex items-center justify-between p-3.5 rounded-xl hover:bg-[#f8f9fc] transition-colors group">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-[#0f1a2e]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0f1a2e]/10 transition-colors">
                <Building2 className="w-5 h-5 text-[#0f1a2e]" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-[#8a9cc0] font-semibold">Company Address</p>
                <p className="text-[#0f1a2e] text-sm font-medium leading-relaxed">{lawyer.address}</p>
              </div>
            </div>
            <CopyButton text={lawyer.address} field="address" />
          </div>
        </div>

        {/* Divider */}
        <div className="mx-6 sm:mx-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* Verification Details */}
        <div className="px-6 sm:px-8 py-6">
          <h3 className="text-[#0f1a2e] text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <div className="w-1 h-5 bg-[#d4af37] rounded-full" />
            Verification Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="bg-[#f8f9fc] rounded-xl p-4 text-center">
              <p className="text-[10px] uppercase tracking-wider text-[#8a9cc0] font-semibold mb-1">Status</p>
              <div className="flex items-center justify-center gap-1.5">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-600 text-sm font-bold">Active</span>
              </div>
            </div>
            <div className="bg-[#f8f9fc] rounded-xl p-4 text-center">
              <p className="text-[10px] uppercase tracking-wider text-[#8a9cc0] font-semibold mb-1">Verified On</p>
              <span className="text-[#0f1a2e] text-sm font-bold">{lawyer.verifiedDate}</span>
            </div>
            <div className="bg-[#f8f9fc] rounded-xl p-4 text-center">
              <p className="text-[10px] uppercase tracking-wider text-[#8a9cc0] font-semibold mb-1">Jurisdiction</p>
              <span className="text-[#0f1a2e] text-sm font-bold">{lawyer.jurisdiction}</span>
            </div>
            <div className="bg-[#f8f9fc] rounded-xl p-4 text-center">
              <p className="text-[10px] uppercase tracking-wider text-[#8a9cc0] font-semibold mb-1">Specialization</p>
              <span className="text-[#0f1a2e] text-sm font-bold">{lawyer.specialization}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-6 sm:px-8 pb-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => window.print()}
            className="flex-1 flex items-center justify-center gap-2 bg-[#0f1a2e] text-white py-3 px-6 rounded-xl font-semibold text-sm hover:bg-[#1a2e4a] transition-all hover:shadow-lg active:scale-[0.98]"
          >
            <ExternalLink className="w-4 h-4" />
            Print Verification
          </button>
          <button
            onClick={onReset}
            className="flex-1 flex items-center justify-center gap-2 bg-white text-[#0f1a2e] py-3 px-6 rounded-xl font-semibold text-sm border-2 border-[#0f1a2e]/10 hover:border-[#d4af37] hover:text-[#d4af37] transition-all active:scale-[0.98]"
          >
            New Verification
          </button>
        </div>
      </div>

      {/* Timestamp */}
      <div className="text-center mt-4">
        <p className="text-[#8a9cc0] text-xs">
          Verification performed on {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} at {new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })} UTC
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
