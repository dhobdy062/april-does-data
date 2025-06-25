
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Calculator, Users, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Certified QuickBooks ProAdvisor
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Expert Help Without the{' '}
              <span className="gradient-text">Overhead</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              April Does Data is a Certified QuickBooks ProAdvisor who works with clients remotely across the country. 
              Whether your books are a mess, your payroll is behind, or you're prepping for a surprise audit, we step in and clean it up.{' '}
              <span className="font-semibold text-gray-900">Fast. Accurate. Done Right. Even when no one's looking.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brandBlue to-brandPurple hover:from-brandPurple hover:to-brandPink transition-all duration-300 text-lg px-8 py-4"
              >
                Get My Free Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-brandBlue text-brandBlue hover:bg-brandBlue hover:text-white transition-all duration-300 text-lg px-8 py-4"
              >
                View Packages
              </Button>
            </div>
            
            {/* Service highlights */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="flex items-center space-x-2 text-green-600">
                <BookOpen className="w-5 h-5" />
                <span className="text-sm font-medium">Books Reconciled Monthly</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-600">
                <Calculator className="w-5 h-5" />
                <span className="text-sm font-medium">Tax-Ready Financials</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-600">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium">Strategic Business Insights</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Stats cards and image */}
          <div className="relative">
            {/* Main image placeholder */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
                alt="Professional bookkeeping workspace"
                className="w-full h-64 object-cover rounded-lg"
              />
              
              {/* Floating icon */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-gentle">
                <Calculator className="w-8 h-8 text-white" />
              </div>
            </div>
            
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-lg animate-fade-in" style={{animationDelay: '0.3s'}}>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-brandBlue" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">QuickBooks ProAdvisor</p>
                    <p className="text-sm text-gray-600">Certified expert</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-brandPurple" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">15+ Years Experience</p>
                    <p className="text-sm text-gray-600">Proven track record</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg animate-fade-in" style={{animationDelay: '0.5s'}}>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">50+ Happy Clients</p>
                    <p className="text-sm text-gray-600">Nationwide service</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg animate-fade-in" style={{animationDelay: '0.6s'}}>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">QuickBooks Training</p>
                    <p className="text-sm text-gray-600">On Request</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Badges */}
            <div className="flex justify-center space-x-6 mt-6">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <img src="https://via.placeholder.com/40x20/4F46E5/FFFFFF?text=QB" alt="QuickBooks" className="h-5" />
                <span>QuickBooks</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <img src="https://via.placeholder.com/40x20/059669/FFFFFF?text=IRS" alt="IRS Compliant" className="h-5" />
                <span>IRS Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
