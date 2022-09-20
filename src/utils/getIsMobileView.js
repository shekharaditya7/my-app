export default function getIsMobileView() {
  if (typeof window === "undefined") return;
  let isMobileView = true,
    isMobileViewOnly = true;

  isMobileView = navigator.userAgent.match(
    /Android|BlackBerry|iPhone|iPod|iPad|Opera Mini|IEMobile|WPDesktop/i
  );
  isMobileViewOnly = navigator.userAgent.match(
    /Android|BlackBerry|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i
  );
  return {
    isMobileViewUtil: !!isMobileView,
    isMobileViewOnlyUtil: !!isMobileViewOnly,
  };
}
