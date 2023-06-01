import { describe, expect, it, vi } from "vitest";

import bcrypt from "bcryptjs";
import { db } from "~/db/__mocks__/db.server";
import { login } from "./auth.api";

const credentials = {
  email: "Arnold.Bednar43@hotmail.com",
  password: "123456",
};

vi.mock("~/db/db.server");

describe("auth.api", () => {
  describe("login", () => {
    it("returns a message when user not found ", async () => {
      db.user.findUnique.mockResolvedValue(null);

      expect(login(credentials)).rejects.toThrow("User not found");
    });

    it("returns a message when password is not valid ", async () => {
      const user = {
        id: 1,
        name: "Fabio Vedovelli",
        email: "fabio@vedovelli.com.br",
        password: await bcrypt.hash("123456789", 10),
        city: "SBC",
        state: "SP",
      };

      db.user.findUnique.mockResolvedValue(user);

      expect(login(credentials)).rejects.toThrow("Invalid password");
    });

    it("returns user when login is successful", async () => {
      const user = {
        id: 1,
        name: "Fabio Vedovelli",
        email: "fabio@vedovelli.com.br",
        password: await bcrypt.hash("123456", 10),
        city: "SBC",
        state: "SP",
      };

      db.user.findUnique.mockResolvedValue(user);

      expect(login(credentials)).resolves.toStrictEqual(user);
    });
  });
});
