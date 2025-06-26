
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Star, Clock, CheckCircle, AlertCircle, Lightbulb, Bug, Palette, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState("");
  const [category, setCategory] = useState("feature");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const feedbackData = [
    {
      id: 1,
      content: "建议在痛点卡片上增加「相似痛点推荐」功能，帮助用户发现更多相关商机",
      category: "功能建议",
      author: "张明",
      status: "已采纳",
      reward: "1个月会员",
      date: "2024-01-20",
      votes: 23
    },
    {
      id: 2,
      content: "希望增加深色/浅色主题切换功能，提升用户体验",
      category: "界面设计",
      author: "李婷",
      status: "开发中",
      reward: "待确认",
      date: "2024-01-19",
      votes: 18
    },
    {
      id: 3,
      content: "搜索框应该支持模糊搜索和智能提示",
      category: "功能建议",
      author: "王强",
      status: "已采纳",
      reward: "1个月会员",
      date: "2024-01-18",
      votes: 31
    },
    {
      id: 4,
      content: "发现在移动端浏览时，卡片布局会错位",
      category: "Bug修复",
      author: "陈雨",
      status: "已修复",
      reward: "1个月会员",
      date: "2024-01-17",
      votes: 12
    },
    {
      id: 5,
      content: "建议添加痛点收藏夹分类功能，方便用户管理",
      category: "功能建议",
      author: "林欣",
      status: "评估中",
      reward: "待确认",
      date: "2024-01-16",
      votes: 27
    }
  ];

  const categories = [
    { value: "feature", label: "功能建议", icon: Lightbulb, color: "text-blue-400" },
    { value: "design", label: "界面设计", icon: Palette, color: "text-purple-400" },
    { value: "bug", label: "Bug修复", icon: Bug, color: "text-red-400" },
    { value: "other", label: "其他建议", icon: Settings, color: "text-gray-400" }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      "已采纳": { color: "bg-green-500/20 text-green-300 border-green-500/50", icon: CheckCircle },
      "开发中": { color: "bg-blue-500/20 text-blue-300 border-blue-500/50", icon: Clock },
      "评估中": { color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/50", icon: AlertCircle },
      "已修复": { color: "bg-green-500/20 text-green-300 border-green-500/50", icon: CheckCircle }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig["评估中"];
    const IconComponent = config.icon;
    
    return (
      <Badge variant="outline" className={`${config.color} text-xs`}>
        <IconComponent className="h-3 w-3 mr-1" />
        {status}
      </Badge>
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟API调用
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "反馈提交成功！",
        description: "感谢你的反馈，我们会认真考虑。如被采纳将获得1个月会员奖励！",
        duration: 4000,
      });
      setFeedback("");
      setEmail("");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Page Header */}
      <div className="border-b border-gray-700 bg-slate-800/50 backdrop-blur-sm sticky top-16 z-40 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-yellow-500/20 bg-yellow-500/10 backdrop-blur-sm text-yellow-300 mb-6">
              <Trophy className="h-4 w-4" />
              反馈奖励计划
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              产品反馈 & 建议
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
              每条被采纳的反馈都能获得 <span className="text-yellow-400 font-semibold">1个月免费会员</span> 奖励
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>先提交先得</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>重复不奖励</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>7天内反馈</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Tabs defaultValue="submit" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-800 border-gray-700">
            <TabsTrigger value="submit" className="text-gray-300 data-[state=active]:text-white">
              提交反馈
            </TabsTrigger>
            <TabsTrigger value="history" className="text-gray-300 data-[state=active]:text-white">
              反馈历史
            </TabsTrigger>
          </TabsList>

          <TabsContent value="submit">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 提交表单 */}
              <div className="lg:col-span-2">
                <Card className="bg-slate-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-yellow-400" />
                      提交你的反馈
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* 分类选择 */}
                      <div>
                        <label className="text-sm font-medium text-gray-300 mb-3 block">
                          反馈类型
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {categories.map((cat) => {
                            const IconComponent = cat.icon;
                            return (
                              <button
                                key={cat.value}
                                type="button"
                                onClick={() => setCategory(cat.value)}
                                className={`p-4 rounded-lg border transition-all text-left ${
                                  category === cat.value
                                    ? 'border-purple-500/50 bg-purple-500/10'
                                    : 'border-gray-700 bg-slate-700/30 hover:border-gray-600'
                                }`}
                              >
                                <IconComponent className={`h-5 w-5 ${cat.color} mb-2`} />
                                <div className="text-white font-medium">{cat.label}</div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* 反馈内容 */}
                      <div>
                        <label className="text-sm font-medium text-gray-300 mb-2 block">
                          详细描述 *
                        </label>
                        <Textarea
                          placeholder="请详细描述你的建议或发现的问题..."
                          value={feedback}
                          onChange={(e) => setFeedback(e.target.value)}
                          className="min-h-[120px] bg-slate-700/50 border-gray-600 text-white placeholder:text-gray-400"
                          required
                        />
                      </div>

                      {/* 邮箱 */}
                      <div>
                        <label className="text-sm font-medium text-gray-300 mb-2 block">
                          邮箱地址（用于奖励发放）
                        </label>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-slate-700/50 border-gray-600 text-white placeholder:text-gray-400"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting || !feedback.trim()}
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                      >
                        {isSubmitting ? "提交中..." : "提交反馈"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* 奖励说明 */}
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-yellow-500/30">
                  <CardHeader>
                    <CardTitle className="text-yellow-300 flex items-center gap-2">
                      <Trophy className="h-5 w-5" />
                      奖励规则
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>每条被采纳的反馈奖励1个月会员</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>先提交先得，重复建议不予奖励</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>7天内会给出反馈结果</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>任何建议都欢迎：功能、设计、Bug等</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">热门建议</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {["深色主题切换", "移动端优化", "数据导出功能", "智能推荐"].map((suggestion, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">{suggestion}</span>
                        <Badge variant="outline" className="text-xs border-gray-600 text-gray-400">
                          {Math.floor(Math.random() * 20) + 5} 票
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <div className="space-y-4">
              {feedbackData.map((item) => (
                <Card key={item.id} className="bg-slate-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-semibold">
                            {item.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="text-white font-medium">{item.author}</div>
                          <div className="text-xs text-gray-400">{item.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusBadge(item.status)}
                        <Badge variant="outline" className="text-xs border-gray-600 text-gray-400">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{item.content}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          <span>{item.votes} 投票</span>
                        </div>
                        {item.reward !== "待确认" && (
                          <div className="flex items-center gap-1">
                            <Trophy className="h-3 w-3 text-yellow-400" />
                            <span className="text-yellow-400">{item.reward}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FeedbackPage;
