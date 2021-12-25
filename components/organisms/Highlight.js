import Image from "next/image";
import Link from "next/link";
import ContentDescription from "../molecules/content-description";

export default function Highlight(props) {
  const { data } = props;

  return (
    <div className="highlight">
      <div className="highlight__bg">
        <Image
          src={data.backgroundImage}
          alt="highlight-background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="highlight__overlay"></div>
      <div className="highlight__wrapper">
        <ContentDescription
          title={data.title}
          genres={data.genres}
          rating={data.rating}
        />
        <div className="highlight__synopsis">{data.synopsis}</div>
        <Link href={`/fip/${data.id}`}>
          <a className="button">Plus de détails</a>
        </Link>
      </div>
    </div>
  );
}
