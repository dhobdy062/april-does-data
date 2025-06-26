import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'Services',
    href: '#services'
  }, {
    name: 'Packages',
    href: '#packages'
  }, {
    name: 'Blog',
    href: '#blog'
  }, {
    name: 'Testimonials',
    href: '#testimonials'
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            
            <span className="text-xl font-bold text-gray-900">April Does Data</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <a key={item.name} href={item.href} className="text-gray-700 hover:text-brandBlue transition-colors duration-200 font-medium">
                {item.name}
              </a>)}
            <div className="flex items-center space-x-4">
              <a href="tel:323-749-9444" className="flex items-center text-gray-700 hover:text-brandBlue transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                323-749-9444
              </a>
              <Button className="bg-gradient-to-r from-brandBlue to-brandPurple hover:from-brandPurple hover:to-brandPink transition-all duration-300">
                Free Assessment
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-brandBlue">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navItems.map(item => <a key={item.name} href={item.href} className="block px-3 py-2 text-gray-700 hover:text-brandBlue transition-colors duration-200" onClick={() => setIsOpen(false)}>
                  {item.name}
                </a>)}
              <div className="pt-4 space-y-2">
                <a href="tel:323-749-9444" className="flex items-center px-3 py-2 text-gray-700">
                  <Phone className="w-4 h-4 mr-2" />
                  323-749-9444
                </a>
                <Button className="w-full bg-gradient-to-r from-brandBlue to-brandPurple">
                  Free Assessment
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;