import { useState } from 'react';
import { Bell, User, Settings, LogOut, Menu, X, Home, TrendingUp, Wallet, PieChart, Shield, Award, History, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
  isAdmin?: boolean;
}

export default function Layout({ children, currentPage, onNavigate, isAdmin = false }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'landing', label: 'Home', icon: Home },
    { id: 'dashboard', label: 'Dashboard', icon: PieChart },
    { id: 'exchange', label: 'Exchange', icon: TrendingUp },
    { id: 'wallet', label: 'Wallet', icon: Wallet },
    { id: 'staking', label: 'Staking', icon: Award },
    { id: 'history', label: 'History', icon: History },
  ];

  if (isAdmin) {
    navItems.push({ id: 'admin', label: 'Admin Panel', icon: Shield });
  }

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E0E3E7]">
      {/* Top Navigation Bar */}
      <nav className="border-b border-[#2A3038] bg-[#0D1117] sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-8">
              <button onClick={() => onNavigate('landing')} className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-[#00B86B] rounded-full flex items-center justify-center group-hover:emerald-glow transition-all">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl tracking-tight text-[#E0E3E7]">CryptoTrade</span>
              </button>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      currentPage === item.id
                        ? 'bg-[#00B86B] text-white emerald-glow'
                        : 'text-[#9BA0A8] hover:text-[#E0E3E7] hover:bg-[#1A1F26]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Notifications */}
              <button
                onClick={() => onNavigate('notifications')}
                className="relative p-2 hover:bg-[#1A1F26] rounded-lg transition-colors"
              >
                <Bell className="w-5 h-5 text-[#C0C5CB]" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-[#E74C3C] border-0 text-xs text-white">
                  3
                </Badge>
              </button>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 hover:bg-[#1A1F26] text-[#E0E3E7]">
                    <div className="w-8 h-8 bg-[#00B86B] rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <ChevronDown className="w-4 h-4 hidden md:block" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-[#1A1F26] border-[#2A3038]">
                  <DropdownMenuLabel className="text-[#E0E3E7]">My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-[#2A3038]" />
                  <DropdownMenuItem onClick={() => onNavigate('profile')} className="text-[#9BA0A8] focus:bg-[#3A3F4B] focus:text-[#E0E3E7]">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onNavigate('profile')} className="text-[#9BA0A8] focus:bg-[#3A3F4B] focus:text-[#E0E3E7]">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-[#2A3038]" />
                  <DropdownMenuItem className="text-[#E74C3C] focus:bg-[#3A3F4B] focus:text-[#E74C3C]">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-[#1A1F26] rounded-lg transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-[#2A3038]">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        currentPage === item.id
                          ? 'bg-[#00B86B] text-white emerald-glow'
                          : 'text-[#9BA0A8] hover:bg-[#1A1F26] hover:text-[#E0E3E7]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-4rem)]">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#2A3038] bg-[#0D1117] py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#00B86B] rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl tracking-tight text-[#E0E3E7]">CryptoTrade</span>
              </div>
              <p className="text-[#9BA0A8] text-sm">
                The world's leading institutional cryptocurrency exchange platform.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-[#E0E3E7]">Products</h3>
              <ul className="space-y-2 text-sm text-[#9BA0A8]">
                <li><a href="#" className="hover:text-[#00B86B] transition-colors">Exchange</a></li>
                <li><a href="#" className="hover:text-[#00B86B] transition-colors">Wallet</a></li>
                <li><a href="#" className="hover:text-[#00B86B] transition-colors">Staking</a></li>
                <li><a href="#" className="hover:text-[#00B86B] transition-colors">NFT Market</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-[#E0E3E7]">Support</h3>
              <ul className="space-y-2 text-sm text-[#9BA0A8]">
                <li><a href="#" className="hover:text-[#00B86B] transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-[#00B86B] transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-[#00B86B] transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-[#00B86B] transition-colors">Fees</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-[#E0E3E7]">Legal</h3>
              <ul className="space-y-2 text-sm text-[#9BA0A8]">
                <li><a href="#" className="hover:text-[#00B86B] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#00B86B] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#00B86B] transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-[#00B86B] transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#2A3038] text-center text-sm text-[#9BA0A8]">
            © 2025 CryptoTrade. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}