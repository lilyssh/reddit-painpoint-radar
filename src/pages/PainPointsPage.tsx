
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, TrendingUp, Clock, Fire, Users, ExternalLink } from "lucide-react";
import CommunityList from "@/components/CommunityList";
import PainPointsList from "@/components/PainPointsList";
import SortingFilters from "@/components/SortingFilters";

const PainPointsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCommunity, setSelectedCommunity] = useState("全部社区");
  const [sortBy, setSortBy] = useState("热度排序");

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="border-b border-gray-700 bg-slate-800/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">
                痛点探索器 · <span className="text-blue-400">Reddit洞察</span>
              </h1>
              <p className="text-gray-400 text-sm">
                从Reddit社区中发现真实的用户痛点，挖掘下一个SaaS产品机会
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="搜索痛点、标签或关键词..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-80 bg-slate-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                />
              </div>
              <SortingFilters sortBy={sortBy} setSortBy={setSortBy} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Sidebar - Reddit Communities */}
          <div className="col-span-3">
            <CommunityList 
              selectedCommunity={selectedCommunity}
              onSelectCommunity={setSelectedCommunity}
            />
          </div>

          {/* Right Content - Pain Points */}
          <div className="col-span-9">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">
                  发现了 <span className="text-purple-400">127</span> 个痛点
                </h2>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4" />
                    <span>热度上升中</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>最近更新: 2小时前</span>
                  </div>
                </div>
              </div>
              
              <Tabs defaultValue="cards" className="w-auto">
                <TabsList className="bg-slate-700 border-gray-600">
                  <TabsTrigger value="cards" className="text-gray-300 data-[state=active]:text-white">
                    卡片视图
                  </TabsTrigger>
                  <TabsTrigger value="list" className="text-gray-300 data-[state=active]:text-white">
                    列表视图
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <PainPointsList 
              searchTerm={searchTerm}
              selectedCommunity={selectedCommunity}
              sortBy={sortBy}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainPointsPage;
