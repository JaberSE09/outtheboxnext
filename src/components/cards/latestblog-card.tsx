import Heading from '@components/ui/heading';
import Image from '@components/ui/image';
import Link from '@components/ui/link';
import {LinkProps} from 'next/link';
import Text from '@components/ui/text';
import {useTranslation} from 'src/app/i18n/client';
import {collectionPlaceholder} from '@assets/placeholders';
import {BsClock} from "react-icons/bs";
import {Blog} from "@framework/types";

interface Props {
    lang: string;
    imgWidth?: number;
    imgHeight?: number;
    href: LinkProps['href'];
    collection: Blog;
    showShortDesc?: boolean;
}

const LatestblogCard: React.FC<Props> = ({
                                             collection,
                                             imgWidth = 440,
                                             imgHeight = 280,
                                             href,
                                             lang,
                                             showShortDesc
                                         }) => {
    const {image, title, date,shortDescription} = collection;
    const {t} = useTranslation(lang, 'common');
    return (
        <Link href={href} className="group flex flex-col ">
            <Image
                src={image ?? collectionPlaceholder}
                alt={t(title) || t('text-card-thumbnail')}
                width={imgWidth}
                height={imgHeight}
                className="overflow-hidden  bg-skin-thumbnail object-cover transform transition duration-300 ease-in-out group-hover:opacity-90 "
            />
            <div className="flex flex-col mt-4">
                <Heading
                    variant="title"
                    className="mb-1 lg:mb-1.5 text-base group-hover:text-skin-primary"
                >
                    {title}
                </Heading>
                <Text variant="body" className="sm:text-13px mb-10 text-gray-500 pb-3">
                    {t('text-postdate')}{' '}
                    <span className="post-on ">
                        {`${date.date} ${date.month} ${date.year}`}
                      </span>
                </Text>
            
                {showShortDesc && (
                    <div className={"short-des text-gray text-[14px]"}>
                        {shortDescription}
                    </div>
                )}
                
            </div>
        </Link>
    );
};

export default LatestblogCard;
