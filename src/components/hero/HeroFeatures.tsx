import React from 'react';
import { Cloud, Database, Lock } from 'lucide-react';
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
        icon={<Database className="h-8 w-8 text-[#64FFDA]" />}
        title="Data Migration"
        description="Secure and efficient transfer of your databases and data warehouses to cloud platforms."
      />
      <FeatureCard
        icon={<Lock className="h-8 w-8 text-[#64FFDA]" />}
        title="Security & Compliance"
        description="Maintain security and compliance throughout your cloud migration journey."
      />
    </div>
  );
};