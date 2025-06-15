
import { Shield, Zap, Target, TrendingUp } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "真实数据驱动",
      description: "基于Reddit真实用户讨论，避免虚假需求和市场噪音"
    },
    {
      icon: Zap,
      title: "快速验证",
      description: "10分钟内获得完整的痛点分析和验证方案"
    },
    {
      icon: Target,
      title: "精准定位",
      description: "AI智能筛选高价值痛点，直击商业机会核心"
    },
    {
      icon: TrendingUp,
      title: "持续更新",
      description: "每日更新最新痛点，紧跟市场趋势变化"
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-slate-800/50 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">为什么选择RPP Radar？</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            让数据说话，用真实需求指导商业决策
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center group hover-lift glass-effect rounded-3xl p-8 animate-fade-in"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <div className="relative mb-6 mx-auto">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-500 animate-glow group-hover:scale-110">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                {/* 装饰性光环 */}
                <div className="absolute inset-0 w-16 h-16 mx-auto bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{benefit.description}</p>
              
              {/* 底部装饰线 */}
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent group-hover:via-purple-400 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
