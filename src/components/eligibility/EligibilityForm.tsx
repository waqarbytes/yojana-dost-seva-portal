
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

interface FormData {
  age: string;
  monthlyIncome: string;
  caste: string;
  state: string;
}

interface SchemeResult {
  id: string;
  name: string;
  description: string;
  eligibility: string;
  applyLink: string;
}

const initialFormData: FormData = {
  age: '',
  monthlyIncome: '',
  caste: '',
  state: '',
};

// Mock data for schemes based on eligibility criteria
const mockSchemes: SchemeResult[] = [
  {
    id: '1',
    name: 'PM Kisan Samman Nidhi',
    description: 'Direct income support to farmers with cultivable land.',
    eligibility: 'All farmers with cultivable land, regardless of income.',
    applyLink: '/schemes/pm-kisan/apply',
  },
  {
    id: '2',
    name: 'National Scholarship Portal',
    description: 'Scholarships for students from disadvantaged backgrounds.',
    eligibility: 'Students from SC/ST/OBC categories with family income below ₹2.5 Lakhs per annum.',
    applyLink: '/schemes/scholarship/apply',
  },
  {
    id: '3',
    name: 'PM Awas Yojana (Urban)',
    description: 'Housing subsidy for urban low-income groups.',
    eligibility: 'Urban families with annual income up to ₹18 Lakhs.',
    applyLink: '/schemes/pm-awas-yojana/apply',
  },
  {
    id: '4',
    name: 'PM Awas Yojana (Rural)',
    description: 'Housing support for rural homeless or those with kutcha houses.',
    eligibility: 'Rural families without pucca houses.',
    applyLink: '/schemes/pm-gramin-awas-yojana/apply',
  },
  {
    id: '5',
    name: 'Ayushman Bharat',
    description: 'Health insurance coverage up to ₹5 Lakhs per family per year.',
    eligibility: 'Economically disadvantaged families based on SECC data.',
    applyLink: '/schemes/ayushman-bharat/apply',
  },
  {
    id: '6',
    name: 'PM Kaushal Vikas Yojana',
    description: 'Skill development training program.',
    eligibility: 'Youth between 18-35 years looking for skill training.',
    applyLink: '/schemes/pmkvy/apply',
  },
  {
    id: '7',
    name: 'National Pension Scheme',
    description: 'Contribution-based pension system.',
    eligibility: 'All citizens between age 18-60.',
    applyLink: '/schemes/nps/apply',
  }
];

const EligibilityForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [results, setResults] = useState<SchemeResult[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      // Filter schemes based on form data
      const filteredSchemes = mockSchemes.filter(scheme => {
        // Simple eligibility logic - in a real app this would be more complex
        const age = parseInt(formData.age);
        const income = parseInt(formData.monthlyIncome);
        
        if (
          (scheme.id === '1' && formData.state !== 'Urban Areas') || // PM Kisan - available for all except urban areas
          (scheme.id === '2' && (formData.caste === 'SC' || formData.caste === 'ST' || formData.caste === 'OBC') && income * 12 <= 250000) || // Scholarship
          (scheme.id === '3' && formData.state === 'Urban Areas' && income * 12 <= 1800000) || // PM Awas Urban
          (scheme.id === '4' && formData.state !== 'Urban Areas') || // PM Awas Rural
          (scheme.id === '5' && income * 12 <= 250000) || // Ayushman Bharat
          (scheme.id === '6' && age >= 18 && age <= 35) || // Skill development
          (scheme.id === '7' && age >= 18 && age <= 60) // Pension
        ) {
          return true;
        }
        return false;
      });
      
      setResults(filteredSchemes);
      setIsSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setResults([]);
    setIsSubmitted(false);
  };

  return (
    <section className="section-padding">
      <div className="gov-container">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gov-blue mb-4">Check Your Eligibility</h1>
          <p className="text-lg text-gray-600">
            Find government schemes and benefits that you qualify for based on your profile
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input
                        type="number"
                        id="age"
                        name="age"
                        placeholder="Enter your age"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="monthlyIncome">Monthly Income (₹)</Label>
                      <Input
                        type="number"
                        id="monthlyIncome"
                        name="monthlyIncome"
                        placeholder="Enter your monthly income"
                        value={formData.monthlyIncome}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="caste">Caste Category</Label>
                      <Select
                        value={formData.caste}
                        onValueChange={(value) => handleSelectChange('caste', value)}
                        required
                      >
                        <SelectTrigger id="caste">
                          <SelectValue placeholder="Select caste category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="General">General</SelectItem>
                          <SelectItem value="OBC">OBC</SelectItem>
                          <SelectItem value="SC">SC</SelectItem>
                          <SelectItem value="ST">ST</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State/Location</Label>
                      <Select
                        value={formData.state}
                        onValueChange={(value) => handleSelectChange('state', value)}
                        required
                      >
                        <SelectTrigger id="state">
                          <SelectValue placeholder="Select your state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Andhra Pradesh">Andhra Pradesh</SelectItem>
                          <SelectItem value="Delhi">Delhi</SelectItem>
                          <SelectItem value="Gujarat">Gujarat</SelectItem>
                          <SelectItem value="Karnataka">Karnataka</SelectItem>
                          <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                          <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                          <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                          <SelectItem value="Urban Areas">Urban Areas</SelectItem>
                          <SelectItem value="Rural Areas">Rural Areas</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gov-blue hover:bg-gov-teal text-white"
                    disabled={loading}
                  >
                    {loading ? 'Processing...' : 'Check Eligibility'}
                  </Button>
                </form>
              ) : (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gov-blue">
                      {results.length} Scheme{results.length !== 1 ? 's' : ''} Found
                    </h2>
                    <Button variant="outline" onClick={resetForm}>
                      Check Again
                    </Button>
                  </div>

                  <div className="space-y-6 mt-6">
                    {results.length > 0 ? (
                      results.map((scheme) => (
                        <div key={scheme.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <h3 className="text-lg font-semibold text-gov-blue">{scheme.name}</h3>
                          <p className="text-gray-600 mt-1">{scheme.description}</p>
                          <p className="text-sm text-gray-500 mt-2">
                            <span className="font-medium">Eligibility:</span> {scheme.eligibility}
                          </p>
                          <div className="mt-4">
                            <Button 
                              asChild
                              className="bg-gov-teal hover:bg-gov-blue"
                            >
                              <a href={scheme.applyLink}>Apply Now</a>
                            </Button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <div className="text-5xl mb-4">😔</div>
                        <h3 className="text-xl font-medium mb-2">No eligible schemes found</h3>
                        <p className="text-gray-600">
                          Based on your criteria, we couldn't find any matching schemes. Try adjusting your parameters or check back later.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EligibilityForm;
