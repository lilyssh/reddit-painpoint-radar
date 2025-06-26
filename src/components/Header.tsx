
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg"></div>
            <span className="text-xl font-bold text-white">RPP Radar</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              首页
            </Link>
            <Link 
              to="/pain-points" 
              className={`transition-colors ${isActive('/pain-points') ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              痛点探索
            </Link>
            <Link 
              to="/dashboard" 
              className={`transition-colors ${isActive('/dashboard') ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              数据分析
            </Link>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">价格</a>
            <Link 
              to="/feedback" 
              className={`transition-colors ${isActive('/feedback') ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              反馈
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white">登录</Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0">
              开始使用
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link 
                to="/" 
                className={`transition-colors ${isActive('/') ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                首页
              </Link>
              <Link 
                to="/pain-points" 
                className={`transition-colors ${isActive('/pain-points') ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                痛点探索
              </Link>
              <Link 
                to="/dashboard" 
                className={`transition-colors ${isActive('/dashboard') ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                数据分析
              </Link>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">价格</a>
              <Link 
                to="/feedback" 
                className={`transition-colors ${isActive('/feedback') ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                反馈
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-gray-300 hover:text-white">登录</Button>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0">
                  开始使用
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
