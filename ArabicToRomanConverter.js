class ArabicToRomanConverter {
  convert(arabic) {
    const tens = Math.floor((arabic % 100) / 10);
    const hundreds = arabic / 100;

    return (
      this.asRomanOne(hundreds, "C", "D", "X") +
      this.asRomanOne(tens, "X", "L", "C") +
      this.asRomanOne(arabic % 10, "I", "V", "X")
    );
  }

  asRomanOne(arabic, ones, fives, tens) {
    if (arabic < 4) return ones.repeat(arabic);
    if (arabic == 4) return ones + fives;
    if (arabic < 9) return fives + ones.repeat(arabic - 5);
    if (arabic == 9) return ones + tens;
  }
}

module.exports = ArabicToRomanConverter;
