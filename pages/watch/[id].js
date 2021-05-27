import { useRouter } from "next/router";
import { Banner, AdsContainer } from "../../components/Ads";

function watch() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="flex items-center justify-center text-black">
      <div>
        <AdsContainer className="mb-1 max-w-[980px]">
          <Banner className="h-[50px] sm:h-[90px]" />
        </AdsContainer>
        <div className="flex items-center">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            width="980"
            height="500"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Embedded"
          />
        </div>
        <AdsContainer className="mt-1 max-w-[980px]">
          <Banner className="h-[50px] sm:h-[90px]" />
        </AdsContainer>
      </div>
      <AdsContainer className="flex-grow  max-w-[300px] ml-1">
        <Banner className="hidden xl:block h-[250px]" />
        <Banner className="hidden xl:block h-[250px]" />
      </AdsContainer>
    </div>
  );
}

export default watch;
