import { ScrollArea } from "@/components/ScrollArea";
import { Title } from "@/components/Title";
import { SelfDescHeader } from "@/components/SelfDescHeader";
export default function Utils() {
  return (
    <ScrollArea className="flex flex-col" hasScrollTitle>
      <div className="absolute inset-0 z-0 h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />

      <SelfDescHeader scrollTitle="Timeline" />

      <div className="content-wrapper">
        <Title title="Utils" />
        <div className="content">
          <div className="mb-4 leading-slacker">
            Some utility tools I do once in a while when something bothers me.
          </div>
          <ul className="mb-4 last:mb-0 flex-col gap-0.5 pl-6 list-disc space-y-2">
            <li>
              <div>
                <a
                  className="link break-words after:content-['_↗']"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hyprcon
                </a>{" "}
                - A system settings for Hyprland Window Manager
              </div>
            </li>
            <li>
              <div>
                <a
                  className="link break-words after:content-['_↗']"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Simple Skins
                </a>{" "}
                - A boilerplate website for league smurf account with skins
                preview and stripe payment.
              </div>
            </li>
            <li>
              <div>
                <a
                  className="link break-words after:content-['_↗']"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Patch Diff
                </a>{" "}
                - A league patch notes preview better than riot's.
              </div>
            </li>
            <li>
              <div>
                <a
                  className="link break-words after:content-['_↗']"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Waybar Obsidian
                </a>{" "}
                - Waybar custom module to display Obsidian tasks on notes.
              </div>
            </li>
            <li>
              <div>
                <a
                  className="link break-words after:content-['_↗']"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tired of cding
                </a>{" "}
                - a simple fzf bash script to select the project and start a
                tmux session on it so I dont have to cd around anymore.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </ScrollArea>
  );
}
