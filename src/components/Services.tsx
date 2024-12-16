import React from 'react';
import { GitBranch, Cloud, Shield, Workflow } from 'lucide-react';

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-[#112240]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Comprehensive DevOps solutions for modern enterprises
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          <ServiceCard
            icon={<GitBranch className="h-8 w-8" />}
            title="CI/CD Pipeline Automation"
            description="Implement automated build, test, and deployment pipelines using industry-leading tools and practices."
          />
          <ServiceCard
            icon={<Cloud className="h-8 w-8" />}
            title="Cloud Migration"
            description="Seamlessly migrate your applications to the cloud with minimal downtime and maximum efficiency."
          />
          <ServiceCard
            icon={<Shield className="h-8 w-8" />}
            title="Security & Compliance"
            description="Implement security best practices and maintain compliance with industry standards."
          />
          <ServiceCard
            icon={<Workflow className="h-8 w-8" />}
            title="Infrastructure as Code"
            description="Automate infrastructure provisioning with modern IaC tools and practices."
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="relative p-6 bg-[#0A1A2F] rounded-lg hover:transform hover:-translate-y-1 transition-all duration-300">
    <div className="absolute top-6 left-6">
      <div className="flex items-center justify-center h-12 w-12 rounded-md text-[#64FFDA]">
        {icon}
      </div>
    </div>
    <div className="pl-20">
      <h3 className="text-xl font-medium text-white">{title}</h3>
      <p className="mt-2 text-gray-300">{description}</p>
    </div>
  </div>
);