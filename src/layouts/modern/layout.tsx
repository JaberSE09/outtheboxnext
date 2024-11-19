'use client';

import { useSessionStorage } from 'react-use';
import Image from '@components/ui/image';
import HighlightedBar from '@components/common/highlighted-bar';
import Countdown from '@components/common/countdown';
import MobileNavigation from '@layouts/mobile-navigation/mobile-navigation';
import { useIsMounted } from '@utils/use-is-mounted';
import Footer from '@layouts/footer/footer';
import Header from '@layouts/default/header';
import { useTranslation } from 'src/app/i18n/client';
import { CategoriesDocument, SettingsDocument } from 'prismicio-types';

function ClientRenderedHighLightedBar({ lang }: { lang: string }) {
  const { t } = useTranslation(lang, 'common');
  const [highlightedBar, setHighlightedBar] = useSessionStorage(
    'highlightedBar',
    'false'
  );
  return (
    <>
      {highlightedBar !== 'true' && (
        <HighlightedBar onClose={() => setHighlightedBar('true')}>
          <div className="flex items-center">
            <p
              // @ts-ignore
              dangerouslySetInnerHTML={{ __html: t('text-highlighted-bar') }}
            />
          </div>
          <Countdown date={Date.now() + 4000000 * 71} />
        </HighlightedBar>
      )}
    </>
  );
}

export default function ModernLayout({
  children,
  lang,
  settings,
  categories,
}: {
  children: React.ReactNode;
  lang: string;
  settings: SettingsDocument;
  categories: CategoriesDocument[];
}) {
  const isMounted = useIsMounted();

  return (
    <div className="flex flex-col min-h-screen">
      <Header categories={categories} settings={settings} lang={lang} />
      <main
        className="relative flex-grow"
        style={{
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children}
      </main>
      <Footer lang={lang} />
      <MobileNavigation
        categories={categories}
        settings={settings}
        lang={lang}
      />
    </div>
  );
}
