import { ScrollArea } from "@/components/ScrollArea";
import { Title as PageTitle } from "@/components/Title";
import { SelfDescHeader as FloatingHeader } from "@/components/SelfDescHeader";

export default async function WritingSlug({ params }) {
  return (
    <>
      <ScrollArea
        className="flex flex-col bg-white"
        hasScrollTitle
      ></ScrollArea>
    </>
  );
}
