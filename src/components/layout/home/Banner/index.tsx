import { TextFade } from "./TextFade";
import VideoBackground from "./VideoBackground";

export function Banner() {
  return (
    <div className="h-[630px] overflow-hidden relative flex justify-center items-center">
      <TextFade />
      <VideoBackground />
    </div>
  );
}
