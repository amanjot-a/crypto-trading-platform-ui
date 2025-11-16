// Mock data for the cryptocurrency trading platform

export interface Cryptocurrency {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  volume24h: number;
  marketCap: number;
  chart: number[];
}

export interface Trade {
  id: string;
  pair: string;
  type: 'buy' | 'sell';
  price: number;
  amount: number;
  total: number;
  time: string;
  status: 'completed' | 'pending' | 'cancelled';
}

export interface OrderBookItem {
  price: number;
  amount: number;
  total: number;
}

export interface WalletBalance {
  currency: string;
  available: number;
  locked: number;
  total: number;
  usdValue: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  kycStatus: 'verified' | 'pending' | 'rejected' | 'not_started';
  twoFaEnabled: boolean;
  registrationDate: string;
  totalTrades: number;
  totalVolume: number;
}

// Generate realistic price data
const generatePriceHistory = (basePrice: number, points: number = 50) => {
  const data = [];
  let price = basePrice;
  for (let i = 0; i < points; i++) {
    price += (Math.random() - 0.5) * (basePrice * 0.02);
    data.push(price);
  }
  return data;
};

export const cryptocurrencies: Cryptocurrency[] = [
  {
    id: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 43250.50,
    change24h: 2.34,
    volume24h: 28500000000,
    marketCap: 847000000000,
    chart: generatePriceHistory(43250),
  },
  {
    id: '2',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 2285.75,
    change24h: -1.22,
    volume24h: 14200000000,
    marketCap: 275000000000,
    chart: generatePriceHistory(2285),
  },
  {
    id: '3',
    name: 'Binance Coin',
    symbol: 'BNB',
    price: 312.40,
    change24h: 3.45,
    volume24h: 1850000000,
    marketCap: 48000000000,
    chart: generatePriceHistory(312),
  },
  {
    id: '4',
    name: 'Solana',
    symbol: 'SOL',
    price: 98.65,
    change24h: 5.67,
    volume24h: 2100000000,
    marketCap: 42000000000,
    chart: generatePriceHistory(98),
  },
  {
    id: '5',
    name: 'Cardano',
    symbol: 'ADA',
    price: 0.485,
    change24h: -2.15,
    volume24h: 580000000,
    marketCap: 17000000000,
    chart: generatePriceHistory(0.485),
  },
  {
    id: '6',
    name: 'Ripple',
    symbol: 'XRP',
    price: 0.625,
    change24h: 1.87,
    volume24h: 1200000000,
    marketCap: 33000000000,
    chart: generatePriceHistory(0.625),
  },
];

export const recentTrades: Trade[] = [
  { id: '1', pair: 'BTC/USDT', type: 'buy', price: 43250.50, amount: 0.5, total: 21625.25, time: '14:32:15', status: 'completed' },
  { id: '2', pair: 'ETH/USDT', type: 'sell', price: 2285.75, amount: 2, total: 4571.50, time: '14:30:42', status: 'completed' },
  { id: '3', pair: 'BNB/USDT', type: 'buy', price: 312.40, amount: 10, total: 3124.00, time: '14:28:33', status: 'completed' },
  { id: '4', pair: 'SOL/USDT', type: 'buy', price: 98.65, amount: 25, total: 2466.25, time: '14:25:11', status: 'pending' },
  { id: '5', pair: 'ADA/USDT', type: 'sell', price: 0.485, amount: 5000, total: 2425.00, time: '14:22:58', status: 'completed' },
];

export const orderBook = {
  asks: [
    { price: 43265.50, amount: 0.245, total: 10599.05 },
    { price: 43263.25, amount: 0.532, total: 23015.97 },
    { price: 43261.00, amount: 1.234, total: 53383.95 },
    { price: 43258.75, amount: 0.876, total: 37894.67 },
    { price: 43256.50, amount: 2.145, total: 92784.69 },
  ] as OrderBookItem[],
  bids: [
    { price: 43250.25, amount: 0.534, total: 23095.63 },
    { price: 43248.00, amount: 1.256, total: 54319.49 },
    { price: 43245.75, amount: 0.789, total: 34120.86 },
    { price: 43243.50, amount: 2.345, total: 101405.01 },
    { price: 43241.25, amount: 0.923, total: 39911.63 },
  ] as OrderBookItem[],
};

export const walletBalances: WalletBalance[] = [
  { currency: 'BTC', available: 2.45678, locked: 0.12345, total: 2.58023, usdValue: 111571.45 },
  { currency: 'ETH', available: 15.8765, locked: 1.2345, total: 17.111, usdValue: 39106.63 },
  { currency: 'USDT', available: 25847.32, locked: 2500.00, total: 28347.32, usdValue: 28347.32 },
  { currency: 'BNB', available: 125.45, locked: 0, total: 125.45, usdValue: 39190.58 },
  { currency: 'SOL', available: 342.67, locked: 50.00, total: 392.67, usdValue: 38726.30 },
  { currency: 'ADA', available: 8456.32, locked: 0, total: 8456.32, usdValue: 4101.32 },
];

