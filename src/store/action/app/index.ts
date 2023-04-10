import { CHECK_IS_MOBILE } from "src/store/actions"

export const checkIsMobile = (isMobile: boolean) => ({
  type: CHECK_IS_MOBILE as typeof CHECK_IS_MOBILE,
  isMobile
})