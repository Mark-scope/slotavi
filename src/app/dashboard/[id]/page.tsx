import React from "react";
import ProviderDetail from "@/components/dashboardcomp/BookingId";

export default function Page({ params }: { params: { id: string } }) {
  return <ProviderDetail id={params.id} />;
}
