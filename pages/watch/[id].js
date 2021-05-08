import { useRouter } from "next/router";

function watch() {
  const router = useRouter();
  const { id } = router.query;
  
  return (
    <div className="flex justify-start min-h-screen pt-10 pl-3 text-white">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        width="75%"
        height="450px"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

export default watch;
