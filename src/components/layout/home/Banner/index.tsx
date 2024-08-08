import { TextFade } from "./TextFade";
import VideoBackground from "./VideoBackground";

export function Banner() {
  return (
    <div className="h-[80vh] overflow-hidden relative flex justify-center items-center">
      <TextFade />
      <VideoBackground />
      <div className="w-full h-full absolute top-0 right-0 bg-black opacity-95 z-20 block"></div>
    </div>
  );
}