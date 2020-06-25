const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);
// const reverse = require("../projects/reverse-string.js");

describe("returnsThree", () => {
    context("valid input", () => {
        it('should return 3', () => {
            expect(returnThree()).to.equal(3);
        });
    })
})

describe("reciprocal", () => {
    context("valid input", () => {
        it('should return the reciprocal of number', () => {
            chai.assert.strictEquals(reciprocal(3), 1/3);
            chai.assert.strictEquals(reciprocal(4), 1/4)
            chai.assert.strictEquals(reciprocal(5), 1/5)
        });
    })
})
