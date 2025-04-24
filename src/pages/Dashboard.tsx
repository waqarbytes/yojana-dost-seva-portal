
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Home, Settings, File } from 'lucide-react';

const Dashboard = () => {
  return (
    <main className="min-h-screen bg-gov-light">
      <section className="gov-container py-12">
        <h1 className="text-4xl font-bold text-gov-blue mb-8">Your Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Home className="h-6 w-6 text-gov-blue" />
                <h3 className="text-xl font-semibold">Applied Schemes</h3>
              </div>
              <p className="text-3xl font-bold text-gov-blue">0</p>
              <p className="text-gray-600">No schemes applied yet</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Settings className="h-6 w-6 text-gov-blue" />
                <h3 className="text-xl font-semibold">In Progress</h3>
              </div>
              <p className="text-3xl font-bold text-gov-blue">0</p>
              <p className="text-gray-600">No applications in progress</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <File className="h-6 w-6 text-gov-blue" />
                <h3 className="text-xl font-semibold">Completed</h3>
              </div>
              <p className="text-3xl font-bold text-gov-blue">0</p>
              <p className="text-gray-600">No completed applications</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gov-blue mb-4">Recent Activity</h2>
          <p className="text-gray-600">No recent activity to display. Please sign in to view your activities.</p>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
