
import { useState } from "react";
import PainPointCard from "./PainPointCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Filter } from "lucide-react";

interface PainPointsListProps {
  searchTerm: string;
  selectedCommunity: string;
  sortBy: string;
}

const PainPointsList = ({ searchTerm, selectedCommunity, sortBy }: PainPointsListProps) => {
  const [viewedCards, setViewedCards] = useState(0);

  const painPointsData = [
    {
      title: "客户流失后无法自动退款",
      severity: "🔥🔥🔥🔥🔥",
      tags: ["#支付", "#SaaS", "#自动化"],
      originText: "Stripe doesn't support auto-refund when customers churn. We have to manually process hundreds of refunds monthly, taking 2-3 hours each day. This is killing our team's productivity and customer satisfaction.",
      community: "SaaS",
      votes: 234,
      comments: 67,
      date: "2024/1/15",
      isPremium: true
    },
    {
      title: "多平台内容发布要重复操作",
      severity: "🔥🔥🔥🔥",
      tags: ["#社交媒体", "#自动化", "#营销"],
      originText: "Posting the same content to 5 platforms takes me 2 hours daily. Copy-paste from Twitter to LinkedIn, resize images for Instagram, adjust captions for each platform...",
      community: "Startups 初创公司",
      votes: 189,
      comments: 43,
      date: "2024/1/14",
      isPremium: false
    },
    {
      title: "团队协作工具数据不同步",
      severity: "🔥🔥🔥",
      tags: ["#协作", "#数据同步", "#生产力"],
      originText: "Our team uses Slack, Notion, and Trello but data never syncs. We waste 1 hour daily copying updates between tools. Need a unified workspace solution.",
      community: "Technology 科技",
      votes: 156,
      comments: 89,
      date: "2024/1/13",
      isPremium: false
    },
    {
      title: "视频会议中背景噪音干扰",
      severity: "🔥🔥🔥🔥",
      tags: ["#远程工作", "#音频", "#AI"],
      originText: "Kids screaming, dogs barking, construction noise - even with 'noise cancellation' it's embarrassing. Need AI that actually understands context and removes specific sounds.",
      community: "ChatGPT",
      votes: 298,
      comments: 124,
      date: "2024/1/12",
      isPremium: true
    },
    {
      title: "电商平台库存管理混乱",
      severity: "🔥🔥🔥🔥🔥",
      tags: ["#电商", "#库存", "#自动化"],
      originText: "Managing inventory across Amazon, Shopify, and eBay is a nightmare. Overselling happens weekly, customer complaints are increasing. Need real-time sync solution.",
      community: "Startups 初创公司",
      votes: 412,
      comments: 78,
      date: "2024/1/11",
      isPremium: true
    },
    {
      title: "代码审查流程效率低下",
      severity: "🔥🔥🔥",
      tags: ["#开发", "#代码审查", "#AI"],
      originText: "Code reviews take 2-3 days minimum. Senior devs are bottlenecked, junior devs wait around. Need AI-assisted pre-review to catch obvious issues first.",
      community: "Technology 科技",
      votes: 167,
      comments: 95,
      date: "2024/1/10",
      isPremium: false
    }
  ];

  const filteredPainPoints = painPointsData.filter(point => {
    if (selectedCommunity !== "全部社区" && point.community !== selectedCommunity) {
      return false;
    }
    if (searchTerm && !point.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !point.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))) {
      return false;
    }
    return true;
  });

  const handleViewDetails = (index: number) => {
    if (index >= 2 && viewedCards < 3) {
      // Premium content logic
      return;
    }
    
    if (viewedCards <= index) {
      setViewedCards(index + 1);
    }
  };

  return (
    <div className="space-y-6">
      {/* Active Filters */}
      {(selectedCommunity !== "全部社区" || searchTerm) && (
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-400">活跃筛选:</span>
          {selectedCommunity !== "全部社区" && (
            <Badge variant="outline" className="text-xs border-purple-500/50 text-purple-300 bg-purple-500/10">
              {selectedCommunity}
            </Badge>
          )}
          {searchTerm && (
            <Badge variant="outline" className="text-xs border-blue-500/50 text-blue-300 bg-blue-500/10">
              "{searchTerm}"
            </Badge>
          )}
        </div>
      )}

      {/* Pain Points Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPainPoints.map((painPoint, index) => (
          <div 
            key={index} 
            className="animate-fade-in group" 
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative">
              <PainPointCard
                {...painPoint}
                onViewDetails={() => handleViewDetails(index)}
              />
              
              {/* Additional Info Overlay */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-400 hover:text-white p-1 h-auto"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Community Badge */}
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Badge 
                  variant="outline" 
                  className="text-xs border-gray-600 text-gray-400 bg-slate-800/80 backdrop-blur-sm"
                >
                  r/{painPoint.community}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center py-12">
        <div className="inline-flex flex-col items-center gap-4">
          <div className="text-gray-400 text-sm">
            显示 {filteredPainPoints.length} 个痛点，共 127 个
          </div>
          <Button 
            variant="outline" 
            className="glass-effect border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-300"
          >
            加载更多痛点
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PainPointsList;
