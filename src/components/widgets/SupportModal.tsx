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
              <DialogPanel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-surface-50 dark:bg-surface-950 pt-2 md:pt-3 pb-4 md:pb-6 px-2 md:px-6 text-left align-middle shadow-xl dark:shadow-lg dark:shadow-surface-900 transition-all relative">
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
                  className="text-lg font-medium leading-6 text-surface-900 dark:text-surface-200 text-center"
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
    <div className="flex items-center space-x-2 bg-surface-100/90 dark:bg-surface-900/90 rounded-lg p-2 md:p-3">
      {isLink ? (
        <a
          href={text}
          className="btn btn-icon"
          target="_blank"
          rel="noopener"
          aria-label={`Open ${label} in new tab`}
        >
          <ExternalLinkIcon />
        </a>
      ) : (
        <button
          type="button"
          className="btn btn-icon"
          onClick={() => copyToClipboard(text)}
          aria-label={`Copy ${label} address to clipboard`}
        >
          {isCopied ? <ClipboardSuccessIcon /> : <ClipboardIcon />}
        </button>
      )}
      <p>
        {label}:<br />
        {isLink ? (
          <a href={text} target="_blank" rel="noopener" className="font-semibold underline">
            {text}
          </a>
        ) : (
          text
        )}
      </p>
    </div>
  );
};

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="w-6 h-6"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5"
    />
  </svg>
);

const ClipboardSuccessIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="w-6 h-6 text-green-500"
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2m0 9l2 2l4-4" />
    </g>
  </svg>
);

const ClipboardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="w-6 h-6"
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2" />
    </g>
  </svg>
);

export default SupportModal;
