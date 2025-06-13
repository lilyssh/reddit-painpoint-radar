
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  ExternalLink, 
  Lightbulb, 
  Target, 
  Users, 
  BarChart3,
  Sparkles,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const Dashboard = () => {
  const [selectedPainPoint, setSelectedPainPoint] = useState(0);
  const [showValidationKit, setShowValidationKit] = useState(false);
  const [isGeneratingSolution, setIsGeneratingSolution] = useState(false);
  const [generatedSolution, setGeneratedSolution] = useState("");

  const painPoints = [
    {
      id: 1,
      title: "客户流失后无法自动退款",
      severity: "🔥🔥🔥🔥",
      tags: ["#支付", "#SaaS"],
      originText: "Stripe doesn't support auto-refund when customers churn. We have to manually process hundreds of refunds monthly, taking 2-3 hours each day...",
      originUrl: "https://reddit.com/r/startups/example1",
      trendData: [12, 15, 23, 42, 65, 78, 89],
      commercialValue: "高",
      affectedGroup: "SaaS创始人",
      discussionCount: 234
    },
    {
      id: 2,
      title: "多平台内容发布要重复操作",
      severity: "🔥🔥🔥",
      tags: ["#社交媒体", "#自动化"],
      originText: "Posting the same content to 5 platforms takes me 2 hours daily. Copy-paste from Twitter to LinkedIn, resize images for Instagram...",
      originUrl: "https://reddit.com/r/marketing/example2",
      trendData: [8, 12, 18, 25, 32, 38, 45],
      commercialValue: "中",
      affectedGroup: "内容创作者",
      discussionCount: 156
    }
  ];

  const currentPainPoint = painPoints[selectedPainPoint];

  const generateSolution = () => {
    setIsGeneratingSolution(true);
    setTimeout(() => {
      setGeneratedSolution(`
**方案描述：** 开发支持预设规则的分级退款系统，允许商家设置"流失即退款"策略

**技术栈推荐：** 
- Stripe Webhook + Node.js + 退款规则引擎
- 前端：React + 仪表盘界面
- 数据库：PostgreSQL存储退款规则

**实现要点：**
1. 监听Stripe订阅取消事件
2. 根据预设规则计算退款金额
3. 自动触发退款API调用
4. 发送确认邮件给客户

**市场定位：** 面向月订阅收入>$10K的SaaS平台
      `);
      setIsGeneratingSolution(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            今日高价值痛点 · <span className="text-accent">{new Date().toLocaleDateString('zh-CN')}</span>
          </h1>
          <p className="text-muted-foreground">
            基于Reddit热门讨论，AI智能筛选的商业机会
          </p>
        </div>

        {/* Pain Points List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {painPoints.map((point, index) => (
            <Card 
              key={point.id}
              className={`cursor-pointer transition-all duration-300 ${
                selectedPainPoint === index 
                  ? 'border-primary glow scale-105' 
                  : 'hover:border-accent/50'
              }`}
              onClick={() => setSelectedPainPoint(index)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xl">{point.severity}</div>
                  <Badge variant={point.commercialValue === '高' ? 'default' : 'secondary'}>
                    {point.commercialValue}价值
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-3">
                  {point.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{point.affectedGroup}</span>
                  <span>{point.discussionCount} 讨论</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Insight Board */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Pain Point Details */}
          <Card className="xl:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                痛点详情
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">{currentPainPoint.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {currentPainPoint.originText}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <ExternalLink className="h-4 w-4" />
                <a 
                  href={currentPainPoint.originUrl} 
                  className="text-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  查看原帖
                </a>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">7天讨论趋势</span>
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </div>
                <div className="space-y-2">
                  {currentPainPoint.trendData.map((value, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-xs w-8">Day {index + 1}</span>
                      <Progress value={(value / 100) * 100} className="flex-1" />
                      <span className="text-xs w-8">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {currentPainPoint.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Solution Generation */}
          <Card className="xl:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-accent" />
                AI解决方案
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {!generatedSolution ? (
                <div className="text-center py-8">
                  <Sparkles className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">
                    点击生成针对性解决方案
                  </p>
                  <Button 
                    onClick={generateSolution}
                    disabled={isGeneratingSolution}
                    className="gradient-primary text-white"
                  >
                    {isGeneratingSolution ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        AI思考中...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        生成解决思路
                      </div>
                    )}
                  </Button>
                </div>
              ) : (
                <div className="prose prose-sm max-w-none">
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 whitespace-pre-line text-sm">
                    {generatedSolution}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setGeneratedSolution("")}
                    className="mt-4"
                  >
                    重新生成
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Validation Kit */}
          <Card className="xl:col-span-1">
            <CardHeader>
              <CardTitle 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setShowValidationKit(!showValidationKit)}
              >
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-green-500" />
                  验证工具包
                </div>
                {showValidationKit ? 
                  <ChevronUp className="h-4 w-4" /> : 
                  <ChevronDown className="h-4 w-4" />
                }
              </CardTitle>
            </CardHeader>
            {showValidationKit && (
              <CardContent>
                <Tabs defaultValue="interview" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="interview">访谈</TabsTrigger>
                    <TabsTrigger value="competitor">竞品</TabsTrigger>
                    <TabsTrigger value="testing">测试</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="interview" className="space-y-3">
                    <h4 className="font-medium">用户访谈问题模板</h4>
                    <div className="text-sm space-y-2 text-muted-foreground">
                      <p>• 您目前如何处理客户退款？</p>
                      <p>• 手动退款流程中最耗时的环节是？</p>
                      <p>• 如果有自动退款工具，您愿意付多少？</p>
                      <p>• 您最担心自动退款的哪个方面？</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="competitor" className="space-y-3">
                    <h4 className="font-medium">竞品对比矩阵</h4>
                    <div className="text-sm space-y-2">
                      <div className="grid grid-cols-3 gap-2 text-xs font-medium border-b pb-2">
                        <span>产品</span>
                        <span>功能</span>
                        <span>价格</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                        <span>Stripe</span>
                        <span>手动退款</span>
                        <span>免费</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                        <span>Chargebee</span>
                        <span>部分自动</span>
                        <span>$299/月</span>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="testing" className="space-y-3">
                    <h4 className="font-medium">A/B测试文案</h4>
                    <div className="text-sm space-y-2 text-muted-foreground">
                      <p><strong>版本A：</strong> "自动退款，告别手动操作"</p>
                      <p><strong>版本B：</strong> "智能退款系统，节省80%时间"</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        生成更多测试文案
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
