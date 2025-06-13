
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora背景效果 */}
      <div className="absolute inset-0 aurora-bg" />
      
      {/* 流光背景 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl animate-aurora" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-accent/15 to-primary/10 rounded-full blur-3xl animate-aurora" style={{ animationDelay: '10s' }} />
      </div>

      {/* 网格背景 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(hsla(210, 11%, 15%, 0.3) 1px, transparent 1px),
                 linear-gradient(90deg, hsla(210, 11%, 15%, 0.3) 1px, transparent 1px)
               `,
               backgroundSize: '64px 64px'
             }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* 标题区域 */}
        <div className="mb-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-border/50 bg-card/50 backdrop-blur-sm text-muted-foreground">
            <Sparkles className="h-3 w-3" />
            基于AI的市场洞察
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight">
            <span className="text-gradient font-medium">停止猜测</span>
            <br />
            <span className="text-foreground">用户真正需要什么</span>
          </h1>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          每日从 Reddit 社区挖掘真实痛点，
          <br />
          <span className="text-accent">10分钟内</span> 获得可执行的商业洞察
        </p>

        {/* CTA按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="linear-button text-primary-foreground font-medium px-8 py-3 h-auto text-base"
          >
            开始探索
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-sm text-muted-foreground font-light">
            免费访问 · 无需注册
          </p>
        </div>

        {/* 数据指标 */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-2xl font-light text-primary mb-1">3+</div>
            <div className="text-xs text-muted-foreground font-medium tracking-wide uppercase">日均痛点</div>
          </div>
          <div className="text-center border-x border-border/30 px-8">
            <div className="text-2xl font-light text-accent mb-1">10min</div>
            <div className="text-xs text-muted-foreground font-medium tracking-wide uppercase">验证方案</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-gradient mb-1">99%</div>
            <div className="text-xs text-muted-foreground font-medium tracking-wide uppercase">真实需求</div>
          </div>
        </div>
      </div>

      {/* 底部渐变遮罩 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
