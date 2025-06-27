import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, TrendingUp, Clock, Flame, Users, ExternalLink, Grid3X3, List, BookmarkPlus, Share, Eye, Heart } from "lucide-react";
import Header from "@/components/Header";
import CommunityList from "@/components/CommunityList";
import PainPointsList from "@/components/PainPointsList";
import PainPointsListView from "@/components/PainPointsListView";
import SortingFilters from "@/components/SortingFilters";
import { Toaster } from "@/components/ui/toaster";

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
        <div className="max-w-full mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                痛点探索
              </h1>
            </div>
            <div className="flex items-center gap-4 w-auto">
              {/* 搜索框 */}
              <div className="relative w-80">
                <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-lg p-[2px] animate-pulse">
                  <div className="bg-slate-700 rounded-md h-full w-full flex items-center relative">
                    <Search className="absolute left-3 text-gray-400 h-4 w-4 z-10" />
                    <Input
                      placeholder="搜索痛点、标签、社区..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-full bg-transparent border-0 text-white placeholder-gray-400 focus:ring-0 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              {/* 排序下拉框 */}
              <SortingFilters sortBy={sortBy} setSortBy={setSortBy} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Full Width Layout */}
      <div className="max-w-full mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* Left Sidebar - Reddit Communities - Narrower width */}
          <div className="w-64 flex-shrink-0">
            <CommunityList 
              selectedCommunity={selectedCommunity}
              onSelectCommunity={setSelectedCommunity}
              searchTerm={searchTerm}
            />
          </div>

          {/* Right Content - Pain Points - Extended to right edge */}
          <div className="flex-1 min-w-0">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">
                  发现了 <span className="text-purple-400">127</span> 个痛点
                </h2>
              </div>
              
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="glass-effect border-gray-600 text-gray-300 hover:border-pink-500 hover:text-pink-300"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  我的收藏
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
      
      <Toaster />
    </div>
  );
};

export default PainPointsPage;
