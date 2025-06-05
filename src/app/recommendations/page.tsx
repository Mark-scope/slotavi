import React from 'react';
import SiteLayout from '../../templates/layout/SiteLayout';
import ServiceRecommendations from '../../components/ServiceRecommendations';

export default function RecommendationsPage() {
  return (
    <SiteLayout>
      <ServiceRecommendations />
    </SiteLayout>
  );
} 