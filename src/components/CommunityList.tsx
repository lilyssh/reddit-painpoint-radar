
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Star, TrendingUp, MessageCircle, Eye } from "lucide-react";

interface CommunityListProps {
  selectedCommunity: string;
  onSelectCommunity: (community: string) => void;
}

const CommunityList = ({ selectedCommunity, onSelectCommunity }: CommunityListProps) => {
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

  return (
    <Card className="bg-slate-800/50 border-gray-700 glass-effect">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2 text-blue-400">
          <Users className="h-5 w-5" />
          <h3 className="font-semibold">Reddit 社区</h3>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 max-h-[calc(100vh-300px)] overflow-y-auto">
        {communities.map((community) => (
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
        ))}
      </CardContent>
    </Card>
  );
};

export default CommunityList;
