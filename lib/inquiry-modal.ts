export const OPEN_INQUIRY_MODAL_EVENT = "au-open-inquiry-modal"

/** Opens the sitewide inquiry modal (see components/FloatingInquiryCTA.tsx) from
 *  anywhere in the tree, without needing to lift its state into a shared context. */
export function openInquiryModal() {
  if (typeof window === "undefined") return
  window.dispatchEvent(new Event(OPEN_INQUIRY_MODAL_EVENT))
}
