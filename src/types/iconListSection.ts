import type { DeviconProps } from "./devIcon"

export type IconListSectionProps = {
    icons: string[]
    iconStyle: Omit<DeviconProps, "icon">
    title: string
    blurb?: string | undefined
    description?: string | undefined
}