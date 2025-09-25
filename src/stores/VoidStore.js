import { create } from 'zustand'

export const useVoidStore = create((set) => ({
	showProjectDetail: true,
	setShowProjectDetail: (showProjectDetail) => set(() => ({ showProjectDetail })),
}))