import { ArrowRight, Shield, Zap, Users, TrendingUp, Star, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { cryptocurrencies } from '../utils/mockData';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="relative bg-[#0D1117]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#0D1117] via-[#12161C] to-[#0D1117]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMyQTMwMzgiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00B86B]/10 border border-[#00B86B]/20 mb-6">
              <Star className="w-4 h-4 text-[#00B86B]" />
              <span className="text-sm text-[#00B86B]">Trusted by 50M+ institutional traders worldwide</span>
            </div>

            <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-[#E0E3E7] via-[#C0C5CB] to-[#9BA0A8] bg-clip-text text-transparent">
              Institutional-Grade Crypto Trading
            </h1>

            <p className="text-xl text-[#9BA0A8] mb-8 max-w-2xl mx-auto">
              Trade Bitcoin, Ethereum, and 350+ cryptocurrencies with enterprise-grade security, advanced analytics, and lightning-fast execution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                onClick={() => onNavigate('dashboard')}
                className="bg-[#00B86B] hover:bg-[#00995C] text-white px-8 py-6 text-lg h-auto emerald-glow-hover transition-all"
              >
                Start Trading Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => onNavigate('exchange')}
                variant="outline"
                className="border-[#2A3038] text-[#E0E3E7] hover:bg-[#1A1F26] hover:border-[#00B86B] px-8 py-6 text-lg h-auto"
              >
                Explore Markets
              </Button>
            </div>

            {/* Market Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { label: '24h Volume', value: '$125.8B' },
                { label: 'Active Users', value: '50M+' },
                { label: 'Countries', value: '180+' },
                { label: 'Cryptocurrencies', value: '350+' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl text-[#00B86B] mb-1 font-mono">{stat.value}</div>
                  <div className="text-sm text-[#9BA0A8]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Cryptocurrencies */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-3xl mb-2 text-[#E0E3E7]">Top Cryptocurrencies</h2>
          <p className="text-[#9BA0A8]">Most traded digital assets in the last 24 hours</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cryptocurrencies.slice(0, 6).map((crypto) => (
            <Card key={crypto.id} className="card-gradient border-[#2A3038] hover:border-[#00B86B] transition-all cursor-pointer shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#00B86B] rounded-full flex items-center justify-center">
                      <span className="text-white">{crypto.symbol.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="text-lg text-[#E0E3E7]">{crypto.name}</div>
                      <div className="text-sm text-[#9BA0A8]">{crypto.symbol}</div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm ${
                    crypto.change24h > 0
                      ? 'bg-[#00B86B]/20 text-[#00B86B]'
                      : 'bg-[#E74C3C]/20 text-[#E74C3C]'
                  }`}>
                    {crypto.change24h > 0 ? '+' : ''}{crypto.change24h.toFixed(2)}%
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#9BA0A8] text-sm">Price</span>
                    <span className="text-lg text-[#E0E3E7] font-mono">${crypto.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9BA0A8] text-sm">24h Volume</span>
                    <span className="text-sm text-[#E0E3E7] font-mono">${(crypto.volume24h / 1000000000).toFixed(2)}B</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9BA0A8] text-sm">Market Cap</span>
                    <span className="text-sm text-[#E0E3E7] font-mono">${(crypto.marketCap / 1000000000).toFixed(2)}B</span>
                  </div>
                </div>

                <Button
                  onClick={() => onNavigate('exchange')}
                  className="w-full mt-4 bg-transparent border border-[#00B86B] text-[#00B86B] hover:bg-[#00B86B] hover:text-white transition-all"
                >
                  Trade {crypto.symbol}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#1A1F26] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#E0E3E7]">Why Choose CryptoTrade?</h2>
            <p className="text-[#9BA0A8] max-w-2xl mx-auto">
              Experience the most advanced institutional cryptocurrency trading platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Bank-Level Security',
                description: 'Your assets are protected with multi-signature wallets, cold storage, and insurance coverage up to $250M.',
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Execute trades in milliseconds with our high-performance matching engine handling 100,000 transactions per second.',
              },
              {
                icon: Users,
                title: '24/7 Support',
                description: 'Get help whenever you need it from our global support team available around the clock in 30+ languages.',
              },
            ].map((feature, index) => (
              <Card key={index} className="card-gradient border-[#2A3038] hover:border-[#00B86B] transition-all shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#00B86B]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-[#00B86B]" />
                  </div>
                  <h3 className="text-xl mb-3 text-[#E0E3E7]">{feature.title}</h3>
                  <p className="text-[#9BA0A8]">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-[#E0E3E7]">Get Started in 3 Simple Steps</h2>
          <p className="text-[#9BA0A8]">Begin your crypto journey in minutes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { step: '1', title: 'Create Account', description: 'Sign up with your email and complete KYC verification' },
            { step: '2', title: 'Deposit Funds', description: 'Add funds via bank transfer, card, or crypto deposit' },
            { step: '3', title: 'Start Trading', description: 'Buy, sell, and trade 350+ cryptocurrencies instantly' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#00B86B] rounded-full flex items-center justify-center mx-auto mb-4 text-3xl text-white emerald-glow">
                {item.step}
              </div>
              <h3 className="text-xl mb-2 text-[#E0E3E7]">{item.title}</h3>
              <p className="text-[#9BA0A8]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#00B86B]/20 via-[#00B86B]/10 to-transparent py-16 border-t border-[#2A3038]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#E0E3E7]">Ready to Start Trading?</h2>
            <p className="text-[#9BA0A8] mb-8">
              Join millions of institutional traders and start your cryptocurrency journey today
            </p>
            <Button
              onClick={() => onNavigate('dashboard')}
              className="bg-[#00B86B] hover:bg-[#00995C] text-white px-8 py-6 text-lg h-auto emerald-glow-hover transition-all"
            >
              Sign Up Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}