
import { Building, Mail, Phone, Globe } from 'lucide-react';
import { cityInfo } from '../data';

const Footer = () => {
  return (
    <footer className="bg-[#0D1B2A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* City Information */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center">
                <Building className="h-6 w-6 text-[#0D1B2A]" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-[#FFD700]">
                City Government
              </h3>
            </div>
            <p className="text-gray-300 mb-2">{cityInfo.name}</p>
            <p className="text-gray-300 mb-2">{cityInfo.province}, {cityInfo.region}</p>
            <p className="text-sm text-gray-400">
              Component City since {cityInfo.cityhood}
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-[#FFD700] mb-4">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2 text-[#FFD700]" />
                <a href={`mailto:${cityInfo.email}`} className="hover:text-[#FFD700] transition-colors">
                  {cityInfo.email}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2 text-[#FFD700]" />
                <span>{cityInfo.phone}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Globe className="h-4 w-4 mr-2 text-[#FFD700]" />
                <a href={`https://${cityInfo.website}`} className="hover:text-[#FFD700] transition-colors">
                  {cityInfo.website}
                </a>
              </div>
            </div>
          </div>

          {/* Office Address */}
          <div>
            <h3 className="text-lg font-semibold text-[#FFD700] mb-4">Office Address</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {cityInfo.address}
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-400">
                Office Hours: Monday - Friday
              </p>
              <p className="text-sm text-gray-400">
                8:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              © 2026 {cityInfo.name}. All rights reserved.
            </div>
            <div className="flex items-center mt-4 sm:mt-0">
              <span className="text-sm text-gray-400 mr-2">Powered by</span>
              <span className="text-sm text-[#FFD700] font-semibold">CriTech Digital</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;