import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, TrendingUp, Clock, Flame, Users, ExternalLink, Grid3X3, List, BookmarkPlus, Share, Eye } from "lucide-react";
import Header from "@/components/Header";
import CommunityList from "@/components/CommunityList";
import PainPointsList from "@/components/PainPointsList";
import PainPointsListView from "@/components/PainPointsListView";
import SortingFilters from "@/components/SortingFilters";
import SearchDropdown from "@/components/SearchDropdown";

const PainPointsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCommunity, setSelectedCommunity] = useState("全部社区");
  const [sortBy, setSortBy] = useState("热度排序");
  const [viewMode, setViewMode] = useState("list");

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header Navigation */}
      <Header />
      
      {/* Page Header */}
      <div className="border-b border-gray-700 bg-slate-800/50 backdrop-blur-sm sticky top-16 z-40 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                痛点探索
              </h1>
            </div>
            <div className="flex items-center gap-4 w-auto">
              <SearchDropdown searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
              searchTerm={searchTerm}
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
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>本周新增: 23个</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="glass-effect border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-300"
                >
                  <BookmarkPlus className="h-4 w-4 mr-2" />
                  保存筛选
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="glass-effect border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-300"
                >
                  <Share className="h-4 w-4 mr-2" />
                  分享
                </Button>
                
                <Tabs value={viewMode} onValueChange={setViewMode} className="w-auto">
                  <TabsList className="bg-slate-700 border-gray-600">
                    <TabsTrigger value="list" className="text-gray-300 data-[state=active]:text-white">
                      <List className="h-4 w-4 mr-1" />
                      列表
                    </TabsTrigger>
                    <TabsTrigger value="cards" className="text-gray-300 data-[state=active]:text-white">
                      <Grid3X3 className="h-4 w-4 mr-1" />
                      卡片
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>

            <Tabs value={viewMode} className="w-full">
              <TabsContent value="list" className="mt-0">
                <PainPointsListView 
                  searchTerm={searchTerm}
                  selectedCommunity={selectedCommunity}
                  sortBy={sortBy}
                />
              </TabsContent>
              <TabsContent value="cards" className="mt-0">
                <PainPointsList 
                  searchTerm={searchTerm}
                  selectedCommunity={selectedCommunity}
                  sortBy={sortBy}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainPointsPage;
