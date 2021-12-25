import Tag from "components/atoms/tag";
import StarRating from "components/molecules/star-rating";

export default function ContentDescription(props) {
  const { title, rating, genres = [] } = props;

  return (
    <div className="content-description">
      <div className="content-description__genre">
        {genres.map((genre) => (
          <Tag key={genre.id}>{genre.name}</Tag>
        ))}
      </div>
      <div className="content-description__rating">
        <StarRating
          readonly
          initialRating={rating}
          step={2}
          start={0}
          stop={10}
        />
      </div>
      <div className="content-description__title">{title}</div>
    </div>
  );
}
