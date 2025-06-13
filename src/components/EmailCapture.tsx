
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Zap, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast({
        title: "✅ 已发送首期报告",
        description: "请查收邮箱，首批痛点报告已送达！",
      });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">订阅成功！</h3>
          <p className="text-muted-foreground">
            首期报告已发送至您的邮箱
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto gradient-secondary border-border/50 glow-accent">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">
            获取每日痛点摘要
          </h3>
          <p className="text-muted-foreground text-sm">
            每天3条高价值Reddit痛点，直达您的邮箱
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="输入您的邮箱地址"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-background/50 border-border focus:border-accent"
            required
          />
          
          <Button 
            type="submit" 
            className="w-full gradient-primary text-white hover:scale-105 transition-transform"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                发送中...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                免费订阅
              </div>
            )}
          </Button>
        </form>

        <div className="mt-4 text-xs text-muted-foreground text-center">
          无垃圾邮件 · 随时取消订阅
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailCapture;
