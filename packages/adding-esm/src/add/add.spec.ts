import { add } from "./add.js";

describe("add", () => {
	it("should add", () => {
		// Arrange / Act
		const result = add(1, 1);

		// Assert
		expect(result).toEqual(2);
	});
});
