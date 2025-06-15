
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
    if (count >= 4) return "neon-text";
    if (count >= 3) return "text-orange-400 electric-glow";
    return "text-yellow-400";
  };

  return (
    <Card className={`group relative floating-card linear-card linear-hover shimmer-overlay ${
      isPremium ? 'linear-glow animate-glow-pulse' : 'animate-pulse-electric'
    }`}>
      
      {/* 电光背景效果 */}
      <div className="absolute inset-0 opacity-20 rounded-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer-electric" />
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-accent to-transparent animate-shimmer-electric" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <CardHeader className="relative z-10 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className={`text-2xl font-light flex items-center gap-2 ${getSeverityColor(severity)}`}>
            {severity}
            {isPremium && <Zap className="h-5 w-5 text-primary animate-pulse-electric" />}
          </div>
          {isPremium && (
            <Badge 
              variant="outline" 
              className="text-xs font-medium border-primary/50 text-primary bg-primary/20 backdrop-blur-sm electric-glow animate-glow-pulse"
            >
              Premium
            </Badge>
          )}
        </div>
        
        <h3 className="text-lg font-medium leading-snug text-foreground group-hover:text-gradient transition-all duration-500">
          {title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mt-6">
          {tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-xs font-normal border-border/70 text-muted-foreground bg-card/50 backdrop-blur-sm hover:border-accent/50 hover:text-accent transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="relative z-10 pt-0">
        <p className="text-sm text-muted-foreground mb-8 leading-relaxed font-light line-clamp-3">
          {originText}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-8">
          <div className="flex items-center gap-2 group/stat hover:text-primary transition-colors duration-300">
            <Users className="h-4 w-4 opacity-70 group-hover/stat:opacity-100 group-hover/stat:text-primary transition-all duration-300" />
            <span className="font-medium">SaaS创始人</span>
          </div>
          <div className="flex items-center gap-2 group/stat hover:text-accent transition-colors duration-300">
            <TrendingUp className="h-4 w-4 opacity-70 group-hover/stat:opacity-100 group-hover/stat:text-accent transition-all duration-300" />
            <span className="font-medium">热度上升</span>
          </div>
        </div>

        <Button 
          variant="outline" 
          size="sm" 
          className="w-full h-10 font-medium border-border/70 hover:border-accent/60 hover:text-accent hover:bg-accent/10 transition-all duration-300 group/btn backdrop-blur-sm"
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