export const adminUsers: User[] = [
  { id: '1', email: 'john.doe@email.com', name: 'John Doe', kycStatus: 'verified', twoFaEnabled: true, registrationDate: '2024-01-15', totalTrades: 1247, totalVolume: 2450000 },
  { id: '2', email: 'jane.smith@email.com', name: 'Jane Smith', kycStatus: 'pending', twoFaEnabled: false, registrationDate: '2024-08-22', totalTrades: 45, totalVolume: 125000 },
  { id: '3', email: 'mike.johnson@email.com', name: 'Mike Johnson', kycStatus: 'verified', twoFaEnabled: true, registrationDate: '2023-11-03', totalTrades: 3421, totalVolume: 5680000 },
  { id: '4', email: 'sarah.williams@email.com', name: 'Sarah Williams', kycStatus: 'rejected', twoFaEnabled: false, registrationDate: '2024-10-10', totalTrades: 12, totalVolume: 8500 },
  { id: '5', email: 'david.brown@email.com', name: 'David Brown', kycStatus: 'not_started', twoFaEnabled: false, registrationDate: '2024-10-25', totalTrades: 3, totalVolume: 1200 },
];

export const candlestickData = Array.from({ length: 100 }, (_, i) => {
  const basePrice = 43000 + Math.random() * 1000;
  const open = basePrice + (Math.random() - 0.5) * 200;
  const close = basePrice + (Math.random() - 0.5) * 200;
  const high = Math.max(open, close) + Math.random() * 100;
  const low = Math.min(open, close) - Math.random() * 100;

  return {
    time: new Date(Date.now() - (100 - i) * 3600000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    open,
    high,
    low,
    close,
    volume: Math.random() * 1000000,
  };
});

export const stakingOptions = [
  { id: '1', currency: 'ETH', apy: 4.5, duration: '30 days', minAmount: 0.1, staked: 5.5, rewards: 0.0206 },
  { id: '2', currency: 'BNB', apy: 8.2, duration: '60 days', minAmount: 1, staked: 50, rewards: 0.6712 },
  { id: '3', currency: 'ADA', apy: 5.8, duration: '90 days', minAmount: 100, staked: 2000, rewards: 28.44 },
  { id: '4', currency: 'SOL', apy: 6.5, duration: '120 days', minAmount: 1, staked: 100, rewards: 2.137 },
];

export const notifications = [
  { id: '1', type: 'trade', message: 'Your BTC/USDT buy order has been filled', time: '5 minutes ago', read: false },
  { id: '2', type: 'security', message: 'New login detected from Chrome on Windows', time: '1 hour ago', read: false },
  { id: '3', type: 'deposit', message: 'Deposit of 1000 USDT confirmed', time: '3 hours ago', read: true },
  { id: '4', type: 'system', message: 'Scheduled maintenance on Oct 30, 2025 at 02:00 UTC', time: '1 day ago', read: true },
  { id: '5', type: 'reward', message: 'You earned 0.0045 ETH from staking rewards', time: '2 days ago', read: true },
];

export const transactionHistory = [
  { id: '1', type: 'Deposit', currency: 'USDT', amount: 5000, fee: 0, status: 'Completed', time: '2025-10-27 14:32:15', txHash: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb' },
  { id: '2', type: 'Trade', currency: 'BTC', amount: -0.5, fee: 0.0001, status: 'Completed', time: '2025-10-27 12:15:42', txHash: '0x8f9e2b1c4a6d3f7e9b8c1a5d4e7f2a3b6c9d1e4f' },
  { id: '3', type: 'Withdrawal', currency: 'ETH', amount: -2.5, fee: 0.005, status: 'Pending', time: '2025-10-26 18:45:22', txHash: '0x3c7f9a2b5d8e1c4f6a9b2d5e8f1c4a7b9d2e5f8c' },
  { id: '4', type: 'Staking', currency: 'BNB', amount: -50, fee: 0, status: 'Completed', time: '2025-10-25 09:22:11', txHash: '0x1a4b7c9d2e5f8a3b6c9d2e5f8a1b4c7d9e2f5a8b' },
  { id: '5', type: 'Reward', currency: 'ETH', amount: 0.0206, fee: 0, status: 'Completed', time: '2025-10-24 06:00:00', txHash: '0x9d5e2a8f1b4c7d9e2f5a8b1c4d7e9f2a5b8c1d4e' },
];