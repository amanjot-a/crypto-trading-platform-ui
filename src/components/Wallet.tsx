import { useState } from 'react';
import { ArrowDownToLine, ArrowUpFromLine, Send, Copy, QrCode, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { walletBalances, transactionHistory } from '../utils/mockData';

export default function Wallet() {
  const [selectedCurrency, setSelectedCurrency] = useState('BTC');
  const totalBalance = walletBalances.reduce((sum, balance) => sum + balance.usdValue, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Total Balance */}
      <Card className="bg-gradient-to-r from-[#00B86B]/20 via-[#00B86B]/10 to-transparent border-[#2A3038] mb-8 shadow-lg emerald-glow">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-[#9BA0A8] mb-2">Total Balance</p>
              <h2 className="text-4xl mb-1 text-[#E0E3E7] font-mono">${totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h2>
              <p className="text-sm text-[#00B86B]">+$4,582.34 (2.15%) today</p>
            </div>
            <div className="flex gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-[#00B86B] hover:bg-[#00995C] text-white gap-2 emerald-glow-hover transition-all">
                    <ArrowDownToLine className="w-4 h-4" />
                    Deposit
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-[#1A1F26] border-[#2A3038] text-[#E0E3E7]">
                  <DialogHeader>
                    <DialogTitle className="text-[#E0E3E7]">Deposit Crypto</DialogTitle>
                    <DialogDescription className="text-[#9BA0A8]">
                      Select cryptocurrency and get your deposit address
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-[#9BA0A8]">Select Cryptocurrency</Label>
                      <Select defaultValue="BTC">
                        <SelectTrigger className="bg-[#0D1117] border-[#2A3038] mt-2 text-[#E0E3E7]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1A1F26] border-[#2A3038]">
                          {walletBalances.map((balance) => (
                            <SelectItem key={balance.currency} value={balance.currency}>
                              {balance.currency}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-[#9BA0A8]">Network</Label>
                      <Select defaultValue="bitcoin">
                        <SelectTrigger className="bg-[#0D1117] border-[#2A3038] mt-2 text-[#E0E3E7]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1A1F26] border-[#2A3038]">
                          <SelectItem value="bitcoin">Bitcoin Network</SelectItem>
                          <SelectItem value="lightning">Lightning Network</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-[#9BA0A8]">Deposit Address</Label>
                      <div className="flex gap-2 mt-2">
                        <Input
                          value="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
                          readOnly
                          className="bg-[#0D1117] border-[#2A3038] text-[#E0E3E7] font-mono"
                        />
                        <Button variant="outline" className="border-[#2A3038] hover:bg-[#3A3F4B] text-[#E0E3E7]">
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" className="border-[#2A3038] hover:bg-[#3A3F4B] text-[#E0E3E7]">
                          <QrCode className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="bg-[#00B86B]/10 border border-[#00B86B]/20 rounded-lg p-4">
                      <p className="text-sm text-[#00B86B]">
                        ⚠ Send only BTC to this address. Sending any other asset will result in permanent loss.
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-[#2A3038] hover:bg-[#3A3F4B] gap-2 text-[#E0E3E7]">
                    <ArrowUpFromLine className="w-4 h-4" />
                    Withdraw
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-[#1A1F26] border-[#2A3038] text-[#E0E3E7]">
                  <DialogHeader>
                    <DialogTitle className="text-[#E0E3E7]">Withdraw Crypto</DialogTitle>
                    <DialogDescription className="text-[#9BA0A8]">
                      Send cryptocurrency to an external address
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-[#9BA0A8]">Select Cryptocurrency</Label>
                      <Select defaultValue="BTC">
                        <SelectTrigger className="bg-[#0D1117] border-[#2A3038] mt-2 text-[#E0E3E7]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1A1F26] border-[#2A3038]">
                          {walletBalances.map((balance) => (
                            <SelectItem key={balance.currency} value={balance.currency}>
                              {balance.currency} - Available: {balance.available}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-[#9BA0A8]">Withdrawal Address</Label>
                      <Input
                        placeholder="Enter destination address"
                        className="bg-[#0D1117] border-[#2A3038] mt-2 text-[#E0E3E7] font-mono"
                      />
                    </div>
                    <div>
                      <Label className="text-[#9BA0A8]">Amount</Label>
                      <div className="relative mt-2">
                        <Input
                          type="number"
                          placeholder="0.00"
                          className="bg-[#0D1117] border-[#2A3038] text-[#E0E3E7] font-mono"
                        />
                        <Button
                          variant="ghost"
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-[#00B86B] h-auto py-1"
                        >
                          Max
                        </Button>
                      </div>
                      <p className="text-xs text-[#9BA0A8] mt-1 font-mono">Available: 2.45678 BTC</p>
                    </div>
                    <div>
                      <Label className="text-[#9BA0A8]">Network Fee</Label>
                      <div className="flex justify-between mt-2 text-sm">
                        <span className="text-[#9BA0A8]">Est. Fee</span>
                        <span className="text-[#E0E3E7] font-mono">0.0001 BTC (~$4.32)</span>
                      </div>
                    </div>
                    <div className="bg-[#E74C3C]/10 border border-[#E74C3C]/20 rounded-lg p-4">
                      <p className="text-sm text-[#E74C3C]">
                        ⚠ Double-check the address. Withdrawals cannot be reversed.
                      </p>
                    </div>
                    <Button className="w-full bg-[#00B86B] hover:bg-[#00995C] text-white emerald-glow-hover transition-all">
                      Withdraw
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-[#2A3038] hover:bg-[#3A3F4B] gap-2 text-[#E0E3E7]">
                    <Send className="w-4 h-4" />
                    Transfer
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-[#1A1F26] border-[#2A3038] text-[#E0E3E7]">
                  <DialogHeader>
                    <DialogTitle className="text-[#E0E3E7]">Internal Transfer</DialogTitle>
                    <DialogDescription className="text-[#9BA0A8]">
                      Transfer funds between your accounts
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-[#9BA0A8]">From</Label>
                      <Select defaultValue="spot">
                        <SelectTrigger className="bg-[#0D1117] border-[#2A3038] mt-2 text-[#E0E3E7]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1A1F26] border-[#2A3038]">
                          <SelectItem value="spot">Spot Wallet</SelectItem>
                          <SelectItem value="futures">Futures Wallet</SelectItem>
                          <SelectItem value="staking">Staking Wallet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-[#9BA0A8]">To</Label>
                      <Select defaultValue="staking">
                        <SelectTrigger className="bg-[#0D1117] border-[#2A3038] mt-2 text-[#E0E3E7]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1A1F26] border-[#2A3038]">
                          <SelectItem value="spot">Spot Wallet</SelectItem>
                          <SelectItem value="futures">Futures Wallet</SelectItem>
                          <SelectItem value="staking">Staking Wallet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-[#9BA0A8]">Currency</Label>
                      <Select defaultValue="BTC">
                        <SelectTrigger className="bg-[#0D1117] border-[#2A3038] mt-2 text-[#E0E3E7]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1A1F26] border-[#2A3038]">
                          {walletBalances.map((balance) => (
                            <SelectItem key={balance.currency} value={balance.currency}>
                              {balance.currency}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-[#9BA0A8]">Amount</Label>
                      <Input
                        type="number"
                        placeholder="0.00"
                        className="bg-[#0D1117] border-[#2A3038] mt-2 text-[#E0E3E7] font-mono"
                      />
                    </div>
                    <Button className="w-full bg-[#00B86B] hover:bg-[#00995C] text-white emerald-glow-hover transition-all">
                      Transfer
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Wallet Balances */}
      <Card className="card-gradient border-[#2A3038] mb-8 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-[#E0E3E7]">Wallet Balances</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#9BA0A8]" />
              <Input
                placeholder="Search currency..."
                className="pl-10 bg-[#0D1117] border-[#2A3038] text-[#E0E3E7]"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#2A3038]">
                  <th className="text-left py-3 text-sm text-[#9BA0A8] uppercase font-mono">Currency</th>
                  <th className="text-right py-3 text-sm text-[#9BA0A8] uppercase font-mono">Available</th>
                  <th className="text-right py-3 text-sm text-[#9BA0A8] uppercase font-mono">Locked</th>
                  <th className="text-right py-3 text-sm text-[#9BA0A8] uppercase font-mono">Total</th>
                  <th className="text-right py-3 text-sm text-[#9BA0A8] uppercase font-mono">USD Value</th>
                  <th className="text-right py-3 text-sm text-[#9BA0A8] uppercase font-mono">Actions</th>
                </tr>
              </thead>
              <tbody>
                {walletBalances.map((balance) => (
                  <tr key={balance.currency} className="border-b border-[#2A3038] hover:bg-[#3A3F4B]/30 transition-colors">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#00B86B] rounded-full flex items-center justify-center text-white text-sm">
                          {balance.currency.charAt(0)}
                        </div>
                        <span className="text-[#E0E3E7]">{balance.currency}</span>
                      </div>
                    </td>
                    <td className="text-right py-4 text-[#E0E3E7] font-mono">{balance.available.toFixed(4)}</td>
                    <td className="text-right py-4 text-[#9BA0A8] font-mono">{balance.locked.toFixed(4)}</td>
                    <td className="text-right py-4 text-[#E0E3E7] font-mono">{balance.total.toFixed(4)}</td>
                    <td className="text-right py-4 text-[#E0E3E7] font-mono">${balance.usdValue.toLocaleString()}</td>
                    <td className="text-right py-4">
                      <div className="flex gap-2 justify-end">
                        <Button size="sm" variant="ghost" className="text-[#00B86B] hover:bg-[#3A3F4B]">
                          Deposit
                        </Button>
                        <Button size="sm" variant="ghost" className="text-[#00B86B] hover:bg-[#3A3F4B]">
                          Withdraw
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Transaction History */}
      <Card className="card-gradient border-[#2A3038] shadow-lg">
        <CardHeader>
          <CardTitle className="text-[#E0E3E7]">Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="bg-[#0D1117]">
              <TabsTrigger value="all" className="data-[state=active]:bg-[#00B86B] data-[state=active]:text-white">All</TabsTrigger>
              <TabsTrigger value="deposits" className="data-[state=active]:bg-[#00B86B] data-[state=active]:text-white">Deposits</TabsTrigger>
              <TabsTrigger value="withdrawals" className="data-[state=active]:bg-[#00B86B] data-[state=active]:text-white">Withdrawals</TabsTrigger>
              <TabsTrigger value="trades" className="data-[state=active]:bg-[#00B86B] data-[state=active]:text-white">Trades</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#2A3038]">
                      <th className="text-left py-3 text-sm text-[#9BA0A8] uppercase font-mono">Type</th>
                      <th className="text-left py-3 text-sm text-[#9BA0A8] uppercase font-mono">Currency</th>
                      <th className="text-right py-3 text-sm text-[#9BA0A8] uppercase font-mono">Amount</th>
                      <th className="text-right py-3 text-sm text-[#9BA0A8] uppercase font-mono">Fee</th>
                      <th className="text-left py-3 text-sm text-[#9BA0A8] uppercase font-mono">Status</th>
                      <th className="text-left py-3 text-sm text-[#9BA0A8] uppercase font-mono">Time</th>
                      <th className="text-left py-3 text-sm text-[#9BA0A8] uppercase font-mono">TX Hash</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactionHistory.map((tx) => (
                      <tr key={tx.id} className="border-b border-[#2A3038] hover:bg-[#3A3F4B]/30 transition-colors">
                        <td className="py-4">
                          <span className={`px-2 py-1 rounded text-xs ${
                            tx.type === 'Deposit' ? 'bg-[#00B86B]/20 text-[#00B86B]' :
                            tx.type === 'Withdrawal' ? 'bg-[#E74C3C]/20 text-[#E74C3C]' :
                            tx.type === 'Trade' ? 'bg-[#3A3F4B] text-[#C0C5CB]' :
                            'bg-[#3A3F4B] text-[#C0C5CB]'
                          }`}>
                            {tx.type}
                          </span>
                        </td>
                        <td className="py-4 text-[#E0E3E7]">{tx.currency}</td>
                        <td className="text-right py-4 text-[#E0E3E7] font-mono">{tx.amount > 0 ? '+' : ''}{tx.amount}</td>
                        <td className="text-right py-4 text-[#9BA0A8] font-mono">{tx.fee}</td>
                        <td className="py-4">
                          <span className={`px-2 py-1 rounded text-xs ${
                            tx.status === 'Completed' ? 'bg-[#00B86B]/20 text-[#00B86B]' : 'bg-[#3A3F4B] text-[#C0C5CB]'
                          }`}>
                            {tx.status}
                          </span>
                        </td>
                        <td className="py-4 text-sm text-[#9BA0A8] font-mono">{tx.time}</td>
                        <td className="py-4 text-sm text-[#9BA0A8]">
                          <span className="font-mono">{tx.txHash.substring(0, 20)}...</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}