import Image from "next/image";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import snapchat from "../images/snapchat.svg";
import twitter from "../images/twitter.svg";
import { getSocialLinks } from "csc-start/utils/data";
import Link from "next/link";

const { order, url, title } = getSocialLinks();

const SocialLinks = () => {
  const iconHeight = 46;
  const iconWidth = 46;
  return (
    <div className="barge flex justify-between items-center">
      {getSocialLinks().map(({ order, url, title }) => {
        return (
          <div key={order} className="barge">
            <Link href={url}>
              <Image
                //still need to figure out how to show different logos for src
                src={twitter}
                alt={title}
                height={iconHeight}
                width={iconWidth}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SocialLinks;
