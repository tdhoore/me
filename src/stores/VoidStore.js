import { create } from 'zustand'

export const useVoidStore = create((set) => ({
	activeProjectId: null,
	showProjectDetail: true,
	content: null,
	setActiveProjectId: (activeProjectId) => set(() => ({ activeProjectId })),
	setShowProjectDetail: (showProjectDetail) => set(() => ({ showProjectDetail })),
	setContent: (content) => set(() => ({
		content
	}))
}))