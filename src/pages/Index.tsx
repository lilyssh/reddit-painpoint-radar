
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
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
      <div onClick={scrollToPainPoints}>
        <HeroSection />
      </div>

      {/* Pain Points Section */}
      <section id="pain-points" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              今日 <span className="text-gradient">热门痛点</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              基于Reddit社区真实讨论，AI智能筛选的高价值商业机会
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {painPointsData.map((painPoint, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <PainPointCard
                  {...painPoint}
                  onViewDetails={() => handleViewDetails(index)}
                />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              想要获得完整的痛点分析？
            </h3>
            <p className="text-muted-foreground mb-8">
              订阅我们的每日报告，获取详细的解决方案和验证工具
            </p>
            <EmailCapture />
          </div>
        </div>
      </section>

      {/* Subscribe Dialog */}
      <Dialog open={showSubscribeDialog} onOpenChange={setShowSubscribeDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">
              🔒 Premium 内容
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-6">
            <p className="text-muted-foreground mb-6">
              这是高价值痛点，需要订阅才能查看完整分析
            </p>
            <EmailCapture />
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 RedditPainPoint Radar. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            <a href="#" className="hover:text-foreground transition-colors">DMCA报告</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
