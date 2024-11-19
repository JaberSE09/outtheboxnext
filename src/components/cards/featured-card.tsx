import Heading from '@components/ui/heading';
import cn from 'classnames';
import { useTranslation } from 'src/app/i18n/client';
import Text from '@components/ui/text';
import { ProductsDocumentData } from 'prismicio-types';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';

interface Props {
  lang: string;
  className?: string;
  item: ProductsDocumentData;
  layout?: string;
}

const FeaturedCard: React.FC<Props> = ({ lang, item, className, layout }) => {
  const { t } = useTranslation(lang, 'common');
  const { image, title, description, price } = item;
  return (
    <div
      className={cn(
        'group  px-3 flex items-center justify-center  border-black/10 ltr:border-r rtl:border-l',
        className
      )}
    >
      <div className="flex flex-shrink-0 items-center justify-center">
        <PrismicNextImage width={50} height={50} field={image} />
      </div>
      <div className="ps-4">
        <Heading variant="base" className="sm:text-sm hover:text-skin-primary">
          {title}
        </Heading>
        <div className={'text-13px lg:leading-[22px]'}>
          <PrismicRichText field={description} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
