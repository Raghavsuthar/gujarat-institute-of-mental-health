# Evidence-guide coverage inventory — Phase 0 follow-up

**Inventory date:** 2026-10-25  
**Method:** Static ID comparison of condition records in the five condition modules against top-level keys in `src/data/conditionEvidenceGuides.ts`. This checks presence only—not scientific accuracy, source freshness, translation quality, or reference adequacy.

## Results

- Condition IDs discovered in the five source modules: **23 unique IDs**.
- IDs with a matching top-level evidence-guide key: **6**.
- IDs without a matching top-level evidence-guide key: **17**.

### Matching IDs

- `depression`
- `bipolar`
- `ocd`
- `schizophrenia`
- `ptsd`
- `adhd`

### Missing evidence-guide keys

- `anxiety-gad`
- `panic-disorder`
- `geriatric-dementia-delirium`
- `anorexia-nervosa`
- `bulimia-nervosa`
- `binge-eating-disorder`
- `autism-spectrum-disorder`
- `social-anxiety-disorder`
- `specific-phobia`
- `insomnia-disorder`
- `somatic-symptom-disorder`
- `illness-anxiety-disorder`
- `persistent-depressive-disorder`
- `pmdd`
- `personality-disorders-overview`
- `postpartum-depression-and-anxiety`
- `body-dysmorphic-disorder`

## Interpretation

This is a targeted inventory of the five core condition modules—not a count of every mental-health topic in the application. Other content types (substance guides, child/adolescent topics, women's mental health, symptoms, treatments, articles, FAQs, glossary, and video records) require separate audits.

A missing guide does **not** mean the condition page itself is missing or unsafe; it means there is no matching key in this specific evidence-guide registry. Existing guide presence likewise does not establish that every claim is fully sourced or recently reviewed.

## Recommended authoring order

1. **Schizophrenia / psychosis** — distinguish symptoms, assessment, treatment options, and urgent risk.
2. **Bipolar disorder** — include the importance of assessing past mania/hypomania and avoid overgeneralized depression-only treatment claims.
3. **OCD** — explain evidence-based CBT with exposure and response prevention (ERP), avoid reinforcing compulsions or reassurance cycles, and clarify that exposure should be planned with appropriate support.
4. **PTSD** — describe trauma-focused treatments accurately and avoid presenting generic relaxation as a substitute for indicated care.
5. **ADHD** — distinguish assessment from online checklists and address lifespan/context.

## Acceptance criteria for the next authoring batch

- Every substantive clinical claim maps to a source appropriate to the claim.
- Use current official guidance where available; note guideline jurisdiction and target population.
- Write original plain-language summaries; link sources rather than copying them.
- Keep English, Hindi, and Gujarati equivalent in meaning, including limitations and urgent-help instructions.
- Avoid individualized diagnosis, medication selection, or dose changes.
- Record source-check date separately from independent clinical-review status.
