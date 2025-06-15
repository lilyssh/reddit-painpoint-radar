
import { Search, Brain, BarChart3, Lightbulb } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "智能痛点挖掘",
      description: "AI自动扫描Reddit热门讨论，识别高价值用户痛点"
    },
    {
      icon: Brain,
      title: "深度需求分析", 
      description: "多维度分析用户需求强度、市场规模和解决方案可行性"
    },
    {
      icon: BarChart3,
      title: "趋势预测报告",
      description: "基于历史数据预测痛点发展趋势，提前布局市场机会"
    },
    {
      icon: Lightbulb,
      title: "解决方案建议",
      description: "提供具体可执行的解决方案和验证步骤"
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
              className="text-center group hover-lift glass-effect rounded-3xl p-8 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative mb-6 mx-auto">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-500 animate-glow group-hover:scale-110">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                {/* 装饰性光环 */}
                <div className="absolute inset-0 w-16 h-16 mx-auto bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{feature.description}</p>
              
              {/* 底部装饰线 */}
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent group-hover:via-purple-400 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
