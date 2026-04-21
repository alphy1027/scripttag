import SectionWrapper from "@/components/shared/SectionWrapper";
import { trackingPoints } from "./content/tracking-points-content";
import TrackingPointCard from "./components/TrackingPointCard";

export default function TrackingPoints() {
  return (
    <SectionWrapper className="flex flex-col items-center sm:items-start justify-center sm:flex-row gap-4 sm:gap-6">
      {trackingPoints.map((point) => (
        <TrackingPointCard title={point.title} icon={point.icon} key={point.id}>
          {point.description}
        </TrackingPointCard>
      ))}
    </SectionWrapper>
  );
}
