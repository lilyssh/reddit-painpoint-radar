
import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, TrendingUp, X } from "lucide-react";

interface SearchDropdownProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchDropdown = ({ searchTerm, setSearchTerm }: SearchDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState([
    "支付处理", "用户认证", "数据同步", "API集成"
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  const hotTopics = [
    "AI工具痛点", "SaaS订阅管理", "远程办公", "电商库存", "代码审查"
  ];

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term && !recentSearches.includes(term)) {
      setRecentSearches(prev => [term, ...prev.slice(0, 3)]);
    }
    setIsOpen(false);
  };

  const removeRecentSearch = (term: string) => {
    setRecentSearches(prev => prev.filter(item => item !== term));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={inputRef}>
      <div className="relative search-glow">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 z-10" />
        <Input
          placeholder="搜索痛点、标签、社区..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="pl-10 w-80 bg-slate-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 transition-all duration-300"
        />
      </div>

      {isOpen && (
        <Card className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border-gray-700 z-50 max-h-80 overflow-y-auto glass-effect">
          <div className="p-4 space-y-4">
            {/* 最近搜索 */}
            {recentSearches.length > 0 && (
              <div>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <Clock className="h-4 w-4" />
                  <span>最近搜索</span>
                </div>
                <div className="space-y-1">
                  {recentSearches.map((term, index) => (
                    <div key={index} className="flex items-center justify-between group">
                      <button
                        onClick={() => handleSearch(term)}
                        className="flex-1 text-left text-sm text-gray-300 hover:text-white py-1 px-2 rounded hover:bg-slate-700 transition-colors"
                      >
                        {term}
                      </button>
                      <button
                        onClick={() => removeRecentSearch(term)}
                        className="opacity-0 group-hover:opacity-100 p-1 text-gray-500 hover:text-gray-300 transition-all"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 今日热门 */}
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <TrendingUp className="h-4 w-4" />
                <span>今日热门需求</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {hotTopics.map((topic, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-xs border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-300 cursor-pointer transition-all hover:scale-105"
                    onClick={() => handleSearch(topic)}
                  >
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default SearchDropdown;
