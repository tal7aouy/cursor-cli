import { describe } from "fava";
import delay from "promise-resolve-timeout";
import Cursor from "../src";

describe("cursor-cli", (it) => {
  it("works", async (t) => {
    t.true(Cursor.has());

    Cursor.hide();

    await delay(150);

    t.false(Cursor.has());

    Cursor.show();

    await delay(150);

    t.true(Cursor.has());

    Cursor.toggle();

    await delay(150);

    t.false(Cursor.has());

    Cursor.toggle();

    await delay(150);

    t.true(Cursor.has());

    Cursor.toggle(true);
    Cursor.toggle(true);

    await delay(150);

    t.true(Cursor.has());

    Cursor.toggle(false);
    Cursor.toggle(false);

    await delay(150);

    t.false(Cursor.has());
  });
});
