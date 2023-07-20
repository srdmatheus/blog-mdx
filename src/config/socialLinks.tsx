import { SocialLinksTypes } from "@/types/SocialLinksTypes";

import { GithubLogo, LinkedinLogo } from "@/components/Icons";

export const socialLinks: SocialLinksTypes = {
  socialMedia: [
    {
      name: "Github",
      href: "https://github.com/srdmatheus",
      icon: <GithubLogo size={24} className="leading-none" />
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/srdmatheus",
      icon: <LinkedinLogo size={24} className="leading-none" />
    }
  ]
};
