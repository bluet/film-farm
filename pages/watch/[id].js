import { useRouter } from "next/router";
import Banner from "../../components/Ads/Banner";

function watch() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="flex flex-col min-h-screen m-4 text-black max-w-[650px]">
      <Banner width="650px" height="90px" />
      <Banner width="650px" height="90px" />
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        width="100%"
        height="450"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Embedded"
      />
    </div>
  );
}

export default watch;
