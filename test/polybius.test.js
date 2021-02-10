// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("polybius function", () => {
    it("should output a string", () => {
      expect(polybius("thinkful")).to.be.a("string");
    });

    it("should encode a message by translating each letter to number pairs", () => {
        expect(polybius("Hello world")).to.equal("3251131343 2543241341");
    });

    it("should translate both 'i' and 'j' to 42", () => {
        expect(polybius("fig jam")).to.equal("124222 421123");
    });

    it("should leave spaces as is", () => {
        expect(polybius("  ")).to.equal("  ");
    });

    it("should decode a message by translating each pair of numbers into a letter", () => {
        expect(polybius("3251131343 2543241341", false)).to.equal("hello world");
    });    

    it("should translate 42 to both 'i' and 'j'", () => {
        expect(polybius("4432423352125413", false)).to.equal("th(i/j)nkful");
    });

    it("should return false if the length of all numbers is odd", () => {
        expect(polybius("44324233521254134", false)).to.equal(false);
    });


});
