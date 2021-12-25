import Image from "next/image";
import logo from "public/logo.png";
import HomeIcon from "assets/icons/Home.svg";
import MovieIcon from "assets/icons/Movie.svg";
import TVIcon from "assets/icons/TV.svg";
import MenuItem from "components/atoms/menu-item";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Image src={logo} alt="logo" />
      </div>
      <div className="sidebar__nav">
        <Link href="/">
          <a>
            <MenuItem>
              <HomeIcon />
            </MenuItem>
          </a>
        </Link>
        <Link href="/test">
          <a>
            <MenuItem>
              <MovieIcon />
            </MenuItem>
          </a>
        </Link>
        <Link href="/">
          <a>
            <MenuItem>
              <TVIcon />
            </MenuItem>
          </a>
        </Link>
      </div>
    </div>
  );
}
