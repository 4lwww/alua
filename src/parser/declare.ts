/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/*
    运算符和分隔符
    +     -     *     /     %     ^     #
    &     ~     |     <<    >>    //    ..
    ==    ~=    <=    >=    <     >     =
    (     )     {     }     [     ]     ::
    ;     :     ,     .     ...
    关键字
    and       break     do        else      elseif    end
    false     for       function  goto      if        in
    local     nil       not       or        repeat    return
    then      true      until     while
*/
export enum Token{
    EOF = 0, // end-of-file
    VARRAG, // ...
    IDENTIFIER, // identifier
    LIT_NUMBER, // literal number
    LIT_STRING, // literal string

    OP_ADD, // +
    OP_MINUS, // -
    OP_MUL, // *
    OP_DIV, // /
    OP_MOD, // %
    OP_POW, // ^
    OP_LENGTH, // #
    OP_BAND, // &
    OP_WAVE, // ~
    OP_BOR, // |
    OP_LSHIFT, // <<
    OP_RSHIFT, // >>
    OP_FDIV, // //
    OP_CONCAT, // ..
    OP_EQUAL, // ==
    OP_NOTEQUAL, // ~=
    OP_LESSEQUAL, // <=
    OP_GREATEREQUAL, // >=
    OP_LESSTHAN, // <
    OP_GREATERTHAN, // >
    OP_ASSIGN, // =

    SEP_LPAREN, // (
    SEP_RPAREN, // )
    SEP_LCURLY, // {
    SEP_RCURLY, // }
    SEP_LBRACKET, // [
    SEP_RBRACKET, // ]
    SEP_LABEL, // ::
    SEP_SEMI, // ;
    SEP_COLON, // :
    SEP_COMMA, // ,
    SEP_DOT, // .

    KW_AND, // and
    KW_BREAK, // break
    KW_DO, // do
    KW_ELSE, // else
    KW_ELSEIF, // elseif
    KW_END, // end
    KW_FALSE, // false
    KW_FOR, // for
    KW_FUNCTION, // function
    KW_GOTO, // goto
    KW_IF, // if
    KW_IN, // in
    KW_LOCAL, // local
    KW_NIL, // nil
    KW_NOT, // not
    KW_OR, // or
    KW_REPEAT, // repeat
    KW_RETURN, // return
    KW_THEN, // then
    KW_TRUE, // true
    KW_UNTIL, // until
    KW_WHILE, // while
}
