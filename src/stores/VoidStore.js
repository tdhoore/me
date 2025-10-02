import { create } from 'zustand'

export const useVoidStore = create((set) => ({
	activeProjectId: null,
	showProjectDetail: true,
	setActiveProjectId: (activeProjectId) => set(() => ({ activeProjectId })),
	setShowProjectDetail: (showProjectDetail) => set(() => ({ showProjectDetail })),
}))