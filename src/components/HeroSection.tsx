
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Zap, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 动态渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 animate-gradient" />
      
      {/* 浮动光球装饰 */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-bounce-gentle" />
      
      {/* 动态网格背景 */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px',
               animation: 'float 8s ease-in-out infinite'
             }} />
      </div>

      {/* 顶部装饰线 */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse-slow" />

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* 标题区域 */}
        <div className="mb-12 space-y-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium glass-effect text-gray-300 animate-fade-in hover-lift">
            <Sparkles className="h-4 w-4 text-purple-400 animate-pulse" />
            基于AI的市场洞察
            <Zap className="h-4 w-4 text-blue-400 animate-bounce-gentle" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight animate-fade-in" style={{animationDelay: '0.2s'}}>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">停止猜测</span>
            <br />
            <span className="text-white">用户真正需要什么</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
          每日从 Reddit 社区挖掘真实痛点，
          <br />
          <span className="text-blue-400 font-semibold animate-glow">10分钟内</span> 获得可执行的商业洞察
        </p>

        {/* CTA按钮 */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-10 py-4 h-auto text-lg border-0 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-110 animate-glow"
          >
            开始探索
            <ArrowDown className="ml-3 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300 animate-bounce-gentle" />
          </Button>
          <p className="text-sm text-gray-400 flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
            <Star className="h-4 w-4 text-yellow-400 animate-pulse" />
            免费访问 · 无需注册
          </p>
        </div>

        {/* 数据指标 */}
        <div className="grid grid-cols-3 gap-12 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="text-center group hover-lift glass-effect rounded-2xl py-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 animate-pulse-slow">3+</div>
            <div className="text-sm text-gray-400 font-medium tracking-wide uppercase">日均痛点</div>
          </div>
          <div className="text-center group hover-lift glass-effect rounded-2xl py-6">
            <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300 animate-glow">10min</div>
            <div className="text-sm text-gray-400 font-medium tracking-wide uppercase">验证方案</div>
          </div>
          <div className="text-center group hover-lift glass-effect rounded-2xl py-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 animate-pulse-slow">99%</div>
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
