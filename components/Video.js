import propTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

function Video({ video }) {
  const { id, snippet } = video;
  // console.log(video);
  return (
    <div className="mb-3 h-52 ">
      <Link href="/watch/[id]" as={`/watch/${id}`}>
        <div className="flex flex-col items-center px-8 py-4 bg-black cursor-pointer">
          <Image src={snippet.thumbnails.high.url} width="auto" height="auto" />
        </div>
      </Link>
      <Link href="/watch/[id]" as={`/watch/${id}`}>
        <div
          title={snippet.title}
          className="h-auto mt-1 overflow-hidden text-center text-white cursor-pointer overflow-ellipsis whitespace-nowrap"
        >
          {snippet.title}
        </div>
      </Link>
    </div>
  );
}

export default Video;
