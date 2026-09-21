# Revision Log: Liaison Office in India Draft (07-draft.md)

Source of required changes: `09-fact-check.md` (2 must-fix errors, 1 QA-note accuracy issue). This was a targeted revision — only the items below were changed. Structure, other body content, FAQ order/count, and internal links are unchanged from the prior draft.

## Fix 1 — Restricted-country rule overstated as unconditional

**Where:** Main body, "Restricted Countries, Sensitive Sectors, and the Nepal Exception" section (under "Who Can Set Up a Liaison Office"); and FAQ "Can a company from Nepal, Pakistan, China or Bangladesh open a liaison office in India?"

**What changed:** Previously, the draft presented two separate, independently-sufficient triggers for RBI's government-consultation route — (a) nationality connection to Pakistan, Bangladesh, Sri Lanka, Afghanistan, Iran, China, Hong Kong, or Macau, and (b) a proposed office location in Jammu & Kashmir/North-East/Andaman & Nicobar Islands — implying any applicant from that full country list was routed to government consultation regardless of where the office was proposed.

Rewrote both passages to distinguish two different rules:
- **Pakistan** — unconditional trigger: government-consultation route applies regardless of proposed office location anywhere in India.
- **Bangladesh, Sri Lanka, Afghanistan, Iran, China, Hong Kong, Macau** — conditional trigger: government-consultation route applies only where that nationality connection is *combined with* a proposed office location in Jammu & Kashmir, the North-Eastern states, or the Andaman & Nicobar Islands. An applicant from one of these countries proposing an office in, e.g., Mumbai or Bangalore is not automatically subject to that route.
- Retained the general (nationality-independent) statement that J&K/North-East/Andaman & Nicobar office locations attract additional scrutiny more broadly, and that the listed sensitive sectors (Defence, Telecom, Private Security, Information & Broadcasting) attract scrutiny independent of nationality/location — neither of these was disputed by Stage 9.

Writer's Note #12 (previously about the J&K/North-East/Andaman & Nicobar scrutiny mechanism) was updated to record that this conditional structure is now correctly reflected, but flags it for one final primary-source check given it's a genuine correction with real professional-liability exposure if still wrong.

## Fix 2 — Stale tax-law citation (Income-tax Act, 1961 → 2025)

**Where:** Main body, "When Liaison Activity Crosses Into a Permanent Establishment" section; and FAQ "Is a liaison office a permanent establishment (PE) for tax purposes?"

**What changed:** Replaced "Section 9(1)(i) of the Income-tax Act, 1961" with "Section 9 of the Income-tax Act, 2025" in both locations (main body phrased as "Section 9 of the Income-tax Act, 2025 (India's current income tax law, successor to the equivalent business-connection provision in the 1961 Act)"). This matches the phrasing already live on `/home/user/Aucorporate/app/services/taxation-regulatory/page.tsx` ("Income Tax Act, 2025, which replaced the 1961 Act for periods beginning on or after 1 April 2026") and `/home/user/Aucorporate/app/doing-business-in-india/incorporation/page.tsx` ("Section 9 of the Income-tax Act, 2025"). Per Stage 9's instruction, no specific new sub-clause (e.g., a "(1)(i)" equivalent) was invented — the sub-clause specificity was dropped, consistent with how both live AU Corporate pages handle the citation.

Writer's Note #8 was rewritten to explain the update and to flag that a qualified tax professional should confirm the precise successor section/sub-clause before publish, and that the "typically Article 5" DTAA framing remains appropriately hedged.

## Fix 3 — QA-note accuracy on the FAQ #10 consistency check

**Where:** "Notes on Structural Fidelity to the Approved Architecture" (internal QA note); FAQ "Should we set up a liaison office first and convert it to a subsidiary later?" (this page's FAQ #10, opening line only).

**What changed:**
- (a) Corrected the internal QA note, which had claimed the live `/doing-business-in-india/incorporation` FAQ contains the phrase "no legal mechanism to convert" and was "verified by reading it directly." Having read `app/doing-business-in-india/incorporation/page.tsx` directly, the live FAQ actually opens with "It can work as a sequencing strategy, but a liaison office can't generate India-side revenue..." — a more permissive opening than "no legal mechanism to convert," and it does not itself list the specific closure steps (RBI approval, auditor's certificate, Form FC-2/Section 380(3)). The note now accurately describes what the live page says, notes the two answers are not substantively contradictory (both conclude no formal conversion mechanism exists and a subsidiary must be separately incorporated), and records that the misquote has been corrected.
- (b) Softened this page's own FAQ #10 opening line from "There's no legal mechanism to 'convert' a Liaison Office into a subsidiary..." to "It can work as a sequencing strategy, but there's no formal legal mechanism to 'convert' a Liaison Office directly into a subsidiary..." — matching the live incorporation-page FAQ's more permissive opening tone. The rest of FAQ #10 (closure sequence, separate incorporation, time-bound-use-case guidance) is unchanged, since Stage 9 confirmed the substance isn't contradictory — only the opening tone needed to align.

## Files touched
- `/home/user/Aucorporate/content-ops/pipeline/liaison-office-in-india/07-draft.md` (edited in place)
- `/home/user/Aucorporate/content-ops/pipeline/liaison-office-in-india/07b-revision-log.md` (this file, new)

## Not changed
Everything else in the draft — H2/H3 structure, FAQ order/count and all other FAQ answers, CTA copy, related-resources block, metadata, and all other Writer's Notes entries — is unchanged from the version Stage 9 reviewed.
