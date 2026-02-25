import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import type { SupportOption } from '~/types';
import { useCopyToClipboard } from '~/utils/hooks';

const supportOptions: SupportOption[] = [
  {
    label: 'Bitcoin',
    text: 'bc1qmwglfchlc335du6pcu6w64cexu7cck0mzhyw42',
    mode: 'text',
  },
  {
    label: 'Ethereum',
    text: '0xc2dc77327F78A7B85Db3941Eb49e74F41E961649',
    mode: 'text',
  },
  {
    label: 'Litecoin',
    text: 'LgGTwcEBcXqMgNT6XyyNWABMb7dZVtVg9w',
    mode: 'text',
  },
  {
    label: 'Patreon',
    text: 'https://www.patreon.com/CachyOS',
    mode: 'link',
  },
];

const SupportModal = ({ isOpen, onClose }: Readonly<{ isOpen: boolean; onClose: () => void }>) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25 dark:bg-black/40" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-1 md:p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white dark:bg-surface-950 pt-2 md:pt-3 pb-4 md:pb-6 px-2 md:px-6 text-left align-middle shadow-xl dark:shadow-lg dark:shadow-surface-900 transition-all relative">
                <div className="absolute right-0 top-0 mt-2 mr-2">
                  <button
                    aria-label="Close"
                    className="btn btn-icon"
                    onClick={onClose}
                    type="button"
                    autoFocus={false}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-200 text-center"
                >
                  Support Options
                </DialogTitle>
                <div className="mt-2 grid gap-2 grid-flow-row auto-rows-fr overflow-auto">
                  {supportOptions.map((option) => (
                    <SupportRow
                      key={option.label}
                      label={option.label}
                      text={option.text}
                      mode={option.mode}
                    />
                  ))}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

const SupportRow = ({ label, text, mode }: Readonly<SupportOption>) => {
  const { copyToClipboard, isCopied } = useCopyToClipboard({ timeout: 2000 });
  const isLink = mode === 'link';

  return (
    <div className="flex items-center space-x-2 bg-gray-100/90 dark:bg-surface-900/90 rounded-lg p-2 md:p-3">
      {isLink ? (
        <a href={text} className="btn btn-icon" target="_blank" rel="noopener">
          <ExternalLinkIcon />
        </a>
      ) : (
        <button className="btn btn-icon flex items-center" onClick={() => copyToClipboard(text)}>
          {isCopied ? <CopiedSuccessIcon /> : <ClipboardIcon />}
        </button>
      )}
      <p>
        {label}:<br />
        {isLink ? (
          <a href={text} target="_blank" rel="noopener" className="font-semibold underline">
            {text}
          </a>
        ) : (
          <>{text}</>
        )}
      </p>
    </div>
  );
};

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
    />
  </svg>
);

const CopiedSuccessIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

const ClipboardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
    />
  </svg>
);

export default SupportModal;
