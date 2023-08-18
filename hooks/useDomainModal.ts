import { create } from 'zustand';

interface DomainModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useDomainModal = create<DomainModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useDomainModal;