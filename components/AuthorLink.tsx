import { AUTHOR_LINKEDIN } from "@/lib/site"

/** "Abhishek Jaiin", linked to his LinkedIn profile, for bylines and author credits. */
export function AuthorLink({ className = "font-semibold hover:underline" }: { className?: string }) {
  return (
    <a href={AUTHOR_LINKEDIN} target="_blank" rel="noopener noreferrer" className={className}>
      Abhishek Jaiin
    </a>
  )
}
