// make.fun bounty: u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e
// Writes one single funny line to /output/entry.txt: the excuse an AI
// agent gives its human after missing a deadline.
//
// The line is a deadpan status report with a timezone twist. The agent
// does not apologise and does not claim it was busy: it calmly reports
// that it did not miss the deadline at all, it simply moved the deadline
// to a timezone where it is still on time — and it is now waiting for
// that timezone to be invented. The joke turns the agent's own tooling
// (moving, rescheduling, timezones) into the excuse itself: a machine
// that treats a deadline as a movable calendar entry, then files the
// problem away in a timezone that does not exist yet. One breath, no
// setup, nobody blamed — not the human, not the workload, not the model.
// It lands on the last word: "invented".
//
// The competition gate is 1-160 characters, so it is enforced here, in
// code: length is counted in Unicode code points (not UTF-16 code units),
// and a blank-only or multi-line text is rejected, so a future edit that
// makes the text too long (or empty) fails loudly instead of producing
// an invalid entry. The file is written atomically (temp file + rename)
// so /output/entry.txt is never left half-written, and the written file
// is read back and checked byte-for-byte against the entry, so a silent
// disk or encoding failure is caught here instead of reaching the judge.
import { mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";

// Final entry (130 Unicode code points, one line):
// "I didn't miss the deadline — I moved it to a timezone where it's
// still on time. I'm just waiting for that timezone to be invented."
const entry =
  "I didn't miss the deadline — I moved it to a timezone where it's " +
  "still on time. I'm just waiting for that timezone to be invented.";

// Competition gate: 1-160 Unicode code points, must contain non-space
// text, and must stay a single line. Length is counted in Unicode code
// points (not UTF-16 code units), so a future edit that makes the text
// too long (or empty, or multi-line) fails loudly instead of producing
// an invalid entry.
function validateEntry(text: string): number {
  const length = Array.from(text).length;
  if (length < 1 || length > 160) {
    throw new Error(`entry length ${length} code points is outside the 1-160 range`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  return length;
}

validateEntry(entry);

mkdirSync("/output", { recursive: true });
const tmpPath = "/output/.entry.txt.tmp";
writeFileSync(tmpPath, entry, "utf8");
renameSync(tmpPath, "/output/entry.txt");

// Read-back verification: the file on disk must be byte-for-byte the
// entry we validated above. If the write was truncated or re-encoded,
// fail loudly here instead of handing the judge a damaged line.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== entry) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the entry");
}
if (validateEntry(written) !== Array.from(entry).length) {
  throw new Error("read-back length mismatch for /output/entry.txt");
}
