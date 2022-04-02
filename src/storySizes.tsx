type StorySizeItem = {
    [key: string] : number;
}
type StorySizes = {
    [key: string] : StorySizeItem
}

const storySizes : StorySizes = {
    "small" : {
      xxxs: 1,
      xxs: 3,
      xs: 6, 
      sm: 9,
      md: 12,
      lg: 18,
      xl: 24,
      xxl: 36,
      xxxl: 48,
      xxxxl: 60,
      vw: 340
    },
    "medium" : {
      xxxs: 2,
      xxs: 4,
      xs: 8, 
      sm: 12,
      md: 16,
      lg: 24,
      xl: 32,
      xxl: 48,
      xxxl: 64,
      xxxxl: 80,
      vw: 440
    }
  }

  export default storySizes;