import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import getOperatingSystem, { ANDROID, IOS } from "../utils/getOperatingSystem";

export default function YTDeepLink() {
  const { videoId } = useParams();
  useLayoutEffect(() => {
    const OS = getOperatingSystem();
    if (!videoId) return;
    switch (OS) {
      case ANDROID:
        window.location = `intent://www.youtube.com/watch?v=${videoId}/#Intent;package=com.google.android.youtube;scheme=https;end`;
        break;
      case IOS:
        window.location = `vnd.youtube://www.youtube.com/watch?v=${videoId}`;
        break;
      default:
        break;
    }
  }, [videoId]);
  return <></>;
}
