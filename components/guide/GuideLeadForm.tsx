import { LeadForm } from "@/components/LeadForm"

/** Embedded lead-capture section (Web3Forms via LeadForm) placed near the end
 *  of every guide page — the same "LEAD FORM" / id="contact" pattern used
 *  across the rest of the site, so guide pages carry a real inline form and
 *  not just a modal trigger. Drop this into every new guide page. */
export function GuideLeadForm({ title, description }: { title?: string; description?: string }) {
  return (
    <section className="py-16 bg-secondary/50" id="contact">
      <div className="max-w-5xl mx-auto px-4">
        <LeadForm title={title} description={description} />
      </div>
    </section>
  )
}
