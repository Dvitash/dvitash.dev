import { SiGithub, SiRoblox, SiRobloxstudio, SiNpm, SiYarn, SiGooglechrome, SiSpotify, SiApplemusic, SiTidal, SiAmazon, SiYoutubemusic } from "react-icons/si";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { VscVscode } from "react-icons/vsc";
import { VscGithub } from "react-icons/vsc";

// import { Cargo, Librs, Wally } from "./icons";
import Button from "./button";
import Tooltip from "./tooltip";

interface Props {
  link: string;
  tooltip: string;
  index: number;
}

function button(icon: React.ReactNode, tooltip: string, link: string, index: number) {
  return (
    <Button key={index} className="text-4xl w-full flex items-center justify-center" borders={index == 0 ? "" : "l"} link={link}>
      {icon}

      <Tooltip>{tooltip}</Tooltip>
    </Button>
  );
}

export default function LinkButton({ link, tooltip, index }: Props) {
  if (link.includes("github.com/marketplace")) {
    return button(<VscGithub />, "GitHub marketplace", link, index);
  } else if (link.includes("github.com")) {
    return button(<SiGithub />, "GitHub repository", link, index);
  } else if (link.includes("npmjs.com")) {
    return button(<SiNpm />, "npm package", link, index);
  } else if (link.includes("yarnpkg.com")) {
    return button(<SiYarn />, "Yarn package", link, index);
  } else if (link.includes("marketplace.visualstudio.com")) {
    return button(<VscVscode />, "VS marketplace", link, index);
  } else if (link.includes("chromewebstore.google.com")) {
    return button(<SiGooglechrome />, "Chrome Web Store", link, index);
  } else if (link.includes("devforum.roblox.com")) {
    return button(<SiRobloxstudio />, "DevForum topic", link, index);
  } else if (link.includes("create.roblox.com")) {
    return button(<SiRoblox />, "Roblox marketplace", link, index);
  } else if (link.includes("open.spotify.com")) {
    return button(<SiSpotify />, "Stream on Spotify", link, index);
  } else if (link.includes("music.apple.com")) {
    return button(<SiApplemusic />, "Stream on Apple Music", link, index);
  } else if (link.includes("music.youtube.com")) {
    return button(<SiYoutubemusic />, "Stream on YouTube Music", link, index);
  } else if (link.includes("listen.tidal.com")) {
    return button(<SiTidal />, "Stream on Tidal", link, index);
  } else if (link.includes("amazon.com")) {
    return button(<SiAmazon />, "Buy on Amazon", link, index);
  } else {
    return button(<LiaExternalLinkAltSolid />, tooltip, link, index);
  }
}
