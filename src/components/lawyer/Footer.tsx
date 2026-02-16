import React from 'react';
import { Shield, Lock, Scale, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = React.useState<string | null>(null);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="w-full bg-[#0a1220] border-t border-[#d4af37]/20">
        {/* Gold accent line */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#b8962e] flex items-center justify-center">
                  <Scale className="w-5 h-5 text-[#0f1a2e]" />

                </div>
                <div>
                  <p className="text-white text-sm font-bold">Lawyer Identity</p>
                  <p className="text-[#d4af37] text-[9px] tracking-widest uppercase">Verification Portal</p>
                </div>
              </div>
              <p className="text-[#6b7fa3] text-xs leading-relaxed max-w-xs">
                Official verification portal for confirming the identity and credentials of registered legal professionals.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[#d4af37] text-xs font-bold uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {['About Us', 'How It Works', 'FAQs', 'Contact Support'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => setActiveModal(link)}
                      className="text-[#6b7fa3] text-sm hover:text-[#d4af37] transition-colors flex items-center gap-1.5 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-[#d4af37] transition-all duration-300" />
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-[#d4af37] text-xs font-bold uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-2.5">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Data Protection'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => setActiveModal(link)}
                      className="text-[#6b7fa3] text-sm hover:text-[#d4af37] transition-colors flex items-center gap-1.5 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-[#d4af37] transition-all duration-300" />
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Security */}
            <div>
              <h4 className="text-[#d4af37] text-xs font-bold uppercase tracking-wider mb-4">Security</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 bg-[#0f1a2e] rounded-lg px-3 py-2.5 border border-[#1a2e4a]">
                  <Lock className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <div>
                    <p className="text-white text-xs font-semibold">SSL Encrypted</p>
                    <p className="text-[#6b7fa3] text-[10px]">256-bit encryption</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 bg-[#0f1a2e] rounded-lg px-3 py-2.5 border border-[#1a2e4a]">
                  <Shield className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                  <div>
                    <p className="text-white text-xs font-semibold">Verified Portal</p>
                    <p className="text-[#6b7fa3] text-[10px]">Official verification system</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 pt-6 border-t border-[#1a2e4a]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[#4a5f82] text-xs text-center sm:text-left">
                &copy; {currentYear} Lawyer Identity Verification Portal. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-[#4a5f82] text-xs">System Operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setActiveModal(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 animate-slideUp" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[#0f1a2e] text-lg font-bold">{activeModal}</h3>
              <button
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-[#4a5f82] text-sm leading-relaxed space-y-3">
              {activeModal === 'About Us' && (
                <>
                  <p>The Lawyer Identity Verification Portal is an official platform designed to verify the credentials and identity of registered legal professionals.</p>
                  <p>Our system provides instant verification through unique identification codes assigned to each registered lawyer, ensuring transparency and trust in legal proceedings.</p>
                </>
              )}
              {activeModal === 'How It Works' && (
                <>
                  <p>1. Enter the unique verification code provided by the lawyer.</p>
                  <p>2. Our system securely checks the code against our verified database.</p>
                  <p>3. If the code matches, the lawyer's verified profile is displayed.</p>
                  <p>4. You can then confirm the lawyer's identity and contact details.</p>
                </>
              )}
              {activeModal === 'FAQs' && (
                <>
                  <p><strong className="text-[#0f1a2e]">Where do I get the verification code?</strong><br />The verification code is provided directly by the lawyer or their firm.</p>
                  <p><strong className="text-[#0f1a2e]">Is this service free?</strong><br />Yes, identity verification is completely free of charge.</p>
                  <p><strong className="text-[#0f1a2e]">How current is the information?</strong><br />All profiles are regularly updated and verified.</p>
                </>
              )}
              {activeModal === 'Contact Support' && (
                <>
                  <p>For support inquiries, please reach out through the following channels:</p>
                  <p>Email: support@lawyerverify.com</p>
                  <p>Phone: +44 (0) 800 123 4567</p>
                  <p>Hours: Monday - Friday, 9:00 AM - 5:00 PM GMT</p>
                </>
              )}
              {activeModal === 'Privacy Policy' && (
                <>
                  <p>We are committed to protecting your privacy. All verification queries are encrypted and processed securely.</p>
                  <p>We do not store search queries or share any personal data with third parties. All data handling complies with GDPR and UK Data Protection Act 2018.</p>
                </>
              )}
              {activeModal === 'Terms of Service' && (
                <>
                  <p>By using this portal, you agree to use the verification service solely for legitimate identity confirmation purposes.</p>
                  <p>Misuse of this system, including unauthorized data collection or impersonation, is strictly prohibited and may result in legal action.</p>
                </>
              )}
              {activeModal === 'Cookie Policy' && (
                <>
                  <p>This portal uses essential cookies only to ensure the proper functioning of the verification system.</p>
                  <p>No tracking or advertising cookies are used. Session data is cleared upon closing the browser.</p>
                </>
              )}
              {activeModal === 'Data Protection' && (
                <>
                  <p>All data transmitted through this portal is protected by 256-bit SSL encryption.</p>
                  <p>We comply with GDPR, UK Data Protection Act 2018, and maintain ISO 27001 certification for information security management.</p>
                </>
              )}
            </div>
            <button
              onClick={() => setActiveModal(null)}
              className="mt-6 w-full bg-[#0f1a2e] text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-[#1a2e4a] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
