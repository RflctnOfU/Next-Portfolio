import { createContext, SetStateAction, Dispatch } from "react";
interface MobileContext {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const MobileContext = createContext<MobileContext>({
  open: false,
  setOpen: () => {},
});
