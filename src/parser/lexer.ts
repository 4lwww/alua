export namespace Lexer {
    export function isWhiteSpace(char:String) : boolean {
      return char === '\n' || char === '\t' || char === '\v'
      || char === '\f' || char === '\r' || char === ' ';
    }
}
