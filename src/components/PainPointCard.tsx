
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, TrendingUp, Users, Zap } from "lucide-react";

interface PainPointCardProps {
  title: string;
  severity: string;
  tags: string[];
  originText: string;
  isPremium?: boolean;
  onViewDetails?: () => void;
}

const PainPointCard = ({ 
  title, 
  severity, 
  tags, 
  originText, 
  isPremium = false,
  onViewDetails 
}: PainPointCardProps) => {
  const getSeverityColor = (severity: string) => {
    const count = (severity.match(/🔥/g) || []).length;
    if (count >= 4) return "text-red-400";
    if (count >= 3) return "text-orange-400";
    return "text-yellow-400";
  };

  return (
    <Card className={`group relative overflow-hidden shimmer-overlay ${
      isPremium 
        ? 'border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-blue-900/20' 
        : 'bg-slate-900/50 border-gray-700'
    } hover:border-purple-500/50 transition-all duration-500 backdrop-blur-sm hover-lift`}>
      
      {/* 装饰性背景光效 */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* 顶部闪光效果 */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent group-hover:via-purple-400 transition-all duration-500" />
      
      <CardHeader className="pb-4 relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className={`text-2xl flex items-center gap-2 ${getSeverityColor(severity)} animate-pulse-slow`}>
            {severity}
            {isPremium && <Zap className="h-5 w-5 text-purple-400 animate-bounce-gentle" />}
          </div>
          {isPremium && (
            <Badge 
              variant="outline" 
              className="text-xs font-medium border-purple-500/50 text-purple-400 bg-purple-500/10 animate-glow"
            >
              Premium
            </Badge>
          )}
        </div>
        
        <h3 className="text-lg font-semibold leading-snug text-white group-hover:text-purple-300 transition-colors duration-300">
          {title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-xs border-gray-600 text-gray-300 glass-effect hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300 hover:scale-105"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="pt-0 relative z-10">
        <p className="text-sm text-gray-300 mb-6 leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
          {originText}
        </p>
        
        <div className="flex items-center justify-between text-xs text-gray-400 mb-6">
          <div className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300 group-hover:scale-105">
            <Users className="h-4 w-4" />
            <span>SaaS创始人</span>
          </div>
          <div className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 group-hover:scale-105">
            <TrendingUp className="h-4 w-4 animate-bounce-gentle" />
            <span>热度上升</span>
          </div>
        </div>

        <Button 
          variant="outline" 
          size="sm" 
          className="w-full glass-effect text-gray-300 hover:border-purple-500 hover:text-purple-300 hover:bg-purple-500/10 transition-all duration-500 group/btn hover:scale-105 animate-glow"
          onClick={onViewDetails}
        >
          查看详情
          <ArrowUpRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
        </Button>
      </CardContent>
      
      {/* 底部装饰效果 */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent group-hover:via-purple-500/60 transition-all duration-500" />
    </Card>
  );
};

export default PainPointCard;
