import { Download, Filter, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { transactionHistory } from '../utils/mockData';

export default function TransactionHistory() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-2 text-[#E0E3E7]">Transaction History</h1>
        <p className="text-[#9BA0A8]">View all your account transactions and activities</p>
      </div>

      {/* Filters */}
      <Card className="card-gradient border-[#2A3038] mb-6 shadow-lg">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#9BA0A8]" />
              <Input
                placeholder="Search transactions..."
                className="pl-10 bg-[#0D1117] border-[#2A3038] text-[#E0E3E7]"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="bg-[#0D1117] border-[#2A3038] w-full md:w-48 text-[#E0E3E7]">
                <SelectValue placeholder="Transaction Type" />
              </SelectTrigger>
              <SelectContent className="bg-[#1A1F26] border-[#2A3038]">
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="deposit">Deposits</SelectItem>
                <SelectItem value="withdrawal">Withdrawals</SelectItem>
                <SelectItem value="trade">Trades</SelectItem>
                <SelectItem value="staking">Staking</SelectItem>
                <SelectItem value="reward">Rewards</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-currencies">
              <SelectTrigger className="bg-[#0D1117] border-[#2A3038] w-full md:w-48 text-[#E0E3E7]">
                <SelectValue placeholder="Currency" />
              </SelectTrigger>
              <SelectContent className="bg-[#1A1F26] border-[#2A3038]">
                <SelectItem value="all-currencies">All Currencies</SelectItem>
                <SelectItem value="btc">Bitcoin (BTC)</SelectItem>
                <SelectItem value="eth">Ethereum (ETH)</SelectItem>
                <SelectItem value="usdt">Tether (USDT)</SelectItem>
                <SelectItem value="bnb">Binance Coin (BNB)</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="border-[#2A3038] hover:bg-[#3A3F4B] gap-2 whitespace-nowrap text-[#E0E3E7]">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Transactions Table */}
      <Card className="card-gradient border-[#2A3038] shadow-lg">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-[#E0E3E7]">All Transactions</CardTitle>
            <div className="flex gap-2">
              <Button variant="ghost" className="text-sm text-[#9BA0A8] hover:text-[#E0E3E7]">
                Last 7 days
              </Button>
              <Button variant="ghost" className="text-sm text-[#9BA0A8] hover:text-[#E0E3E7]">
                Last 30 days
              </Button>
              <Button variant="ghost" className="text-sm text-[#9BA0A8] hover:text-[#E0E3E7]">
                All time
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
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
                  <th className="text-left py-3 text-sm text-[#9BA0A8] uppercase font-mono">Transaction Hash</th>
                </tr>
              </thead>
              <tbody>
                {transactionHistory.map((tx) => (
                  <tr key={tx.id} className="border-b border-[#2A3038] hover:bg-[#3A3F4B]/30 transition-colors">
                    <td className="py-4">
                      <Badge className={
                        tx.type === 'Deposit' ? 'bg-[#00B86B]/20 text-[#00B86B] border-[#00B86B]/30' :
                        tx.type === 'Withdrawal' ? 'bg-[#E74C3C]/20 text-[#E74C3C] border-[#E74C3C]/30' :
                        tx.type === 'Trade' ? 'bg-[#3A3F4B] text-[#C0C5CB] border-[#2A3038]' :
                        tx.type === 'Staking' ? 'bg-[#3A3F4B] text-[#C0C5CB] border-[#2A3038]' :
                        'bg-[#3A3F4B] text-[#C0C5CB] border-[#2A3038]'
                      }>
                        {tx.type}
                      </Badge>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#00B86B] rounded-full flex items-center justify-center text-white text-xs">
                          {tx.currency.charAt(0)}
                        </div>
                        <span className="text-[#E0E3E7]">{tx.currency}</span>
                      </div>
                    </td>
                    <td className={`text-right py-4 font-mono ${tx.amount > 0 ? 'text-[#00B86B]' : 'text-[#E0E3E7]'}`}>
                      {tx.amount > 0 ? '+' : ''}{tx.amount} {tx.currency}
                    </td>
                    <td className="text-right py-4 text-[#9BA0A8] font-mono">{tx.fee} {tx.currency}</td>
                    <td className="py-4">
                      <Badge className={
                        tx.status === 'Completed' ? 'bg-[#00B86B]/20 text-[#00B86B] border-[#00B86B]/30' :
                        'bg-[#3A3F4B] text-[#C0C5CB] border-[#2A3038]'
                      }>
                        {tx.status}
                      </Badge>
                    </td>
                    <td className="py-4 text-sm text-[#9BA0A8] font-mono">{tx.time}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-[#9BA0A8] font-mono">{tx.txHash.substring(0, 16)}...</span>
                        <Button variant="ghost" className="h-6 px-2 text-[#00B86B] hover:bg-[#3A3F4B]">
                          View
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-[#9BA0A8]">Showing 1-10 of 1,247 transactions</p>
            <div className="flex gap-2">
              <Button variant="outline" className="border-[#2A3038] hover:bg-[#3A3F4B] text-[#E0E3E7]" disabled>
                Previous
              </Button>
              <Button variant="outline" className="border-[#2A3038] hover:bg-[#3A3F4B] bg-[#00B86B] text-white hover:bg-[#00995C]">
                1
              </Button>
              <Button variant="outline" className="border-[#2A3038] hover:bg-[#3A3F4B] text-[#E0E3E7]">
                2
              </Button>
              <Button variant="outline" className="border-[#2A3038] hover:bg-[#3A3F4B] text-[#E0E3E7]">
                3
              </Button>
              <Button variant="outline" className="border-[#2A3038] hover:bg-[#3A3F4B] text-[#E0E3E7]">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}