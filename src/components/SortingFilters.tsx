
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter, TrendingUp, Clock, Flame, Users, ChevronDown } from "lucide-react";

interface SortingFiltersProps {
  sortBy: string;
  setSortBy: (sort: string) => void;
}

const SortingFilters = ({ sortBy, setSortBy }: SortingFiltersProps) => {
  const sortOptions = [
    { value: "热度排序", label: "热度排序", icon: Flame },
    { value: "时间排序", label: "时间排序", icon: Clock },
    { value: "趋势排序", label: "趋势排序", icon: TrendingUp },
    { value: "社区排序", label: "社区排序", icon: Users },
  ];

  const currentSort = sortOptions.find(option => option.value === sortBy);

  return (
    <div className="flex items-center gap-3">
      <Badge variant="outline" className="text-xs border-gray-600 text-gray-300 bg-slate-800/50">
        实时更新
      </Badge>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            className="glass-effect border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-300"
          >
            <Filter className="h-4 w-4 mr-2" />
            {currentSort?.label}
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-slate-800 border-gray-700">
          {sortOptions.map((option) => {
            const Icon = option.icon;
            return (
              <DropdownMenuItem
                key={option.value}
                onClick={() => setSortBy(option.value)}
                className="text-gray-300 hover:text-white hover:bg-slate-700 cursor-pointer"
              >
                <Icon className="h-4 w-4 mr-2" />
                {option.label}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SortingFilters;
