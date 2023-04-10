import { checkIsMobile } from 'src/store/action/app'

export interface IAppState {
  isMobile: boolean
}

export type IAppActions =
  | ReturnType<typeof checkIsMobile>
