import cn from 'classnames';
import { useState } from 'react';
import Link from '@components/ui/link';
import {
  IoIosArrowForward,
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
  IoIosArrowBack,
} from 'react-icons/io';

import Image from '@components/ui/image';
import { ROUTES } from '@utils/routes';
import { useTranslation } from 'src/app/i18n/client';
import SubMegaVertical from '@components/ui/mega/sub-mega-vertical';
import { getDirection } from '@utils/get-direction';
import { CategoriesDocument } from 'prismicio-types';
import { PrismicNextImage } from '@prismicio/next';

function SidebarMenuItem({
  className,
  item,
  depth = 0,
  lang,
}: {
  className?: string;
  item: CategoriesDocument;
  depth?: number;
  lang: string;
}) {
  const { image, title, products } = item.data;
  const { id } = item;
  const dir = getDirection(lang);
  return (
    <>
      <li
        className={`flex justify-between items-center transition  'text-sm hover:text-brand px-3.5 2xl:px-4 border-b border-border-base last:border-b-0'
        }`}
      >
        <Link
          href={`/${lang}/category/${id}`}
          className={cn(
            'flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base'
          )}
        >
          {image && (
            <div className="inline-flex w-8 shrink-0 3xl:h-auto">
              <PrismicNextImage width={25} height={25} field={image} />
            </div>
          )}
          <span className="capitalize">{title}</span>
          {item && (
            <span className="hidden ltr:ml-auto rtl:mr-auto md:inline-flex">
              {dir === 'rtl' ? (
                <IoIosArrowBack className="text-15px text-skin-base text-opacity-40" />
              ) : (
                <IoIosArrowForward className="text-15px text-skin-base text-opacity-40" />
              )}
            </span>
          )}
        </Link>
      </li>
    </>
  );
}

function SidebarMenu({
  items,
  className,
  lang,
}: {
  items: CategoriesDocument[];
  className?: string;
  lang: string;
}) {
  const [categoryMenuToggle, setcategoryMenuToggle] = useState(Boolean(false));
  const { t } = useTranslation(lang, 'common');

  function handleCategoryMenu() {
    setcategoryMenuToggle(!categoryMenuToggle);
  }

  return (
    <ul
      className={cn(
        'w-full bg-skin-fill border-t-0  rounded-b-md category-dropdown-menu',
        className
      )}
    >
      {items?.map((item: CategoriesDocument, idx: number) => (
        <SidebarMenuItem
          key={`${item.uid}-key-${item.id}`}
          item={item}
          lang={lang}
        />
      ))}

      {items.length && (
        <li
          className={`px-4 relative transition text-sm hover:text-skin-primary`}
        >
          <div
            className={`flex items-center w-full py-3 text-start cursor-pointer`}
            onClick={handleCategoryMenu}
          >
            <div className={`inline-flex flex-shrink-0 ltr:mr-2 rtl:ml-2`}>
              {categoryMenuToggle ? (
                <IoIosRemoveCircleOutline className="text-xl text-skin-base text-opacity-80" />
              ) : (
                <IoIosAddCircleOutline className="text-xl text-skin-base text-opacity-80" />
              )}
            </div>
            <span className="capitalize ">{t('text-all-categories')}</span>
          </div>
        </li>
      )}
    </ul>
  );
}

export default SidebarMenu;
