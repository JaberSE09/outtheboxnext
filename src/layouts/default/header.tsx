import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { siteSettings } from '@settings/site-settings';
import { ROUTES } from '@utils/routes';
import { useUI } from '@contexts/ui.context';
import { useActiveScroll } from '@utils/use-active-scroll';
import Container from '@components/ui/container';
import Logo from '@components/ui/logo';
import MenuIcon from '@components/icons/menu-icon';
import SearchIcon from '@components/icons/search-icon';
import HeaderMenu from '@layouts/header/header-menu';
import HeaderMenutop from '@layouts/header/header-menutop';
import LanguageSwitcher from '@components/ui/language-switcher';
import { useModalAction } from '@components/common/modal/modal.context';
import cn from 'classnames';
import Search from '@components/common/search';
import { FiMenu } from 'react-icons/fi';
import CategoryDropdownMenu from '@components/category/category-dropdown-menu';
import { useTranslation } from 'src/app/i18n/client';
import { AiOutlineUser } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';
import client from '@src/prismicio';
import { CategoriesDocument, SettingsDocument } from 'prismicio-types';
import { PrismicRichText } from '@prismicio/react';
import { MdOutlineEmail } from 'react-icons/md';
import Link from 'next/link';
import Categories from '../../slices/Categories/index';
const AuthMenu = dynamic(() => import('@layouts/header/auth-menu'), {
  ssr: false,
});
const CartButton = dynamic(() => import('@components/cart/cart-button'), {
  ssr: false,
});

type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const { site_header } = siteSettings;

