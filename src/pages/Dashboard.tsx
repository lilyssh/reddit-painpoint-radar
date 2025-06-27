import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Users, Target, Clock, Star, ArrowUp, MessageSquare, Heart, Zap } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import Header from "@/components/Header";

const lineChartData = [
  { name: "周一", uv: 400, pv: 2400, amt: 2400 },
  { name: "周二", uv: 300, pv: 1398, amt: 2210 },
  { name: "周三", uv: 200, pv: 9800, amt: 2290 },
  { name: "周四", uv: 278, pv: 3908, amt: 2000 },
  { name: "周五", uv: 189, pv: 4800, amt: 2181 },
  { name: "周六", uv: 239, pv: 3800, amt: 2500 },
  { name: "周日", uv: 349, pv: 4300, amt: 2100 },
];

const pieChartData = [
  { name: "SaaS", value: 400 },
  { name: "Startups", value: 300 },
  { name: "Technology", value: 300 },
  { name: "ChatGPT", value: 200 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8 mt-16">
        <h1 className="text-3xl font-bold text-white mb-6">数据分析仪表盘</h1>
        
        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="bg-slate-800 border border-gray-700 rounded-md p-1">
            <TabsTrigger value="overview" className="text-gray-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-md px-4 py-2">
              概览
            </TabsTrigger>
            <TabsTrigger value="community" className="text-gray-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-md px-4 py-2">
              社区数据
            </TabsTrigger>
            <TabsTrigger value="feedback" className="text-gray-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-md px-4 py-2">
              反馈统计
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-slate-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-400" />
                    热点痛点趋势
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={150}>
                    <LineChart data={lineChartData}>
                      <XAxis dataKey="name" stroke="#8884d8" />
                      <YAxis stroke="#8884d8" />
                      <Tooltip />
                      <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-400" />
                    活跃社区用户
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-white text-lg font-semibold mb-2">1,234</div>
                  <div className="text-gray-400 text-sm">过去7天活跃用户数</div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Heart className="h-5 w-5 text-pink-400" />
                    收藏与点赞
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-white font-semibold text-lg">
                    <div>收藏: 567</div>
                    <div>点赞: 890</div>
                  </div>
                  <div className="text-gray-400 text-sm mt-1">用户互动数据</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="community" className="mt-6">
            <Card className="bg-slate-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-400" />
                  社区分布
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feedback" className="mt-6">
            <Card className="bg-slate-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-purple-400" />
                  反馈统计
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-700 rounded-md p-4">
                    <div className="text-white font-semibold text-lg">127</div>
                    <div className="text-gray-400 text-sm">总反馈数</div>
                  </div>
                  <div className="bg-slate-700 rounded-md p-4">
                    <div className="text-white font-semibold text-lg">23</div>
                    <div className="text-gray-400 text-sm">已采纳反馈</div>
                  </div>
                  <div className="bg-slate-700 rounded-md p-4">
                    <div className="text-white font-semibold text-lg">18</div>
                    <div className="text-gray-400 text-sm">开发中反馈</div>
                  </div>
                  <div className="bg-slate-700 rounded-md p-4">
                    <div className="text-white font-semibold text-lg">12</div>
                    <div className="text-gray-400 text-sm">评估中反馈</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
