
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, TrendingUp, Users } from "lucide-react";

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
    <Card className={`group relative linear-card linear-hover shimmer-overlay ${
      isPremium ? 'linear-glow' : ''
    }`}>
      
      <CardHeader className="relative z-10 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className={`text-xl font-light ${getSeverityColor(severity)}`}>
            {severity}
          </div>
          {isPremium && (
            <Badge 
              variant="outline" 
              className="text-xs font-medium border-primary/30 text-primary bg-primary/10"
            >
              Premium
            </Badge>
          )}
        </div>
        
        <h3 className="text-base font-medium leading-snug text-foreground group-hover:text-gradient transition-colors duration-300">
          {title}
        </h3>
        
        <div className="flex flex-wrap gap-1.5 mt-4">
          {tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-xs font-normal border-border/60 text-muted-foreground bg-transparent"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="relative z-10 pt-0">
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed font-light line-clamp-3">
          {originText}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-6">
          <div className="flex items-center gap-1.5">
            <Users className="h-3 w-3 opacity-60" />
            <span className="font-medium">SaaS创始人</span>
          </div>
          <div className="flex items-center gap-1.5">
            <TrendingUp className="h-3 w-3 opacity-60" />
            <span className="font-medium">热度上升</span>
          </div>
        </div>

        <Button 
          variant="outline" 
          size="sm" 
          className="w-full h-9 font-medium border-border/60 hover:border-accent/50 hover:text-accent transition-all duration-200"
          onClick={onViewDetails}
        >
          查看详情
          <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default PainPointCard;
