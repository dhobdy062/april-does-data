
import { CheckCircle, FileText, Calculator, Users, TrendingUp, Award, HeadphonesIcon } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Catch-up & Cleanup",
      description: "Comprehensive bookkeeping solutions tailored to your business needs",
      features: [
        "Bookkeeping cleanup per month",
        "Multi-year catch-up available", 
        "Tax preparation support",
        "QuickBooks setup and training",
        "Ongoing monthly service available"
      ],
      icon: FileText,
      color: "blue"
    },
    {
      title: "Monthly Bookkeeping", 
      description: "Regular monthly services to keep your books current and compliant",
      features: [
        "Monthly reconciliation & reports",
        "P&L, Balance Sheet, Cash Flow",
        "Job Costing & project tracking", 
        "Payroll Support",
        "Quarterly financial review calls"
      ],
      icon: Calculator,
      color: "green"
    },
    {
      title: "QuickBooks Setup & Training",
      description: "Professional setup and personalized training for your team",
      features: [
        "Industry-specific chart of accounts",
        "Bank feed & app integration",
        "Custom invoice and report setup",
        "Personalized 1-on-1 training",
        "Ongoing support as needed"
      ],
      icon: Award,
      color: "purple"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive bookkeeping solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                service.color === 'blue' ? 'bg-blue-100' :
                service.color === 'green' ? 'bg-green-100' : 'bg-purple-100'
              }`}>
                <service.icon className={`w-6 h-6 ${
                  service.color === 'blue' ? 'text-brandBlue' :
                  service.color === 'green' ? 'text-green-600' : 'text-brandPurple'
                }`} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <p className="font-medium text-gray-900">Ongoing monthly service available</p>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 text-center">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <p className="font-medium text-gray-900">Quarterly financial review calls</p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 text-center">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <p className="font-medium text-gray-900">Ongoing support as needed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
