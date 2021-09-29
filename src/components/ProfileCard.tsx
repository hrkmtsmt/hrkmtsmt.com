import React from "react";
import Image from "next/image";
import { NavHorizonal, NavItem, NavIcon } from "./Navigation";
import { square } from "../config/image-size";
import json from "../pulic/index.json";
import image from "../pulic/hrkmtsmt.png";

export const ProfileCard = () => {
  return (
    <div className={"c-profile-card"}>
      <div className={"c-profile-card-user"}>
        <div className={"c-profile-card-image"}>
          <Image
            alt={""}
            src={image}
            width={square.width}
            height={square.height}
          />
        </div>
        <div className={"c-profile-card-name"}>{json.name}</div>
      </div>
      <div className={"c-profile-card-intro"}>{json.intro}</div>
      <div className={"c-profile-card-social"}>
        <NavHorizonal>
          {json.socialMedia.map((data) => (
            <NavItem key={data.id} link={data.link}>
              <NavIcon className={`i-${data.id}`} />
            </NavItem>
          ))}
        </NavHorizonal>
      </div>
    </div>
  );
};
