import Markdown from "markdown-to-jsx";

import { Link } from "@/components/Link";
import { TweetCard } from "@/components/Tweet/TweetCard";

export const MarkdownRenderer = ({ options, ...rest }) => {
  return (
    <Markdown
      options={{
        ...options,
        overrides: {
          a: ({ className, ...rest }) => <Link {...rest} />,
          p: ({ children }) => <p className="mb-2 text-sm">{children}</p>,
          img: ({ alt, src }) => (
            <span className="mt-2 block overflow-hidden rounded-xl border">
              <img
                alt={alt}
                src={`https:${src}`}
                width={400}
                height={300}
                loading="lazy"
                className="aspect-auto w-full animate-reveal object-cover"
              />
            </span>
          ),
          tweet: ({ id }) => <TweetCard id={id} />,
        },
      }}
      {...rest}
    />
  );
};
