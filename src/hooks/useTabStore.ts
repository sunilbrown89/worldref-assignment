import { create } from "zustand";

interface TabsStoreState {
  activeTabIndex: number;
  setActiveTabIndex: (index: number) => void;
  activeOngoingTabIndex: number;
  setActiveOngoingTabIndex: (index: number) => void;
  manageLogin: boolean;
  setManageLogin: (value: boolean) => void;
  manageUserLoginName: string;
  setManageUserLoginName: (value: string) => void;
}

const useTabsStore = create<TabsStoreState>((set) => ({
  activeTabIndex: 1,
  setActiveTabIndex: (index) => set({ activeTabIndex: index }),
  activeOngoingTabIndex: 1,
  setActiveOngoingTabIndex: (index) => set({ activeOngoingTabIndex: index }),
  manageLogin: false,
  setManageLogin: (value) => set({ manageLogin: value }),
  manageUserLoginName: "",
  setManageUserLoginName: (value) => set({ manageUserLoginName: value }),
}));

export default useTabsStore;
