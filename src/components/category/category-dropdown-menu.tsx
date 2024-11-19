import Alert from '@components/ui/alert';
import CategoryListCardLoader from '@components/ui/loaders/category-list-card-loader';
import { useCategoriesQuery } from '@framework/category/get-all-categories';
import cn from 'classnames';
import CategoryMenu from '@components/ui/category-menu';
import { CategoriesDocument } from 'prismicio-types';

interface CategoryDropdownProps {
  lang: string;
  className?: string;
  categoriesLimit?: number;
  menu: CategoriesDocument[];
}

export default function CategoryDropdownMenu({
  lang,
  className,
  categoriesLimit = 12,
  menu,
}: CategoryDropdownProps) {
  return (
    <div className={cn('absolute z-30 w-72 lg:w-full', className)}>
      <div className="max-h-full">
        {/* Conditionally render content */}
        {menu.length === 0 ? (
          <div className="w-full bg-skin-fill border-t-0 rounded-b-md category-dropdown-menu">
            {Array.from({ length: 6 }).map((_, idx) => (
              <CategoryListCardLoader
                key={`category-list-${idx}`}
                uniqueKey={`category-list-card-loader-${idx}`}
              />
            ))}
          </div>
        ) : (
          <CategoryMenu
            items={menu}
            categoriesLimit={categoriesLimit}
            lang={lang}
          />
        )}
      </div>
    </div>
  );
}
