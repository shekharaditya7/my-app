import { useState } from "react";
import Button from "../Widgets/Button";
import styles from "./UserDeeplink.module.scss";

function matchYoutubeUrl(url) {
  let videoId;
  const p =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  const matches = url.match(p);
  if (matches) {
    videoId = matches[1];
  } else {
    try {
      const ytURL = new URL(url);
      const isShorts = ytURL.pathname.search("/shorts/");
      if (isShorts !== -1) {
        videoId = ytURL.pathname.slice(isShorts + 8, isShorts + 19);
      }
    } catch (e) {
      console.log(e);
    }
  }
  if (!videoId) alert("Error in the URL");
  return videoId;
}

export default function UserDeeplink() {
  const [ytUrl, setYtUrl] = useState("");
  const [videoId, setVideoId] = useState(null);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/deeplink/${videoId}`)
      .then(() => alert("Copied to clipboard"));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>Enter a youtube video url</span>
        <input
          type="url"
          onChange={(event) => setYtUrl(event.target.value)}
          value={ytUrl}
          className={styles.urlInput}
          height={28}
          autoFocus
        ></input>
        <Button
          onClick={() => setVideoId(matchYoutubeUrl(ytUrl))}
          label={"Submit"}
        />
      </div>

      {videoId ? (
        <>
          <div className={styles.deeplinkUrl}>
            URL to launch youtube :
            <span>
              {window.location.origin}/deeplink/{videoId}
            </span>
            <img
              src={"/images/CopyIcon.webp"}
              alt={"copy"}
              onClick={handleCopyClick}
            ></img>
          </div>
          <div className={styles.video}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </>
      ) : null}
    </div>
  );
}
