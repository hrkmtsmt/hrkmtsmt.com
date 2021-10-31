import React from "react";
import Image from "next/image";
import { NavHorizonal, NavItemLink, NavIcon } from "./_Navigation";
import { icon } from "../config/image-size";
import json from "../pulic/index.json";
import image from "../pulic/hrkmtsmt.png";

export const ProfileCard = () => {
  return (
    <div className={"c-profile-card"}>
      <div className={"c-profile-card-user"}>
        <div className={"c-profile-card-image"}>
          <Image alt={""} src={image} width={icon.width} height={icon.height} />
        </div>
        <div className={"c-profile-card-name"}>{json.name}</div>
      </div>
      <div className={"c-profile-card-intro"}>{json.intro}</div>
      <div className={"c-profile-card-social"}>
        <NavHorizonal>
          {json.socialMedia.map((data) => (
            <NavItemLink key={data.id} link={data.link}>
              <NavIcon className={`i-${data.id}`} />
            </NavItemLink>
          ))}
        </NavHorizonal>
      </div>
    </div>
  );
};
