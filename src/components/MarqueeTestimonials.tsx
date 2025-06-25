
import { Star } from "lucide-react";

const MarqueeTestimonials = () => {
  const testimonials = [
    {
      name: "张明",
      role: "SaaS创业者", 
      avatar: "ZM",
      content: "通过RPP Radar发现了一个被忽视的市场痛点，3个月内我们的产品用户增长了300%。",
      rating: 5
    },
    {
      name: "李婷",
      role: "产品经理",
      avatar: "LT",
      content: "每天10分钟浏览痛点报告，让我们的产品迭代方向更加精准，用户满意度大幅提升。",
      rating: 5
    },
    {
      name: "王强", 
      role: "投资人",
      avatar: "WQ",
      content: "RPP Radar帮助我们快速识别有潜力的创业方向，投资决策效率提升了50%。",
      rating: 5
    },
    {
      name: "陈雨",
      role: "独立开发者",
      avatar: "CY", 
      content: "发现的痛点都很真实，帮我找到了第一个成功的SaaS项目，现在月收入过万。",
      rating: 5
    },
    {
      name: "林欣",
      role: "运营总监",
      avatar: "LX",
      content: "通过痛点洞察优化了我们的营销策略，获客成本降低了40%，转化率提升了60%。",
      rating: 5
    },
    {
      name: "刘浩",
      role: "技术VP",
      avatar: "LH",
      content: "AI分析的痛点质量很高，为我们团队节省了大量市场调研时间，专注产品开发。",
      rating: 5
    }
  ];

  // 复制数组以实现无缝循环
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-16 bg-slate-800/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">真实用户反馈</h2>
          <p className="text-lg text-gray-300">
            来自创业者和产品人的真实评价
          </p>
        </div>

        {/* 跑马灯容器 */}
        <div className="relative">
          {/* 左右渐变遮罩 */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-800 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-800 to-transparent z-10" />
          
          {/* 滚动容器 */}
          <div className="marquee-container">
            <div className="marquee-content">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-80 bg-slate-900/60 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/30 transition-all duration-300 mx-4 glass-effect"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm line-clamp-3">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{testimonial.name}</div>
                      <div className="text-gray-400 text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeTestimonials;
