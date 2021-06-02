import { useRouter } from "next/router";
import { getVideosRequest } from "../../api";

import { Banner, AdsContainer } from "../../components/Ads";

function watch() {
  const router = useRouter();
  const { id } = router.query;

  // For getStaticPaths
  // if (router.isFallback) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="flex items-center justify-center text-black">
      <div className="flex-grow max-w-screen-lg">
        <AdsContainer className="mb-1">
          <Banner className="h-[50px] sm:h-[90px]" />
        </AdsContainer>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          width="100%"
          height="500"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Embedded"
        />
        <AdsContainer className="mt-1">
          <Banner className="h-[50px] sm:h-[90px]" />
        </AdsContainer>
      </div>
      <AdsContainer className="w-0 xl:w-[300px] ml-1">
        <Banner className="h-[250px]" />
        <Banner className="h-[250px]" />
      </AdsContainer>
    </div>
  );
}

export default watch;

// When page depend on external data with dynamic routes
// export async function getStaticPaths() {
//   const videos = await getVideosRequest();
//   const paths = videos.map((video) => ({ params: { id: video.items.id } }));

//   return { paths, fallback: true };
// }

// export async function getStaticProps({ params }) {
//   const res = await fetch(`https://.../watch/${params.id}`);
//   const videoDetail = await res.json();

//   return { props: { detail: videoDetail } };
// }
