import { useState } from 'react';
import ImprintModal from './ImprintModal';

export default function ImprintButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ImprintModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <button
        className="text-muted hover:text-gray-700 dark:text-gray-400 hover:underline transition duration-150 ease-in-out mr-2 rtl:mr-0 rtl:ml-2"
        onClick={() => setIsOpen(true)}
      >
        Imprint
      </button>
    </>
  );
}
