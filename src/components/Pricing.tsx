
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "免费版",
      price: "¥0",
      period: "/月",
      description: "适合个人用户和小团队",
      features: [
        "每日3个痛点洞察",
        "基础市场分析",
        "社区支持",
        "标准痛点筛选"
      ],
      buttonText: "免费开始",
      popular: false
    },
    {
      name: "专业版",
      price: "¥99",
      period: "/月", 
      description: "适合成长型企业和创业团队",
      features: [
        "每日10个痛点洞察",
        "深度需求分析",
        "趋势预测报告",
        "解决方案建议",
        "优先客服支持",
        "API集成"
      ],
      buttonText: "立即升级",
      popular: true
    },
    {
      name: "企业版",
      price: "¥299",
      period: "/月",
      description: "适合大型企业和投资机构",
      features: [
        "无限痛点洞察",
        "定制化分析报告",
        "专属客户经理",
        "白标解决方案",
        "高级API权限",
        "数据导出功能"
      ],
      buttonText: "联系销售",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">选择适合的方案</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            从免费开始，随业务增长升级
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 border ${
                plan.popular 
                  ? 'border-purple-500 bg-gradient-to-b from-purple-900/20 to-blue-900/20' 
                  : 'border-gray-700 bg-slate-900/50'
              } hover:transform hover:scale-105 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    最受欢迎
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0'
                    : 'bg-transparent border border-gray-600 text-white hover:bg-gray-800'
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
