
import React from 'react';

const About = () => {
  return (
    <main className="min-h-screen bg-gov-light">
      <section className="gov-container py-12">
        <h1 className="text-4xl font-bold text-gov-blue mb-8">About YojanaDost</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            YojanaDost is a Digital India initiative aimed at providing citizens easy access to government schemes and services.
            Our platform simplifies the process of finding and applying for various government welfare schemes.
          </p>
          
          <h2 className="text-2xl font-semibold text-gov-blue mt-8 mb-4">Our Mission</h2>
          <p className="mb-6">
            To empower every citizen by providing seamless access to government services and schemes through a unified digital platform.
          </p>
          
          <h2 className="text-2xl font-semibold text-gov-blue mt-8 mb-4">Our Vision</h2>
          <p className="mb-6">
            To be the most trusted platform for government services, making welfare schemes accessible to all citizens of India.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gov-blue mb-4">What We Do</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Simplify access to government schemes</li>
                <li>Provide eligibility checking tools</li>
                <li>Offer multi-language support</li>
                <li>Ensure accessibility for all users</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gov-blue mb-4">Our Impact</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Millions of citizens served</li>
                <li>Thousands of schemes cataloged</li>
                <li>Pan-India coverage</li>
                <li>24/7 digital assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
