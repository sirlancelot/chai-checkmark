/// <reference types="chai" />

declare global {
  namespace Chai {
    interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
      check(done: () => void): {
          (): () => void
          getCount(): number
      }
      checks(done: () => void): {
          (): () => void
          getCount(): number
      }
      mark(): Assertion
    }

    interface Assert {
      check(done: () => void): {
        (): () => void
        getCount(): number
      }
      checks(done: () => void): {
        (): () => void
        getCount(): number
      }
      mark(): Assertion
    }
  }
}

declare function chaiCheckmark(chai: any): any
export = chaiCheckmark
