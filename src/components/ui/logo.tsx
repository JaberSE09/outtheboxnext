import Image from 'next/image';
import Link from '@components/ui/link';
import cn from 'classnames';
import { siteSettings } from '@settings/site-settings';

import React from 'react';
import { SettingsDocument } from 'prismicio-types';
import { PrismicNextImage } from '@prismicio/next';
interface Props {
  lang: string;
  variant?: string;
  className?: string;
  href?: string;
  settings?: SettingsDocument;
}
const Logo: React.FC<Props> = ({
  className,
  variant,
  href = siteSettings.logo.href,
  settings,
  ...props
}) => {
  return (
    <div
      className={cn('inline-flex focus:outline-none ', className)}
      {...props}
    >
      <PrismicNextImage field={settings?.data.logo} />{' '}
    </div>
  );
};

export default Logo;
