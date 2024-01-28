import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { ScrollArea } from "@/components/ScrollArea";
import { Title as PageTitle } from "@/components/Title";
import { SelfDescHeader as FloatingHeader } from "@/components/SelfDescHeader";
import { getDateTimeFormat } from "@/lib/utils";

export async function generateStaticParams() {
  const allPosts = await getAllPostSlugs();
  return allPosts.map((post) => ({ slug: post.slug }));
}

async function fetchData(slug) {
  const { isEnabled } = draftMode();
  const data = await getPost(slug, isDevelopment ? true : isEnabled);
  if (!data) notFound();

  return {
    data,
  };
}

export default async function WritingSlug({ params }) {
  const { slug } = params;
  const { data } = await fetchData(slug);

  const {
    title,
    date,
    content,
    sys: { firstPublishedAt, publishedAt: updatedAt },
  } = data;

  const postDate = date || firstPublishedAt;
  const dateString = getDateTimeFormat(postDate);

  return (
    <>
      <ScrollArea className="flex flex-col bg-white" hasScrollTitle>
        <FloatingHeader scrollTitle={title} goBackLink="/writing">
          <WritingViews slug={slug} />
        </FloatingHeader>
        <div className="content-wrapper">
          <article className="content">
            <PageTitle
              title={title}
              subtitle={
                <time dateTime={postDate} className="text-gray-400">
                  {dateString}
                </time>
              }
              className="mb-6 flex flex-col gap-3"
            />
            <RichText content={content} />
          </article>
        </div>
      </ScrollArea>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }}
      />
    </>
  );
}
