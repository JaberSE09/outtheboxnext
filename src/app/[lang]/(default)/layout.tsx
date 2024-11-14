import DefaultLayout from '@layouts/default/layout';
import { createClient } from 'src/prismicio';

export default async function Layout({
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
    <DefaultLayout settings={header} lang={lang}>
      {children}
    </DefaultLayout>
  );
}
