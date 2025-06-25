import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "She knows her Sh!%",
      description: "April transformed our messy books into a clean, organized system. Now I actually understand my business finances!",
      author: "Jane D.",
      role: "Electrician & Small Business Owner",
      avatar: "JD",
      color: "bg-pink-500"
    },
    {
      text: "Finally, books that make sense",
      description: "The cleanup service was a game-changer. April caught errors I didn't even know existed and set up systems that actually work.",
      author: "Mike R.", 
      role: "Property Management",
      avatar: "MR",
      color: "bg-blue-500"
    },
    {
      text: "Worth every penny",
      description: "The monthly strategy calls alone have saved me thousands. April doesn't just do books – she helps me make better business decisions.",
      author: "Sarah T.",
      role: "General Contractor", 
      avatar: "ST",
      color: "bg-orange-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
            Not sure what you need?
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 mb-8">
            Take the Free Assessment
          </Button>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real feedback from real business owners
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 transform ${
                    index === currentTestimonial ? 'scale-105 opacity-100' : 'scale-95 opacity-70'
                  }`}
                >
                  {/* Quote icon */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${testimonial.color}`}>
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Stars */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Testimonial text */}
                  <blockquote className="text-lg font-semibold text-gray-900 mb-4">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <p className="text-gray-600 mb-6">{testimonial.description}</p>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${testimonial.color}`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-brandPurple' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
