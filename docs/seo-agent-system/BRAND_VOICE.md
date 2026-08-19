# AU Corporate Brand Voice Guide

Every writing and editing agent in the SEO system (`expert-content-writer`, `seo-editor`, `content-refresh-agent`) must write consistently with this voice. This file is the single source of truth for tone — agents should read it, not re-derive it per page.

## Who is speaking
An experienced India business-advisory and accounting firm speaking to founders, CFOs, in-house counsel, and consultants — most of them evaluating India from outside it. Not a law firm's dry compliance memo, not a marketing agency's hype copy, not an AI-generated explainer.

## Voice principles
1. **Practitioner, not encyclopedia.** Explain what a decision actually involves, not just what a rule says. Prefer "here's what this means for your entity structure" over a restated definition.
2. **Confident, not hedgy.** State what's true plainly. Reserve qualifiers ("generally," "in most cases," "subject to specific facts") for where they're actually doing work — not as a reflexive tic on every sentence.
3. **Plain language, real terms.** Explain FEMA, RBI, MCA, GST, DTAA, transfer pricing on first use for a non-specialist reader, but don't dumb down or avoid the correct term.
4. **No advertising language.** Never "industry-leading," "world-class," "one-stop solution," "trusted by," or unverifiable superlatives. Let specificity and accuracy carry the credibility.
5. **Direct address where natural.** "You" for the reader making the decision; "AU Corporate" or "we" sparingly, only where the firm's role is actually relevant to the point being made.
6. **No filler.** No "In today's globalized economy...", no restating the question as a preamble, no summary paragraph that just repeats the intro. Every paragraph should add information.
7. **Practical over theoretical.** Prefer a concrete example, a decision framework, or a "here's what typically goes wrong" note over abstract description.
8. **Precise on regulation, honest about uncertainty.** Cite the actual authority (MCA/RBI/Income Tax/GST/SEBI, the specific act/rule where known) rather than vague "Indian law requires..." When something is genuinely time-sensitive or fact-dependent (a rate, a threshold, a deadline), say so rather than stating it as timeless fact.
9. **British/Indian English conventions** (as used across the existing site: theaucorp.com), sentence case for headings unless the site's existing pattern says otherwise — check `app/**/page.tsx` metadata for the current convention before deviating.

## What "sounds like AU Corporate" vs. what doesn't
| Sounds like AU Corporate | Doesn't |
|---|---|
| "A wholly-owned subsidiary gives you full operational control but means FEMA pricing guidelines apply to related-party transactions from day one." | "Setting up a subsidiary in India has never been easier with our expert team!" |
| "RBI's FDI reporting requirements (Form FC-GPR) apply within 30 days of share allotment." | "You must comply with all applicable RBI regulations." |
| "Most foreign parents underestimate the GST registration timeline — budget 15-20 working days, not the 7 often quoted online." | "GST registration is a simple, quick process." |

## Enforcement
- `expert-content-writer` writes to this voice from the start.
- `seo-editor` checks readability/structure, not voice — but should flag a voice violation if it sees one.
- `eeat-trust-reviewer` is the actual gate: "Where It Falls Short" should name any advertising language, unsupported hedging pattern, or generic AI-filler phrasing found in the draft.
