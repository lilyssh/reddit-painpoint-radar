
import { Shield, Zap, Target, TrendingUp } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "真实数据驱动",
      description: "基于Reddit真实用户讨论，避免虚假需求和市场噪音",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-500/10 to-teal-600/10",
      hoverShadow: "group-hover:shadow-emerald-500/25",
      iconAnimation: "group-hover:rotate-12"
    },
    {
      icon: Zap,
      title: "快速验证",
      description: "10分钟内获得完整的痛点分析和验证方案",
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-500/10 to-orange-600/10",
      hoverShadow: "group-hover:shadow-yellow-500/25",
      iconAnimation: "group-hover:scale-110 group-hover:rotate-6"
    },
    {
      icon: Target,
      title: "精准定位",
      description: "AI智能筛选高价值痛点，直击商业机会核心",
      gradient: "from-red-500 to-pink-600",
      bgGradient: "from-red-500/10 to-pink-600/10",
      hoverShadow: "group-hover:shadow-red-500/25",
      iconAnimation: "group-hover:scale-105 group-hover:-rotate-3"
    },
    {
      icon: TrendingUp,
      title: "持续更新",
      description: "每日更新最新痛点，紧跟市场趋势变化",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-500/10 to-indigo-600/10",
      hoverShadow: "group-hover:shadow-blue-500/25",
      iconAnimation: "group-hover:translate-y-1 group-hover:scale-110"
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
              className="text-center group hover-lift glass-effect rounded-3xl p-8 animate-fade-in relative overflow-hidden"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              {/* 背景装饰渐变 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
              
              {/* 顶部装饰线 */}
              <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />
              
              <div className="relative mb-6 mx-auto">
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto transition-all duration-500 ${benefit.hoverShadow} relative group-hover:shadow-lg`}>
                  <benefit.icon className={`h-8 w-8 text-white transition-transform duration-500 ${benefit.iconAnimation}`} />
                  
                  {/* 图标光环效果 */}
                  <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 group-hover:blur-2xl transition-all duration-500`} />
                </div>
                
                {/* 脉冲圆环 */}
                <div className={`absolute inset-0 w-16 h-16 mx-auto border-2 border-transparent bg-gradient-to-r ${benefit.gradient} rounded-2xl opacity-0 group-hover:opacity-30 animate-ping`} style={{animationDuration: '2s'}} />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300 relative z-10">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 relative z-10">{benefit.description}</p>
              
              {/* 底部装饰线 */}
              <div className={`mt-6 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-30 group-hover:opacity-60 transition-all duration-500`} />
              
              {/* 侧边装饰 */}
              <div className={`absolute left-0 top-1/2 w-1 h-12 bg-gradient-to-b ${benefit.gradient} rounded-r-full opacity-0 group-hover:opacity-70 transform -translate-y-1/2 transition-all duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
