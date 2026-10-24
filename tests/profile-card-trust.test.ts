import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const homeView = readFileSync(new URL('../src/views/HomeView.tsx', import.meta.url), 'utf8');
const profileCardStart = homeView.indexOf('About Dr. Raghav Suthar Snippet');
const profileCard = profileCardStart >= 0 ? homeView.slice(profileCardStart) : '';

test('home profile card avoids unverified consultant and registration claims', () => {
  assert.notEqual(profileCardStart, -1, 'home profile card section should exist');
  assert.doesNotMatch(profileCard, /Consultant Psychiatrist|MBBS, DNB \(Psychiatry\)|National Medical Commission|NMC\b/i);
});

test('home profile card describes the author as a psychiatry resident and the site as education', () => {
  assert.match(profileCard, /Psychiatry resident|DNB Psychiatry resident/i);
  assert.match(profileCard, /public education|general mental-health education/i);
});
