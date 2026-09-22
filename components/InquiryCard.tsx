"use client"

import { openInquiryModal } from "@/lib/inquiry-modal"

/** Same-page card that opens the sitewide inquiry modal on click, instead of
 *  scrolling/navigating to a "#inquiry-form" anchor — keeps the click result
 *  visible immediately regardless of scroll position or which page it's on. */
export function InquiryCard({
  title,
  description,
  className,
  titleClassName,
  titleStyle,
  descriptionClassName,
  icon,
}: {
  title: string
  description: string
  className: string
  titleClassName?: string
  titleStyle?: React.CSSProperties
  descriptionClassName?: string
  icon?: React.ReactNode
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={openInquiryModal}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          openInquiryModal()
        }
      }}
      className={`${className} cursor-pointer`}
    >
      {icon}
      <h3 className={titleClassName} style={titleStyle}>
        {title}
      </h3>
      <p className={descriptionClassName}>{description}</p>
    </div>
  )
}
