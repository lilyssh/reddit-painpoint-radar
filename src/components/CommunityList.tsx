import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Clock, Users, TrendingUp, MoreHorizontal, Globe, Zap, Cpu, MessageSquare, Briefcase, ShoppingCart, Code, Palette, Music, Gamepad2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface CommunityListProps {
  selectedCommunity: string;
  onSelectCommunity: (community: string) => void;
  searchTerm: string;
}

const CommunityList = ({ selectedCommunity, onSelectCommunity, searchTerm }: CommunityListProps) => {
  const [communitySearch, setCommunitySearch] = useState("");
  const [recentlyVisited, setRecentlyVisited] = useState([
    "SaaS", "Startups", "Technology"
  ]);

  // 获取社区图标
  const getCommunityIcon = (communityName: string) => {
    const iconMap: { [key: string]: any } = {
      "全部社区": Globe,
      "SaaS": Zap,
      "Startups": Briefcase,
      "Technology": Cpu,
      "ChatGPT": MessageSquare,
      "Entrepreneur": Briefcase,
      "ProductHunt": TrendingUp,
      "MachineLearning": Cpu,
      "WebDev": Code,
      "Marketing": Palette,
      "Music": Music,
      "Gaming": Gamepad2,
      "E-commerce": ShoppingCart
    };
    
    return iconMap[communityName] || Globe;
  };

  const communities = [
    { name: "全部社区", count: 127, trending: false },
    { name: "SaaS", count: 45, trending: true },
    { name: "Startups", count: 32, trending: true },
    { name: "Technology", count: 28, trending: false },
    { name: "ChatGPT", count: 15, trending: true },
    { name: "Entrepreneur", count: 12, trending: false },
    { name: "ProductHunt", count: 8, trending: false },
    { name: "MachineLearning", count: 6, trending: false },
    { name: "WebDev", count: 5, trending: false },
    { name: "Marketing", count: 4, trending: false }
  ];

  const filteredCommunities = communities.filter(community =>
    community.name.toLowerCase().includes(communitySearch.toLowerCase()) ||
    community.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCommunitySelect = (communityName: string) => {
    onSelectCommunity(communityName);
    
    // Update recently visited
    if (communityName !== "全部社区" && !recentlyVisited.includes(communityName)) {
      setRecentlyVisited(prev => [communityName, ...prev.slice(0, 2)]);
    }
  };

  return (
    <Card className="bg-slate-800/30 border-gray-700 p-6 sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto glass-card w-64">
      <h3 className="text-lg font-semibold text-white mb-4">Reddit社区</h3>
      
      {/* Community Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="搜索社区..."
          value={communitySearch}
          onChange={(e) => setCommunitySearch(e.target.value)}
          className="pl-10 bg-slate-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
        />
      </div>

      {/* Recently Visited */}
      {recentlyVisited.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
            <Clock className="h-4 w-4" />
            <span>最近访问</span>
          </div>
          <div className="space-y-1">
            {recentlyVisited.map((community, index) => {
              const IconComponent = getCommunityIcon(community);
              return (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCommunitySelect(community)}
                  className={`w-full justify-start text-left p-2 h-auto text-sm transition-all duration-200 ${
                    selectedCommunity === community
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                      : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <IconComponent className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">{community}</span>
                    </div>
                    <Users className="h-3 w-3 text-gray-500 flex-shrink-0 ml-2" />
                  </div>
                </Button>
              );
            })}
          </div>
          
          {/* Separator */}
          <Separator className="my-4 bg-gray-600" />
        </div>
      )}
      
      {/* Community List */}
      <div className="space-y-1">
        {filteredCommunities.map((community, index) => {
          const IconComponent = getCommunityIcon(community.name);
          return (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              onClick={() => handleCommunitySelect(community.name)}
              className={`w-full justify-start text-left p-3 h-auto transition-all duration-200 group ${
                selectedCommunity === community.name
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                  : 'text-gray-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <IconComponent className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate text-sm">{community.name}</span>
                  {community.trending && (
                    <TrendingUp className="h-3 w-3 text-green-400 flex-shrink-0" />
                  )}
                </div>
                <Badge 
                  variant="outline" 
                  className={`text-xs flex-shrink-0 ml-2 ${
                    selectedCommunity === community.name
                      ? 'border-purple-400 text-purple-300'
                      : 'border-gray-600 text-gray-400 group-hover:border-gray-500'
                  }`}
                >
                  {community.count}
                </Badge>
              </div>
            </Button>
          );
        })}
        
        {/* More Communities Indicator */}
        <div className="pt-3 border-t border-gray-700/30 mt-4">
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm py-2">
            <MoreHorizontal className="h-4 w-4" />
            <span>还有更多社区...</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CommunityList;
