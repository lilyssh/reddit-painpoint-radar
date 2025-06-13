
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-500/10" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Data flow lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-data-flow" />
        <div className="absolute top-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-data-flow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-3/4 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-data-flow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
          <span className="text-gradient">别再猜</span>
          <br />
          <span className="text-foreground">用户想要什么</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          每日推送 <span className="text-accent font-semibold">Reddit</span> 已验证痛点
          <br />
          <span className="text-primary font-semibold">10分钟内</span> 获取高价值商机
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="gradient-primary text-white hover:scale-105 transition-transform glow">
            开始免费探索
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-foreground">
            无需注册 · 即刻体验
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">3+</div>
            <div className="text-sm text-muted-foreground">痛点/日</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">10分钟</div>
            <div className="text-sm text-muted-foreground">验证方案</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">99%</div>
            <div className="text-sm text-muted-foreground">真实需求</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
