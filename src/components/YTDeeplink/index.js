import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import getOperatingSystem, {
  ANDROID,
  IOS,
} from "./../../utils/getOperatingSystem";
import getIsMobileView from "./../../utils/getIsMobileView";

export default function YTDeepLink() {
  const { videoId } = useParams();
  useLayoutEffect(() => {
    const OS = getOperatingSystem();
    const { isMobileViewUtil } = getIsMobileView();

    if (!isMobileViewUtil)
      window.location = `https://www.youtube.com/watch?v=${
        videoId || "yeuYiShtmRg"
      }`;

    switch (OS) {
      case ANDROID:
        window.location = `intent://www.youtube.com/watch?v=${
          videoId || "yeuYiShtmRg"
        }/#Intent;package=com.google.android.youtube;scheme=https;end`;
        break;
      case IOS:
        window.location = `vnd.youtube://www.youtube.com/watch?v=${
          videoId || "yeuYiShtmRg"
        }`;
        break;
      default:
        break;
    }
  }, [videoId]);
  return <></>;
}
