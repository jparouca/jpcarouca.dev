import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import Link from "next/link";
import { ScrollArea } from "../components/ScrollArea";
import { SelfDescHeader } from "@/components/SelfDescHeader";
import { Title } from "@/components/Title";
import { Spinner } from "./components/Spinner";

export default function Home() {
  return (
    <ScrollArea className="flex flex-col" hasScrollTitle>
      <SelfDescHeader scrollTitle="J. P. Arouca" />
      <div className="content-wrapper">
        <div className="content">
          <Title title="Home" className="lg:hidden" />
          <p>
            {`Hi 👋 I'm Joao Pedro Arouca, a software engineer/brew master (same thing), league player, and plant parent.`}
          </p>
          <p>
            I develop things as a Freelancer Software Engineer. I worked as a
            Fullstack Software Engineer at Accenture, Data Engineer at IBM and
            Frontend Jr at Cinjur.
          </p>
          <Button asChild variant="link" className="inline px-0">
            <Link href="/blog">
              <h2 className="mb-4 mt-8">Blog</h2>
            </Link>
          </Button>
          <Suspense fallback={<Spinner />}></Suspense>
        </div>
      </div>
    </ScrollArea>
  );
}
