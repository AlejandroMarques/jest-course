import { vi } from "vitest";

export const promises = {
  writeFile: vi.fn((path, data) => {
    console.log("Writing", path, data);
    return new Promise((resolve, reject) => {
      resolve(undefined);
    });
  }),
};
