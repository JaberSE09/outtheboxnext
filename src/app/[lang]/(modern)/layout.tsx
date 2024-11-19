import ModernLayout from '@layouts/modern/layout';
import { createClient } from 'src/prismicio';
import Categories from '../../../slices/Categories/index';

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
  const categories = await client.getAllByType('categories');
  console.log(categories);

  return (
    <ModernLayout categories={categories} settings={settings} lang={lang}>
      {children}
    </ModernLayout>
  );
}
