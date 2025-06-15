
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Zap, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 超级Aurora背景效果 */}
      <div className="absolute inset-0 aurora-bg" />
      
      {/* 多层流光背景 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl animate-float-epic electric-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-accent/25 to-primary/15 rounded-full blur-3xl animate-float-epic electric-glow" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 left-1/5 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/30 rounded-full blur-2xl animate-pulse-electric" style={{ animationDelay: '8s' }} />
      </div>

      {/* 增强网格背景 */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(hsla(267, 95%, 75%, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, hsla(194, 100%, 75%, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '80px 80px',
               animation: 'electric-flow 20s ease-in-out infinite'
             }} />
      </div>

      {/* 电光装饰线 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-shimmer-electric" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-shimmer-electric" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* 标题区域 */}
        <div className="mb-12 space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm font-medium border border-border/60 bg-card/60 backdrop-blur-xl text-muted-foreground animate-glow-pulse shimmer-overlay">
            <Sparkles className="h-4 w-4 text-primary animate-pulse-electric" />
            基于AI的市场洞察
            <Zap className="h-4 w-4 text-accent animate-pulse-electric" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-light tracking-tight leading-tight animate-float-epic">
            <span className="text-gradient font-medium neon-text">停止猜测</span>
            <br />
            <span className="text-foreground">用户真正需要什么</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.5s' }}>
          每日从 Reddit 社区挖掘真实痛点，
          <br />
          <span className="text-accent neon-text">10分钟内</span> 获得可执行的商业洞察
        </p>

        {/* CTA按钮 */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in" style={{ animationDelay: '1s' }}>
          <Button 
            size="lg" 
            className="linear-button text-primary-foreground font-medium px-10 py-4 h-auto text-lg electric-glow group"
          >
            开始探索
            <ArrowDown className="ml-3 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
          <p className="text-sm text-muted-foreground font-light flex items-center gap-2">
            <Star className="h-4 w-4 text-accent animate-pulse-electric" />
            免费访问 · 无需注册
          </p>
        </div>

        {/* 数据指标 */}
        <div className="grid grid-cols-3 gap-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <div className="text-center group animate-float-epic" style={{ animationDelay: '2s' }}>
            <div className="text-3xl font-light text-gradient neon-text mb-2 group-hover:scale-110 transition-transform duration-300">3+</div>
            <div className="text-sm text-muted-foreground font-medium tracking-wide uppercase">日均痛点</div>
          </div>
          <div className="text-center border-x border-border/40 px-8 group animate-float-epic" style={{ animationDelay: '4s' }}>
            <div className="text-3xl font-light text-accent neon-text mb-2 group-hover:scale-110 transition-transform duration-300">10min</div>
            <div className="text-sm text-muted-foreground font-medium tracking-wide uppercase">验证方案</div>
          </div>
          <div className="text-center group animate-float-epic" style={{ animationDelay: '6s' }}>
            <div className="text-3xl font-light text-gradient neon-text mb-2 group-hover:scale-110 transition-transform duration-300">99%</div>
            <div className="text-sm text-muted-foreground font-medium tracking-wide uppercase">真实需求</div>
          </div>
        </div>
      </div>

      {/* 底部渐变遮罩 */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
};

export default HeroSection;
