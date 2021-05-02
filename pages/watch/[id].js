import { useRouter } from "next/router";

function watch() {
  const router = useRouter();
  const { id } = router.query;
  return <div className="min-h-screen text-white">Video Id : {id}</div>;
}

export default watch;
