import { useState } from 'react';
import { Shield, CheckCircle, XCircle, Clock, Smartphone, Mail, Key, User as UserIcon, Camera } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

export default function Profile() {
  const [twoFaEnabled, setTwoFaEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [kycLevel, setKycLevel] = useState(2);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-2">Account Settings</h1>
        <p className="text-gray-400">Manage your account security and preferences</p>
      </div>

      {/* Profile Overview */}
      <Card className="bg-gradient-to-r from-[#F0B90B]/20 via-[#F0B90B]/10 to-transparent border-gray-800 mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 bg-[#F0B90B] rounded-full flex items-center justify-center text-black text-4xl">
                JD
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl mb-1">John Doe</h2>
              <p className="text-gray-400 mb-3">john.doe@email.com</p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Email Verified
                </Badge>
                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  KYC Level {kycLevel}
                </Badge>
                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  2FA Enabled
                </Badge>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm mb-1">Trust Score</p>
              <div className="text-3xl text-[#F0B90B] mb-2">850</div>
              <p className="text-xs text-gray-400">Excellent</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="kyc" className="space-y-6">
        <TabsList className="bg-[#1E2329]">
          <TabsTrigger value="kyc">KYC Verification</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        {/* KYC Verification Tab */}
        <TabsContent value="kyc" className="space-y-6">
          <Card className="bg-[#1E2329] border-gray-800">
            <CardHeader>
              <CardTitle>KYC Verification Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Level 1 */}
              <div className="border border-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-lg">Level 1 - Basic Verification</h3>
                      <p className="text-sm text-gray-400">Email & Phone Number</p>
                    </div>
                  </div>
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20">Verified</Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Email verified: john.doe@email.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Phone verified: +1 (555) 123-4567</span>
                  </div>
                </div>
              </div>

              {/* Level 2 */}
              <div className="border border-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-lg">Level 2 - Identity Verification</h3>
                      <p className="text-sm text-gray-400">Government ID & Selfie</p>
                    </div>
                  </div>
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20">Verified</Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Government ID submitted and verified</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Selfie verification completed</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Withdrawal limit: $100,000/day</span>
                  </div>
                </div>
              </div>

              {/* Level 3 */}
              <div className="border border-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="text-lg">Level 3 - Enhanced Verification</h3>
                      <p className="text-sm text-gray-400">Address Proof & Source of Funds</p>
                    </div>
                  </div>
                  <Badge className="bg-gray-700 text-gray-300">Not Started</Badge>
                </div>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <XCircle className="w-4 h-4 text-gray-500" />
                    <span>Proof of address required</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <XCircle className="w-4 h-4 text-gray-500" />
                    <span>Source of funds documentation</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <CheckCircle className="w-4 h-4 text-gray-500" />
                    <span>Withdrawal limit: Unlimited</span>
                  </div>
                </div>
                <Button className="bg-[#F0B90B] hover:bg-[#F0B90B]/90 text-black">
                  Start Level 3 Verification
                </Button>
              </div>

              {/* Trust Score */}
              <div className="border border-gray-800 rounded-lg p-4">
                <h3 className="text-lg mb-4">Trust Score (CIBIL-style)</h3>
                <div className="flex items-center gap-6 mb-4">
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-400">Your Score</span>
                      <span className="text-2xl text-[#F0B90B]">850</span>
                    </div>
                    <Progress value={85} className="h-3 bg-gray-800" />
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full border-4 border-[#F0B90B] flex items-center justify-center">
                      <span className="text-2xl">A+</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400 mb-1">Trading Activity</p>
                    <Progress value={90} className="h-2 bg-gray-800" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Account Age</p>
                    <Progress value={75} className="h-2 bg-gray-800" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Verification Level</p>
                    <Progress value={67} className="h-2 bg-gray-800" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Security Score</p>
                    <Progress value={95} className="h-2 bg-gray-800" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6">
          {/* 2FA Settings */}
          <Card className="bg-[#1E2329] border-gray-800">
            <CardHeader>
              <CardTitle>Two-Factor Authentication (2FA)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3>Authenticator App</h3>
                    <p className="text-sm text-gray-400">Use Google Authenticator or similar app</p>
                  </div>
                </div>
                <Switch checked={twoFaEnabled} onCheckedChange={setTwoFaEnabled} />
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <h3>Email Verification</h3>
                    <p className="text-sm text-gray-400">Receive codes via email</p>
                  </div>
                </div>
                <Switch checked={true} />
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                    <Key className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <h3>Hardware Security Key</h3>
                    <p className="text-sm text-gray-400">Use YubiKey or similar device</p>
                  </div>
                </div>
                <Button variant="outline" className="border-gray-700 hover:bg-gray-800">Enable</Button>
              </div>
            </CardContent>
          </Card>

          {/* Change Password */}
          <Card className="bg-[#1E2329] border-gray-800">
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-gray-400">Current Password</Label>
                <Input type="password" className="bg-[#0B0E11] border-gray-700 mt-2" />
              </div>
              <div>
                <Label className="text-gray-400">New Password</Label>
                <Input type="password" className="bg-[#0B0E11] border-gray-700 mt-2" />
              </div>
              <div>
                <Label className="text-gray-400">Confirm New Password</Label>
                <Input type="password" className="bg-[#0B0E11] border-gray-700 mt-2" />
              </div>
              <Button className="bg-[#F0B90B] hover:bg-[#F0B90B]/90 text-black">
                Update Password
              </Button>
            </CardContent>
          </Card>

          {/* Active Sessions */}
          <Card className="bg-[#1E2329] border-gray-800">
            <CardHeader>
              <CardTitle>Active Sessions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { device: 'Chrome on Windows', location: 'New York, USA', time: 'Active now', current: true },
                { device: 'Mobile App on iOS', location: 'New York, USA', time: '2 hours ago', current: false },
                { device: 'Firefox on macOS', location: 'Los Angeles, USA', time: '1 day ago', current: false },
              ].map((session, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-800 rounded-lg">
                  <div>
                    <p>{session.device}</p>
                    <p className="text-sm text-gray-400">{session.location} • {session.time}</p>
                  </div>
                  {session.current ? (
                    <Badge className="bg-green-500/10 text-green-500 border-green-500/20">Current</Badge>
                  ) : (
                    <Button variant="ghost" className="text-red-500 hover:bg-red-500/10">Revoke</Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card className="bg-[#1E2329] border-gray-800">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-gray-400">First Name</Label>
                  <Input defaultValue="John" className="bg-[#0B0E11] border-gray-700 mt-2" />
                </div>
                <div>
                  <Label className="text-gray-400">Last Name</Label>
                  <Input defaultValue="Doe" className="bg-[#0B0E11] border-gray-700 mt-2" />
                </div>
              </div>
              <div>
                <Label className="text-gray-400">Email Address</Label>
                <Input defaultValue="john.doe@email.com" className="bg-[#0B0E11] border-gray-700 mt-2" disabled />
              </div>
              <div>
                <Label className="text-gray-400">Phone Number</Label>
                <Input defaultValue="+1 (555) 123-4567" className="bg-[#0B0E11] border-gray-700 mt-2" />
              </div>
              <div>
                <Label className="text-gray-400">Date of Birth</Label>
                <Input type="date" className="bg-[#0B0E11] border-gray-700 mt-2" />
              </div>
              <div>
                <Label className="text-gray-400">Country</Label>
                <Input defaultValue="United States" className="bg-[#0B0E11] border-gray-700 mt-2" />
              </div>
              <Button className="bg-[#F0B90B] hover:bg-[#F0B90B]/90 text-black">
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Preferences Tab */}
        <TabsContent value="preferences" className="space-y-6">
          <Card className="bg-[#1E2329] border-gray-800">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p>Email Notifications</p>
                  <p className="text-sm text-gray-400">Receive updates via email</p>
                </div>
                <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p>Trade Notifications</p>
                  <p className="text-sm text-gray-400">Get notified when trades execute</p>
                </div>
                <Switch checked={true} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p>Price Alerts</p>
                  <p className="text-sm text-gray-400">Alerts for price movements</p>
                </div>
                <Switch checked={true} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p>Security Alerts</p>
                  <p className="text-sm text-gray-400">Important security notifications</p>
                </div>
                <Switch checked={true} disabled />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1E2329] border-gray-800">
            <CardHeader>
              <CardTitle>Display Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-gray-400">Default Currency</Label>
                <Input defaultValue="USD" className="bg-[#0B0E11] border-gray-700 mt-2" />
              </div>
              <div>
                <Label className="text-gray-400">Time Zone</Label>
                <Input defaultValue="America/New_York" className="bg-[#0B0E11] border-gray-700 mt-2" />
              </div>
              <div>
                <Label className="text-gray-400">Language</Label>
                <Input defaultValue="English (US)" className="bg-[#0B0E11] border-gray-700 mt-2" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}