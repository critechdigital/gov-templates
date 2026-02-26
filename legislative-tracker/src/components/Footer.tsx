
import { Building, Mail, Phone, Globe } from 'lucide-react';
import { cityInfo } from '../data';

const Footer = () => {
  return (
    <footer className="bg-[#2C001E] text-white rounded-t-xl mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* City Information */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#E95420] rounded-xl flex items-center justify-center shadow-md">
                <Building className="h-6 w-6 text-white" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-[#E95420]">
                City Government
              </h3>
            </div>
            <p className="text-[#AEA79F] mb-2">{cityInfo.name}</p>
            <p className="text-[#AEA79F] mb-2">{cityInfo.province}, {cityInfo.region}</p>
            <p className="text-sm text-white opacity-70">
              Component City since {cityInfo.cityhood}
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-[#E95420] mb-4">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-center text-[#AEA79F]">
                <Mail className="h-4 w-4 mr-2 text-[#E95420]" />
                <a href={`mailto:${cityInfo.email}`} className="hover:text-[#E95420] transition-colors">
                  {cityInfo.email}
                </a>
              </div>
              <div className="flex items-center text-[#AEA79F]">
                <Phone className="h-4 w-4 mr-2 text-[#E95420]" />
                <span>{cityInfo.phone}</span>
              </div>
              <div className="flex items-center text-[#AEA79F]">
                <Globe className="h-4 w-4 mr-2 text-[#E95420]" />
                <a href={`https://${cityInfo.website}`} className="hover:text-[#E95420] transition-colors">
                  {cityInfo.website}
                </a>
              </div>
            </div>
          </div>

          {/* Office Address */}
          <div>
            <h3 className="text-lg font-semibold text-[#E95420] mb-4">Office Address</h3>
            <p className="text-[#AEA79F] text-sm leading-relaxed">
              {cityInfo.address}
            </p>
            <div className="mt-4">
              <p className="text-sm text-white opacity-70">
                Office Hours: Monday - Friday
              </p>
              <p className="text-sm text-white opacity-70">
                8:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#77216F] py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-sm text-white opacity-70">
              © 2026 {cityInfo.name}. All rights reserved.
            </div>
            <div className="flex items-center mt-4 sm:mt-0">
              <span className="text-sm text-white opacity-70 mr-2">Powered by</span>
              <span className="text-sm text-[#E95420] font-semibold">CriTech Digital</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;