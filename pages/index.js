import ContentLine from "components/organisms/content-line";
import Highlight from "components/organisms/Highlight";
import MediaCard from "components/organisms/media-card";
import { useMemo } from "react";
import mediaService from "services/mediaService";
import { shuffleArray } from "utils";

export default function HomePage(props) {
  const { highlightedMedia, trendings } = props;

  const todayTrends = useMemo(() => shuffleArray(trendings), trendings);

  return (
    <div className="home">
      <Highlight data={highlightedMedia} />
      <div className="home_scroller">
        <ContentLine
          title="Tendances du jour >"
          data={todayTrends}
          itemsNumber={6}
          ItemComponent={MediaCard}
        />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const trendings = await mediaService.getWeeklyTrendings();
  const randomIndex = Math.floor(Math.random() * trendings?.length || 0);
  const [highlightedMedia] = trendings.splice(randomIndex, 1);

  return {
    props: {
      highlightedMedia: {
        id: highlightedMedia.id,
        title: highlightedMedia.title,
        synopsis: highlightedMedia.overview,
        backgroundImage: highlightedMedia.backdrop,
        genres: highlightedMedia.genres,
        rating: highlightedMedia.rating,
      },
      trendings: trendings.map((trend) => ({
        id: trend.id,
        title: trend.title,
        rating: trend.rating,
        poster: trend.poster,
        genres: trend.genres,
        synopsis: highlightedMedia.overview,
      })),
    },
    revalidate: 3600, // 1h
  };
}
