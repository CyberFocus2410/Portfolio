import assert from "node:assert";
import { getCertificateValidity } from "../src/lib/certificate-utils.ts";

console.log("Testing getCertificateValidity...");

const fixedNow = new Date("2026-03-01T00:00:00Z");

// Case 1: No expiry date provided
const noExpiry1 = getCertificateValidity(undefined, fixedNow);
assert.strictEqual(noExpiry1.status, "No expiry");
assert.strictEqual(noExpiry1.daysRemaining, null);

const noExpiry2 = getCertificateValidity(null, fixedNow);
assert.strictEqual(noExpiry2.status, "No expiry");

// Case 2: Expired certificate (expiry date in past)
const expired = getCertificateValidity("2025-12-01", fixedNow);
assert.strictEqual(expired.status, "Expired");
assert.ok(expired.daysRemaining !== null && expired.daysRemaining < 0);

// Case 3: Expiring soon (within 90 days, e.g. 45 days ahead)
const expiringSoon = getCertificateValidity("2026-04-15", fixedNow);
assert.strictEqual(expiringSoon.status, "Expiring soon");
assert.ok(expiringSoon.daysRemaining !== null && expiringSoon.daysRemaining > 0 && expiringSoon.daysRemaining <= 90);

// Case 4: Valid certificate (more than 90 days ahead, e.g. 180 days)
const valid = getCertificateValidity("2026-09-01", fixedNow);
assert.strictEqual(valid.status, "Valid");
assert.ok(valid.daysRemaining !== null && valid.daysRemaining > 90);

console.log("All getCertificateValidity tests passed successfully!");
