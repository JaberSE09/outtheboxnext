import cn from 'classnames';
import { ROUTES } from '@utils/routes';
import Link from 'next/link';
import { useTranslation } from 'src/app/i18n/client';
import { CategoriesDocument } from 'prismicio-types';

interface Props {
  lang?: string;
  className?: string;
  data: CategoriesDocument[];
  showBanner?: boolean;
}

const SupperCategoryList: React.FC<Props> = ({
  lang,
  className = 'mb-12 pb-0.5',
  data,
  showBanner,
}) => {
  return (
    <div className={cn('heightFull-demo', className)}>
      {Array.isArray(data?.length) && (
        <ul key="content" className="text-[14px] leading-7">
          {data
            ?.slice(0, 5)
            ?.map(
              ({
                id,
                data: { title, description, image },
              }: CategoriesDocument) => {
                return (
                  <li
                    className="border-b border-black/10 py-2 hover:text-skin-primary"
                    key={`${id}`}
                  >
                    <Link href={`/${lang}/category/${id}`}>{title}</Link>
                  </li>
                );
              }
            )}
        </ul>
      )}
    </div>
  );
};

export default SupperCategoryList;
