import cesarCipher from "./caesarCipher";

test('encrypt given message and shift factor', () =>{
    expect(cesarCipher("Banana cake!", 3)).toEqual("EDQDQD FDNHB")
    expect(cesarCipher("Omni padre divali, terco?", 7)).toEqual("VTUP WHKYL KP!HSPD ,LYJVG")
    expect(cesarCipher("hej Hej to ja", 12)).toEqual("TQV TQV B, VM")
})