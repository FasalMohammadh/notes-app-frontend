import { configResponsive, useResponsive as ahooksUseResponsive } from "ahooks";

const breakpoints = {
  small: 640,
  medium: 768,
  large: 1024,
  xl: 1280,
  doubleXl: 1536,
};

configResponsive(breakpoints);

function useResponsive() {
  const responsive = ahooksUseResponsive();

  return responsive as Record<keyof typeof breakpoints, boolean>;
}

export default useResponsive;
