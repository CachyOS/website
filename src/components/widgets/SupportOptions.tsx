import { useState } from 'react';
import SupportModal from './SupportModal';

interface Props {
  children: React.ReactNode;
}

const SupportOptions = ({ children }: Readonly<Props>) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <SupportModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <button
        className="bg-slate-900 hover:bg-slate-700 focus:outline-hidden focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-600 dark:highlight-white/20 dark:hover:bg-sky-700"
        onClick={() => setIsOpen(true)}
      >
        {children}
      </button>
    </>
  );
};

export default SupportOptions;
