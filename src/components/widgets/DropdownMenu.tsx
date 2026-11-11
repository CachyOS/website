import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n/react';

interface Props {
  data: {
    /** The edition's English name, for the download stats. */
    name: string;
    title: string;
    direct_url: string;
    srcforge_url?: string;
    magnet_url?: string;
    torrent_url?: string;
  };
}

const DOWNLOADS_API_ENDPOINT = 'https://iso-stats.cachyos.org/api/download';

async function handleDirectButton(edition_name: string) {
  fetch(DOWNLOADS_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: `{"name":"${edition_name}"}`,
  }).catch((_) => null);
}

const DropdownMenu = ({ data }: Props) => {
  const { t } = useTranslation();
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton
          className="btn btn-primary py-4 px-6"
          aria-label={t('dropdown.menu_aria_label')}
          aria-expanded="true"
          aria-haspopup="true"
        >
          {t('dropdown.download_button', { title: data.title })}
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </MenuButton>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems
          id="editions-menu-list"
          modal={false}
          className="dropdown-menu min-w-max absolute bg-white dark:bg-surface-900 text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none focus:outline-none"
        >
          <MenuItem
            as="a"
            key={data.direct_url}
            href={data.direct_url}
            className="btn-dropdown-item block"
            onClick={async () => await handleDirectButton(data.name)}
          >
            {t('dropdown.direct_menu_item')}
          </MenuItem>
          {data.srcforge_url && (
            <MenuItem
              as="a"
              key={data.srcforge_url}
              href={data.srcforge_url}
              className="btn-dropdown-item block"
            >
              SourceForge
            </MenuItem>
          )}
          {data.magnet_url && (
            <MenuItem
              as="a"
              key={data.magnet_url}
              href={data.magnet_url}
              className="btn-dropdown-item block"
            >
              {t('dropdown.magnet_menu_item')}
            </MenuItem>
          )}
          {data.torrent_url && (
            <MenuItem
              as="a"
              key={data.torrent_url}
              href={data.torrent_url}
              className="btn-dropdown-item block"
            >
              {t('dropdown.torrent_menu_item')}
            </MenuItem>
          )}
          <MenuItem
            as="a"
            key={data.direct_url + '.sha256'}
            href={data.direct_url + '.sha256'}
            className="btn-dropdown-item block"
          >
            {t('dropdown.checksum_menu_item')}
          </MenuItem>
          <MenuItem
            as="a"
            key={data.direct_url + '.sig'}
            href={data.direct_url + '.sig'}
            className="btn-dropdown-item block"
          >
            {t('dropdown.signature_menu_item')}
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default DropdownMenu;