function Header({
  lang,
  settings,
  categories,
}: {
  lang: string;
  settings: SettingsDocument;
  categories: CategoriesDocument[];
}) {
  const {
    openSidebar,
    displaySearch,
    openSearch,
    isAuthorized,
    displayMobileSearch,
  } = useUI();
  const { openModal } = useModalAction();
  const siteSearchRef = useRef() as DivElementRef;
  const { t } = useTranslation(lang, 'common');
  const siteHeaderRef = useRef() as DivElementRef;
  const [categoryMenu, setCategoryMenu] = useState(Boolean(false));
  useActiveScroll(siteHeaderRef);

  function handleLogin() {
    openModal('LOGIN_VIEW');
  }

  function handleMobileMenu() {
    return openSidebar();
  }

  function handleCategoryMenu() {
    setCategoryMenu(!categoryMenu);
  }

  return (
    <>
      <header
        id="siteHeader"
        ref={siteHeaderRef}
        className={cn(
          'header-four sticky-header sticky top-0 z-50 lg:relative w-full',
          displayMobileSearch && 'active-mobile-search'
        )}
      >
        <div className="innerSticky z-20 w-full transition duration-200 ease-in-out  body-font bg-skin-one">
          {/* <Search
                        lang={lang}
                        searchId="mobile-search"
                        className="top-bar-search hidden lg:max-w-[600px] absolute z-30 px-4 md:px-6 top-12 xl:top-1"
                    /> */}
          <div className="top-bar  text-13px text-gray-300 border-b border-white/10">
            <Container>
              <div className="h-12 flex justify-center items-center py-2 gap-5">
                <div className={`hidden md:block truncate`}>
                  <PrismicRichText field={settings.data.banner_text} />
                </div>
                <div className="flex flex-shrink-0 smx-auto max-w-[1920px]pace-s-5">
                  {/* <HeaderMenutop
                    data={site_header.topmenu}
                    className="flex transition-all duration-200 ease-in-out"
                    lang={lang}
                  /> */}
                  {/* <LanguageSwitcher lang={lang} /> */}
                </div>
              </div>
            </Container>
          </div>
          <div className="border-b border-white/10">
            <Container>
              <div className="flex items-center justify-between  py-2 md:py-4">
                <div className="relative flex-shrink-0 lg:hidden">
                  <button
                    aria-label="Menu"
                    className="border border-skin-fill/40 rounded-md focus:outline-none outline-none menuBtn px-2.5 md:px-3 lg:px-[18px] py-2 md:py-2.5 lg:py-3 flex items-center"
                    onClick={handleMobileMenu}
                  >
                    <FiMenu className="text-xl lg:text-2xl text-skin-inverted" />
                  </button>
                </div>
                <Logo
                  settings={settings}
                  lang={lang}
                  className="ps-3 md:ps-0 lg:mx-0 w-[70px]"
                />
                {/* End of logo */}

                <div className={`text-[14px] gap-2 hidden lg:flex`}>
                  <IoLocationSharp color="white" size={40} />
                  <div className={``}>
                    <div className="text-white">Address</div>
                    <div className="text-sm text-white font-medium">
                      <PrismicRichText field={settings.data.address} />
                    </div>
                  </div>
                </div>
                <div className={`text-[14px] gap-2 hidden lg:flex`}>
                  <MdOutlineEmail color="white" size={40} />
                  <div className={``}>
                    <div className="text-white">Contact Us</div>
                    <Link
                      href={`mailto:${settings.data.email}`}
                      className="text-sm text-white font-medium"
                    >
                      <PrismicRichText field={settings.data.email} />
                    </Link>
                  </div>
                </div>
                {/* End of Phone */}
                {/* <Search
                  searchId="top-bar-search"
                  lang={lang}
                  className="hidden lg:flex lg:max-w-[450px] xl:max-w-[650px] 2xl:max-w-[800px] lg:mx-10"
                /> */}
                {/* End of search */}

                <div className="flex space-x-5 xl:space-x-10 lg:max-w-[33%]">
                  <div className="items-center hidden lg:flex shrink-0 accountButton">
                    {/* <AuthMenu
                      isAuthorized={isAuthorized}
                      href={`/${lang}${ROUTES.ACCOUNT}`}
                      btnProps={{
                        children: (
                          <AiOutlineUser className="text-xl lg:text-2xl" />
                        ),
                        onClick: handleLogin,
                      }}
                    >
                      {t('text-account')}
                    </AuthMenu> */}
                  </div>
                  {/* <CartButton
                    className="hidden lg:flex"
                    iconClassName={'text-white'}
                    lang={lang}
                  /> */}
                </div>
                {/* End of auth & lang */}
              </div>
            </Container>
          </div>

          <div className="hidden navbar lg:block bg-white text-skin-base border-b border-black/10">
            <Container>
              <div className="flex justify-between items-center">
                <Logo
                  lang={lang}
                  variant={'black'}
                  className="navbar-logo w-0 opacity-0 transition-all duration-200 ease-in-out"
                />
                {/* End of logo */}
                <div className="categories-header-button relative me-8 flex-shrink-0 w-72">
                  <button
                    className="border-black/10 min-h-[60px] focus:outline-none w-full font-medium uppercase py-4 px-3 flex items-center border-l border-r"
                    onClick={handleCategoryMenu}
                  >
                    <FiMenu className="text-2xl me-3" />
                    {t('text-all-categories')}
                  </button>
                  {categoryMenu && (
                    <CategoryDropdownMenu menu={categories} lang={lang} />
                  )}
                </div>
                <HeaderMenu
                  bgPrimary={true}
                  data={site_header.menu}
                  className="flex transition-all duration-200 ease-in-out"
                  lang={lang}
                />
                {/* End of main menu */}
                {displaySearch && (
                  <div className="sticky-search w-full absolute top-0 left-0 px-4 flex items-center justify-center h-full">
                    <Search
                      ref={siteSearchRef}
                      className="max-w-[780px] xl:max-w-[830px] 2xl:max-w-[1000px]"
                      lang={lang}
                    />
                  </div>
                )}
                {/* End of conditional search  */}
                <div className="ms-auto flex items-center flex-shrink-0">
                  <div className="navbar-right flex items-center overflow-hidden w-0 opacity-0 transition-all duration-200 ease-in-out">
                    <button
                      type="button"
                      aria-label="Search Toggle"
                      onClick={() => openSearch()}
                      title="Search toggle"
                      className="outline-none me-6 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
                    >
                      <SearchIcon className="w-[22px] h-[22px]" />
                    </button>
                    {/* End of search handler btn */}

                    <div className="flex-shrink-0 flex items-center">
                      <AuthMenu
                        isAuthorized={isAuthorized}
                        href={`/${lang}${ROUTES.ACCOUNT}`}
                        btnProps={{
                          children: (
                            <AiOutlineUser className="text-xl lg:text-3xl text-brand-dark" />
                          ),
                          onClick: handleLogin,
                        }}
                      >
                        {t('text-account')}
                      </AuthMenu>
                    </div>
                    {/* End of auth */}

                    <CartButton
                      className="ms-8 "
                      iconClassName="text-brand-dark"
                      lang={lang}
                    />
                    {/* End of cart btn */}
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </header>
      {categoryMenu && (
        <div
          className="shadow_bkg_show fixed w-full h-full inset-0 bg-black/60 z-40"
          onClick={handleCategoryMenu}
        ></div>
      )}
    </>
  );
}

export default Header;
