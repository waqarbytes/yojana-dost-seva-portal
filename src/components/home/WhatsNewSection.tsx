
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight } from 'lucide-react';

interface NewItem {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  url: string;
}

const recentItems: NewItem[] = [
  {
    id: '1',
    title: 'PM Kisan Samman Nidhi',
    description: 'New installment release for farmers under PM Kisan scheme. Check your eligibility now.',
    date: '2 days ago',
    category: 'Agriculture',
    url: '/schemes/pm-kisan'
  },
  {
    id: '2',
    title: 'National Education Policy',
    description: 'New scholarship opportunities for higher education students.',
    date: '5 days ago',
    category: 'Education',
    url: '/schemes/nep-scholarship'
  },
  {
    id: '3',
    title: 'Ayushman Bharat',
    description: 'Extended health coverage for senior citizens announced.',
    date: '1 week ago',
    category: 'Health',
    url: '/schemes/ayushman-bharat'
  },
  {
    id: '4',
    title: 'PM Awas Yojana',
    description: 'Housing subsidy scheme now includes urban rental assistance.',
    date: '2 weeks ago',
    category: 'Housing',
    url: '/schemes/pm-awas-yojana'
  }
];

const WhatsNewSection = () => {
  return (
    <section className="section-padding bg-gov-light">
      <div className="gov-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <TrendingUp className="h-6 w-6 text-gov-orange mr-2" />
              <h2 className="text-3xl font-bold text-gov-blue">What's New?</h2>
            </div>
            <p className="text-gray-600 mt-1">Latest schemes and updates for citizens</p>
          </div>
          <Button 
            variant="outline" 
            className="border-gov-blue text-gov-blue hover:bg-gov-blue hover:text-white"
            asChild
          >
            <Link to="/announcements">
              View All Updates <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                <Badge className="mb-2 bg-gov-blue hover:bg-gov-teal">{item.category}</Badge>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-gray-600 line-clamp-3">
                  {item.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-2 border-t">
                <span className="text-xs text-muted-foreground">{item.date}</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gov-teal hover:text-gov-blue hover:bg-transparent p-0"
                  asChild
                >
                  <Link to={item.url}>Learn more</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsNewSection;
