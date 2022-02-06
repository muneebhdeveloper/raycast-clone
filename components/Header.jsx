import Link from "next/link";
import Logo from "../assets/logo.svg";
import Image from "next/image";
// import Slack from "../assets/slack.svg";
// import Github from "../assets/github.svg";
// import Twitter from "../assets/twitter.svg";

export default function Header() {
  return (
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="grid py-6 items-center grid-cols-[auto_1fr_160px]">
        <div>
          <Link href="/">
            <a>
              <Logo className="ml-2" />
            </a>
          </Link>
        </div>
        <div>
          <ul className="flex justify-end gap-10 pr-10">
            <ListItem active href="/">
              Store
            </ListItem>
            <ListItem href="/">Developer</ListItem>
            <ListItem href="/">Pricing</ListItem>
            <ListItem href="/">Changelog</ListItem>
            <ListItem href="/">Blogs</ListItem>
            <ListItem href="/">Jobs</ListItem>
          </ul>
        </div>
        <div>
          <ul className=" border-l-2 border-l-gray-600 flex justify-center gap-5">
            <ListItem href="/">
              <Image
                height={16}
                width={16}
                src="/slack.svg"
                alt="slack"
                className="social-logo"
              />
            </ListItem>
            <ListItem href="/">
              <Image
                height={16}
                width={16}
                src="/twitter.svg"
                alt="twitter"
                className="social-logo"
              />
            </ListItem>
            <ListItem href="/">
              <Image
                height={16}
                width={16}
                src="/github.svg"
                alt="github"
                className="social-logo"
              />
            </ListItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

const ListItem = ({ children, active, ...linkProps }) => {
  return (
    <li>
      <Link {...linkProps}>
        <a
          className={`text-white text-sm ${
            active ? "font-semibold" : "font-normal"
          } hover:font-semibold`}
        >
          {children}
        </a>
      </Link>
    </li>
  );
};
