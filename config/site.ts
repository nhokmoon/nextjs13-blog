import { Facebook } from "lucide-react";
export interface SiteConfig {
  siteName: string;
  description: string;
  currenlyAt: string;
  socialLink: {
    twitter: string;
    github: string;
    youtube: string;
    linkedin: string;
    instagram: string;
    facebook: string;
  };
}

const siteConfig: SiteConfig = {
  siteName: "BitBento Adventures",
  description: "BitBento Adventures: Where Code Meets Kawaii in the Digital Realm!",
  currenlyAt: "VietNam",
  socialLink: {
    twitter: "http://",
    github: "https://github.com/nhokmoon",
    youtube: "https://www.youtube.com/channel/UC_XwAgt8XJYHp4LLrvq2YlA",
    linkedin: "https://www.linkedin.com/in/tran-tuan-a1b906199/",
    instagram: "https://www.instagram.com/tranminhtuan12an3nh2019/",
    facebook: "https://www.facebook.com/nhokmoon2001/",
  },
};
export default siteConfig;
