import Link from '@components/ui/link';
import Image from '@components/ui/image';
import {LinkProps} from 'next/link';
import {useTranslation} from 'src/app/i18n/client';
import cn from 'classnames';
import {categoryPlaceholder, productPlaceholder} from '@assets/placeholders';
import {ROUTES} from "@utils/routes";

interface Props {
    lang: string;
    item: any;
    href: LinkProps['href'];
    className?: string;
}

const CategoryCard: React.FC<Props> = ({lang, item, href, className}) => {
    const {t} = useTranslation(lang, 'common');
    const {name, image, children} = item ?? {};
    const SUBCATEGORIES_LIMITS = 5;
    return (
        <div
            className={cn('group block w-full h-full', className)}
        >
            <div className="flex rtl:flex-row-reverse">
                <div className="category-info sm:max-w-[60%] flex-auto rtl:text-right">
                    <h3 className="text-[16px] text-skin-base capitalize  font-medium hover:text-skin-primary">
                        <Link href={href}>
                            {name}
                        </Link>
                    </h3>
                    {Array.isArray(children) ? (
                        <ul key="content" className="py-3 text-[14px] leading-6">
                            {children.slice(0, SUBCATEGORIES_LIMITS)?.map((currentItem: any, idx: number) => {
                                return (
                                    <li className="pb-1 hover:text-skin-primary" key={`${idx}`}>
                                        <Link
                                            href={`/${lang}${ROUTES.SEARCH}?category=${currentItem.slug}`}
                                        >
                                            {currentItem.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    ) : null}
                </div>
                <div className={`sm:max-w-[40%] flex-auto group-hover:opacity-80`}>
                    <div className="relative card-img-container w-full h-[180px] md:h-[180px] ">
                        <Image
                            src={image?.thumbnail ?? productPlaceholder}
                            alt={name || 'Product Image'}
                            quality={100}
                            priority
                            fill
                            sizes="(max-width: 768px) 100vw,
                              (max-width: 1200px) 50vw,
                              33vw"
                            className="object-cover bg-fill-thumbnail"
                        />
                    </div>
                   
                </div>
            
            </div>
        </div>
    );
};

export default CategoryCard;
