
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
    <Card className={`group relative bg-slate-900/50 border ${
      isPremium ? 'border-purple-500/30 bg-gradient-to-br from-purple-900/10 to-blue-900/10' : 'border-gray-700'
    } hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm`}>
      
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className={`text-2xl flex items-center gap-2 ${getSeverityColor(severity)}`}>
            {severity}
            {isPremium && <Zap className="h-5 w-5 text-purple-400" />}
          </div>
          {isPremium && (
            <Badge 
              variant="outline" 
              className="text-xs font-medium border-purple-500/50 text-purple-400 bg-purple-500/10"
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
              className="text-xs border-gray-600 text-gray-300 bg-gray-800/50 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm text-gray-300 mb-6 leading-relaxed line-clamp-3">
          {originText}
        </p>
        
        <div className="flex items-center justify-between text-xs text-gray-400 mb-6">
          <div className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300">
            <Users className="h-4 w-4" />
            <span>SaaS创始人</span>
          </div>
          <div className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
            <TrendingUp className="h-4 w-4" />
            <span>热度上升</span>
          </div>
        </div>

        <Button 
          variant="outline" 
          size="sm" 
          className="w-full border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-300 hover:bg-purple-500/10 transition-all duration-300 group/btn"
          onClick={onViewDetails}
        >
          查看详情
          <ArrowUpRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default PainPointCard;
