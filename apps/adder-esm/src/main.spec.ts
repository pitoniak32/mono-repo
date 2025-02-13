import { adder } from "./main.js";

describe("adder-esm", () => {
	it("add + add", () => {
		// Arrange / Act
		const result = adder(1, 1);
		// Assert
		expect(result).toEqual(4);
	});
});
