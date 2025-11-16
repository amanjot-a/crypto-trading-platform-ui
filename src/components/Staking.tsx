import { Award, Lock, TrendingUp, Calendar, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { stakingOptions } from '../utils/mockData';

export default function Staking() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-2 text-[#E0E3E7]">Staking</h1>
        <p className="text-[#9BA0A8]">Earn passive income by staking your crypto assets</p>
      </div>

      {/* Staking Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-gradient-to-r from-[#00B86B]/20 via-[#00B86B]/10 to-transparent border-[#2A3038] shadow-lg emerald-glow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[#9BA0A8]">Total Staked Value</p>
              <Lock className="w-5 h-5 text-[#00B86B]" />
            </div>
            <p className="text-3xl mb-1 text-[#E0E3E7] font-mono">$24,567.89</p>
            <p className="text-sm text-[#9BA0A8]">Across 4 assets</p>
          </CardContent>
        </Card>

        <Card className="card-gradient border-[#2A3038] shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[#9BA0A8]">Total Rewards Earned</p>
              <Award className="w-5 h-5 text-[#00B86B]" />
            </div>
            <p className="text-3xl mb-1 text-[#00B86B] font-mono">$1,248.32</p>
            <p className="text-sm text-[#9BA0A8]">All time</p>
          </CardContent>
        </Card>

        <Card className="card-gradient border-[#2A3038] shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[#9BA0A8]">Average APY</p>
              <TrendingUp className="w-5 h-5 text-[#00B86B]" />
            </div>
            <p className="text-3xl mb-1 text-[#E0E3E7] font-mono">6.25%</p>
            <p className="text-sm text-[#9BA0A8]">Weighted average</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="available" className="space-y-6">
        <TabsList className="bg-[#1A1F26]">
          <TabsTrigger value="available" className="data-[state=active]:bg-[#00B86B] data-[state=active]:text-white">Available Staking</TabsTrigger>
          <TabsTrigger value="active" className="data-[state=active]:bg-[#00B86B] data-[state=active]:text-white">My Staking</TabsTrigger>
          <TabsTrigger value="history" className="data-[state=active]:bg-[#00B86B] data-[state=active]:text-white">Rewards History</TabsTrigger>
        </TabsList>

        {/* Available Staking */}
        <TabsContent value="available" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stakingOptions.map((option) => (
              <Card key={option.id} className="card-gradient border-[#2A3038] hover:border-[#00B86B] transition-all shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#00B86B] rounded-full flex items-center justify-center text-white text-xl">
                        {option.currency.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl text-[#E0E3E7]">{option.currency} Staking</h3>
                        <p className="text-sm text-[#9BA0A8]">{option.duration} lock</p>
                      </div>
                    </div>
                    <Badge className="bg-[#00B86B]/20 text-[#00B86B] border-[#00B86B]/30 text-lg px-3 py-1">
                      {option.apy}% APY
                    </Badge>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#9BA0A8]">Min. Stake</span>
                      <span className="text-[#E0E3E7] font-mono">{option.minAmount} {option.currency}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#9BA0A8]">Duration</span>
                      <span className="text-[#E0E3E7]">{option.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#9BA0A8]">Est. Rewards (Annual)</span>
                      <span className="text-[#00B86B] font-mono">≈ {(option.minAmount * option.apy / 100).toFixed(4)} {option.currency}</span>
                    </div>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-[#00B86B] hover:bg-[#00995C] text-white emerald-glow-hover transition-all">
                        Stake {option.currency}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#1A1F26] border-[#2A3038] text-[#E0E3E7]">
                      <DialogHeader>
                        <DialogTitle className="text-[#E0E3E7]">Stake {option.currency}</DialogTitle>
                        <DialogDescription className="text-[#9BA0A8]">
                          Lock your {option.currency} to earn {option.apy}% APY
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label className="text-[#9BA0A8]">Amount to Stake</Label>
                          <div className="relative mt-2">
                            <Input
                              type="number"
                              placeholder={`Min. ${option.minAmount} ${option.currency}`}
                              className="bg-[#0D1117] border-[#2A3038] text-[#E0E3E7] font-mono"
                            />
                            <Button
                              variant="ghost"
                              className="absolute right-2 top-1/2 -translate-y-1/2 text-[#00B86B] h-auto py-1"
                            >
                              Max
                            </Button>
                          </div>
                          <p className="text-xs text-[#9BA0A8] mt-1 font-mono">Available: 15.8765 {option.currency}</p>
                        </div>

                        <div className="bg-[#0D1117] border border-[#2A3038] rounded-lg p-4 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-[#9BA0A8]">Lock Duration</span>
                            <span className="text-[#E0E3E7]">{option.duration}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-[#9BA0A8]">APY</span>
                            <span className="text-[#00B86B] font-mono">{option.apy}%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-[#9BA0A8]">Est. Rewards</span>
                            <span className="text-[#00B86B]">TBD</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-[#9BA0A8]">Unlock Date</span>
                            <span className="text-[#E0E3E7] font-mono">{new Date(Date.now() + parseInt(option.duration) * 24 * 60 * 60 * 1000).toLocaleDateString()}</span>
                          </div>
                        </div>

                        <div className="bg-[#00B86B]/10 border border-[#00B86B]/20 rounded-lg p-3">
                          <div className="flex gap-2">
                            <Info className="w-5 h-5 text-[#00B86B] flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-[#00B86B]">
                              Your staked assets will be locked for {option.duration}. Early withdrawal is not available.
                            </p>
                          </div>
                        </div>

                        <Button className="w-full bg-[#00B86B] hover:bg-[#00995C] text-white emerald-glow-hover transition-all">
                          Confirm Staking
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Information Section */}
          <Card className="card-gradient border-[#2A3038] shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#E0E3E7]">How Staking Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#00B86B]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-[#00B86B]" />
                  </div>
                  <h3 className="mb-2 text-[#E0E3E7]">Lock Your Assets</h3>
                  <p className="text-sm text-[#9BA0A8]">Choose an asset and lock it for a specific duration to start earning rewards.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#00B86B]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-[#00B86B]" />
                  </div>
                  <h3 className="mb-2 text-[#E0E3E7]">Earn Rewards</h3>
                  <p className="text-sm text-[#9BA0A8]">Receive daily rewards based on your staked amount and the current APY.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#00B86B]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-[#00B86B]" />
                  </div>
                  <h3 className="mb-2 text-[#E0E3E7]">Claim & Reinvest</h3>
                  <p className="text-sm text-[#9BA0A8]">Claim your rewards anytime or automatically reinvest to compound your earnings.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Active Staking */}
        <TabsContent value="active" className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {stakingOptions.filter(opt => opt.staked > 0).map((option) => {
              const unlockDate = new Date(Date.now() + parseInt(option.duration) * 24 * 60 * 60 * 1000);
              const daysRemaining = Math.ceil((unlockDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
              const progress = ((parseInt(option.duration) - daysRemaining) / parseInt(option.duration)) * 100;

              return (
                <Card key={option.id} className="card-gradient border-[#2A3038] shadow-lg">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-[#00B86B] rounded-full flex items-center justify-center text-white text-xl">
                            {option.currency.charAt(0)}
                          </div>
                          <div>
                            <h3 className="text-xl text-[#E0E3E7]">{option.currency} Staking</h3>
                            <p className="text-sm text-[#00B86B] font-mono">{option.apy}% APY</p>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-[#9BA0A8]">Staked Amount</span>
                            <span className="text-[#E0E3E7] font-mono">{option.staked} {option.currency}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#9BA0A8]">Current Value</span>
                            <span className="text-[#E0E3E7] font-mono">$8,456.32</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="mb-4">
                          <div className="flex justify-between mb-2">
                            <span className="text-sm text-[#9BA0A8]">Lock Progress</span>
                            <span className="text-sm text-[#E0E3E7] font-mono">{daysRemaining} days remaining</span>
                          </div>
                          <Progress value={progress} className="h-2 bg-[#3A3F4B]" />
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-[#9BA0A8]">Started</span>
                            <span className="text-[#E0E3E7] font-mono">{new Date(Date.now() - (parseInt(option.duration) - daysRemaining) * 24 * 60 * 60 * 1000).toLocaleDateString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#9BA0A8]">Unlock Date</span>
                            <span className="text-[#E0E3E7] font-mono">{unlockDate.toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between">
                        <div className="bg-[#00B86B]/10 border border-[#00B86B]/20 rounded-lg p-4 mb-4">
                          <p className="text-sm text-[#9BA0A8] mb-1">Total Rewards Earned</p>
                          <p className="text-2xl text-[#00B86B] font-mono">{option.rewards} {option.currency}</p>
                          <p className="text-sm text-[#9BA0A8] font-mono">≈ ${(option.rewards * 2285.75).toFixed(2)}</p>
                        </div>
                        <Button className="w-full bg-[#00B86B] hover:bg-[#00995C] text-white emerald-glow-hover transition-all">
                          Claim Rewards
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Rewards History */}
        <TabsContent value="history" className="space-y-6">
          <Card className="card-gradient border-[#2A3038] shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#E0E3E7]">Rewards History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#2A3038]">
                      <th className="text-left py-3 text-sm text-[#9BA0A8] uppercase font-mono">Date</th>
                      <th className="text-left py-3 text-sm text-[#9BA0A8] uppercase font-mono">Asset</th>
                      <th className="text-right py-3 text-sm text-[#9BA0A8] uppercase font-mono">Amount</th>
                      <th className="text-right py-3 text-sm text-[#9BA0A8] uppercase font-mono">APY</th>
                      <th className="text-right py-3 text-sm text-[#9BA0A8] uppercase font-mono">USD Value</th>
                      <th className="text-left py-3 text-sm text-[#9BA0A8] uppercase font-mono">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { date: '2025-10-28', asset: 'ETH', amount: 0.0015, apy: 4.5, usd: 3.43, status: 'Claimed' },
                      { date: '2025-10-27', asset: 'BNB', amount: 0.0274, apy: 8.2, usd: 8.56, status: 'Claimed' },
                      { date: '2025-10-26', asset: 'ETH', amount: 0.0015, apy: 4.5, usd: 3.43, status: 'Claimed' },
                      { date: '2025-10-25', asset: 'ADA', amount: 1.58, apy: 5.8, usd: 0.77, status: 'Claimed' },
                      { date: '2025-10-24', asset: 'SOL', amount: 0.0179, apy: 6.5, usd: 1.77, status: 'Claimed' },
                    ].map((reward, index) => (
                      <tr key={index} className="border-b border-[#2A3038] hover:bg-[#3A3F4B]/30 transition-colors">
                        <td className="py-4 text-sm text-[#9BA0A8] font-mono">{reward.date}</td>
                        <td className="py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-[#00B86B] rounded-full flex items-center justify-center text-white text-xs">
                              {reward.asset.charAt(0)}
                            </div>
                            <span className="text-[#E0E3E7]">{reward.asset}</span>
                          </div>
                        </td>
                        <td className="text-right py-4 text-[#00B86B] font-mono">+{reward.amount} {reward.asset}</td>
                        <td className="text-right py-4 text-[#E0E3E7] font-mono">{reward.apy}%</td>
                        <td className="text-right py-4 text-[#E0E3E7] font-mono">${reward.usd}</td>
                        <td className="py-4">
                          <Badge className="bg-[#00B86B]/20 text-[#00B86B] border-[#00B86B]/30">
                            {reward.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}