
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "张明",
      role: "SaaS创业者",
      avatar: "/placeholder.svg",
      content: "通过RPP Radar发现了一个被忽视的市场痛点，3个月内我们的产品用户增长了300%。",
      rating: 5
    },
    {
      name: "李婷",
      role: "产品经理",
      avatar: "/placeholder.svg", 
      content: "每天10分钟浏览痛点报告，让我们的产品迭代方向更加精准，用户满意度大幅提升。",
      rating: 5
    },
    {
      name: "王强",
      role: "投资人",
      avatar: "/placeholder.svg",
      content: "RPP Radar帮助我们快速识别有潜力的创业方向，投资决策效率提升了50%。",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">用户怎么说</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            来自真实用户的反馈
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
