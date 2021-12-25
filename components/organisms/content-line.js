import Carousel from "react-multi-carousel";

export default function ContentLine(props) {
  const { title, data, itemsNumber, ItemComponent } = props;
  const responsive = {
    all: {
      breakpoint: { max: 3000, min: 0 },
      items: itemsNumber,
      partialVisibilityGutter: 15,
      slidesToSlide: itemsNumber,
    },
  };

  return (
    <div className="content-line">
      <div className="content-line__title">{title}</div>
      <div className="content-line__carousel">
        <Carousel
          responsive={responsive}
          ssr={true}
          partialVisible={true}
          itemClass="with-gutter"
        >
          {data.map((itemData) => (
            <ItemComponent data={itemData} key={itemData.id} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
