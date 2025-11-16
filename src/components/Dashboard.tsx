import { ArrowUpRight, ArrowDownRight, TrendingUp, DollarSign, Activity, Wallet as WalletIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { cryptocurrencies, walletBalances, recentTrades } from '../utils/mockData';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  const totalBalance = walletBalances.reduce((sum, balance) => sum + balance.usdValue, 0);
  const portfolioData = Array.from({ length: 24 }, (_, i) => ({
    time: `${i}:00`,
    value: totalBalance + (Math.random() - 0.5) * 20000,
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-2 text-[#E0E3E7]">Welcome back, Trader</h1>
        <p className="text-[#9BA0A8]">Here's what's happening with your portfolio today</p>
      </div>

      {/* Portfolio Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="card-gradient border-[#2A3038] hover:border-[#00B86B] transition-all duration-300 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-[#9BA0A8]">Total Balance</CardTitle>
            <WalletIcon className="w-4 h-4 text-[#00B86B]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl mb-1 text-[#E0E3E7] font-mono">${totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            <div className="flex items-center text-sm text-[#00B86B]">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              <span>+12.5% this month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient border-[#2A3038] hover:border-[#00B86B] transition-all duration-300 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-[#9BA0A8]">24h PnL</CardTitle>
            <TrendingUp className="w-4 h-4 text-[#00B86B]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl mb-1 text-[#00B86B] font-mono">+$4,582.34</div>
            <div className="flex items-center text-sm text-[#00B86B]">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              <span>+2.15%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient border-[#2A3038] hover:border-[#00B86B] transition-all duration-300 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-[#9BA0A8]">Total Trades</CardTitle>
            <Activity className="w-4 h-4 text-[#00B86B]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl mb-1 text-[#E0E3E7] font-mono">1,247</div>
            <div className="flex items-center text-sm text-[#9BA0A8]">
              <span>35 today</span>
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient border-[#2A3038] hover:border-[#00B86B] transition-all duration-300 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-[#9BA0A8]">Win Rate</CardTitle>
            <DollarSign className="w-4 h-4 text-[#00B86B]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl mb-1 text-[#E0E3E7] font-mono">68.3%</div>
            <div className="flex items-center text-sm text-[#00B86B]">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              <span>+3.2% vs last week</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Portfolio Chart and Holdings */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Portfolio Chart */}
        <Card className="card-gradient border-[#2A3038] lg:col-span-2 shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-[#E0E3E7]">Portfolio Value</CardTitle>
              <div className="flex gap-2">
                {['1H', '24H', '7D', '30D', '1Y'].map((period) => (
                  <button
                    key={period}
                    className={`px-3 py-1 rounded text-sm transition-all ${
                      period === '24H'
                        ? 'bg-[#00B86B] text-white emerald-glow'
                        : 'text-[#9BA0A8] hover:bg-[#3A3F4B] hover:text-[#E0E3E7]'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={portfolioData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00B86B" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00B86B" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A3038" />
                <XAxis dataKey="time" stroke="#9BA0A8" style={{ fontSize: '13px', fontFamily: 'Roboto Mono' }} />
                <YAxis stroke="#9BA0A8" style={{ fontSize: '13px', fontFamily: 'Roboto Mono' }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1A1F26', border: '1px solid #2A3038', borderRadius: '8px' }}
                  labelStyle={{ color: '#9BA0A8', fontFamily: 'Roboto Mono' }}
                  itemStyle={{ color: '#00B86B', fontFamily: 'Roboto Mono' }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#00B86B"
                  strokeWidth={2}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Holdings Breakdown */}
        <Card className="card-gradient border-[#2A3038] shadow-lg">
          <CardHeader>
            <CardTitle className="text-[#E0E3E7]">Holdings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {walletBalances.slice(0, 5).map((balance) => {
                const percentage = (balance.usdValue / totalBalance) * 100;
                return (
                  <div key={balance.currency}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#00B86B] rounded-full flex items-center justify-center text-white text-sm">
                          {balance.currency.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm text-[#E0E3E7]">{balance.currency}</div>
                          <div className="text-xs text-[#9BA0A8] font-mono">{balance.total.toFixed(4)}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-[#E0E3E7] font-mono">${balance.usdValue.toLocaleString()}</div>
                        <div className="text-xs text-[#9BA0A8] font-mono">{percentage.toFixed(1)}%</div>
                      </div>
                    </div>
                    <div className="w-full bg-[#3A3F4B] rounded-full h-1.5">
                      <div
                        className="bg-[#00B86B] h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
            <Button
              onClick={() => onNavigate('wallet')}
              variant="outline"
              className="w-full mt-4 border-[#2A3038] hover:bg-[#3A3F4B] hover:border-[#00B86B] hover:text-[#00B86B] transition-all text-[#E0E3E7]"
            >
              View All Assets
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Market Overview and Recent Trades */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Live Crypto Prices */}
        <Card className="card-gradient border-[#2A3038] shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-[#E0E3E7]">Live Market Prices</CardTitle>
              <Button
                onClick={() => onNavigate('exchange')}
                variant="ghost"
                className="text-[#00B86B] hover:bg-[#3A3F4B]"
              >
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {cryptocurrencies.slice(0, 5).map((crypto) => (
                <div key={crypto.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-[#3A3F4B] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#00B86B] rounded-full flex items-center justify-center text-white">
                      {crypto.symbol.charAt(0)}
                    </div>
                    <div>
                      <div className="text-[#E0E3E7]">{crypto.name}</div>
                      <div className="text-sm text-[#9BA0A8]">{crypto.symbol}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#E0E3E7] font-mono">${crypto.price.toLocaleString()}</div>
                    <div className={`text-sm flex items-center justify-end font-mono ${
                      crypto.change24h > 0 ? 'text-[#00B86B]' : 'text-[#E74C3C]'
                    }`}>
                      {crypto.change24h > 0 ? (
                        <ArrowUpRight className="w-3 h-3 mr-1" />
                      ) : (
                        <ArrowDownRight className="w-3 h-3 mr-1" />
                      )}
                      {Math.abs(crypto.change24h).toFixed(2)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Trades */}
        <Card className="card-gradient border-[#2A3038] shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-[#E0E3E7]">Recent Trades</CardTitle>
              <Button
                onClick={() => onNavigate('history')}
                variant="ghost"
                className="text-[#00B86B] hover:bg-[#3A3F4B]"
              >
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTrades.map((trade) => (
                <div key={trade.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-[#3A3F4B] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      trade.type === 'buy' ? 'bg-[#00B86B]/20' : 'bg-[#E74C3C]/20'
                    }`}>
                      {trade.type === 'buy' ? (
                        <ArrowUpRight className="w-4 h-4 text-[#00B86B]" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4 text-[#E74C3C]" />
                      )}
                    </div>
                    <div>
                      <div className="text-sm text-[#E0E3E7]">{trade.pair}</div>
                      <div className="text-xs text-[#9BA0A8] font-mono">{trade.time}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-mono ${
                      trade.type === 'buy' ? 'text-[#00B86B]' : 'text-[#E74C3C]'
                    }`}>
                      {trade.type === 'buy' ? '+' : '-'}${trade.total.toLocaleString()}
                    </div>
                    <div className="text-xs text-[#9BA0A8] font-mono">{trade.amount} {trade.pair.split('/')[0]}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}