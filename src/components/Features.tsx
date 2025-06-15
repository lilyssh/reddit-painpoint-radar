
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
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">强大功能</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            从痛点发现到解决方案，全流程AI驱动
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
