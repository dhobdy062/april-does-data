import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, BookOpen, Check } from "lucide-react";
export default function AuthoritySection() {
  const credentials = [{
    icon: Shield,
    title: "QuickBooks ProAdvisor",
    description: "Certified expert"
  }, {
    icon: Award,
    title: "15+ Years Experience",
    description: "Proven track record"
  }, {
    icon: Users,
    title: "50+ Happy Clients",
    description: "Nationwide service"
  }, {
    icon: BookOpen,
    title: "QuickBooks Training",
    description: "On Request"
  }];
  const services = [{
    category: "Catch-up & Cleanup",
    items: ["Bookkeeping cleanup per month", "Multi-year catch-up available", "QuickBooks setup and training", "Ongoing monthly service available"]
  }, {
    category: "Monthly Bookkeeping",
    items: ["Monthly reconciliation & reports", "P&L, Balance Sheet, Cash Flow", "Job Costing & project tracking", "Payroll Support", "Quarterly financial review calls"]
  }, {
    category: "QuickBooks Setup & Training",
    items: ["Industry-specific chart of accounts", "Bank feed & app integration", "Custom invoice and report setup", "Personalized 1-on-1 training", "Ongoing support as needed"]
  }];
  return <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center" alt="Professional bookkeeper working with financial documents" className="w-full h-64 object-cover rounded-xl" />
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Books Reconciled Monthly</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Tax-Ready Financials</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Strategic Business Insights</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-3xl">💼</span>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Expert Help Without the{" "}
              <span className="gradient-text">Overhead</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              April Does Data is a Certified QuickBooks ProAdvisor who works with clients remotely 
              across the country. Whether your books are a mess, your payroll is behind, or you're 
              prepping for a surprise audit, we step in and clean it up.{" "}
              <span className="font-semibold text-gray-900">Fast. Accurate. Done Right. Even when no one's looking.</span>
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {credentials.map((cred, index) => <Card key={index} className="border-0 shadow-md hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-xl flex items-center justify-center">
                      {cred.title === "QuickBooks ProAdvisor" ? <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/5d277938d_logoQB.png" alt="QuickBooks ProAdvisor Certified" className="w-8 h-8" /> : <cred.icon className="w-6 h-6 text-blue-600" />}
                    </div>
                    <div className="font-semibold text-gray-900 mb-1">{cred.title}</div>
                    <div className="text-sm text-gray-600">{cred.description}</div>
                  </CardContent>
                </Card>)}
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <img src="https://logos-world.net/wp-content/uploads/2021/03/QuickBooks-Logo.png" alt="QuickBooks" className="w-6 h-6" />
                <span className="text-sm font-medium text-gray-700">QuickBooks</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <span className="text-lg">🏛️</span>
                <span className="text-sm font-medium text-gray-700">IRS Compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Services</span>
            </h3>
            <p className="text-xl text-gray-600">
              Comprehensive bookkeeping solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover-lift">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                    {service.category}
                  </h4>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => <li key={itemIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
}