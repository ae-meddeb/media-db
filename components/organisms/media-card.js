import Image from "next/image";
import ContentDescription from "../molecules/content-description";

export default function MediaCard(props) {
  const { data } = props;

  return (
    <div className="media-card">
      <Image
        src={data.poster}
        alt="media-poster"
        layout="responsive"
        objectFit="cover"
        width={292}
        height={440}
      />
      <div className="media-card__overlay"></div>
      <div className="media-card__wrapper">
        <ContentDescription
          title={data.title}
          genres={data.genres.slice(0, 1)}
          rating={data.rating}
        />
        {/* <span className="button">Plus de détails</span> */}
      </div>
    </div>
  );
}
