import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ExternalLink, TrendingUp, Star, Bookmark, CheckCircle, ThumbsUp, MessageCircle, Globe, Building, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PainPointsListViewProps {
  searchTerm: string;
  selectedCommunity: string;
  sortBy: string;
  showBookmarkedOnly?: boolean;
}

const PainPointsListView = ({ searchTerm, selectedCommunity, sortBy, showBookmarkedOnly = false }: PainPointsListViewProps) => {
  const [bookmarkedItems, setBookmarkedItems] = useState<number[]>([]);
  const [likedItems, setLikedItems] = useState<number[]>([]);
  const [loadingItems, setLoadingItems] = useState<number[]>([]);
  const [userRatings, setUserRatings] = useState<{ [key: number]: number }>({});
  const [userTags, setUserTags] = useState<{ [key: number]: string[] }>({});
  const [showUsersDialog, setShowUsersDialog] = useState(false);
  const [selectedTagUsers, setSelectedTagUsers] = useState<any[]>([]);
  const { toast } = useToast();

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
      marketSize: "中等",
      trendData: [20, 25, 30, 45, 60, 80, 95],
      verifications: 23,
      bookmarks: 156,
      avgRating: 4.2,
      ratingCount: 84,
      likes: 89,
      shares: 23,
      userCounts: { want: 145, wantToDo: 67, done: 12 }
    },
    {
      title: "多平台内容发布要重复操作",
      severity: 4,
      tags: ["#社交媒体", "#自动化", "#营销"],
      originText: "Posting the same content to 5 platforms takes me 2 hours daily. Copy-paste from Twitter to LinkedIn, resize images for Instagram, adjust captions for each platform...",
      community: "Startups",
      votes: 189,
      comments: 43,
      date: "2024/1/14",
      isPremium: false,
      opportunity: "多平台内容分发工具",
      marketSize: "大型",
      trendData: [15, 20, 25, 35, 50, 70, 85],
      verifications: 45,
      bookmarks: 234,
      avgRating: 3.8,
      ratingCount: 156,
      likes: 76,
      shares: 18,
      userCounts: { want: 198, wantToDo: 89, done: 23 }
    },
    {
      title: "团队协作工具数据不同步",
      severity: 3,
      tags: ["#协作", "#数据同步", "#生产力"],
      originText: "Our team uses Slack, Notion, and Trello but data never syncs. We waste 1 hour daily copying updates between tools. Need a unified workspace solution.",
      community: "Technology",
      votes: 156,
      comments: 89,
      date: "2024/1/13",
      isPremium: false,
      opportunity: "统一工作空间",
      marketSize: "大型",
      trendData: [10, 15, 20, 25, 30, 40, 50],
      verifications: 12,
      bookmarks: 78,
      avgRating: 3.5,
      ratingCount: 92,
      likes: 45,
      shares: 12,
      userCounts: { want: 87, wantToDo: 34, done: 8 }
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
      marketSize: "中等",
      trendData: [30, 40, 55, 70, 85, 90, 95],
      verifications: 67,
      bookmarks: 345,
      avgRating: 4.1,
      ratingCount: 203,
      likes: 134,
      shares: 28,
      userCounts: { want: 234, wantToDo: 98, done: 15 }
    },
    {
      title: "电商平台库存管理混乱",
      severity: 5,
      tags: ["#电商", "#库存", "#自动化"],
      originText: "Managing inventory across Amazon, Shopify, and eBay is a nightmare. Overselling happens weekly, customer complaints are increasing. Need real-time sync solution.",
      community: "Startups",
      votes: 412,
      comments: 78,
      date: "2024/1/11",
      isPremium: true,
      opportunity: "多平台库存同步",
      marketSize: "大型",
      trendData: [40, 50, 65, 80, 90, 95, 98],
      verifications: 89,
      bookmarks: 456,
      avgRating: 4.5,
      ratingCount: 178,
      likes: 167,
      shares: 31,
      userCounts: { want: 345, wantToDo: 123, done: 45 }
    },
    {
      title: "代码审查流程效率低下",
      severity: 2,
      tags: ["#开发", "#代码审查", "#AI"],
      originText: "Code reviews take 2-3 days minimum. Senior devs are bottlenecked, junior devs wait around. Need AI-assisted pre-review to catch obvious issues first.",
      community: "Technology",
      votes: 167,
      comments: 95,
      date: "2024/1/10",
      isPremium: false,
      opportunity: "AI代码审查助手",
      marketSize: "中等",
      trendData: [5, 8, 12, 18, 25, 30, 35],
      verifications: 34,
      bookmarks: 123,
      avgRating: 3.2,
      ratingCount: 67,
      likes: 56,
      shares: 14,
      userCounts: { want: 67, wantToDo: 45, done: 12 }
    }
  ];

  let filteredPainPoints = painPointsData.filter(point => {
    if (selectedCommunity !== "全部社区" && point.community !== selectedCommunity) {
      return false;
    }
    if (searchTerm && !point.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !point.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))) {
      return false;
    }
    if (showBookmarkedOnly && !bookmarkedItems.includes(painPointsData.indexOf(point))) {
      return false;
    }
    return true;
  });

  const getSeverityDisplay = (severity: number) => {
    if (severity >= 5) return { flames: "🔥🔥🔥🔥🔥", color: "text-red-400" };
    if (severity >= 4) return { flames: "🔥🔥🔥🔥", color: "text-orange-400" };
    if (severity >= 3) return { flames: "🔥🔥🔥", color: "text-yellow-400" };
    if (severity >= 2) return { flames: "🔥🔥", color: "text-blue-400" };
    return { flames: "🔥", color: "text-gray-400" };
  };

  const getMarketSizeColor = (size: string) => {
    switch (size) {
      case "大型": return "text-green-400 font-semibold";
      case "中等": return "text-yellow-400 font-medium";
      case "小型": return "text-gray-400";
      default: return "text-gray-400";
    }
  };

  const handleBookmark = (index: number) => {
    const isBookmarked = bookmarkedItems.includes(index);
    
    setBookmarkedItems(prev => 
      isBookmarked
        ? prev.filter(id => id !== index)
        : [...prev, index]
    );

    toast({
      title: isBookmarked ? "取消收藏" : "已收藏",
      description: isBookmarked ? "已从收藏列表中移除" : "已添加到收藏列表",
      duration: 2000,
    });
  };

  const handleAnalyze = (point: any, index: number) => {
    setLoadingItems(prev => [...prev, index]);
    console.log("分析痛点:", point.title);
    
    // Simulate API call
    setTimeout(() => {
      setLoadingItems(prev => prev.filter(id => id !== index));
      toast({
        title: "AI分析完成",
        description: `已生成 "${point.title}" 的详细分析报告`,
        duration: 3000,
      });
    }, 2000);
  };

  const handleRowClick = (point: any) => {
    console.log("查看痛点详情:", point.title);
  };

  const handleRating = (pointIndex: number, rating: number) => {
    setUserRatings(prev => ({
      ...prev,
      [pointIndex]: rating
    }));
    
    toast({
      title: "评价成功",
      description: `已为该痛点评${rating}星`,
      duration: 2000,
    });
  };

  const handleTagClick = (pointIndex: number, tag: 'want' | 'wantToDo' | 'done') => {
    const currentTags = userTags[pointIndex] || [];
    const isSelected = currentTags.includes(tag);
    
    setUserTags(prev => ({
      ...prev,
      [pointIndex]: isSelected 
        ? currentTags.filter(t => t !== tag)
        : [...currentTags.filter(t => t !== tag), tag]
    }));

    if (tag === 'done' && !isSelected) {
      // Enhanced user data with more information
      setSelectedTagUsers([
        {
          name: "张三",
          website: "https://stripe-refund-manager.com",
          avatar: "ZS",
          description: "开发了一个自动退款管理工具，专门解决Stripe客户流失后的退款问题",
          company: "TechFlow Solutions",
          location: "北京",
          experience: "3年SaaS开发经验",
          tags: ["SaaS", "支付系统", "自动化"]
        },
        {
          name: "李四",
          website: "https://paymentpro.io",
          avatar: "LS",
          description: "创建了支付流程优化平台，帮助企业提升退款处理效率",
          company: "PaymentPro Inc.",
          location: "上海",
          experience: "5年金融科技经验",
          tags: ["金融科技", "支付", "企业服务"]
        },
        {
          name: "王五",
          website: "https://autoreturn.co",
          avatar: "WW",
          description: "开发了智能退款系统，支持多种支付平台的自动化退款处理",
          company: "AutoReturn Co.",
          location: "深圳",
          experience: "4年企业软件开发",
          tags: ["自动化", "企业软件", "多平台集成"]
        }
      ]);
      setShowUsersDialog(true);
      return; // Don't show toast for 'done' tag
    }

    toast({
      title: isSelected ? "已取消标记" : "标记成功",
      description: `已${isSelected ? '取消' : ''}标记为"${
        tag === 'want' ? '想用' : tag === 'wantToDo' ? '想做' : '做过'
      }"`,
      duration: 2000,
    });
  };

  const handleLike = (index: number) => {
    const isLiked = likedItems.includes(index);
    
    setLikedItems(prev => 
      isLiked
        ? prev.filter(id => id !== index)
        : [...prev, index]
    );

    toast({
      title: isLiked ? "取消点赞" : "点赞成功",
      description: isLiked ? "已取消点赞" : "感谢你的点赞！",
      duration: 2000,
    });
  };

  const StarRating = ({ rating, onRate, readonly = false }: { rating: number; onRate?: (rating: number) => void; readonly?: boolean }) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
          } ${!readonly ? 'cursor-pointer hover:text-yellow-300' : ''} transition-colors`}
          onClick={() => !readonly && onRate?.(star)}
        />
      ))}
      {readonly && <span className="text-xs text-gray-400 ml-1">({rating.toFixed(1)})</span>}
    </div>
  );

  const TrendSparkline = ({ data }: { data: number[] }) => (
    <div className="flex items-end gap-0.5 h-6">
      {data.map((value, i) => (
        <div
          key={i}
          className="bg-gradient-to-t from-purple-500 to-purple-300 w-1 rounded-sm opacity-70"
          style={{ height: `${(value / 100) * 24}px` }}
        />
      ))}
    </div>
  );

  return (
    <TooltipProvider>
      <div className="space-y-3">
        {/* Table Header */}
        <Card className="bg-slate-800/50 border-gray-700 glass-card">
          <div className="p-3">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-400">
              <div className="col-span-4">痛点标题</div>
              <div className="col-span-2">严重程度</div>
              <div className="col-span-2">商机评估</div>
              <div className="col-span-1">热度趋势</div>
              <div className="col-span-1">社区</div>
              <div className="col-span-2">日期</div>
            </div>
          </div>
        </Card>

        {/* List Items */}
        <div className="space-y-3">
          {filteredPainPoints.map((point, index) => {
            const severity = getSeverityDisplay(point.severity);
            const isLoading = loadingItems.includes(index);
            const userRating = userRatings[index] || 0;
            const currentUserTags = userTags[index] || [];
            
            return (
              <Card 
                key={index} 
                className="bg-slate-800/30 border border-gray-600/50 hover:bg-slate-800/50 transition-all duration-300 group cursor-pointer relative overflow-hidden shadow-lg hover:shadow-xl hover:shadow-purple-500/10"
                onClick={() => handleRowClick(point)}
              >
                {/* Loading Shimmer Overlay */}
                {isLoading && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-shimmer z-20" />
                )}

                <div className="p-4">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    {/* Title & Tags */}
                    <div className="col-span-4">
                      <div className="flex items-start gap-3">
                        {point.isPremium && (
                          <Star className="h-4 w-4 text-yellow-400 mt-1 flex-shrink-0" />
                        )}
                        <div>
                          <h3 className="text-white font-medium text-sm mb-2 group-hover:text-purple-300 transition-colors leading-tight">
                            {point.title}
                          </h3>
                          <div className="flex flex-wrap gap-1">
                            {point.tags.slice(0, 2).map((tag, tagIndex) => (
                              <Tooltip key={tagIndex}>
                                <TooltipTrigger asChild>
                                  <Badge 
                                    variant="outline" 
                                    className="text-xs border-orange-500/50 text-orange-300 bg-orange-500/10 hover:border-orange-400/70 hover:text-orange-200 cursor-pointer transition-all"
                                  >
                                    {tag}
                                  </Badge>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>点击可筛选相关痛点</p>
                                </TooltipContent>
                              </Tooltip>
                            ))}
                            {point.tags.length > 2 && (
                              <Badge variant="outline" className="text-xs border-orange-500/50 text-orange-300 bg-orange-500/10">
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
                        <span className={`text-sm font-medium ${severity.color}`}>
                          {severity.flames}
                        </span>
                      </div>
                    </div>

                    {/* Market Opportunity */}
                    <div className="col-span-2">
                      <div>
                        <div className="text-sm text-white font-medium mb-1">{point.opportunity}</div>
                        <div className={`text-sm font-semibold ${getMarketSizeColor(point.marketSize)}`}>
                          市场: {point.marketSize}
                        </div>
                      </div>
                    </div>

                    {/* Trend & Votes */}
                    <div className="col-span-1">
                      <div className="space-y-2">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="cursor-help">
                              <TrendSparkline data={point.trendData} />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>7天热度趋势图</p>
                          </TooltipContent>
                        </Tooltip>
                        
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3 text-green-400" />
                          <span className="text-xs text-white font-medium">{point.votes}</span>
                        </div>
                      </div>
                    </div>

                    {/* Community */}
                    <div className="col-span-1">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Badge 
                            variant="outline" 
                            className="text-xs border-purple-500/50 text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 cursor-pointer transition-all"
                          >
                            {point.community}
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>点击筛选该社区</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>

                    {/* Date */}
                    <div className="col-span-2">
                      <Badge variant="outline" className="text-xs border-gray-600 text-gray-400 bg-slate-800/80 backdrop-blur">
                        {point.date}
                      </Badge>
                    </div>
                  </div>

                  {/* Content Area - Always Visible */}
                  <div className="mt-4 pt-4 border-t border-gray-600/30">
                    <div className="text-sm text-gray-300 line-clamp-2 mb-4">
                      <span className="text-gray-500">原文:</span> {point.originText}
                    </div>
                    
                    {/* Social Actions & Rating */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-700/20">
                      <div className="flex items-center gap-4">
                        {/* Star Rating */}
                        <div className="flex items-center gap-2">
                          <StarRating rating={point.avgRating} readonly />
                          <span className="text-xs text-gray-400">平均评分 ({point.ratingCount}人)</span>
                        </div>
                        
                        {/* User Rating */}
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-400">我的评分:</span>
                          <StarRating 
                            rating={userRating} 
                            onRate={(rating) => handleRating(index, rating)} 
                          />
                        </div>
                      </div>

                      {/* Social Actions */}
                      <div className="flex items-center gap-2">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleLike(index);
                              }}
                              className={`p-2 h-auto hover:scale-110 transition-all ${
                                likedItems.includes(index) 
                                  ? 'text-red-400' 
                                  : 'text-gray-400 hover:text-red-400'
                              }`}
                            >
                              <ThumbsUp className="h-4 w-4" />
                              <span className="text-xs ml-1">{point.likes + (likedItems.includes(index) ? 1 : 0)}</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{likedItems.includes(index) ? '取消点赞' : '点赞'}</p>
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                              className="text-gray-400 hover:text-blue-400 p-2 h-auto hover:scale-110 transition-all"
                            >
                              <MessageCircle className="h-4 w-4" />
                              <span className="text-xs ml-1">{point.comments}</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>查看评论</p>
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleBookmark(index);
                              }}
                              className={`p-2 h-auto hover:scale-110 transition-all ${
                                bookmarkedItems.includes(index) 
                                  ? 'text-yellow-400' 
                                  : 'text-gray-400 hover:text-yellow-400'
                              }`}
                            >
                              {bookmarkedItems.includes(index) ? (
                                <CheckCircle className="h-4 w-4" />
                              ) : (
                                <Bookmark className="h-4 w-4" />
                              )}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{bookmarkedItems.includes(index) ? '取消收藏' : '收藏痛点'}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>

                    {/* User Interest Tags & AI Buttons */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500">我的态度:</span>
                        {(['want', 'wantToDo', 'done'] as const).map((tag) => {
                          const isSelected = currentUserTags.includes(tag);
                          const labels = { want: '想用', wantToDo: '想做', done: '做过' };
                          const colors = { 
                            want: isSelected ? 'bg-blue-500/20 text-blue-300 border-blue-500/50' : 'bg-gray-700/50 text-gray-400 border-gray-600',
                            wantToDo: isSelected ? 'bg-orange-500/20 text-orange-300 border-orange-500/50' : 'bg-gray-700/50 text-gray-400 border-gray-600',
                            done: isSelected ? 'bg-green-500/20 text-green-300 border-green-500/50' : 'bg-gray-700/50 text-gray-400 border-gray-600'
                          };
                          
                          return (
                            <Button
                              key={tag}
                              variant="outline"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleTagClick(index, tag);
                              }}
                              className={`text-xs px-2 py-1 h-auto transition-all hover:scale-105 ${colors[tag]}`}
                            >
                              {labels[tag]} ({point.userCounts[tag] + (isSelected ? 1 : 0)})
                            </Button>
                          );
                        })}
                      </div>

                      {/* AI Assistant Buttons */}
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-xs bg-gradient-to-r from-sky-500/10 to-blue-500/10 border-sky-500/40 text-sky-300 hover:border-sky-500/60 hover:bg-sky-500/20"
                        >
                          🚀 一键生成验证方案
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-xs bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/30 text-green-300 hover:border-green-500/50"
                        >
                          📋 生成落地路线图
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
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

      {/* Enhanced Users Dialog */}
      <Dialog open={showUsersDialog} onOpenChange={setShowUsersDialog}>
        <DialogContent className="bg-slate-900 border-gray-700 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-white text-lg font-semibold">做过的用户</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {selectedTagUsers.map((user, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg border border-gray-700/50 hover:bg-slate-800/70 transition-colors">
                <Avatar className="h-12 w-12 flex-shrink-0">
                  <AvatarFallback className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold">
                    {user.avatar}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-white font-medium text-sm">{user.name}</h4>
                      <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                        <Building className="h-3 w-3" />
                        <span>{user.company}</span>
                        <span>•</span>
                        <span>{user.location}</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(user.website, '_blank')}
                      className="text-purple-300 border-purple-500/50 hover:bg-purple-500/10 flex-shrink-0"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      访问
                    </Button>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">{user.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Users className="h-3 w-3" />
                      <span>{user.experience}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {user.tags.map((tag: string, tagIndex: number) => (
                        <Badge 
                          key={tagIndex}
                          variant="outline" 
                          className="text-xs border-green-500/50 text-green-300 bg-green-500/10"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                    <Globe className="h-3 w-3" />
                    <span className="truncate">{user.website}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
};

export default PainPointsListView;
