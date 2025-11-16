import { Bell, TrendingUp, Shield, DollarSign, Award, Settings, Trash2, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { notifications } from '../utils/mockData';

export default function Notifications() {
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'trade':
        return <TrendingUp className="w-5 h-5 text-[#C0C5CB]" />;
      case 'security':
        return <Shield className="w-5 h-5 text-[#E74C3C]" />;
      case 'deposit':
        return <DollarSign className="w-5 h-5 text-[#00B86B]" />;
      case 'reward':
        return <Award className="w-5 h-5 text-[#00B86B]" />;
      default:
        return <Bell className="w-5 h-5 text-[#9BA0A8]" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-2 text-[#E0E3E7]">Notifications</h1>
        <p className="text-[#9BA0A8]">Stay updated with your account activities</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Notifications List */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="card-gradient border-[#2A3038] shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-[#E0E3E7]">Recent Notifications</CardTitle>
                <div className="flex gap-2">
                  <Button variant="ghost" className="text-sm text-[#00B86B] hover:bg-[#3A3F4B]">
                    <Check className="w-4 h-4 mr-2" />
                    Mark all as read
                  </Button>
                  <Button variant="ghost" className="text-sm text-[#9BA0A8] hover:bg-[#3A3F4B]">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear all
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="bg-[#0D1117] mb-4">
                  <TabsTrigger value="all" className="data-[state=active]:bg-[#00B86B] data-[state=active]:text-white">All</TabsTrigger>
                  <TabsTrigger value="unread" className="data-[state=active]:bg-[#00B86B] data-[state=active]:text-white">Unread (2)</TabsTrigger>
                  <TabsTrigger value="trade" className="data-[state=active]:bg-[#00B86B] data-[state=active]:text-white">Trades</TabsTrigger>
                  <TabsTrigger value="security" className="data-[state=active]:bg-[#00B86B] data-[state=active]:text-white">Security</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-3">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 rounded-lg border ${
                        notification.read
                          ? 'border-[#2A3038] bg-transparent'
                          : 'border-[#00B86B]/20 bg-[#00B86B]/5'
                      } hover:bg-[#3A3F4B]/30 transition-colors cursor-pointer`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#0D1117] flex items-center justify-center flex-shrink-0">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <p className={`${notification.read ? 'text-[#9BA0A8]' : 'text-[#E0E3E7]'}`}>
                              {notification.message}
                            </p>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-[#00B86B] rounded-full flex-shrink-0 mt-2"></div>
                            )}
                          </div>
                          <div className="flex items-center gap-3">
                            <p className="text-sm text-[#9BA0A8]">{notification.time}</p>
                            <Badge variant="outline" className="border-[#2A3038] text-xs">
                              {notification.type}
                            </Badge>
                          </div>
                        </div>
                        <Button variant="ghost" className="h-8 px-2 text-[#9BA0A8] hover:text-[#E0E3E7] hover:bg-[#3A3F4B]">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="unread" className="space-y-3">
                  {notifications.filter(n => !n.read).map((notification) => (
                    <div
                      key={notification.id}
                      className="p-4 rounded-lg border border-[#F0B90B]/20 bg-[#F0B90B]/5 hover:bg-[#0B0E11]/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#0B0E11] flex items-center justify-center flex-shrink-0">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <p className="text-white">{notification.message}</p>
                            <div className="w-2 h-2 bg-[#F0B90B] rounded-full flex-shrink-0 mt-2"></div>
                          </div>
                          <div className="flex items-center gap-3">
                            <p className="text-sm text-gray-400">{notification.time}</p>
                            <Badge variant="outline" className="border-gray-700 text-xs">
                              {notification.type}
                            </Badge>
                          </div>
                        </div>
                        <Button variant="ghost" className="h-8 px-2 text-gray-400 hover:text-white hover:bg-gray-800">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="trade" className="space-y-3">
                  {notifications.filter(n => n.type === 'trade').map((notification) => (
                    <div
                      key={notification.id}
                      className="p-4 rounded-lg border border-gray-800 hover:bg-[#0B0E11]/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#0B0E11] flex items-center justify-center flex-shrink-0">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-300 mb-1">{notification.message}</p>
                          <p className="text-sm text-gray-400">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="security" className="space-y-3">
                  {notifications.filter(n => n.type === 'security').map((notification) => (
                    <div
                      key={notification.id}
                      className="p-4 rounded-lg border border-gray-800 hover:bg-[#0B0E11]/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#0B0E11] flex items-center justify-center flex-shrink-0">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-300 mb-1">{notification.message}</p>
                          <p className="text-sm text-gray-400">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Notification Settings */}
        <div className="space-y-6">
          <Card className="card-gradient border-[#2A3038] shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#E0E3E7]">
                <Settings className="w-5 h-5 text-[#00B86B]" />
                Notification Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Push Notifications</p>
                  <p className="text-xs text-gray-400">Browser notifications</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Email Notifications</p>
                  <p className="text-xs text-gray-400">Receive updates via email</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Trade Alerts</p>
                  <p className="text-xs text-gray-400">Order executions</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Price Alerts</p>
                  <p className="text-xs text-gray-400">Price movements</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Security Alerts</p>
                  <p className="text-xs text-gray-400">Login & withdrawals</p>
                </div>
                <Switch defaultChecked disabled />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Marketing</p>
                  <p className="text-xs text-gray-400">Promotions & news</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient border-[#2A3038] shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#E0E3E7]">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#C0C5CB] rounded-full"></div>
                  <span className="text-sm text-[#E0E3E7]">Trade Alerts</span>
                </div>
                <Badge className="bg-[#3A3F4B] text-[#C0C5CB] border-[#2A3038]">125</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#E74C3C] rounded-full"></div>
                  <span className="text-sm text-[#E0E3E7]">Security</span>
                </div>
                <Badge className="bg-[#E74C3C]/20 text-[#E74C3C] border-[#E74C3C]/30">12</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00B86B] rounded-full"></div>
                  <span className="text-sm text-[#E0E3E7]">Deposits</span>
                </div>
                <Badge className="bg-[#00B86B]/20 text-[#00B86B] border-[#00B86B]/30">45</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00B86B] rounded-full"></div>
                  <span className="text-sm text-[#E0E3E7]">Rewards</span>
                </div>
                <Badge className="bg-[#00B86B]/20 text-[#00B86B] border-[#00B86B]/30">28</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}