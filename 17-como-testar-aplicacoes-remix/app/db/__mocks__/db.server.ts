import { mockDeep, mockReset } from "vitest-mock-extended";

import type { db as appDb } from "../db.server";
import { beforeEach } from "vitest";

const db = mockDeep<typeof appDb>();

beforeEach(() => {
  mockReset(db);
});

export { db };
