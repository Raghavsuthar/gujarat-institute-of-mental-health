# Mental-health content changelog

## 2026-10-24 — Phase 5, batch 2

Added trilingual public-facing evidence summaries for the ten existing conditions that did not previously have a dedicated evidence guide:

- Social anxiety disorder
- Specific phobia
- Insomnia disorder
- Somatic symptom disorder
- Illness anxiety disorder
- Persistent depressive disorder
- Premenstrual dysphoric disorder (PMDD)
- Personality disorders overview
- Postpartum depression and anxiety
- Body dysmorphic disorder (BDD)

### Editorial changes

- Added source organization, title, URL, and scope note for each cited source.
- Added limitations and non-diagnostic caveats to every guide.
- Emphasized that somatic symptoms are real and are not intentionally produced.
- Clarified that NICE CG78 is specific to borderline personality disorder, not every personality disorder.
- Added pregnancy/postpartum urgent warning signs and cautions against abruptly stopping medication.
- Avoided personalized medication instructions, dose recommendations, or claims that any treatment guarantees recovery.

### Validation

- Added `tests/evidence-guides.test.ts` to check that all condition IDs have guides, all summaries are localized in English/Hindi/Gujarati, and every guide has complete HTTPS source metadata.
- Source-check date is recorded as 2026-10-24. No independent clinician sign-off is claimed; see `docs/CONTENT_REVIEW.md`.
