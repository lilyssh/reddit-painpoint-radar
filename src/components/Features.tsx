
import { Search, Brain, BarChart3, Lightbulb } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "智能痛点挖掘",
      description: "AI自动扫描Reddit热门讨论，识别高价值用户痛点",
      image: "/placeholder.svg"
    },
    {
      icon: Brain,
      title: "深度需求分析", 
      description: "多维度分析用户需求强度、市场规模和解决方案可行性",
      image: "/placeholder.svg"
    },
    {
      icon: BarChart3,
      title: "趋势预测报告",
      description: "基于历史数据预测痛点发展趋势，提前布局市场机会",
      image: "/placeholder.svg"
    },
    {
      icon: Lightbulb,
      title: "解决方案建议",
      description: "提供具体可执行的解决方案和验证步骤",
      image: "/placeholder.svg"
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

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  {feature.description}
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20">
                  <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">功能演示图</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
