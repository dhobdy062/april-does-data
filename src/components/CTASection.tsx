
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Clock, Shield } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"7\" cy=\"7\" r=\"7\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Get Clean Books and <span className="text-yellow-300">Peace of Mind?</span>
        </h2>
        
        <p className="text-xl text-blue-100 mb-8">
          Schedule your free assessment today. No pressure, no sales pitch — just clarity.
        </p>
        
        {/* Benefits */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-10">
          <div className="flex items-center space-x-2 text-white">
            <CheckCircle className="w-5 h-5 text-green-300" />
            <span>Free 30-minute consultation</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <Shield className="w-5 h-5 text-green-300" />
            <span>Custom recommendations</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <Clock className="w-5 h-5 text-green-300" />
            <span>No obligation</span>
          </div>
        </div>
        
        <Button 
          size="lg"
          className="bg-white text-brandPurple hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          Request My Free Assessment
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
        
        <p className="text-blue-200 mt-4 text-sm">
          You'll hear from us within 24 hours
        </p>
      </div>
    </section>
  );
};

export default CTASection;
