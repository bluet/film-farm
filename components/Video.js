import propTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

function Video({ video }) {
  const { id, snippet } = video;
  console.log(video);
  return (
    <figure className="mb-3 h-52 ">
      <div className="flex flex-col items-center px-8 py-4 bg-black cursor-pointer">
        <Link href="/watch/[id]" as={`/watch/${id}`}>
          <Image src={snippet.thumbnails.high.url} width="auto" height="auto" />
        </Link>
      </div>
      <figcaption
        title={snippet.title}
        className="h-auto mt-1 overflow-hidden text-center text-white cursor-pointer overflow-ellipsis whitespace-nowrap"
      >
        {snippet.title}
      </figcaption>
    </figure>
  );
}

export default Video;
