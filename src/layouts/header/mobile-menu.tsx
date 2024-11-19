import { useState } from 'react';
import Link from '@components/ui/link';
import { siteSettings } from '@settings/site-settings';
import Scrollbar from '@components/ui/scrollbar';
import { IoIosArrowDown } from 'react-icons/io';
import Logo from '@components/ui/logo';
import { useUI } from '@contexts/ui.context';
import cn from 'classnames';

import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoYoutube,
  IoClose,
} from 'react-icons/io5';
import { useTranslation } from 'src/app/i18n/client';
import { CategoriesDocument, SettingsDocument } from 'prismicio-types';

const social = [
  {
    id: 0,
    link: 'https://www.facebook.com/redqinc/',
    icon: <IoLogoFacebook />,
    className: 'facebook',
    title: 'text-facebook',
  },
  {
    id: 1,
    link: 'https://twitter.com/redqinc',
    icon: <IoLogoTwitter />,
    className: 'twitter',
    title: 'text-twitter',
  },
  {
    id: 2,
    link: 'https://www.youtube.com/channel/UCjld1tyVHRNy_pe3ROLiLhw',
    icon: <IoLogoYoutube />,
    className: 'youtube',
    title: 'text-youtube',
  },
  {
    id: 3,
    link: 'https://www.instagram.com/redqinc/',
    icon: <IoLogoInstagram />,
    className: 'instagram',
    title: 'text-instagram',
  },
];

export default function MobileMenu({
  lang,
  settings,
  categories,
}: {
  lang: string;
  settings: SettingsDocument;
  categories: CategoriesDocument[];
}) {
  const [activeMenus, setActiveMenus] = useState<any>([]);
  const { site_header } = siteSettings;
  const { closeSidebar } = useUI();
  const { t } = useTranslation(lang, 'menu');

  const handleArrowClick = (menuName: string) => {
    let newActiveMenus = [...activeMenus];
    if (newActiveMenus.includes(menuName)) {
      const index = newActiveMenus.indexOf(menuName);
      if (index > -1) {
        newActiveMenus.splice(index, 1);
      }
    } else {
      newActiveMenus.push(menuName);
    }
    setActiveMenus(newActiveMenus);
  };

  const ListMenu = () => (
    <ul className="transition-colors duration-200">
      {categories?.map((category: CategoriesDocument) => (
        <li
          key={category.id}
          className="relative flex items-center justify-between"
        >
          <Link
            href={`/${lang}/categories/${category.id}`}
            className="relative w-full py-4 transition duration-300 ease-in-out menu-item ltr:pl-5 rtl:pr-5 md:ltr:pl-7 md:rtl:pr-7 ltr:pr-4 rtl:pl-4 text-brand-dark"
          >
            <span className="block w-full" onClick={closeSidebar}>
              {category.data.title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div className="bg-slate-600 w-full border-b border-border-base flex justify-between items-center relative ltr:pl-5 rtl:pr-5 md:ltr:pl-7 md:rtl:pr-7 shrink-0 py-0.5">
        <div role="button" onClick={closeSidebar} className="inline-flex">
          <Logo />
        </div>

        <button
          className="flex items-center justify-center px-4 py-5 text-2xl transition-opacity md:px-5 lg:py-8 focus:outline-none hover:opacity-60"
          onClick={closeSidebar}
          aria-label="close"
        >
          <IoClose className="text-brand-light" />
        </button>
      </div>

      <Scrollbar className="flex-grow mb-auto menu-scrollbar">
        <div className="flex flex-col px-0 text-brand-dark h-[calc(100vh_-_150px)]">
          <ListMenu />
        </div>
      </Scrollbar>

      <div className="flex items-center justify-center py-5 -mx-3 border-t text-brand-light border-border-base px-7 shrink-0">
        {social?.map((item, index) => (
          <Link
            href={item.link}
            className={`text-heading mx-3 transition duration-300 ease-in text-brand-dark text-opacity-60 hover:text-brand ${item.className}`}
            key={index}
          >
            <span className="sr-only">{t(`${item.title}`)}</span>
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
