import Link from "next/link";
import Image from "next/image";
import pfp from "@/assets/twitter_pfp.png";

import { NavigationLink } from "./BarItemLink";
import { SOCIALS, LINKS } from "@/lib/constants";

export const BarItems = () => {
  return (
    <div className="flex w-full flex-col gap-7 text-sm">
      <div className="flex flex-col gap-4">
        <Link href="/" className="link-card inline-flex items-center gap-2 p-2">
          <Image
            src={pfp}
            width={40}
            height={40}
            loading="lazy"
            className="rounded-full border shadow-sm"
          />
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight">J.P. Arouca</span>
            <span className="text-gray-600">Takaxo's Cabin</span>
          </div>
        </Link>
        <div className="flex flex-col gap-1">
          {LINKS.map((link, linkIndex) => (
            <NavigationLink
              key={link.href}
              href={link.href}
              label={link.label}
              icon={link.icon}
              shortcutNumber={linkIndex + 1}
            />
          ))}
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-2 text-sm">
        <span className="px-2 text-xs font-medium leading-relaxed text-gray-600">
          Socials
        </span>
        <div className="flex flex-col gap-1">
          {Object.values(SOCIALS).map((profile) => (
            <NavigationLink
              key={profile.url}
              href={profile.url}
              label={profile.title}
              icon={profile.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
