import { getLinksLinks } from "csc-start/utils/data";
import Link from "next/link";

const { order, url, title } = getLinksLinks();
const NonSocialLinks = () => {
  return (
    <div className="barge my-2">
      {getLinksLinks().map(({ order, url, title }) => {
        return (
          <div key={order}>
            <Link href={url}>
              <button className="button">{title}</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NonSocialLinks;
