import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

interface Props {
  title: string,
  direct_url: string,
  srcforge_url: string,
}

const DOWNLOADS_API_ENDPOINT = "https://iso-stats.cachyos.org/api/download";

async function getCountOfDownload(download_name: string) {
  // Load data with fetch().
  const allFilteredDownloads = await fetch(`${DOWNLOADS_API_ENDPOINT}/${download_name}`).then(response => response.json());
  console.log(allFilteredDownloads);

  // Return a amount of downloads for specific ISO edition.
  return allFilteredDownloads.length;
}

async function handleDirectButton(edition_name: string) {
  //const downloadCount = await getCountOfDownload(data_id);

  fetch(DOWNLOADS_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: `{"name":"${edition_name}"}`,
  })
  .catch((e) => null);
}

const DropdownMenu = ({ data }: Props) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className="btn dropdown-toggle py-4 px-6"
          id="menu-button"
          aria-label="menu"
          aria-expanded="true"
          aria-haspopup="true"
        >Download {data.title}<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </Menu.Button>
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
        <Menu.Items id="editions-menu-list" className="dropdown-menu min-w-max absolute bg-white dark:bg-gray-800 text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none">
          <Menu.Item as="a" key={data.direct_url} href={data.direct_url} className="btn-dropdown-item block" onClick={async () => await handleDirectButton(data.title)}>Direct</Menu.Item>
          {data.srcforge_url && <Menu.Item as="a" key={data.srcforge_url} href={data.srcforge_url} className="btn-dropdown-item block">Sourceforge</Menu.Item>}
          <Menu.Item as="a" key={data.direct_url + '.sha256'} href={data.direct_url + '.sha256'} className="btn-dropdown-item block">Checksum</Menu.Item>
          <Menu.Item as="a" key={data.direct_url + '.sig'} href={data.direct_url + '.sha256'} className="btn-dropdown-item block">Signature</Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DropdownMenu;
