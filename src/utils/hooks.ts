import { useState } from 'react';

interface ClipRetType {
  isCopied: boolean;
  copyToClipboard: (value: string) => void;
}

export const useCopyToClipboard = ({ timeout = 2000 }: { timeout?: number }): ClipRetType => {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = (value: string): void => {
    if (globalThis.window === undefined || !navigator.clipboard?.writeText) {
      return;
    }
    if (!value) {
      return;
    }
    navigator.clipboard.writeText(value).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, timeout);
    });
  };

  return { isCopied, copyToClipboard } as ClipRetType;
};
