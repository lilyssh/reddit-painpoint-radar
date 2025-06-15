
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Zap, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 简洁优雅的渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
      
      {/* 微妙的网格背景 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }} />
      </div>

      {/* 顶部装饰线 */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* 标题区域 */}
        <div className="mb-12 space-y-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium border border-purple-500/20 bg-white/5 backdrop-blur-xl text-gray-300">
            <Sparkles className="h-4 w-4 text-purple-400" />
            基于AI的市场洞察
            <Zap className="h-4 w-4 text-blue-400" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">停止猜测</span>
            <br />
            <span className="text-white">用户真正需要什么</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
          每日从 Reddit 社区挖掘真实痛点，
          <br />
          <span className="text-blue-400 font-semibold">10分钟内</span> 获得可执行的商业洞察
        </p>

        {/* CTA按钮 */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-10 py-4 h-auto text-lg border-0 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
          >
            开始探索
            <ArrowDown className="ml-3 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-400" />
            免费访问 · 无需注册
          </p>
        </div>

        {/* 数据指标 */}
        <div className="grid grid-cols-3 gap-12 max-w-2xl mx-auto">
          <div className="text-center group">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">3+</div>
            <div className="text-sm text-gray-400 font-medium tracking-wide uppercase">日均痛点</div>
          </div>
          <div className="text-center border-x border-gray-700 px-8 group">
            <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">10min</div>
            <div className="text-sm text-gray-400 font-medium tracking-wide uppercase">验证方案</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">99%</div>
            <div className="text-sm text-gray-400 font-medium tracking-wide uppercase">真实需求</div>
          </div>
        </div>
      </div>

      {/* 底部渐变遮罩 */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
};

export default HeroSection;
