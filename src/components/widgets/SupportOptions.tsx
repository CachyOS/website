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
      <button className="btn" onClick={() => setIsOpen(true)}>
        {children}
      </button>
    </>
  );
};

export default SupportOptions;
