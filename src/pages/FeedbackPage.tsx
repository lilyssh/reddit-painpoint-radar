
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trophy, Star, Clock, CheckCircle, AlertCircle, Lightbulb, Bug, Palette, Settings, ThumbsUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState("");
  const [category, setCategory] = useState("feature");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [historySearch, setHistorySearch] = useState("");

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

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const quillFormats = [
    'header', 'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'link', 'image'
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Page Header - Compact */}
      <div className="border-b border-gray-700 bg-slate-800/50 backdrop-blur-sm mt-16">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center gap-6">
            <h1 className="text-2xl font-bold text-white">
              产品反馈 & 建议
            </h1>
            <div className="text-sm text-blue-300 text-center">
              每条被采纳的反馈都能获得 
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-green-500 bg-clip-text text-transparent px-1 animate-pulse">
                1个月免费会员奖励
              </span>
              <br />
              <span className="text-xs text-gray-400">先提交先得、重复不奖励、7天内反馈、多提多得，上不封顶</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <Tabs defaultValue="submit" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-slate-800 border-gray-700">
            <TabsTrigger value="submit" className="text-gray-300 data-[state=active]:text-white">
              提交反馈
            </TabsTrigger>
            <TabsTrigger value="history" className="text-gray-300 data-[state=active]:text-white">
              反馈历史
            </TabsTrigger>
          </TabsList>

          <TabsContent value="submit">
            <Card className="bg-slate-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-yellow-400" />
                  提交你的反馈
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Two Column Layout */}
                  <div className="grid grid-cols-2 gap-8">
                    {/* Left Column - Category and Email */}
                    <div className="space-y-4">
                      {/* 反馈类型下拉框 */}
                      <div>
                        <label className="text-sm font-medium text-gray-300 mb-2 block">
                          反馈类型
                        </label>
                        <Select value={category} onValueChange={setCategory}>
                          <SelectTrigger className="bg-slate-700/50 border-gray-600 text-white">
                            <SelectValue placeholder="选择反馈类型" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-gray-700 z-50">
                            {categories.map((cat) => {
                              const IconComponent = cat.icon;
                              return (
                                <SelectItem key={cat.value} value={cat.value} className="text-white hover:bg-slate-700">
                                  <div className="flex items-center gap-2">
                                    <IconComponent className={`h-4 w-4 ${cat.color}`} />
                                    {cat.label}
                                  </div>
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* 邮箱地址 */}
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
                    </div>

                    {/* Right Column - Description and Submit */}
                    <div className="space-y-4">
                      {/* 详细描述 - Quill Rich Text Editor */}
                      <div>
                        <label className="text-sm font-medium text-gray-300 mb-2 block">
                          详细描述 <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <ReactQuill
                            theme="snow"
                            value={feedback}
                            onChange={setFeedback}
                            modules={quillModules}
                            formats={quillFormats}
                            placeholder="请详细描述你的建议或发现的问题..."
                            className="bg-slate-700/50 text-white"
                            style={{
                              backgroundColor: 'rgba(51, 65, 85, 0.5)',
                              color: 'white',
                              minHeight: '140px'
                            }}
                          />
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          支持富文本格式 • 最多500字
                        </div>
                      </div>

                      <div className="mt-6">
                        <Button
                          type="submit"
                          disabled={isSubmitting || !feedback.trim()}
                          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                        >
                          {isSubmitting ? "提交中..." : "提交反馈"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <div className="mb-4 flex justify-center items-center">
              <div className="relative w-80">
                <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-lg p-[2px] animate-pulse">
                  <div className="bg-slate-700 rounded-md h-full w-full flex items-center relative">
                    <input
                      type="text"
                      placeholder="搜索反馈内容、作者、类别..."
                      value={historySearch}
                      onChange={e => setHistorySearch(e.target.value)}
                      className="pl-10 w-full bg-transparent border-0 text-white placeholder-gray-400 focus:ring-0 focus:outline-none"
                    />
                    <svg className="absolute left-3 text-gray-400 h-4 w-4 z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="text-sm text-blue-300 ml-6">
                💡 点赞数越多，获得额外惊喜的机会越大！
              </div>
            </div>
            <div className="space-y-3">
              {feedbackData.filter(item =>
                item.content.includes(historySearch) ||
                item.author.includes(historySearch) ||
                item.category.includes(historySearch)
              ).map((item) => (
                <Card key={item.id} className="bg-slate-800/50 border-gray-700">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">
                            {item.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm">{item.author}</div>
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
                    
                    <p className="text-gray-300 mb-3 text-sm leading-relaxed">{item.content}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-3 w-3" />
                          <span>{item.votes} 点赞</span>
                        </div>
                        {item.reward !== "待确认" && (
                          <div className="flex items-center gap-1">
                            <Trophy className="h-3 w-3 text-yellow-400 animate-bounce" />
                            {item.reward === "1个月会员" ? (
                              <span className="text-lg font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-pulse drop-shadow-lg px-1 rounded">
                                {item.reward}
                              </span>
                            ) : (
                              <span className="text-yellow-400">{item.reward}</span>
                            )}
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
