"use strict";
import React from "react";

import SocialLink from "./socialLink";

export default function BottomBar(props) {
  let socials = [
    {
      glyph: "linkedin",
      url: "https://www.linkedin.com/in/zach-freedman/",
    },
    {
      glyph: "github",
      url: "https://github.com/zfreedman/",
    }
  ];

  return (
    <div className="bottomBar">
      {
        socials.map(e => {
          return <SocialLink key={e.glyph} glyph={e.glyph} url={e.url} />;
        })
      }
    </div>
  );
}
