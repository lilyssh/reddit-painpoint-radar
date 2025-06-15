
import { Search, Brain, BarChart3, Lightbulb } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "智能痛点挖掘",
      description: "AI自动扫描Reddit热门讨论，识别高价值用户痛点",
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-500/10 to-blue-600/10",
      hoverShadow: "group-hover:shadow-cyan-500/25",
      iconAnimation: "group-hover:rotate-12 group-hover:scale-110",
      decorColor: "cyan"
    },
    {
      icon: Brain,
      title: "深度需求分析", 
      description: "多维度分析用户需求强度、市场规模和解决方案可行性",
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-500/10 to-purple-600/10",
      hoverShadow: "group-hover:shadow-violet-500/25",
      iconAnimation: "group-hover:pulse group-hover:scale-105",
      decorColor: "violet"
    },
    {
      icon: BarChart3,
      title: "趋势预测报告",
      description: "基于历史数据预测痛点发展趋势，提前布局市场机会",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-500/10 to-emerald-600/10",
      hoverShadow: "group-hover:shadow-green-500/25",
      iconAnimation: "group-hover:-translate-y-1 group-hover:scale-110",
      decorColor: "green"
    },
    {
      icon: Lightbulb,
      title: "解决方案建议",
      description: "提供具体可执行的解决方案和验证步骤",
      gradient: "from-amber-500 to-yellow-600",
      bgGradient: "from-amber-500/10 to-yellow-600/10",
      hoverShadow: "group-hover:shadow-amber-500/25",
      iconAnimation: "group-hover:rotate-6 group-hover:scale-110 animate-bounce-gentle",
      decorColor: "amber"
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">强大功能</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            从痛点发现到解决方案，全流程AI驱动
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center group hover-lift glass-effect rounded-3xl p-8 animate-fade-in relative overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* 背景装饰渐变 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
              
              {/* 顶部流光线 */}
              <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-500`} />
              
              <div className="relative mb-6 mx-auto">
                {/* 主图标容器 */}
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto transition-all duration-500 ${feature.hoverShadow} relative group-hover:shadow-lg`}>
                  <feature.icon className={`h-8 w-8 text-white transition-all duration-500 ${feature.iconAnimation}`} />
                  
                  {/* 内部光环 */}
                  <div className={`absolute inset-2 bg-gradient-to-r ${feature.gradient} rounded-xl opacity-30 group-hover:opacity-50 blur-sm transition-all duration-500`} />
                </div>
                
                {/* 外围光环效果 */}
                <div className={`absolute inset-0 w-16 h-16 mx-auto bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 group-hover:blur-2xl transition-all duration-500`} />
                
                {/* 旋转装饰环 */}
                <div className={`absolute inset-0 w-20 h-20 mx-auto border border-current rounded-2xl opacity-0 group-hover:opacity-30 group-hover:rotate-45 transition-all duration-700`} style={{left: '-2px', top: '-2px'}} />
                
                {/* 脉冲点 */}
                <div className={`absolute top-2 right-2 w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500`} />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300 relative z-10">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 relative z-10">{feature.description}</p>
              
              {/* 底部彩色装饰线 */}
              <div className={`mt-6 h-px bg-gradient-to-r ${feature.gradient} opacity-30 group-hover:opacity-60 transition-all duration-500`} />
              
              {/* 右侧装饰条 */}
              <div className={`absolute right-0 top-1/4 w-1 h-1/2 bg-gradient-to-b ${feature.gradient} rounded-l-full opacity-0 group-hover:opacity-50 transition-all duration-500 transform translate-x-1 group-hover:translate-x-0`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
