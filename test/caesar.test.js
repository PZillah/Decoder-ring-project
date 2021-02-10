// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar function", () => {
  it("should encode if a positive shift value is given", () => {
    const input = "thinkful";
    const actual = caesar(input, 3);
    const expected = "wklqnixo";
    expect(actual).to.equal(expected);
  });

  it("should encode if a negative shift value is given", () => {
    const input = "thinkful";
    const actual = caesar(input, -3);
    const expected = "qefkhcri";
    expect(actual).to.equal(expected);
  });

  it("should decode if a positive shift value is given", () => {
    const input = "wklqnixo";
    const actual = caesar(input, 3, false);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });

  it("should decode if a negative shift value is given", () => {
    const input = "czggj";
    const actual = caesar(input, -5, false);
    const expected = "hello";
    expect(actual).to.equal(expected);
  });

  it("should encode while ignoring nonletters when given a positive shift value", () => {
    const input = "This is a secret message!";
    const actual = caesar(input, 8);
    const expected = "bpqa qa i amkzmb umaaiom!";
    expect(actual).to.equal(expected);
  });

  it("should encode while ignoring nonletters when given a negative shift value", () => {
    const input = "Hello Kitty!";
    const actual = caesar(input, -3);
    const expected = "ebiil hfqqv!";
    expect(actual).to.equal(expected);
  });

  it("should decode while ignoring nonletters when given a positive shift value", () => {
    const input = "BPQA qa I amkzmb umaaiom!";
    const actual = caesar(input, 8, false);
    const expected = "this is a secret message!";
    expect(actual).to.equal(expected);
  });

  it("should decode while ignoring nonletters when given a negative shift value", () => {
    const input = "ebiil hfqqv!";
    const actual = caesar(input, -3, false);
    const expected = "hello kitty!";
    expect(actual).to.equal(expected);
  });

  it("should return false if no shift input", () => {
    const input = "thinkful";
    const actual = caesar(input);
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("should return false if shift value is 0", () => {
    const input = "thinkful";
    const actual = caesar(input, 0);
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("should return false if shift value greater than 25", () => {
    const input = "thinkful";
    const actual = caesar(input, 99);
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("should return false if shift value less than -25", () => {
    const input = "thinkful";
    const actual = caesar(input, -26);
    const expected = false;
    expect(actual).to.equal(expected);
  });
});
