import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.jsx";
import { ScrollArea } from "@/components/ScrollArea";
import { SelfDescHeader as FloatingHeader } from "@/components/SelfDescHeader";
import { Title as PageTitle } from "@/components/Title";
import { WORKFLOW_ITEMS } from "@/lib/constants";

export default async function Workflow() {
  return (
    <ScrollArea className="flex flex-col">
      <div className="absolute top-0 z-0 h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(120,119,198,0.3)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />
      <FloatingHeader title="Conf files" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Conf files / Setup" />
          <div className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-scroll pb-6 md:mx-0 md:grid md:snap-none md:grid-cols-2 md:pb-0">
            <EmptyPlaceholder />
            <img
              src="/desktop1.png"
              className="w-2/3 snap-center object-cover md:w-full md:snap-align-none"
              width={960}
              height={540}
              loading="eager"
            />
            <img
              src="/assets/workflow2"
              className="w-2/3 snap-center object-cover md:w-full md:snap-align-none"
              width={960}
              height={540}
              loading="eager"
            />
            <EmptyPlaceholder />
          </div>

          <div className="mt-2 overflow-hidden rounded-lg border md:mt-8">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[300px] px-4"></TableHead>
                  <TableHead className="min-w-[300px] px-4"></TableHead>
                  <TableHead className="min-w-[70px] px-4 text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {WORKFLOW_ITEMS.map((item, itemIndex) => (
                  <TableRow key={`workspace-item-${itemIndex}`}>
                    <TableCell className="px-4 py-3 font-medium">
                      {item.title}
                    </TableCell>
                    <TableCell className="px-4 py-3">{item.specs}</TableCell>
                    <TableCell className="px-4 py-3 font-medium">
                      <a
                        href={item.url}
                        className="link break-words after:content-['_↗']"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        External
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}

const EmptyPlaceholder = () => (
  <div className="shrink-0 snap-center md:hidden">
    <div className="w-px shrink-0" />
  </div>
);
