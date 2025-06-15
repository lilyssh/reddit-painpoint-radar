
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg"></div>
              <span className="text-xl font-bold text-white">RPP Radar</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              基于AI的Reddit痛点雷达，帮助创业者和产品经理发现真实的市场需求。
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">产品</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">痛点挖掘</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">需求分析</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">趋势预测</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API接口</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">公司</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">关于我们</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">联系我们</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">职业机会</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">媒体资源</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">支持</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">帮助中心</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">使用文档</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">社区论坛</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">服务状态</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">隐私政策</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">服务条款</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">DMCA报告</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              © 2024 RPP Radar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
