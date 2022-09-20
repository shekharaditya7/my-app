export const WINDOWS_PHONE = "Windows Phone";
export const ANDROID = "Android";
export const IOS = "IOS";
export const UNKNOWN = "UNKNOWN";

export default function getOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return WINDOWS_PHONE;
  }

  if (/android/i.test(userAgent)) {
    return ANDROID;
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return IOS;
  }

  return UNKNOWN;
}
