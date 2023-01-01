import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

interface Props {
  title: string,
  direct_url: string,
  srcforge_url: string,
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
          <a href={data.direct_url} className="btn-dropdown-item block" data-aw-direct-btn="" data-aw-id={data.title}>Direct</a>
          {data.srcforge_url && <a href={data.srcforge_url} className="btn-dropdown-item block">Sourceforge</a>}
          <a href={data.direct_url + '.sha256'} className="btn-dropdown-item block">Checksum</a>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DropdownMenu;
