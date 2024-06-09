import { create } from "zustand";
const useCurrentUserStore = create()((set) => ({
    user: undefined,
    setUser: (user) => set((state) => ({ ...state, user })),
  }));
  
  export default useCurrentUserStore;
