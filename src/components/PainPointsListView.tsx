
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, MessageCircle, TrendingUp, Clock, Users, Star, Bookmark, BarChart3 } from "lucide-react";

interface PainPointsListViewProps {
  searchTerm: string;
  selectedCommunity: string;
  sortBy: string;
}

const PainPointsListView = ({ searchTerm, selectedCommunity, sortBy }: PainPointsListViewProps) => {
  const [bookmarkedItems, setBookmarkedItems] = useState<number[]>([]);

  const painPointsData = [
    {
      title: "客户流失后无法自动退款",
      severity: 5,
      tags: ["#支付", "#SaaS", "#自动化"],
      originText: "Stripe doesn't support auto-refund when customers churn. We have to manually process hundreds of refunds monthly, taking 2-3 hours each day. This is killing our team's productivity and customer satisfaction.",
      community: "SaaS",
      votes: 234,
      comments: 67,
      date: "2024/1/15",
      isPremium: true,
      opportunity: "自动退款管理工具",
      marketSize: "中等"
    },
    {
      title: "多平台内容发布要重复操作",
      severity: 4,
      tags: ["#社交媒体", "#自动化", "#营销"],
      originText: "Posting the same content to 5 platforms takes me 2 hours daily. Copy-paste from Twitter to LinkedIn, resize images for Instagram, adjust captions for each platform...",
      community: "Startups 初创公司",
      votes: 189,
      comments: 43,
      date: "2024/1/14",
      isPremium: false,
      opportunity: "多平台内容分发工具",
      marketSize: "大型"
    },
    {
      title: "团队协作工具数据不同步",
      severity: 3,
      tags: ["#协作", "#数据同步", "#生产力"],
      originText: "Our team uses Slack, Notion, and Trello but data never syncs. We waste 1 hour daily copying updates between tools. Need a unified workspace solution.",
      community: "Technology 科技",
      votes: 156,
      comments: 89,
      date: "2024/1/13",
      isPremium: false,
      opportunity: "统一工作空间",
      marketSize: "大型"
    },
    {
      title: "视频会议中背景噪音干扰",
      severity: 4,
      tags: ["#远程工作", "#音频", "#AI"],
      originText: "Kids screaming, dogs barking, construction noise - even with 'noise cancellation' it's embarrassing. Need AI that actually understands context and removes specific sounds.",
      community: "ChatGPT",
      votes: 298,
      comments: 124,
      date: "2024/1/12",
      isPremium: true,
      opportunity: "智能音频处理",
      marketSize: "中等"
    },
    {
      title: "电商平台库存管理混乱",
      severity: 5,
      tags: ["#电商", "#库存", "#自动化"],
      originText: "Managing inventory across Amazon, Shopify, and eBay is a nightmare. Overselling happens weekly, customer complaints are increasing. Need real-time sync solution.",
      community: "Startups 初创公司",
      votes: 412,
      comments: 78,
      date: "2024/1/11",
      isPremium: true,
      opportunity: "多平台库存同步",
      marketSize: "大型"
    },
    {
      title: "代码审查流程效率低下",
      severity: 3,
      tags: ["#开发", "#代码审查", "#AI"],
      originText: "Code reviews take 2-3 days minimum. Senior devs are bottlenecked, junior devs wait around. Need AI-assisted pre-review to catch obvious issues first.",
      community: "Technology 科技",
      votes: 167,
      comments: 95,
      date: "2024/1/10",
      isPremium: false,
      opportunity: "AI代码审查助手",
      marketSize: "中等"
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

  const getSeverityColor = (severity: number) => {
    if (severity >= 5) return "text-red-400";
    if (severity >= 4) return "text-orange-400";
    return "text-yellow-400";
  };

  const getMarketSizeColor = (size: string) => {
    switch (size) {
      case "大型": return "text-green-400";
      case "中等": return "text-yellow-400";
      case "小型": return "text-gray-400";
      default: return "text-gray-400";
    }
  };

  const handleBookmark = (index: number) => {
    setBookmarkedItems(prev => 
      prev.includes(index) 
        ? prev.filter(id => id !== index)
        : [...prev, index]
    );
  };

  const handleAnalyze = (point: any) => {
    console.log("分析痛点:", point.title);
    // 这里可以添加分析功能
  };

  const handleRowClick = (point: any) => {
    console.log("查看痛点详情:", point.title);
    // 这里可以添加查看详情功能
  };

  return (
    <div className="space-y-4">
      {/* Table Header */}
      <Card className="bg-slate-800/50 border-gray-700">
        <div className="p-4">
          <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-400">
            <div className="col-span-4">痛点标题</div>
            <div className="col-span-2">严重程度</div>
            <div className="col-span-2">商机评估</div>
            <div className="col-span-1">热度</div>
            <div className="col-span-1">社区</div>
            <div className="col-span-1">日期</div>
            <div className="col-span-1">操作</div>
          </div>
        </div>
      </Card>

      {/* List Items */}
      <div className="space-y-3">
        {filteredPainPoints.map((point, index) => (
          <Card 
            key={index} 
            className="bg-slate-800/30 border-gray-700 hover:bg-slate-800/50 transition-all duration-300 group cursor-pointer"
            onClick={() => handleRowClick(point)}
          >
            <div className="p-4">
              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Title & Tags */}
                <div className="col-span-4">
                  <div className="flex items-start gap-3">
                    {point.isPremium && (
                      <Star className="h-4 w-4 text-yellow-400 mt-1 flex-shrink-0" />
                    )}
                    <div>
                      <h3 className="text-white font-medium text-sm mb-2 group-hover:text-purple-300 transition-colors">
                        {point.title}
                      </h3>
                      <div className="flex flex-wrap gap-1">
                        {point.tags.slice(0, 2).map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs border-gray-600 text-gray-400 bg-slate-700/50">
                            {tag}
                          </Badge>
                        ))}
                        {point.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs border-gray-600 text-gray-400 bg-slate-700/50">
                            +{point.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Severity */}
                <div className="col-span-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${getSeverityColor(point.severity)}`}>
                      {"🔥".repeat(point.severity)}
                    </span>
                  </div>
                </div>

                {/* Market Opportunity */}
                <div className="col-span-2">
                  <div>
                    <div className="text-sm text-white font-medium">{point.opportunity}</div>
                    <div className={`text-xs ${getMarketSizeColor(point.marketSize)}`}>
                      市场: {point.marketSize}
                    </div>
                  </div>
                </div>

                {/* Votes */}
                <div className="col-span-1">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-white">{point.votes}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <MessageCircle className="h-3 w-3 text-gray-400" />
                    <span className="text-xs text-gray-400">{point.comments}</span>
                  </div>
                </div>

                {/* Community */}
                <div className="col-span-1">
                  <Badge variant="outline" className="text-xs border-purple-500/50 text-purple-300 bg-purple-500/10">
                    {point.community}
                  </Badge>
                </div>

                {/* Date */}
                <div className="col-span-1">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-gray-400" />
                    <span className="text-xs text-gray-400">{point.date}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="col-span-1">
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAnalyze(point);
                      }}
                      className="text-blue-400 hover:text-blue-300 p-1 h-auto"
                      title="AI分析"
                    >
                      <BarChart3 className="h-4 w-4" />
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookmark(index);
                      }}
                      className={`p-1 h-auto ${bookmarkedItems.includes(index) ? 'text-yellow-400' : 'text-gray-400 hover:text-yellow-400'}`}
                      title="收藏"
                    >
                      <Bookmark className="h-4 w-4" />
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="text-gray-400 hover:text-white p-1 h-auto"
                      title="打开原链接"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Expandable Content */}
              <div className="mt-3 pt-3 border-t border-gray-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-sm text-gray-300 line-clamp-2">
                  <span className="text-gray-500">原文:</span> {point.originText}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center py-8">
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

export default PainPointsListView;
