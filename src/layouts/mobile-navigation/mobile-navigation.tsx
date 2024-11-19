'use client';

import Link from '@components/ui/link';
import SearchIcon from '@components/icons/search-icon';
import UserIcon from '@components/icons/user-icon';
import MenuIcon from '@components/icons/menu-icon';
import HomeIcon from '@components/icons/home-icon';
import { useUI } from '@contexts/ui.context';
import { ROUTES } from '@utils/routes';
import dynamic from 'next/dynamic';
import { Drawer } from '@components/common/drawer/drawer';
import { getDirection } from '@utils/get-direction';
import { useModalAction } from '@components/common/modal/modal.context';
import motionProps from '@components/common/drawer/motion';
import { useTranslation } from 'src/app/i18n/client';
import { CategoriesDocument, SettingsDocument } from 'prismicio-types';
import { SettingsDocumentDataLinksItem } from 'prismicio-types';
import { PrismicNextLink } from '@prismicio/next';

const CartButton = dynamic(() => import('@components/cart/cart-button'), {
  ssr: false,
});
const AuthMenu = dynamic(() => import('@layouts/header/auth-menu'), {
  ssr: false,
});
const MobileMenu = dynamic(() => import('@layouts/header/mobile-menu'));

export default function BottomNavigation({
  lang,
  settings,
  categories,
}: {
  lang: string;
  settings: SettingsDocument;
  categories: CategoriesDocument[];
}) {
  const { t } = useTranslation(lang, 'common');
  const {
    openSidebar,
    closeSidebar,
    displaySidebar,
    toggleMobileSearch,
    isAuthorized,
  } = useUI();
  const { openModal } = useModalAction();
  const dir = getDirection(lang);
  const contentWrapperCSS = dir === 'ltr' ? { left: 0 } : { right: 0 };

  function handleMobileMenu() {
    openSidebar();
  }

  return (
    <>
      <div className="lg:hidden fixed z-30 -bottom-0.5 flex items-center justify-between shadow-bottomNavigation body-font bg-brand-light w-full h-14 px-4 md:px-6 lg:px-8 text-brand-muted pb-0.5">
        <button
          aria-label="Menu"
          className="flex flex-col items-center justify-center outline-none shrink-0 focus:outline-none"
          onClick={handleMobileMenu}
        >
          <MenuIcon />
        </button>

        {settings?.data?.links?.map(
          (linkItem: SettingsDocumentDataLinksItem, index: number) => (
            <div key={index} className="shrink-0">
              <PrismicNextLink field={linkItem.link}>
                {linkItem.label || t('link')}
              </PrismicNextLink>
            </div>
          )
        )}

        <Link
          href={`/${lang}${ROUTES.HOME}`}
          className="shrink-0"
          aria-label="Home"
        >
          <HomeIcon />
        </Link>
      </div>

      <Drawer
        className="w-[375px]"
        placement={dir === 'rtl' ? 'right' : 'left'}
        open={displaySidebar}
        onClose={closeSidebar}
        level={null}
        contentWrapperStyle={contentWrapperCSS}
        {...motionProps}
      >
        <MobileMenu settings={settings} categories={categories} lang={lang} />
      </Drawer>
    </>
  );
}
