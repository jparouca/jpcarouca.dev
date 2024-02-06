import { ScrollArea } from "@/components/ScrollArea";
import { SelfDescHeader } from "@/components/SelfDescHeader";
import { Spinner } from "../components/Spinner";

export default async function WritingSlug({ params }) {
  return (
    <>
      <ScrollArea className="flex flex-col bg-white" hasScrollTitle>
        <SelfDescHeader title="Blog" />
        <Suspense fallback={<Spinner />}></Suspense>
      </ScrollArea>
    </>
  );
}
