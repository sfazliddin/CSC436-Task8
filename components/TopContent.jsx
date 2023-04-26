"use client";
import Image from "next/image";
import { getCurrentUser } from "../utils/data";

const { name, email, avatar } = getCurrentUser();

const TopContent = () => {
  return (
    <div className="barge mt-5">
      <Image
        className="mx-auto rounded-full "
        src={avatar}
        alt={name}
        width={145}
        height={145}
      />
      <h1 className="barge h2">{name}</h1>
    </div>
  );
};

export default TopContent;
