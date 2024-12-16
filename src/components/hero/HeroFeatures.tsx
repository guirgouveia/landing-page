import React from 'react';
import { Cloud, DollarSign, Shield } from 'lucide-react';
import { FeatureCard } from '../common/FeatureCard';

export const HeroFeatures = () => {
  return (
    <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <FeatureCard
        icon={<Cloud className="h-8 w-8 text-[#64FFDA]" />}
        title="Cloud Migration"
        description="Expert guidance in migrating your infrastructure to the cloud with minimal disruption and maximum efficiency."
      />
      <FeatureCard
        icon={<DollarSign className="h-8 w-8 text-[#64FFDA]" />}
        title="Cloud Cost Optimization"
        description="Optimize your cloud spending with our comprehensive cost analysis and management services."
      />
      <FeatureCard
        icon={<Shield className="h-8 w-8 text-[#64FFDA]" />}
        title="DevSecOps Integration"
        description="Implement security-first practices with our integrated DevSecOps approach throughout your cloud journey."
      />
    </div>
  );
};