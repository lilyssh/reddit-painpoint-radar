
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUp, Users, TrendingUp } from "lucide-react";

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
    if (count >= 4) return "from-red-500 to-orange-500";
    if (count >= 3) return "from-orange-500 to-yellow-500";
    return "from-yellow-500 to-green-500";
  };

  return (
    <Card className={`group relative overflow-hidden transition-all duration-300 hover:scale-105 ${
      isPremium ? 'border-primary/50 glow' : 'hover:border-accent/50'
    }`}>
      {/* Gradient border effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${getSeverityColor(severity)} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
      
      <CardHeader className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <div className={`text-2xl font-bold bg-gradient-to-r ${getSeverityColor(severity)} bg-clip-text text-transparent`}>
            {severity}
          </div>
          {isPremium && (
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
              Premium
            </Badge>
          )}
        </div>
        
        <h3 className="text-lg font-semibold leading-tight group-hover:text-gradient transition-colors">
          {title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs border-muted-foreground/30">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="relative z-10">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {originText}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span>SaaS创始人</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            <span>↗ 热度上升</span>
          </div>
        </div>

        <Button 
          variant="outline" 
          size="sm" 
          className="w-full group-hover:border-accent group-hover:text-accent transition-colors"
          onClick={onViewDetails}
        >
          查看详情
          <ArrowUp className="ml-2 h-3 w-3 rotate-45" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default PainPointCard;
