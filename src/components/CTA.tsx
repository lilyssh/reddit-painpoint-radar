
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-t border-purple-500/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          准备好发现下一个<br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">商业机会</span>了吗？
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          加入数千名创业者和产品经理，让AI帮你找到真正的市场需求
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-12 py-4 h-auto text-lg border-0 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
          >
            免费开始探索
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
          
          <div className="text-sm text-gray-400">
            无需信用卡 · 2分钟设置完成
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-purple-400 mb-2">1000+</div>
            <div className="text-gray-400">已发现痛点</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-gray-400">活跃用户</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-400 mb-2">98%</div>
            <div className="text-gray-400">用户满意度</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
