const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);
const reverse = require("../projects/reverse-string.js");

describe("reverse", () => {
    context("valid input", () => {
        it('should reverse string', () => {
            expect(reverse("fun")).to.equal("nuf");
        });
    })
    context("invalid input", () => {
        it("should throw a TypeError when given an argument that is not a string", function() {
            chai.assert.throws(() =>
                reverse(3),
                TypeError
            );
            // expect(() => reverse(3)).to.throw(TypeError, "this function only accepts string args");
        });
    })
});
//expect(() => reverse(3)).to.throw(TypeError, "this function only accepts string args")
