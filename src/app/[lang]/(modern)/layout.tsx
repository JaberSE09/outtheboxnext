import ModernLayout from '@layouts/modern/layout';
import { createClient } from 'src/prismicio';

export default async function DefaultLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  const client = createClient();
  const settings = await client.getSingle('settings');

  return (
    <ModernLayout settings={settings} lang={lang}>
      {children}
    </ModernLayout>
  );
}
