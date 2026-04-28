import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HeroPrimaryBtn() {
  const router = useRouter();
  return (
    <Button onClick={() => router.push("/#contact")} variant="secondary">
      Plan your website
    </Button>
  );
}
