
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
    <section id="benefits" className="py-24 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">为什么选择RPP Radar？</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            让数据说话，用真实需求指导商业决策
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
