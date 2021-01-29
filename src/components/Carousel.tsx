import { useEffect, useState } from "react";
import sanityClient from "../client";
//@ts-ignore
import BlockContent from "@sanity/block-content-to-react";

import "./Carousel.scss";

interface Props {
  carouselId?: string;
}

export function Carousel({
  carouselId = "det-vi-tilbyr-er-mye-mer-enn-en-jobb",
}: Props) {
  const [carouselData, setCarouselData] = useState<any>();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'carousel' && slug.current == $carouselId]{
              title,
              description,
              "itemTitles": items[]->title
          }`,
        { carouselId }
      )
      // .then(console.log)
      .then((data) => setCarouselData(data[0]))
      .catch(console.error);
  }, [carouselId]);

  if (!carouselData) return <div>Loading...</div>;

  return (
    <div className="carousel">
      <p className="jkl-lead">{carouselData.title}</p>
      <div className="jkl-body">
        <BlockContent
          blocks={carouselData.description}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
      </div>
      {(carouselData.itemTitles as string[]).map((title) => (
        <p className="jkl-lead">{title}</p>
      ))}
    </div>
  );
}
