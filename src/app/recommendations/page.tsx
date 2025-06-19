import SiteLayout from "../../templates/layout/SiteLayout";
import ServiceRecommendations from "../../components/ServiceRecommendations";

export default function RecommendationsPage() {
  return (
    <SiteLayout>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Who do you want to book?</h1>
            <p className="text-gray-600">Select the type of service you're looking for</p>
          </div>
          <ServiceRecommendations />
        </div>
      </div>
    </SiteLayout>
  );
}