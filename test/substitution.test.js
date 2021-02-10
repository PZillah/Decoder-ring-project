// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("substitution function", () => {
  it("should return false if substitution alphabet is missing", () => {
    expect(substitution("message")).to.equal(false);
  });

  it("should return false if the substitution alphabet is not exactly 26 characters", () => {
    expect(substitution("thinkful", "short")).to.equal(false);
  });

  it("should return false if the substitution alphabet does not contain unique characters", () => {
    expect(substitution("thinkful", "abcabcabcabcabcabcabcabcyz")).to.equal(false);
  });

  it("should encode a message by using the given substitution alphabet", () => {
    expect(substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
    ).to.equal("elp xhm xf mbymwwmfj dne");
  });

  it("should decode a message by using the given substitution alphabet", () => {
    expect(substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
    ).to.equal("thinkful");
  });

  it("should encode a message by using the given substitution alphabet with special characters", () => {
    expect(substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")
    ).to.equal("y&ii$r&");
  });

  it("should decode a message by using the given substitution alphabet with special characters", () => {
    expect(substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
    ).to.equal("message");
  });
});
