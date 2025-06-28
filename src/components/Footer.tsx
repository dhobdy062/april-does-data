
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onGetAssessment: () => void;
}

const Footer = ({ onGetAssessment }: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-brandBlue to-brandPurple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AD</span>
              </div>
              <span className="text-xl font-bold">April Does Data</span>
            </div>
            
            <p className="text-gray-400 max-w-md">
              Expert remote bookkeeping for tradespeople, landlords, and small business owners. 
              Clean books, clear vision, confident decisions.
            </p>
            
            <div className="space-y-3">
              <a href="tel:323-749-9444" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>323-749-9444</span>
              </a>
              <a href="mailto:help@aprildoesdata.com" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>help@aprildoesdata.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Remote Services Nationwide</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#packages" className="text-gray-400 hover:text-white transition-colors">Packages</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          {/* Get Started */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get Started</h3>
            <div className="bg-gradient-to-r from-brandPurple to-brandPink rounded-xl p-6">
              <p className="text-white mb-4 font-medium">Ready to clean up your books?</p>
              <button 
                onClick={onGetAssessment}
                className="w-full bg-white text-brandPurple font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Free Assessment
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2024 April Does Data. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
