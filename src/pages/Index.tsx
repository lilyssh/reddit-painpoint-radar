
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import PainPointCard from "@/components/PainPointCard";
import MarqueeTestimonials from "@/components/MarqueeTestimonials";
import CTA from "@/components/CTA";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
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
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div onClick={scrollToPainPoints} className="cursor-pointer">
        <HeroSection />
      </div>

      {/* Pain Points Section - 放在Hero Section下面 */}
      <section id="pain-points" className="py-24 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/20 bg-white/5 backdrop-blur-sm text-gray-300 mb-6">
              今日精选
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              热门 <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">痛点洞察</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              基于 Reddit 社区真实讨论，AI 智能筛选的高价值商业机会
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {painPointsData.map((painPoint, index) => (
              <div 
                key={index} 
                className="animate-fade-in hover:transform hover:scale-105 transition-all duration-300" 
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
              <h3 className="text-xl font-semibold mb-4 text-white">
                想要获得完整的痛点分析？
              </h3>
              <p className="text-gray-300 mb-8">
                订阅我们的每日报告，获取详细的解决方案和验证工具
              </p>
              <EmailCapture />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <Benefits />

      {/* Features */}
      <Features />

      {/* MarqueeTestimonials - 替换原来的 Testimonials */}
      <MarqueeTestimonials />

      {/* CTA */}
      <CTA />

      {/* Pricing */}
      <Pricing />

      {/* Footer */}
      <Footer />

      {/* Subscribe Dialog */}
      <Dialog open={showSubscribeDialog} onOpenChange={setShowSubscribeDialog}>
        <DialogContent className="bg-slate-900 border border-gray-700 max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-white">
              Premium 内容
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-6">
            <p className="text-gray-300 mb-6">
              这是高价值痛点，需要订阅才能查看完整分析
            </p>
            <EmailCapture />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
