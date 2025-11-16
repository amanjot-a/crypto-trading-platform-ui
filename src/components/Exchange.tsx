import { useState } from 'react';
import { TrendingUp, TrendingDown, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { candlestickData, orderBook, recentTrades, cryptocurrencies } from '../utils/mockData';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function Exchange() {
  const [orderType, setOrderType] = useState<'limit' | 'market'>('limit');
  const [tradeAction, setTradeAction] = useState<'buy' | 'sell'>('buy');
  const [selectedPair, setSelectedPair] = useState('BTC/USDT');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('43250.50');

  const currentCrypto = cryptocurrencies[0];

  return (
    <div className="min-h-screen bg-[#0D1117]">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left Sidebar - Trading Pairs */}
        <div className="w-full lg:w-80 border-b lg:border-r border-[#2A3038] bg-[#0D1117]">
          <div className="p-4 border-b border-[#2A3038]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#9BA0A8]" />
              <Input
                placeholder="Search pairs..."
                className="pl-10 bg-[#1A1F26] border-[#2A3038] focus-visible:ring-[#00B86B] text-[#E0E3E7]"
              />
            </div>
          </div>

          <div className="overflow-y-auto h-[calc(100vh-12rem)]">
            <div className="p-2">
              {cryptocurrencies.map((crypto) => (
                <button
                  key={crypto.id}
                  onClick={() => setSelectedPair(`${crypto.symbol}/USDT`)}
                  className={`w-full p-3 rounded-lg hover:bg-[#1A1F26] transition-all flex items-center justify-between ${
                    selectedPair === `${crypto.symbol}/USDT` ? 'bg-[#1A1F26] border border-[#00B86B]' : ''
                  }`}
                >
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-[#E0E3E7]">{crypto.symbol}/USDT</span>
                      {crypto.change24h > 0 ? (
                        <TrendingUp className="w-3 h-3 text-[#00B86B]" />
                      ) : (
                        <TrendingDown className="w-3 h-3 text-[#E74C3C]" />
                      )}
                    </div>
                    <div className="text-sm text-[#9BA0A8] font-mono">Vol ${(crypto.volume24h / 1000000).toFixed(1)}M</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-[#E0E3E7] font-mono">${crypto.price.toLocaleString()}</div>
                    <div className={`text-sm font-mono ${crypto.change24h > 0 ? 'text-[#00B86B]' : 'text-[#E74C3C]'}`}>
                      {crypto.change24h > 0 ? '+' : ''}{crypto.change24h.toFixed(2)}%
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Pair Header */}
          <div className="p-4 border-b border-[#2A3038] bg-[#0D1117]">
            <div className="flex flex-wrap items-center gap-6">
              <div>
                <h2 className="text-2xl text-[#E0E3E7]">{selectedPair}</h2>
                <div className="text-sm text-[#9BA0A8]">{currentCrypto.name}</div>
              </div>
              <div>
                <div className="text-sm text-[#9BA0A8]">Last Price</div>
                <div className="text-xl text-[#E0E3E7] font-mono">${currentCrypto.price.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-sm text-[#9BA0A8]">24h Change</div>
                <div className={`text-xl font-mono ${currentCrypto.change24h > 0 ? 'text-[#00B86B]' : 'text-[#E74C3C]'}`}>
                  {currentCrypto.change24h > 0 ? '+' : ''}{currentCrypto.change24h.toFixed(2)}%
                </div>
              </div>
              <div>
                <div className="text-sm text-[#9BA0A8]">24h High</div>
                <div className="text-xl text-[#E0E3E7] font-mono">${(currentCrypto.price * 1.02).toLocaleString()}</div>
              </div>
              <div>
                <div className="text-sm text-[#9BA0A8]">24h Low</div>
                <div className="text-xl text-[#E0E3E7] font-mono">${(currentCrypto.price * 0.98).toLocaleString()}</div>
              </div>
              <div>
                <div className="text-sm text-[#9BA0A8]">24h Volume</div>
                <div className="text-xl text-[#E0E3E7] font-mono">${(currentCrypto.volume24h / 1000000000).toFixed(2)}B</div>
              </div>
            </div>
          </div>

          {/* Chart and Trading Panel */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Chart Section */}
            <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-[#2A3038] p-4">
              <Card className="card-gradient border-[#2A3038] h-full shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-[#E0E3E7]">{selectedPair} Chart</CardTitle>
                    <div className="flex gap-2">
                      {['1m', '5m', '15m', '1h', '4h', '1D'].map((interval) => (
                        <button
                          key={interval}
                          className={`px-3 py-1 rounded text-sm transition-all ${
                            interval === '15m'
                              ? 'bg-[#00B86B] text-white emerald-glow'
                              : 'text-[#9BA0A8] hover:bg-[#3A3F4B] hover:text-[#E0E3E7]'
                          }`}
                        >
                          {interval}
                        </button>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="chart-bg rounded-lg">
                  <ResponsiveContainer width="100%" height={400}>
                    <ComposedChart data={candlestickData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#2A3038" />
                      <XAxis dataKey="time" stroke="#9BA0A8" style={{ fontSize: '13px', fontFamily: 'Roboto Mono' }} />
                      <YAxis stroke="#9BA0A8" domain={['auto', 'auto']} style={{ fontSize: '13px', fontFamily: 'Roboto Mono' }} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1A1F26', border: '1px solid #2A3038', borderRadius: '8px' }}
                        labelStyle={{ color: '#9BA0A8', fontFamily: 'Roboto Mono' }}
                        itemStyle={{ color: '#00B86B', fontFamily: 'Roboto Mono' }}
                      />
                      <Bar dataKey="volume" fill="#3A3F4B" opacity={0.3} />
                      <Line
                        type="monotone"
                        dataKey="close"
                        stroke="#00B86B"
                        strokeWidth={2}
                        dot={false}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Trading Panel */}
            <div className="p-4">
              <Card className="card-gradient border-[#2A3038] shadow-lg">
                <CardContent className="p-4">
                  <Tabs value={tradeAction} onValueChange={(v) => setTradeAction(v as 'buy' | 'sell')}>
                    <TabsList className="grid w-full grid-cols-2 bg-[#0D1117]">
                      <TabsTrigger value="buy" className="data-[state=active]:bg-[#00B86B] data-[state=active]:text-white">
                        Buy
                      </TabsTrigger>
                      <TabsTrigger value="sell" className="data-[state=active]:bg-[#E74C3C] data-[state=active]:text-white">
                        Sell
                      </TabsTrigger>
                    </TabsList>

                    <div className="mt-4 space-y-4">
                      {/* Order Type */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => setOrderType('limit')}
                          className={`flex-1 px-3 py-2 rounded text-sm transition-all ${
                            orderType === 'limit'
                              ? 'bg-[#00B86B] text-white'
                              : 'bg-[#0D1117] text-[#9BA0A8] hover:bg-[#3A3F4B]'
                          }`}
                        >
                          Limit
                        </button>
                        <button
                          onClick={() => setOrderType('market')}
                          className={`flex-1 px-3 py-2 rounded text-sm transition-all ${
                            orderType === 'market'
                              ? 'bg-[#00B86B] text-white'
                              : 'bg-[#0D1117] text-[#9BA0A8] hover:bg-[#3A3F4B]'
                          }`}
                        >
                          Market
                        </button>
                      </div>

                      {/* Price Input */}
                      {orderType === 'limit' && (
                        <div>
                          <label className="text-sm text-[#9BA0A8] mb-2 block">Price</label>
                          <div className="relative">
                            <Input
                              type="text"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                              className="bg-[#0D1117] border-[#2A3038] focus-visible:ring-[#00B86B] text-[#E0E3E7] font-mono pr-16"
                            />
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-[#9BA0A8] font-mono">
                              USDT
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Amount Input */}
                      <div>
                        <label className="text-sm text-[#9BA0A8] mb-2 block">Amount</label>
                        <div className="relative">
                          <Input
                            type="text"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="0.00"
                            className="bg-[#0D1117] border-[#2A3038] focus-visible:ring-[#00B86B] text-[#E0E3E7] font-mono pr-16"
                          />
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-[#9BA0A8] font-mono">
                            {selectedPair.split('/')[0]}
                          </span>
                        </div>
                      </div>

                      {/* Percentage Buttons */}
                      <div className="grid grid-cols-4 gap-2">
                        {['25%', '50%', '75%', '100%'].map((percent) => (
                          <button
                            key={percent}
                            className="px-2 py-1 bg-[#0D1117] hover:bg-[#3A3F4B] border border-[#2A3038] rounded text-sm text-[#9BA0A8] transition-all hover:text-[#E0E3E7]"
                          >
                            {percent}
                          </button>
                        ))}
                      </div>

                      {/* Total */}
                      <div>
                        <label className="text-sm text-[#9BA0A8] mb-2 block">Total</label>
                        <div className="relative">
                          <Input
                            type="text"
                            value=""
                            placeholder="0.00"
                            readOnly
                            className="bg-[#0D1117] border-[#2A3038] text-[#E0E3E7] font-mono pr-16"
                          />
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-[#9BA0A8] font-mono">
                            USDT
                          </span>
                        </div>
                      </div>

                      {/* Available Balance */}
                      <div className="flex justify-between text-sm">
                        <span className="text-[#9BA0A8]">Available</span>
                        <span className="text-[#E0E3E7] font-mono">28,347.32 USDT</span>
                      </div>

                      {/* Submit Button */}
                      <Button
                        className={`w-full h-12 transition-all ${
                          tradeAction === 'buy'
                            ? 'bg-[#00B86B] hover:bg-[#00995C] emerald-glow-hover'
                            : 'bg-[#E74C3C] hover:bg-[#C0392B]'
                        }`}
                      >
                        {tradeAction === 'buy' ? 'Buy' : 'Sell'} {selectedPair.split('/')[0]}
                      </Button>
                    </div>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Order Book and Recent Trades */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-[#2A3038]">
            {/* Order Book */}
            <div className="border-b lg:border-b-0 lg:border-r border-[#2A3038] p-4">
              <h3 className="mb-4 text-[#E0E3E7]">Order Book</h3>
              <div className="space-y-2">
                <div className="grid grid-cols-3 text-xs text-[#9BA0A8] mb-2 font-mono uppercase">
                  <div>Price (USDT)</div>
                  <div className="text-right">Amount (BTC)</div>
                  <div className="text-right">Total</div>
                </div>

                {/* Asks */}
                {orderBook.asks.map((ask, index) => (
                  <div key={`ask-${index}`} className="grid grid-cols-3 text-sm relative">
                    <div className="absolute inset-0 bg-[#E74C3C]/10" style={{ width: '40%' }}></div>
                    <div className="text-[#E74C3C] relative z-10 font-mono">{ask.price.toLocaleString()}</div>
                    <div className="text-right relative z-10 text-[#E0E3E7] font-mono">{ask.amount.toFixed(3)}</div>
                    <div className="text-right text-[#9BA0A8] relative z-10 font-mono">{ask.total.toLocaleString()}</div>
                  </div>
                ))}

                {/* Current Price */}
                <div className="py-3 flex items-center justify-center gap-2 text-lg text-[#00B86B]">
                  <span className="font-mono">${currentCrypto.price.toLocaleString()}</span>
                  <TrendingUp className="w-5 h-5" />
                </div>

                {/* Bids */}
                {orderBook.bids.map((bid, index) => (
                  <div key={`bid-${index}`} className="grid grid-cols-3 text-sm relative">
                    <div className="absolute inset-0 bg-[#00B86B]/10" style={{ width: '40%' }}></div>
                    <div className="text-[#00B86B] relative z-10 font-mono">{bid.price.toLocaleString()}</div>
                    <div className="text-right relative z-10 text-[#E0E3E7] font-mono">{bid.amount.toFixed(3)}</div>
                    <div className="text-right text-[#9BA0A8] relative z-10 font-mono">{bid.total.toLocaleString()}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Trades */}
            <div className="lg:col-span-2 p-4">
              <h3 className="mb-4 text-[#E0E3E7]">Recent Trades</h3>
              <div className="space-y-2">
                <div className="grid grid-cols-4 text-xs text-[#9BA0A8] mb-2 font-mono uppercase">
                  <div>Time</div>
                  <div className="text-right">Price (USDT)</div>
                  <div className="text-right">Amount</div>
                  <div className="text-right">Total</div>
                </div>

                {recentTrades.map((trade) => (
                  <div key={trade.id} className="grid grid-cols-4 text-sm">
                    <div className="text-[#9BA0A8] font-mono">{trade.time}</div>
                    <div className={`text-right font-mono ${trade.type === 'buy' ? 'text-[#00B86B]' : 'text-[#E74C3C]'}`}>
                      {trade.price.toLocaleString()}
                    </div>
                    <div className="text-right text-[#E0E3E7] font-mono">{trade.amount}</div>
                    <div className="text-right text-[#9BA0A8] font-mono">{trade.total.toLocaleString()}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}