"use strict";(self.webpackChunklisp_docs_github_io=self.webpackChunklisp_docs_github_io||[]).push([[4710],{2437:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=a(5893),i=a(1151);const r={},t="Macros",o={id:"macros",title:"Macros",description:'One of the most distinctive features of Common Lisp is its macros. In most other languages, code is strutured according to a fairly complex syntax, which is parsed to generate an abstract syntax tree to be processed further by the compiler or interpreter and is not generally available to the programmer. Lisp code is already structed as a tree of s-expressions, read in as a simple cons structure which can be manipulated in the same way as any other data. This equivalance between code and data is described by the Greek word "homoiconicity" and it makes Lisp macros particularly powerful and easy to write.',source:"@site/docs/macros.md",sourceDirName:".",slug:"/macros",permalink:"/docs/macros",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/macros.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Glossary",permalink:"/docs/glossary"}},l={},c=[{value:"Examples",id:"examples",level:2},{value:"AND",id:"and",level:3},{value:"Backquote",id:"backquote",level:3},{value:"Comparing numbers",id:"comparing-numbers",level:3},{value:"Understanding Macros",id:"understanding-macros",level:2},{value:"Time of Evaluation",id:"time-of-evaluation",level:3},{value:"The <code>,</code> Comma, <code>`</code> Back Quote, and <code>&#39;</code> Quote operators",id:"the--comma--back-quote-and--quote-operators",level:3},{value:"The <code>@</code> Splice operator",id:"the--splice-operator",level:3},{value:"Declaring Variables with GENSYM",id:"declaring-variables-with-gensym",level:3},{value:"Variable Capture",id:"variable-capture",level:2},{value:"Classic Macro Pitfalls",id:"classic-macro-pitfalls",level:2},{value:"Reader Macros",id:"reader-macros",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"macros",children:"Macros"}),"\n",(0,s.jsx)(n.p,{children:'One of the most distinctive features of Common Lisp is its macros. In most other languages, code is strutured according to a fairly complex syntax, which is parsed to generate an abstract syntax tree to be processed further by the compiler or interpreter and is not generally available to the programmer. Lisp code is already structed as a tree of s-expressions, read in as a simple cons structure which can be manipulated in the same way as any other data. This equivalance between code and data is described by the Greek word "homoiconicity" and it makes Lisp macros particularly powerful and easy to write.'}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Macros have multiple uses. They can introduce new syntax to the language, control when code is evaluated and how many times, elminate repetitive boilerplate or make programs more efficient by doing computation at compile time."}),"\n",(0,s.jsx)(n.h3,{id:"and",children:"AND"}),"\n",(0,s.jsx)(n.p,{children:"Suppose we have some lisp forms and we want to check they all evaluate to true. The obvious way to write this is (and a b c), where a b and c are some arbitrary lisp forms. We could implement this as a function, using rest parameters and recursion to operate on an arbitrary number of values before returning either the final value, or nil if any of the other values are nil."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(defun and (&rest values)\n  (when (car values)\n    (if (cdr values)\n        (and (cdr values))\n        (car values))))\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"* (and (< 1 2) 3)\n3\n* (and (> 1 2) 3)\nnil\n"})}),"\n",(0,s.jsx)(n.p,{children:"This seems to work, but suppose we are writing a control system for a rocket silo. We want to perform a sequence of operations, checking each stage returns a true value to indicate it has been successfully completed."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"* (and (open-doors) (prime-fuel-tanks) (launch-rocket))\n"})}),"\n",(0,s.jsx)(n.p,{children:"Why did our silo just blow up?"}),"\n",(0,s.jsxs)(n.p,{children:["These are all functions with side effects. Calling open-doors sends a signal to open the doors and then returns t if sensors indicate the doors have opened correctly or nil otherwise. When a function is called all of its arguments are all evaluated first, followed by the body of the function. This means that our ",(0,s.jsx)(n.code,{children:"and"})," expression will try to open the doors, prime the fuel tanks and launch the rocket, and only afterwards check the doors opened successfully."]}),"\n",(0,s.jsx)(n.p,{children:"With a macro we can control exactly when the evaluation happens"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(defmacro %and (&rest forms)\n  (list 'when (car forms)\n     (if (cddr forms) \n      (cons '%and (cdr forms))\n      (cadr forms))))\n"})}),"\n",(0,s.jsx)(n.p,{children:"Our missile silo controller is expanded at compile time to"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(if (open-doors)\n  (if (prime-fuel-tanks)\n    (launch-rocket)))\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If an argument evaluates to nil, the chain of ",(0,s.jsx)(n.code,{children:"if"})," statements is broken and none of the remaining arguments are evaulated."]}),"\n",(0,s.jsxs)(n.p,{children:["Notice that ",(0,s.jsx)(n.code,{children:"(when a b)"})," is itself a macro invocation, which expands to ",(0,s.jsx)(n.code,{children:"(if a b)"}),". Many expressions which require special syntax in other languages are implemented as macros in Lisp. The AND macro is part of the language specification which means it is provided by all Common Lisp implementations, usually with code similar to our example."]}),"\n",(0,s.jsx)(n.h3,{id:"backquote",children:"Backquote"}),"\n",(0,s.jsxs)(n.p,{children:["Common Lisp's backquote syntax is very useful tool for constructing code in macros and complex data structures generally. Instead of constructing a data structure with functions like ",(0,s.jsx)(n.code,{children:"cons"})," ",(0,s.jsx)(n.code,{children:"list"})," and ",(0,s.jsx)(n.code,{children:"append"}),", one can simple write a quoted template and insert values into it by unquoting with commas.\nFor instance, instead of"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(append '(there will be) (incf n) '(green bottles standing on the wall))\n"})}),"\n",(0,s.jsx)(n.p,{children:"With backquote we can write"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"* (defvar n 10)\nN\n* `(there will be ,(decf n) green bottles standing on the wall)\n(there will be 9 green bottles standing on the wall)\n* `(there will be ,(decf n) green bottles standing on the wall)\n(there will be 8 green bottles standing on the wall)\n"})}),"\n",(0,s.jsx)(n.p,{children:"The comma unquotes the expression following it so it is evaluated as if it were outside the quote. n is decremented and the result is inserted into the quoted structure."}),"\n",(0,s.jsxs)(n.p,{children:["Lists can also be unquoted with ",(0,s.jsx)(n.code,{children:",@"})," which splices the contents of the list into the surrounding structure. Compare"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"* (defvar object '(green bottle))\nOBJECT\n* `(there will be 1 ,object standing on the wall)\n(there will be 1 (green bottle) standing on the wall)\n* `(there will be 1 ,@object standing on the wall)\n(there will be 1 green bottle standing on the wall)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Backquote is extremely useful for generating code in macros. Subsequent examples will make heavy use of it."}),"\n",(0,s.jsx)(n.h3,{id:"comparing-numbers",children:"Comparing numbers"}),"\n",(0,s.jsxs)(n.p,{children:["Quite a program needs to compare numbers and do something different depending on which is larger. In Lisp we could use a ",(0,s.jsx)(n.code,{children:"cond"})," form like this"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(cond ((< x y) (y-is-bigger))\n      ((= x y) (both-equal))\n      (t       (x-is-bigger)))\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This is quite long winded for such a common pattern. It would be clearer and more convenient if we could write something like ",(0,s.jsx)(n.code,{children:"(compare (x y) (y-is-bigger) (x-is-bigger) (both-equal))"}),". Luckily with macros we can."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(defmacro compare ((a b) < = >)\n `(cond ((< ,a ,b) ,<)\n        ((= ,a ,b) ,=)\n        (t        ,>)))\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"* (let ((x 100)\n        (y 10))\n    (compare (x y) 'y-is-bigger 'both-equal 'x-is-bigger))\nX-IS-BIGGER\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This appears to work but there is a problem. If the first test, ",(0,s.jsx)(n.code,{children:"(< ,a ,b)"}),", fails, a and b are evaluated again in the second test where we have ",(0,s.jsx)(n.code,{children:"(= ,a ,b)"}),". Arguments to a macro are not evaluated until after the macro is expanded, so if we insert ",(0,s.jsx)(n.code,{children:"a"})," twice, it will be evaluated twice. For functions which have side effects or require a lot of computation, this is a problem."]}),"\n",(0,s.jsx)(n.p,{children:"We can solve this problem by generating code to evaluating a and b and bind them to variables before comparing them."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(defmacro compare ((a b) < = >)\n  `(let ((a ,a)\n         (b ,b))\n     (cond ((< a b) ,<)\n           ((= a b) ,=)\n           (t       ,>))))\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"* (let ((x 11)\n        (y 10))\n    (compare ((decf x) y) 'b-is-bigger 'both-equal 'a-is-bigger))\nBOTH-EQUAL\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Good, now ",(0,s.jsx)(n.code,{children:"(decf x)"})," is only done once and the result is equal to y. Have we finished? How about this?"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"* (let ((x 10)\n        (y 100)\n        (a 'y-is-bigger)\n        (b 'both-equal)\n        (c 'x-is-bigger))\n    (compare (x y) a b c))\n10\n"})}),"\n",(0,s.jsxs)(n.p,{children:["What has happened here? We expected to get back the value of a: ",(0,s.jsx)(n.code,{children:"'y-is-bigger"}),". Instead of which the value of x has leaked through, replacing the value we supplied. Let's look at the expansion of this macro (we can get the result of expanding a macro with ",(0,s.jsx)(n.code,{children:"macroexpand"}),")"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"* (macroexpand '(compare (x y) a b c))\n(LET ((A X) (B Y))\n  (COND ((< A B) A) ((= A B) B) (T C)))\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Looking at the expanded macro it's quite obvious what is going wrong. ",(0,s.jsx)(n.code,{children:"x"})," is bound to ",(0,s.jsx)(n.code,{children:"a"})," in the code produced by the macro which overrides the outer binding of a to 'y-is-bigger. We could get around this by coming up with more obscure names for bindings in macros, but there is a better solution. The function ",(0,s.jsx)(n.code,{children:"gensym"})," returns a new uninterned symbol. Gensyms are guarenteed to be unique because no uninterned symbol is eq to any other, so if we bind a value to a gensym, we can be certain no other variables will be accidentally captured."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(defmacro compare ((a b) < = >)\n  (let ((asym (gensym))\n        (bsym (gensym)))\n    `(let ((,asym ,a)\n           (,bsym ,b))\n        (cond ((< ,asym ,bsym) ,<)\n              ((= ,asym ,bsym) ,=)\n              (t       ,>)))))\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This can be expressed far more elegantly using the ",(0,s.jsx)(n.code,{children:"once-only"})," macro, originally written by Peter Norvig and available in the Alexandria utility library. ",(0,s.jsx)(n.code,{children:"once-only"})," automatically introduces gensym bindings for expressions in exactly the same way as the previous example."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(require 'alexandria)\n(import alexandria:once-only)\n\n(defmacro compare ((a b) < = >)\n  (once-only (a b)\n    `(cond ((< ,a ,b) ,<)\n           ((= ,a ,b) ,=)\n           (t         ,>))))\n"})}),"\n",(0,s.jsx)(n.h2,{id:"understanding-macros",children:"Understanding Macros"}),"\n",(0,s.jsx)(n.h3,{id:"time-of-evaluation",children:"Time of Evaluation"}),"\n",(0,s.jsx)(n.p,{children:"\\ "}),"\n",(0,s.jsxs)(n.h3,{id:"the--comma--back-quote-and--quote-operators",children:["The ",(0,s.jsx)(n.code,{children:","})," Comma, ",(0,s.jsx)("code",{children:"`"})," Back Quote, and ",(0,s.jsx)(n.code,{children:"'"})," Quote operators"]}),"\n",(0,s.jsxs)(n.h3,{id:"the--splice-operator",children:["The ",(0,s.jsx)(n.code,{children:"@"})," Splice operator"]}),"\n",(0,s.jsx)(n.h3,{id:"declaring-variables-with-gensym",children:"Declaring Variables with GENSYM"}),"\n",(0,s.jsx)(n.h2,{id:"variable-capture",children:"Variable Capture"}),"\n",(0,s.jsx)(n.h2,{id:"classic-macro-pitfalls",children:"Classic Macro Pitfalls"}),"\n",(0,s.jsx)(n.h2,{id:"reader-macros",children:"Reader Macros"})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>t});var s=a(7294);const i={},r=s.createContext(i);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);