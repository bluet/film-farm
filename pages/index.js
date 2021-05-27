import Video from "../components/Video";
import { getVideosRequest } from "../api";
import { Banner, Floating, Catfish, AdsContainer } from "../components/Ads";

export default function Home({ videos, nextPageToken }) {
  return (
    <div className="min-h-screen">
      <div className="flex flex-wrap justify-center">
        <Floating />
        <div className="max-w-screen-lg">
          <AdsContainer className="mb-1">
            <Banner className="h-[50px] sm:h-[90px]" />
          </AdsContainer>
          <main className="grid max-w-screen-lg grid-cols-12 gap-3 p-3 bg-bunker-500">
            {videos.map((video) => (
              <div
                className="col-span-6 sm:col-span-4 lg:col-span-3"
                key={video.id}
              >
                <Video video={video} />
              </div>
            ))}
          </main>
        </div>
        <Floating />
      </div>
      <AdsContainer className="sticky bottom-0 mx-auto max-w-[1280px]">
        <Catfish className="h-[50px] sm:h-[90px]" />
      </AdsContainer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const data = await getVideosRequest();

  return {
    props: {
      videos: data.items,
      nextPageToken: data.nextPageToken,
    },
  };
}
