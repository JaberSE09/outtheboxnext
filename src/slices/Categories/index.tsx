import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
/**
 * Props for `Categories`.
 */
export type CategoriesProps = SliceComponentProps<Content.categCategoriesSlice>

/**
 * Component for "Categories" Slices.
 */
const Categories = ({ slice }: CategoriesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    ></section>
  )
}

export default Categories
