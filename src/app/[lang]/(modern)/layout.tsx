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
  const header = await client.getSingle('settings');
  return (
    <ModernLayout settings={header} lang={lang}>
      {children}
    </ModernLayout>
  );
}
