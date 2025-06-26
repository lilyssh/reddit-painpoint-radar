
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Zap, Star, TrendingUp, Users, Shield, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/pain-points');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 动态渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 animate-gradient" />
      
      {/* 粒子效果背景 */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-20" />
        <div className="absolute top-1/4 right-32 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-30" />
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping opacity-25" style={{animationDelay: '1s'}} />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse opacity-20" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-300 rounded-full animate-ping opacity-15" style={{animationDelay: '0.5s'}} />
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-pink-300 rounded-full animate-pulse opacity-25" style={{animationDelay: '1.5s'}} />
      </div>
      
      {/* 浮动光球装饰 - 增强发光效果 */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl animate-float opacity-60" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/30 rounded-full blur-3xl animate-float opacity-60" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-bounce-gentle opacity-40" />
      <div className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-pink-500/25 rounded-full blur-3xl animate-float opacity-50" style={{animationDelay: '3s'}} />
      
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
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight animate-fade-in" style={{animationDelay: '0.2s'}}>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">停止猜测</span>
            <br />
            <span className="text-white hover:animate-[rubberBand_1s_ease-in-out] cursor-default">用户真正需要什么</span>
          </h1>
        </div>
        
        <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
          每日从 Reddit 社区挖掘真实痛点，
          <br />
          <span className="text-blue-400 font-semibold">10分钟内</span> 获得可执行的商业洞察
        </p>

        {/* CTA按钮 - 增强视觉效果 */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <Button 
            size="lg" 
            onClick={handleExploreClick}
            className="group relative bg-gradient-to-r from-purple-600 via-blue-600 to-aqua-600 hover:from-aqua-500 hover:via-blue-500 hover:to-purple-500 text-white font-bold px-12 py-6 h-auto text-xl border-0 shadow-2xl hover:shadow-purple-500/40 transition-all duration-500 hover:scale-110 animate-glow overflow-hidden"
          >
            {/* 按钮内部光效 */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <Rocket className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
            开始探索
            <ArrowDown className="ml-3 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300 animate-bounce-gentle" />
          </Button>
          
          <div className="flex items-center gap-3 text-sm text-gray-400 glass-effect px-6 py-3 rounded-full">
            <Shield className="h-4 w-4 text-green-400" />
            <span>免费访问 · 无需注册</span>
            <Star className="h-4 w-4 text-yellow-400 animate-pulse" />
          </div>
        </div>

        {/* 数据指标 - 添加图标 */}
        <div className="grid grid-cols-3 gap-12 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="text-center group hover-lift glass-effect rounded-2xl py-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <TrendingUp className="h-8 w-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 animate-pulse-slow">1000+</div>
            <div className="text-sm text-gray-400 font-medium tracking-wide uppercase">已发现痛点</div>
          </div>
          
          <div className="text-center group hover-lift glass-effect rounded-2xl py-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Zap className="h-8 w-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">10min</div>
            <div className="text-sm text-gray-400 font-medium tracking-wide uppercase">验证方案</div>
          </div>
          
          <div className="text-center group hover-lift glass-effect rounded-2xl py-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Users className="h-8 w-8 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 animate-pulse-slow">500+</div>
            <div className="text-sm text-gray-400 font-medium tracking-wide uppercase">活跃用户</div>
          </div>
        </div>
      </div>

      {/* 底部渐变遮罩 */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
};

export default HeroSection;
