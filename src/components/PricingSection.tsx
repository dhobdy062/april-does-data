
import { Check, Zap, Star, Crown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingSectionProps {
  onGetAssessment: () => void;
}

const PricingSection = ({ onGetAssessment }: PricingSectionProps) => {
  const plans = [
    {
      name: "Basic",
      subtitle: "Startup", 
      description: "For solopreneurs and new businesses just getting started",
      icon: Zap,
      features: [
        "Monthly bank reconciliation",
        "Transaction categorization", 
        "Reconciliation reports",
        "Balance Sheet reports"
      ],
      popular: false,
      buttonText: "Get Started",
      buttonStyle: "bg-gray-900 hover:bg-gray-800 text-white"
    },
    {
      name: "Growth",
      subtitle: "Scaling",
      description: "For growing service providers and contractors", 
      icon: Star,
      features: [
        "Multiple accounts",
        "Credit card reconciliation",
        "Monthly financials", 
        "Payroll support (5 employees max)",
        "Quarterly financial review"
      ],
      popular: true,
      buttonText: "Get Started", 
      buttonStyle: "bg-gradient-to-r from-brandPurple to-brandPink hover:opacity-90 text-white"
    },
    {
      name: "Success", 
      subtitle: "Established",
      description: "For advanced operations or messy books",
      icon: Crown,
      features: [
        "Unlimited accounts/transactions",
        "Full payroll (up to 15 employees)",
        "Job costing",
        "Monthly financials & analysis", 
        "Quarterly tax prep support",
        "Monthly strategy call"
      ],
      popular: false,
      buttonText: "Get Started",
      buttonStyle: "bg-gray-900 hover:bg-gray-800 text-white"
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Do The <span className="gradient-text">Math</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden fees, no surprises. Choose the perfect plan that grows with your business.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-brandPurple scale-105' : 'hover:-translate-y-2'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-brandPurple to-brandPink text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                  plan.name === 'Basic' ? 'bg-blue-100' :
                  plan.name === 'Growth' ? 'bg-purple-100' : 'bg-yellow-100'
                }`}>
                  <plan.icon className={`w-8 h-8 ${
                    plan.name === 'Basic' ? 'text-brandBlue' :
                    plan.name === 'Growth' ? 'text-brandPurple' : 'text-yellow-600'
                  }`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm font-medium text-gray-500 mb-2">{plan.subtitle}</p>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className={`w-full py-3 font-medium rounded-xl transition-all duration-300 ${plan.buttonStyle}`}>
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Not Sure What You Need?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get a personalized recommendation based on your business needs and current bookkeeping situation.
          </p>
          <Button 
            onClick={onGetAssessment}
            size="lg"
            className="bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transform transition-all duration-200 hover:scale-105 shadow-xl group"
          >
            Take the Assessment
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
