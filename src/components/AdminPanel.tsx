import { Users, DollarSign, Activity, TrendingUp, Search, Filter, MoreVertical, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { adminUsers, cryptocurrencies } from '../utils/mockData';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export default function AdminPanel() {
  const platformStats = [
    { name: 'Total Users', value: '2.5M', change: '+15.3%', icon: Users, color: '#F0B90B' },
    { name: 'Total Volume (24h)', value: '$125.8B', change: '+8.7%', icon: DollarSign, color: '#10B981' },
    { name: 'Active Traders', value: '458K', change: '+12.1%', icon: Activity, color: '#3B82F6' },
    { name: 'Platform Revenue', value: '$12.4M', change: '+22.5%', icon: TrendingUp, color: '#8B5CF6' },
  ];

  const volumeData = Array.from({ length: 7 }, (_, i) => ({
    day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i],
    volume: Math.random() * 150000000000,
    trades: Math.random() * 500000,
  }));

  const userGrowthData = Array.from({ length: 12 }, (_, i) => ({
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
    users: Math.floor(Math.random() * 100000) + 50000,
  }));

  const liquidityData = [
    { name: 'BTC', value: 45 },
    { name: 'ETH', value: 25 },
    { name: 'USDT', value: 15 },
    { name: 'Others', value: 15 },
  ];

  const COLORS = ['#F0B90B', '#3B82F6', '#10B981', '#8B5CF6'];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Admin Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-2">Admin Dashboard</h1>
        <p className="text-gray-400">Platform management and analytics</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {platformStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-[#1E2329] border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${stat.color}20` }}>
                    <Icon className="w-6 h-6" style={{ color: stat.color }} />
                  </div>
                  <span className="text-sm text-green-500">{stat.change}</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">{stat.name}</p>
                  <p className="text-2xl">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Trading Volume */}
        <Card className="bg-[#1E2329] border-gray-800">
          <CardHeader>
            <CardTitle>Trading Volume (7 Days)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={volumeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2e35" />
                <XAxis dataKey="day" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1E2329', border: '1px solid #374151' }}
                  labelStyle={{ color: '#9ca3af' }}
                />
                <Bar dataKey="volume" fill="#F0B90B" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* User Growth */}
        <Card className="bg-[#1E2329] border-gray-800">
          <CardHeader>
            <CardTitle>User Growth (12 Months)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2e35" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1E2329', border: '1px solid #374151' }}
                  labelStyle={{ color: '#9ca3af' }}
                />
                <Line type="monotone" dataKey="users" stroke="#10B981" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="users" className="space-y-6">
        <TabsList className="bg-[#1E2329]">
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="kyc">KYC Verification</TabsTrigger>
          <TabsTrigger value="liquidity">Liquidity</TabsTrigger>
          <TabsTrigger value="fees">Trading Fees</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* User Management */}
        <TabsContent value="users" className="space-y-6">
          <Card className="bg-[#1E2329] border-gray-800">
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <CardTitle>User Management</CardTitle>
                <div className="flex gap-2">
                  <div className="relative flex-1 md:w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input placeholder="Search users..." className="pl-10 bg-[#0B0E11] border-gray-700" />
                  </div>
                  <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-3 text-sm text-gray-400">User</th>
                      <th className="text-left py-3 text-sm text-gray-400">KYC Status</th>
                      <th className="text-left py-3 text-sm text-gray-400">2FA</th>
                      <th className="text-right py-3 text-sm text-gray-400">Total Trades</th>
                      <th className="text-right py-3 text-sm text-gray-400">Total Volume</th>
                      <th className="text-left py-3 text-sm text-gray-400">Registration</th>
                      <th className="text-right py-3 text-sm text-gray-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {adminUsers.map((user) => (
                      <tr key={user.id} className="border-b border-gray-800 hover:bg-[#0B0E11]/50">
                        <td className="py-4">
                          <div>
                            <p>{user.name}</p>
                            <p className="text-sm text-gray-400">{user.email}</p>
                          </div>
                        </td>
                        <td className="py-4">
                          <Badge className={
                            user.kycStatus === 'verified' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                            user.kycStatus === 'pending' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
                            user.kycStatus === 'rejected' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
                            'bg-gray-500/10 text-gray-400 border-gray-500/20'
                          }>
                            {user.kycStatus === 'verified' && <CheckCircle className="w-3 h-3 mr-1" />}
                            {user.kycStatus === 'pending' && <Clock className="w-3 h-3 mr-1" />}
                            {user.kycStatus === 'rejected' && <XCircle className="w-3 h-3 mr-1" />}
                            {user.kycStatus.replace('_', ' ')}
                          </Badge>
                        </td>
                        <td className="py-4">
                          {user.twoFaEnabled ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <XCircle className="w-5 h-5 text-gray-500" />
                          )}
                        </td>
                        <td className="text-right py-4">{user.totalTrades.toLocaleString()}</td>
                        <td className="text-right py-4">${(user.totalVolume / 1000000).toFixed(1)}M</td>
                        <td className="py-4 text-sm text-gray-400">{user.registrationDate}</td>
                        <td className="text-right py-4">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-[#1E2329] border-gray-700">
                              <DropdownMenuItem className="text-gray-300 focus:bg-gray-700 focus:text-white">
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-gray-300 focus:bg-gray-700 focus:text-white">
                                Edit User
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-gray-300 focus:bg-gray-700 focus:text-white">
                                Suspend Account
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-400 focus:bg-gray-700 focus:text-red-400">
                                Delete User
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* KYC Verification */}
        <TabsContent value="kyc" className="space-y-6">
          <Card className="bg-[#1E2329] border-gray-800">
            <CardHeader>
              <CardTitle>Pending KYC Verifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {adminUsers.filter(u => u.kycStatus === 'pending').map((user) => (
                  <div key={user.id} className="border border-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg">{user.name}</h3>
                        <p className="text-sm text-gray-400">{user.email}</p>
                      </div>
                      <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                        <Clock className="w-3 h-3 mr-1" />
                        Pending Review
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <p className="text-gray-400">Submitted</p>
                        <p>Oct 25, 2025</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Documents</p>
                        <p>ID Card, Selfie</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="bg-green-600 hover:bg-green-700">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Approve
                      </Button>
                      <Button variant="outline" className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white">
                        <XCircle className="w-4 h-4 mr-2" />
                        Reject
                      </Button>
                      <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                        View Documents
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Liquidity Management */}
        <TabsContent value="liquidity" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-[#1E2329] border-gray-800">
              <CardHeader>
                <CardTitle>Liquidity Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={liquidityData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {liquidityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-[#1E2329] border-gray-800">
              <CardHeader>
                <CardTitle>Liquidity Pools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cryptocurrencies.slice(0, 4).map((crypto) => (
                    <div key={crypto.id} className="flex items-center justify-between p-3 border border-gray-800 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#F0B90B] rounded-full flex items-center justify-center text-black">
                          {crypto.symbol.charAt(0)}
                        </div>
                        <div>
                          <p>{crypto.symbol}/USDT</p>
                          <p className="text-sm text-gray-400">Depth: ${(crypto.volume24h / 1000000).toFixed(1)}M</p>
                        </div>
                      </div>
                      <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                        Manage
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Trading Fees */}
        <TabsContent value="fees" className="space-y-6">
          <Card className="bg-[#1E2329] border-gray-800">
            <CardHeader>
              <CardTitle>Trading Fee Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-gray-800 rounded-lg p-4">
                    <h3 className="mb-2">Standard Tier</h3>
                    <p className="text-gray-400 text-sm mb-4">0-$50K monthly volume</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Maker Fee</span>
                        <span className="text-[#F0B90B]">0.10%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Taker Fee</span>
                        <span className="text-[#F0B90B]">0.15%</span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-800 rounded-lg p-4">
                    <h3 className="mb-2">Premium Tier</h3>
                    <p className="text-gray-400 text-sm mb-4">$50K-$500K monthly volume</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Maker Fee</span>
                        <span className="text-[#F0B90B]">0.08%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Taker Fee</span>
                        <span className="text-[#F0B90B]">0.12%</span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-800 rounded-lg p-4">
                    <h3 className="mb-2">VIP Tier</h3>
                    <p className="text-gray-400 text-sm mb-4">$500K+ monthly volume</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Maker Fee</span>
                        <span className="text-[#F0B90B]">0.05%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Taker Fee</span>
                        <span className="text-[#F0B90B]">0.08%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-800 rounded-lg p-4">
                  <h3 className="mb-4">Adjust Fee Structure</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Maker Fee (%)</label>
                      <Input type="number" defaultValue="0.10" step="0.01" className="bg-[#0B0E11] border-gray-700" />
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Taker Fee (%)</label>
                      <Input type="number" defaultValue="0.15" step="0.01" className="bg-[#0B0E11] border-gray-700" />
                    </div>
                  </div>
                  <Button className="bg-[#F0B90B] hover:bg-[#F0B90B]/90 text-black mt-4">
                    Update Fees
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-[#1E2329] border-gray-800">
              <CardContent className="p-6">
                <p className="text-gray-400 mb-2">Total Revenue (Month)</p>
                <p className="text-3xl mb-2">$12.4M</p>
                <p className="text-sm text-green-500">+22.5% vs last month</p>
              </CardContent>
            </Card>
            <Card className="bg-[#1E2329] border-gray-800">
              <CardContent className="p-6">
                <p className="text-gray-400 mb-2">Avg. Fee per Trade</p>
                <p className="text-3xl mb-2">$4.82</p>
                <p className="text-sm text-green-500">+5.3% vs last month</p>
              </CardContent>
            </Card>
            <Card className="bg-[#1E2329] border-gray-800">
              <CardContent className="p-6">
                <p className="text-gray-400 mb-2">Active Traders (24h)</p>
                <p className="text-3xl mb-2">458K</p>
                <p className="text-sm text-green-500">+12.1% vs yesterday</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-[#1E2329] border-gray-800">
            <CardHeader>
              <CardTitle>Top Trading Pairs (24h)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {cryptocurrencies.map((crypto, index) => (
                  <div key={crypto.id} className="flex items-center justify-between p-3 border border-gray-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400">#{index + 1}</span>
                      <div className="w-8 h-8 bg-[#F0B90B] rounded-full flex items-center justify-center text-black text-sm">
                        {crypto.symbol.charAt(0)}
                      </div>
                      <span>{crypto.symbol}/USDT</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">${(crypto.volume24h / 1000000000).toFixed(2)}B</p>
                      <p className="text-xs text-gray-400">24h Volume</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}