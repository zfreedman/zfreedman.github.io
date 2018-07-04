import React from "react";

export default function SocialLink(props)
{
  return (
    <div className="socialLink">
      <a href={props.url}>
        <i className={`fa fa-${props.glyph}`}></i>
      </a>
    </div>
  );
}
