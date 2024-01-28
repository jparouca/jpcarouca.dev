import { PlusIcon } from "lucide-react";
import { ScrollArea } from "@/components/ScrollArea";
import { Card } from "@/components/Card";
import { promises } from "fs";
import path, { resolve } from "path";
import { SelfDescHeader } from "@/components/SelfDescHeader";
import { Title } from "@/components/Title";

async function fetchData() {
  const timelineItemsPath = path.resolve(
    process.cwd() + "/src/assets/timeline.json",
  );
  const timelineData =
    JSON.parse(await promises.readFile(timelineItemsPath, "utf8")) || [];
  const allTimelineItems = timelineData.timeline.items || [];
  const mappedTimeline = [];
  allTimelineItems.map((log) => {
    const year = new Date(log.date).getFullYear();
    const existingYear = mappedTimeline.find((item) => item?.year === year);
    if (!existingYear) mappedTimeline.push({ year, logs: [log] });
    else existingYear.logs.push(log);
  });

  return { allTimelineItems: mappedTimeline };
}

export default async function Timeline() {
  const { allTimelineItems } = await fetchData();

  return (
    <ScrollArea className="flex flex-col" hasScrollTitle>
      <div className="absolute inset-0 z-0 h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />

      <SelfDescHeader scrollTitle="Timeline" />
      <div className="content-wrapper">
        <div className="content">
          <Title title="Timeline" />
          <div className="flex flex-col items-stretch gap-12">
            {allTimelineItems.map((item, itemIndex) => (
              <div
                key={`data_${itemIndex}`}
                className="flex flex-col items-baseline gap-6 md:flex-row md:gap-12"
              >
                <div className="flex items-center">
                  <h2>{item.year}</h2>
                  <hr className="my-0 ml-4 flex-1 border-dashed border-gray-200" />
                </div>
                <section>
                  {item.logs.map((log, logIndex) => (
                    <div
                      key={`data_${itemIndex}_log_${logIndex}`}
                      className="relative flex pb-8 last:pb-0"
                    >
                      {logIndex !== item.logs.length - 1 && (
                        <div className="absolute inset-0 flex w-6 items-center justify-center">
                          <div className="pointer-events-none h-full w-px border-l-[1px] border-gray-200"></div>
                        </div>
                      )}
                      <div className="z-0 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black align-middle text-white">
                        <PlusIcon size={16} />
                      </div>
                      <div className="flex-grow pl-8">
                        <Card {...log} index={logIndex} />
                      </div>
                    </div>
                  ))}
                </section>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
