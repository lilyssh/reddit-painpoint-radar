
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import HeroSection from "@/components/HeroSection";
import PainPointCard from "@/components/PainPointCard";
import EmailCapture from "@/components/EmailCapture";

const Index = () => {
  const [showSubscribeDialog, setShowSubscribeDialog] = useState(false);
  const [viewedCards, setViewedCards] = useState(0);
  const { toast } = useToast();

  const painPointsData = [
    {
      title: "客户流失后无法自动退款",
      severity: "🔥🔥🔥🔥",
      tags: ["#支付", "#SaaS"],
      originText: "Stripe doesn't support auto-refund when customers churn. We have to manually process hundreds of refunds monthly, taking 2-3 hours each day..."
    },
    {
      title: "多平台内容发布要重复操作",
      severity: "🔥🔥🔥",
      tags: ["#社交媒体", "#自动化"],
      originText: "Posting the same content to 5 platforms takes me 2 hours daily. Copy-paste from Twitter to LinkedIn, resize images for Instagram..."
    },
    {
      title: "团队协作工具数据不同步",
      severity: "🔥🔥🔥🔥🔥",
      tags: ["#协作", "#数据同步"],
      originText: "Our team uses Slack, Notion, and Trello but data never syncs. We waste 1 hour daily copying updates between tools...",
      isPremium: true
    }
  ];

  const handleViewDetails = (index: number) => {
    if (index === 2 && viewedCards < 3) {
      setShowSubscribeDialog(true);
      return;
    }
    
    if (viewedCards <= index) {
      setViewedCards(index + 1);
    }

    toast({
      title: "查看详情",
      description: "升级到Pro版本解锁完整分析报告",
    });
  };

  const scrollToPainPoints = () => {
    document.getElementById('pain-points')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div onClick={scrollToPainPoints} className="cursor-pointer">
        <HeroSection />
      </div>

      {/* Pain Points Section */}
      <section id="pain-points" className="py-24 px-6 relative">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse-subtle" />
          <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse-subtle" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-border/50 bg-card/50 backdrop-blur-sm text-muted-foreground mb-6">
              今日精选
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
              热门 <span className="text-gradient font-medium">痛点洞察</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              基于 Reddit 社区真实讨论，AI 智能筛选的高价值商业机会
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {painPointsData.map((painPoint, index) => (
              <div 
                key={index} 
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PainPointCard
                  {...painPoint}
                  onViewDetails={() => handleViewDetails(index)}
                />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="max-w-lg mx-auto">
              <h3 className="text-xl font-medium mb-4 text-foreground">
                想要获得完整的痛点分析？
              </h3>
              <p className="text-muted-foreground mb-8 font-light leading-relaxed">
                订阅我们的每日报告，获取详细的解决方案和验证工具
              </p>
              <EmailCapture />
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Dialog */}
      <Dialog open={showSubscribeDialog} onOpenChange={setShowSubscribeDialog}>
        <DialogContent className="linear-card max-w-md border-border/50">
          <DialogHeader>
            <DialogTitle className="text-center text-foreground font-medium">
              Premium 内容
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-6">
            <p className="text-muted-foreground mb-6 font-light">
              这是高价值痛点，需要订阅才能查看完整分析
            </p>
            <EmailCapture />
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="border-t border-border/30 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-sm font-light">
            © 2024 RedditPainPoint Radar. All rights reserved.
          </p>
          <div className="mt-4">
            <a 
              href="#" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors font-light"
            >
              DMCA报告
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
