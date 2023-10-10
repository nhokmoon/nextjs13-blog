import React from "react";
import PaddingContainer from "../layout/paddingContainer";
import siteConfig from "@/config/site";
import Link from "next/link";
import SocialLink from "../elements/socialLink";

const Footer = () => {
  return (
    <div className="py-8 border-t mt-10">
      <PaddingContainer>
        <div>
          <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
          <p className="max-w-md mt-2 text-lg text-neutral-700">{siteConfig.description}</p>
        </div>
        {/*Social and Currenly At */}
        <div className="mt-6 flex flex-wrap justify-between gap-4">
          <div>
            <div className="font-medium">#Explorer Digital Realm</div>
            <div className="flex items-center gap-3 text-neutral-600 mt-2">
              <SocialLink platform="twitter" link={siteConfig.socialLink.twitter} />
              <SocialLink platform="github" link={siteConfig.socialLink.github} />
              <SocialLink platform="instagram" link={siteConfig.socialLink.instagram} />
              <SocialLink platform="youtube" link={siteConfig.socialLink.youtube} />
              <SocialLink platform="facebook" link={siteConfig.socialLink.facebook} />
            </div>
          </div>
          <div>
            <div className="text-sm text-neutral-400">Currenly At</div>
            <div className="bg-white shadow-md rounded-md py-2 px-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              {siteConfig.currenlyAt}
            </div>
          </div>
        </div>
        {/*Bottom section */}
        <div className="py-3 border-t flex flex-wrap items-center gap-4 justify-between mt-16">
          <div className="text-sm text-neutral-400">
            All rights reserved | Copyright {new Date().getFullYear()}
          </div>
          <div className="text-sm">
            Make by:{" "}
            <Link
              className="underline underline-offset-4"
              href={`${siteConfig.socialLink.linkedin}`}
            >
              @TuanDev
            </Link>
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Footer;
