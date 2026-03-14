import { useState } from 'react';
import LegalNoticeModal from './LegalNoticeModal';

export default function LegalNoticeButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <LegalNoticeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <button
        className="text-muted hover:text-gray-700 dark:text-gray-400 hover:underline transition duration-150 ease-in-out mr-2 rtl:mr-0 rtl:ml-2"
        onClick={() => setIsOpen(true)}
      >
        Legal Notice
      </button>
    </>
  );
}
