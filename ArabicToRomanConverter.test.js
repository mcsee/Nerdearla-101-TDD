const ArabicToRomanConverter = require("./ArabicToRomanConverter");

test("test01", () => {
  expect(new ArabicToRomanConverter().convert(1)).toBe("I");
});

test("test02", () => {
  expect(new ArabicToRomanConverter().convert(2)).toBe("II");
});

test("test03", () => {
  expect(new ArabicToRomanConverter().convert(3)).toBe("III");
});

test("test04", () => {
  expect(new ArabicToRomanConverter().convert(4)).toBe("IV");
});

test("test05", () => {
  expect(new ArabicToRomanConverter().convert(5)).toBe("V");
});

test("test06", () => {
  expect(new ArabicToRomanConverter().convert(6)).toBe("VI");
});

test("test07", () => {
  expect(new ArabicToRomanConverter().convert(7)).toBe("VII");
});

test("test08", () => {
  expect(new ArabicToRomanConverter().convert(8)).toBe("VIII");
});

test("test09", () => {
  expect(new ArabicToRomanConverter().convert(9)).toBe("IX");
});

test("test10", () => {
  expect(new ArabicToRomanConverter().convert(10)).toBe("X");
});

test("test11", () => {
  expect(new ArabicToRomanConverter().convert(11)).toBe("XI");
});

test("test12", () => {
  expect(new ArabicToRomanConverter().convert(12)).toBe("XII");
});

test("test13", () => {
  expect(new ArabicToRomanConverter().convert(13)).toBe("XIII");
});

test("test14", () => {
  expect(new ArabicToRomanConverter().convert(14)).toBe("XIV");
});

test("test15", () => {
  expect(new ArabicToRomanConverter().convert(15)).toBe("XV");
});

test("test19", () => {
  expect(new ArabicToRomanConverter().convert(19)).toBe("XIX");
});

test("test20", () => {
  expect(new ArabicToRomanConverter().convert(20)).toBe("XX");
});

test("test30", () => {
  expect(new ArabicToRomanConverter().convert(30)).toBe("XXX");
});

test("test40", () => {
  expect(new ArabicToRomanConverter().convert(40)).toBe("XL");
});

test("test57", () => {
  expect(new ArabicToRomanConverter().convert(57)).toBe("LVII");
});

test("test100", () => {
  expect(new ArabicToRomanConverter().convert(100)).toBe("C");
});
