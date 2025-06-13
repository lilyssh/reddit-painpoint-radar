
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle2, Sparkles } from "lucide-react";
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
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast({
        title: "订阅成功",
        description: "首期报告已发送至您的邮箱",
      });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto linear-card linear-glow">
        <CardContent className="p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6">
            <CheckCircle2 className="h-8 w-8 text-green-400" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-foreground">订阅成功</h3>
          <p className="text-sm text-muted-foreground font-light">
            首期报告已发送至您的邮箱
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto linear-card shimmer-overlay">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-lg font-medium mb-3 text-foreground">
            获取每日痛点摘要
          </h3>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            每天推送 3 条高价值 Reddit 痛点
            <br />直达您的邮箱
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Input
              type="email"
              placeholder="输入您的邮箱地址"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-background/50 border-border/60 focus:border-accent/50 text-foreground placeholder:text-muted-foreground font-light"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full linear-button h-12 text-primary-foreground font-medium"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                发送中...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                免费订阅
              </div>
            )}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground font-light">
            无垃圾邮件 · 随时取消订阅
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailCapture;
