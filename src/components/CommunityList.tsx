
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Star, TrendingUp, MessageCircle, Eye, Search, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface CommunityListProps {
  selectedCommunity: string;
  onSelectCommunity: (community: string) => void;
  searchTerm: string;
}

const CommunityList = ({ selectedCommunity, onSelectCommunity, searchTerm }: CommunityListProps) => {
  const [communitySearch, setCommunitySearch] = useState("");
  const [showRecentVisited, setShowRecentVisited] = useState(true);

  const recentVisited = [
    {
      name: "ChatGPT",
      icon: "🤖",
      members: "2.1M",
      painPoints: 23,
      trend: "up"
    },
    {
      name: "SaaS",
      icon: "☁️",
      members: "456K",
      painPoints: 24,
      trend: "up"
    },
    {
      name: "Technology 科技",
      icon: "⚡",
      members: "14.2M",
      painPoints: 31,
      trend: "up"
    }
  ];

  const communities = [
    {
      name: "全部社区",
      icon: "🌐",
      members: "All",
      painPoints: 127,
      isStarred: false,
      trend: "stable"
    },
    {
      name: "ChatGPT",
      icon: "🤖",
      members: "2.1M",
      painPoints: 23,
      isStarred: false,
      trend: "up"
    },
    {
      name: "Discord App",
      icon: "💬",
      members: "1.8M",
      painPoints: 18,
      isStarred: true,
      trend: "stable"
    },
    {
      name: "LocalLLaMA",
      icon: "🦙",
      members: "890K",
      painPoints: 15,
      isStarred: false,
      trend: "up"
    },
    {
      name: "Music 音乐",
      icon: "🎵",
      members: "32.1M",
      painPoints: 12,
      isStarred: false,
      trend: "down"
    },
    {
      name: "PC Master Race",
      icon: "🖥️",
      members: "5.2M",
      painPoints: 19,
      isStarred: false,
      trend: "stable"
    },
    {
      name: "Technology 科技",
      icon: "⚡",
      members: "14.2M",
      painPoints: 31,
      isStarred: true,
      trend: "up"
    },
    {
      name: "Startups 初创公司",
      icon: "🚀",
      members: "1.2M",
      painPoints: 27,
      isStarred: true,
      trend: "up"
    },
    {
      name: "SaaS",
      icon: "☁️",
      members: "456K",
      painPoints: 24,
      isStarred: true,
      trend: "up"
    }
  ];

  const filteredCommunities = communities.filter(community =>
    community.name.toLowerCase().includes(communitySearch.toLowerCase())
  );

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-3 w-3 text-green-400" />;
      case "down":
        return <TrendingUp className="h-3 w-3 text-red-400 rotate-180" />;
      default:
        return <MessageCircle className="h-3 w-3 text-gray-400" />;
    }
  };

  const CommunityButton = ({ community }: { community: any }) => (
    <Button
      key={community.name}
      variant="ghost"
      className={`w-full justify-start h-auto p-3 rounded-lg transition-all duration-300 ${
        selectedCommunity === community.name
          ? 'bg-purple-500/20 border border-purple-500/30 text-white'
          : 'hover:bg-slate-700/50 text-gray-300 hover:text-white'
      }`}
      onClick={() => onSelectCommunity(community.name)}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <span className="text-lg">{community.icon}</span>
          <div className="text-left">
            <div className="font-medium text-sm">{community.name}</div>
            <div className="text-xs text-gray-400 flex items-center gap-2">
              <span>{community.members} 成员</span>
              {getTrendIcon(community.trend)}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          {community.isStarred && (
            <Star className="h-3 w-3 text-yellow-400 fill-current" />
          )}
          <Badge 
            variant="outline" 
            className="text-xs border-gray-600 text-gray-400 bg-transparent"
          >
            {community.painPoints}
          </Badge>
        </div>
      </div>
    </Button>
  );

  return (
    <Card className="bg-slate-800/50 border-gray-700 glass-effect">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2 text-blue-400 mb-4">
          <Users className="h-5 w-5" />
          <h3 className="font-semibold">Reddit 社区</h3>
        </div>
        
        {/* 社区搜索 */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="搜索社区..."
            value={communitySearch}
            onChange={(e) => setCommunitySearch(e.target.value)}
            className="pl-10 bg-slate-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
          />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4 max-h-[calc(100vh-350px)] overflow-y-auto">
        {/* 最近访问 */}
        <div>
          <Button
            variant="ghost"
            onClick={() => setShowRecentVisited(!showRecentVisited)}
            className="w-full justify-between p-2 text-gray-400 hover:text-white text-sm"
          >
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>最近访问</span>
            </div>
            {showRecentVisited ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
          
          {showRecentVisited && (
            <div className="space-y-1 mt-2">
              {recentVisited.map((community) => (
                <CommunityButton key={`recent-${community.name}`} community={community} />
              ))}
            </div>
          )}
        </div>

        {/* 所有社区 */}
        <div className="space-y-2">
          {filteredCommunities.map((community) => (
            <CommunityButton key={community.name} community={community} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CommunityList;
