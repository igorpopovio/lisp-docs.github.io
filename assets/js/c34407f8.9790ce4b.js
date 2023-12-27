"use strict";(self.webpackChunklisp_docs_github_io=self.webpackChunklisp_docs_github_io||[]).push([[7599],{104:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var t=a(5893),o=a(1151);const s={sidebar_position:2},i="The Complete Idiot\u2019s Guide to Common Lisp Packages",r={id:"tutorial/guide_to_packages",title:"The Complete Idiot\u2019s Guide to Common Lisp Packages",description:"Erann Gat",source:"@site/docs/tutorial/guide_to_packages.md",sourceDirName:"tutorial",slug:"/tutorial/guide_to_packages",permalink:"/docs/tutorial/guide_to_packages",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/guide_to_packages.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Macros",permalink:"/docs/tutorial/macros"},next:{title:"Packages and Systems",permalink:"/docs/tutorial/packages-systems"}},l={},h=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Symbols, Values, and the READ-EVAL-PRINT Loop",id:"2-symbols-values-and-the-read-eval-print-loop",level:2},{value:"3. Interning",id:"3-interning",level:2},{value:"4. Which Package?",id:"4-which-package",level:2},{value:"4.1 Home packages",id:"41-home-packages",level:2},{value:"5. Export and Use-package",id:"5-export-and-use-package",level:2},{value:"6. Shadowing",id:"6-shadowing",level:2},{value:"7. DEFPACKAGE",id:"7-defpackage",level:2},{value:"8. Final Thoughts",id:"8-final-thoughts",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",sup:"sup",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"the-complete-idiots-guide-to-common-lisp-packages",children:"The Complete Idiot\u2019s Guide to Common Lisp Packages"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Erann Gat"}),"\n",(0,t.jsx)(n.p,{children:"Copyright \xa9 2003 by the author. Permission is hereby granted for non-commercial use provided this notice is retained."}),"\n",(0,t.jsxs)(n.p,{children:["Source: ",(0,t.jsx)(n.a,{href:"https://flownet.com/ron/packages.pdf",children:"https://flownet.com/ron/packages.pdf"})]}),"\n",(0,t.jsx)(n.p,{children:"Version 1.2"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,t.jsx)(n.p,{children:"When coding a large project with multiple programmers two different programmers will often want to use the same name for two different purposes. It is possible to solve this problem using a naming convention, e.g. Bob prefixes all his names with \u201cBOB-\u201c and Jane prefixes all her names with \u201cJANE-\u201c. This is in fact how Scheme addresses this problem (or fails to address it as the case may be). Common Lisp provides a language mechanism called packages for segregating namespaces. Here\u2019s an example of how packages work:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'? (make-package :bob)\n#<Package "BOB">\n? (make-package :jane)\n#<Package "JANE">\n? (in-package bob)\n#<Package "BOB">\n? (defun foo () "This is Bob\'s foo")\nFOO\n? (in-package jane)\n#<Package "JANE">\n? (defun foo () "This is Jane\'s foo")\nFOO\n? (foo)\n"This is Jane\'s foo"\n? (in-package bob)\n#<Package "BOB">\n? (foo)\n"This is Bob\'s foo"\n?\n'})}),"\n",(0,t.jsx)(n.p,{children:"(NOTE: Code examples are cut-and-pasted from Macintosh Common Lisp (MCL). The command prompt in MCL is a question mark.) Bob and Jane each have a function named FOO that does something different, and they don\u2019t conflict with each other."}),"\n",(0,t.jsx)(n.p,{children:"What if Bob wants to use a function written by Jane? There are several ways he can do it. One is to use a special syntax to indicate that a different package is to be used:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'? (in-package bob)\n#<Package "BOB">\n? (jane::foo)\n"This is Jane\'s foo"\n?\n'})}),"\n",(0,t.jsx)(n.p,{children:"Another is to import what he wants to use into his own package. Of course, he won\u2019t want to import Jane\u2019s FOO function because then it would conflict with his own, but if Jane had a BAZ function that he wanted to use by simply typing (BAZ) instead of (JANE::BAZ) he could do it like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'? (in-package jane)\n#<Package "JANE">\n? (defun baz () "This is Jane\'s baz")\nBAZ\n? (in-package bob)\n#<Package "BOB">\n? (import \'jane::baz)\nT\n? (baz)\n"This is Jane\'s baz"\n?\n'})}),"\n",(0,t.jsx)(n.p,{children:"Alas, things don\u2019t always go quite so smoothly:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'? (in-package jane)\n#<Package "JANE">\n? (defun bar () "This is Jane\'s bar")\nBAR\n? (in-package bob)\n#<Package "BOB">\n? (bar)\n> Error: Undefined function BAR called with arguments () .\n> While executing: "Unknown"\n> Type Command-/ to continue, Command-. to abort.\n> If continued: Retry applying BAR to NIL.\nSee the Restarts\u2026 menu item for further choices.\n1 >\n; Oops! Forgot to import.\nAborted\n? (import \'jane::bar)\n> Error: Importing JANE::BAR to #<Package "BOB"> would conflict with\nsymbol BAR .\n> While executing: CCL::IMPORT-1\n> Type Command-/ to continue, Command-. to abort.\n> If continued: Ignore attempt to import JANE::BAR to #<Package "BOB">.\nSee the Restarts\u2026 menu item for further choices.\n1 >\n; Huh?\n'})}),"\n",(0,t.jsx)(n.p,{children:"To understand why this happened, what to do about it, and many of the other subtleties and surprises of packages, it is important to understand what packages actually do and how they work. For example, it is important to understand that when you type (import \u2018jane::foo) you are importing the symbol JANE::FOO, not the function associated with that symbol. It is important to understand the difference, and so we have to start with a review of some basic Lisp concepts."}),"\n",(0,t.jsx)(n.h2,{id:"2-symbols-values-and-the-read-eval-print-loop",children:"2. Symbols, Values, and the READ-EVAL-PRINT Loop"}),"\n",(0,t.jsx)(n.p,{children:"Lisp operates in a READ-EVAL-PRINT loop. Most of the interesting stuff happens in the EVAL phase, but when it comes to packages interesting stuff happens in all three phases, and it\u2019s important to understand what happens when. In particular, some of the processing related to packages can change the state of the Lisp system at READ time, which can in turn result in some surprising (and often annoying) behavior, like the last example in the previous section. A package is a collection of Lisp symbols, so to understand packages you first have to understand symbols. A symbol is a perfectly ordinary Lisp data structure, just as lists, numbers, strings, etc. are. There are built-in Lisp functions for creating and manipulating symbols. For example, there is a function called GENTEMP that creates new symbols:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"? (gentemp)\nT1\n? (setq x (gentemp))\nT2\n? (set x 123) ; Note the use of SET, not SETQ or SETF\n123\n? x\nT2\n? t2\n123\n?\n"})}),"\n",(0,t.jsx)(n.p,{children:"(If you are not familiar with the SET function now would be a good time to look it up because if you don\u2019t you will be lost in short order.) The symbols created by GENTEMP behave in all respects like symbols that you get just by typing in their names. You have only limited control over the name of a symbol created by GENTEMP. You can pass it an optional prefix string that, but the system will add a suffix and you have to take whatever it decides to give you. If you want to make a symbol with a particular name you have to use a different function, MAKE-SYMBOL:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'? (make-symbol "MY-SYMBOL")\n#:MY-SYMBOL\n?\n'})}),"\n",(0,t.jsx)(n.p,{children:"Hm, that\u2019s odd. What\u2019s that funny-looking \u201c#:\u201d doing there? To understand this we have to dig a little deeper into the guts of symbols."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'? (setq symbol1 (make-symbol "MY-SYMBOL"))\n#:MY-SYMBOL\n? (setq symbol2 (make-symbol "MY-SYMBOL"))\n#:MY-SYMBOL\n? (setq symbol3 \'my-symbol)\nMY-SYMBOL\n? (setq symbol4 \'my-symbol)\nMY-SYMBOL\n? (eq symbol1 symbol2)\nNIL\n? (eq symbol3 symbol4)\nT\n?\n'})}),"\n",(0,t.jsx)(n.p,{children:"As you see, MAKE-SYMBOL can make multiple distinct symbols that have the same name, whereas symbols that the reader gives you by typing the same name on two different occasions are the same symbol. This property of symbol identity is very important. It is what insures that the FOO you type in one place is the same FOO as the FOO you type someplace else. If this were not so you could end up with some very weird results:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"? (set symbol1 123)\n123\n? (set symbol2 456)\n456\n? (setq code-fragment-1 (list 'print symbol1))\n(PRINT #:MY-SYMBOL)\n? (setq code-fragment-2 (list 'print symbol2))\n(PRINT #:MY-SYMBOL)\n? (eval code-fragment-1)\n123\n123\n? (eval code-fragment-2)\n456\n456\n?\nContrast this with:\n? (set symbol3 123)\n123\n? (set symbol4 456)\n456\n? (setq code-fragment-3 (list 'print symbol3))\n(PRINT MY-SYMBOL)\n? (setq code-fragment-4 (list 'print symbol4))\n(PRINT MY-SYMBOL)\n? (eval code-fragment-3)\n456\n456\n? (eval code-fragment-4)\n456\n456\n?\n"})}),"\n",(0,t.jsx)(n.p,{children:"Symbols 1-4 all have the name \u201cMY-SYMBOL\u201d but symbols 1 and 2 are different symbols, while symbols 3 and 4 are the same symbol. How did this happen? Well, one obvious difference is that we called the function MAKE-SYMBOL to make symbols 1 and 2, while symbols 3 and 4 were made for us by the Lisp reader. Maybe the Lisp reader has a different way of making symbols than calling MAKE- SYMBOL. We can test this hypothesis:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'? (trace make-symbol)\nNIL\n? \'foobaz\nCalling (MAKE-SYMBOL "FOOBAZ")\nMAKE-SYMBOL returned #:FOOBAZ\nFOOBAZ\n'})}),"\n",(0,t.jsx)(n.p,{children:"Nope, the reader apparently makes symbols the same way we did, by calling MAKE-SYMBOL. But wait, the symbol returned by MAKE-SYMBOL had that funny #: thing in front of it, but by the time the reader was done the #: prefix had vanished. What gives? We can find the answer by trying the same experiment a second time with MAKE- SYMBOL still traced:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"? 'foobaz\nFOOBAZ\n"})}),"\n",(0,t.jsx)(n.p,{children:"Aha! The second time we type FOOBAZ the reader doesn\u2019t call MAKE-SYMBOL. So the reader is apparently keeping a collection of all the symbols it has made, and before it makes a new one it checks that collection to see if there is already a symbol there by the same name. If there is, then it simply returns that same symbol instead of making a new one. And a symbol that is a member of such a collection loses its mysterious #: prefix. That collection of symbols is called a package. A package is a collection of Lisp symbols with the property that no two symbols in the collection have the same name. Unfortunately, that is more or less the last aspect of packages that is simple and straightforward. From here on out things get rather hairier."}),"\n",(0,t.jsx)(n.h2,{id:"3-interning",children:"3. Interning"}),"\n",(0,t.jsxs)(n.p,{children:["The act of putting a symbol into a package is called interning a symbol. A symbol that is a member of a package is said to be interned in that package. Symbols that are not members of any package are said to be uninterned. When an uninterned symbol is printed, it gets a #: prefix",(0,t.jsx)(n.sup,{children:(0,t.jsx)(n.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," to distinguish it from an interned symbol, and to warn you that just because it looks just like another symbol that you saw before it might not in fact be the same symbol. Now, here\u2019s where things start to get a tad confusing. There is a Lisp function called INTERN, which you might expect to add a symbol to a package, but it doesn\u2019t. That function is performed by a function called IMPORT."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"? symbol1\n#:MY-SYMBOL\n? (import symbol1)\nT\n? symbol1\nMY-SYMBOL\n? (eq symbol1 'my-symbol)\nT\n?\n"})}),"\n",(0,t.jsx)(n.p,{children:"As you can see, symbol1 has gone from being an uninterned symbol to an interned symbol. It has lost its #: prefix, and it is now EQ to the symbol MY- SYMBOL as produced by the Lisp reader. Now, you might expect that to undo the effect of IMPORT you would call UNIMPORT, but there is no such function. (I warned you that things would not be straightforward.) To remove a symbol from a package you call UNINTERN:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"? (unintern symbol1)\nT\n? symbol1\n#:MY-SYMBOL\n? (eq symbol1 'my-symbol)\nNIL\n?\n"})}),"\n",(0,t.jsx)(n.p,{children:"Things are back to the way they were. Symbol 1 is now uninterned, and it is now a different symbol than the one the reader gives you. Let\u2019s put symbol1 back into our package:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'? (import symbol1)\n> Error: Importing #:MY-SYMBOL to #<Package "COMMON-LISP-USER"> would\nconflict with symbol MY-SYMBOL .\n> While executing: CCL::IMPORT-1\n> Type Command-/ to continue, Command-. to abort.\n> If continued: Ignore attempt to import #:MY-SYMBOL to #<Package\n"COMMON-LISP-USER">. See the Restarts\u2026 menu item for further choices.\n1 >\n'})}),"\n",(0,t.jsx)(n.p,{children:"Whoa! What happened? (It is a good exercise to try to figure out what\u2019s going on here before reading any further. You have all the information you need. Hint: try the experiment yourself with MAKE-SYMBOL traced.) Here\u2019s what happened:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"? (unintern 'my-symbol)\nT\n? (eq symbol1 'my-symbol\nCalling (MAKE-SYMBOL \"MY-SYMBOL\")\nMAKE-SYMBOL returned #:MY-SYMBOL\n)\nNIL\n?\n"})}),"\n",(0,t.jsx)(n.p,{children:"When we typed (eq symbol1 'my-symbol) the reader interned the symbol MY- SYMBOL. So when we tried to import symbol1 there was already a symbol with the same name in the package. Remember, packages maintain the invariant that there can only be one symbol with the same name in the package at any one time (that\u2019s the whole point) so when we tried to import symbol1 (whose name is also MY-SYMBOL) there was already a symbol there with the same name (having been quietly interned by the reader). This situation is called a symbol conflict, and it is, alas, very common. Note, by the way, that the output from the trace of MAKE-SYMBOL above appears inside the S-expression (eq symbol1 \u2018my-symbol). This is because MCL rearranges the text on the screen to reflect the true order of events. Because MAKE-SYMBOL was called by the reader while processing the string \u201cmy-symbol\u201d but before processing the close-paren, the output appears at that point. If we type: (list 'x1 'x2 'x3 'x4) the resulting output looks like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'? (list \'x1\nCalling (MAKE-SYMBOL "X1")\nMAKE-SYMBOL returned #:X1\n\'x2\nCalling (MAKE-SYMBOL "X2")\nMAKE-SYMBOL returned #:X2\n\'x3\nCalling (MAKE-SYMBOL "X3")\nMAKE-SYMBOL returned #:X3\n\'x4\nCalling (MAKE-SYMBOL "X4")\nMAKE-SYMBOL returned #:X4\n)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Here, the text formatting has been preserved to help illustrate what is happening. The text typed by the user is in bold type. (Note that most Lisp systems don\u2019t do this reformatting.) There are a few more useful functions that we can go ahead and mention at this point. SYMBOL-NAME returns the name of a symbol as a string. FIND-SYMBOL takes a string and tells you if there is a symbol with that name already interned. And, finally, INTERN, which can be defined as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(defun intern (name)\n(or (find-symbol name)\n(let ((s (make-symbol name)))\n(import s)\ns)))\n"})}),"\n",(0,t.jsx)(n.p,{children:"In other words, INTERN is sort of the opposite of SYMBOL-NAME. SYMBOL-NAME takes a symbol and returns the string that is that symbol\u2019s name. INTERN takes a string and returns the symbol whose name is that string. INTERN is the function that READ uses to make symbols."}),"\n",(0,t.jsx)(n.h2,{id:"4-which-package",children:"4. Which Package?"}),"\n",(0,t.jsxs)(n.p,{children:["The functions that operate on packages like FIND-SYMBOL, IMPORT and INTERN by default operate on a package that is the value of the global variable ",(0,t.jsx)(n.em,{children:"PACKAGE"}),", also known as the current package. Like symbols, packages have names, and no two packages can have the same name. Packages, like symbols, are also ordinary Lisp data structures. There are functions PACKAGE-NAME and FIND-PACKAGE which operate analogously to SYMBOL-NAME and FIND-SYMBOL, except of course, that FIND-PACKAGE doesn\u2019t take a package argument. (It\u2019s as if there is one global meta-package for package names.) As we\u2019ve already seen, we can make new packages by calling MAKE-PACKAGE, and set the current package by calling IN-PACKAGE. (Note that IN-PACKAGE is not a function but a macro that does not evaluate its argument.) You can access symbols that are not in the current package by using a special syntax: the package name followed by two colons followed by the symbol name. This is handy if you want to use a symbol without importing it. For example, if Bob wanted to use Jane\u2019s FOO function he could type JANE::FOO."]}),"\n",(0,t.jsx)(n.h2,{id:"41-home-packages",children:"4.1 Home packages"}),"\n",(0,t.jsx)(n.p,{children:"One of the invariants that Common Lisp tries to maintain is a property called print-read consistency. This property says that if you print a symbol, and then read the resulting printed representation of that symbol, the result is the same symbol, with two caveats: 1) this does not apply to uninterned symbols, and 2) it applies only if you refrain from certain \u201cdangerous\u201d actions. We\u2019ll cover what those are in a moment. To maintain print-read consistency, some symbols need to be printed with their package qualifier. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"? (in-package jane)\n#<Package \"JANE\">\n? 'foo\nFOO\n? 'jane::foo\nFOO\n? (in-package bob)\n#<Package \"BOB\">\n? 'foo\nFOO\n? 'jane::foo\nJANE::FOO\n? 'bob::foo\nFOO\n?\n"})}),"\n",(0,t.jsx)(n.p,{children:"Obviously one of the \u201cdangerous actions\u201d that allows print-read consistency to be violated is calling IN-PACKAGE. Now, consider the following situation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'? (in-package bob)\n#<Package "BOB">\n? (unintern \'foo)\nT\n? (import \'jane::foo)\nT\n? (make-package :charlie)\n#<Package "CHARLIE">\n? (in-package charlie)\n#<Package "CHARLIE">\n? \'bob::foo\nJANE::FOO\n?\n'})}),"\n",(0,t.jsx)(n.p,{children:"Here we have a symbol FOO which is interned in both the JANE and the BOB packages. That one symbol is therefore accessible as both JANE::FOO and BOB::FOO. How does the system decide which printed representation to use when the symbol is printed from the CHARLIE package, in which the symbol is not interned? It turns out that every symbol keeps track of a single package called its home package, which is usually the first package in which that symbol was interned (but there are exceptions). When a symbol needs to be printed with a package qualifier, it uses the qualifier from its home package. You can query a symbol for its home package using the function SYMBOL-PACKAGE."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'? (symbol-package \'bob::foo)\n#<Package "JANE">\n?\n'})}),"\n",(0,t.jsx)(n.p,{children:"Note that it is possible to make symbols without home packages. Uninterned symbols, for examples, have no home packages. But it is also possible to make interned symbols with no home packages. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'? (in-package jane)\n#<Package "JANE">\n? \'weird-symbol\nWEIRD-SYMBOL\n? (in-package bob)\n#<Package "BOB">\n? (import \'jane::weird-symbol)\nT\n? (in-package jane)\n#<Package "JANE">\n? (unintern \'weird-symbol)\nT\n? (in-package bob)\n#<Package "BOB">\n? \'weird-symbol\nWEIRD-SYMBOL\n? (symbol-package \'weird-symbol)\nNIL\n? (in-package jane)\n#<Package "JANE">\n? \'bob::weird-symbol\n#:WEIRD-SYMBOL\n'})}),"\n",(0,t.jsx)(n.p,{children:"Such things are best avoided."}),"\n",(0,t.jsx)(n.h2,{id:"5-export-and-use-package",children:"5. Export and Use-package"}),"\n",(0,t.jsx)(n.p,{children:"Suppose Jane and Bob are collaborating on a software development project, each working in their own package to avoid conflicts. Jane writes:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'? (in-package jane)\n#<Package "JANE">\n? (defclass jane-class () (slot1 slot2 slot3))\n#<STANDARD-CLASS JANE-CLASS>\n'})}),"\n",(0,t.jsx)(n.p,{children:"Now, imagine that Bob wants to use JANE-CLASS. He writes:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"? (in-package bob)\n#<Package \"BOB\">\n? (import 'jane::jane-class)\nT\n? (make-instance 'jane-class)\n#<JANE-CLASS #x130565E>\n?\n"})}),"\n",(0,t.jsx)(n.p,{children:"So far so good. Now he tries:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"? (setq jc1 (make-instance 'jane-class))\n#<JANE-CLASS #x130BA96>\n? (slot-value jc1 'slot1)\n> Error: #<JANE-CLASS #x130BA96> has no slot named SLOT1.\n> While executing: #<CCL::STANDARD-KERNEL-METHOD SLOT-MISSING (T T T T)>\n"})}),"\n",(0,t.jsx)(n.p,{children:"What happened? Well, JANE-CLASS was defined in the JANE package, so the slot names are symbols interned in that package. But Bob tried to access an instance of that class using a symbol interned in the BOB package. In other words, JANE- CLASS has a slot named JANE::SLOT1, and Bob tried to access a slot name BOB::SLOT1, and there is no such slot. What Bob would really like to do is import all the symbols that are \u201cassociated\u201d with JANE-CLASS, that is, all the slot names, method names, etc. etc. How can he know what all those symbols are? He could examine Jane\u2019s code and try to figure it out for himself, but that would lead to many problems, not least of which is that he might decide to import a symbol that Jane didn\u2019t want Bob to mess with (remember, separating Jane\u2019s symbols from the effects of Bob\u2019s meddling is the whole point of having packages to being with). A better solution would be for Jane to assemble a list of symbols that Bob should import in order to use her software. Then Jane could do something like:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"? (defvar *published-symbols* '(jane-class slot1 slot2 slot3))\n*PUBLISHED-SYMBOLS*\n?\n"})}),"\n",(0,t.jsxs)(n.p,{children:["And Bob could then do (import jane::",(0,t.jsx)(n.em,{children:"published-symbols"}),"). Common Lisp provides a standard mechanism for doing this. Every package maintains a list of symbols that are intended to be used by other packages. This list is called the exported symbol list of that package, and to add a symbol to that package you use the function EXPORT. To remove a symbol from a package\u2019s exported symbol list you use (as you might expect this time) UNEXPORT. To import all of the exported symbols in a package you call USE-PACKAGE. To unimport them all you call UNUSE-PACKAGE. There are two things to note about exporting symbols. First, a symbol can be exported from any package in which that symbol is interned, not just its home package. A symbol also does not have to be exported from its home package in order to be exported from some other package in which that symbol is interned. Second, a symbol that is exported from its home package uses only one colon instead of two when printed with its package qualifier. This is to alert you to the fact that the symbol is exported from its home package (and so you might want to USE-PACKAGE the symbol\u2019s package instead of IMPORTing the symbol), and also to discourage you from using unexported symbols by forcing you to type an extra colon in order to access them. (No, I am not kidding.)"]}),"\n",(0,t.jsx)(n.h2,{id:"6-shadowing",children:"6. Shadowing"}),"\n",(0,t.jsx)(n.p,{children:"There is one last gotcha: using USE-PACKAGE is slightly different from IMPORTing all the exported symbols in the package. When you IMPORT a symbol you can undo the effect of the IMPORT using UNINTERN. You cannot use UNINTERN to (partially) undo the effect of a USE-PACKAGE. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'? (in-package jane)\n#<Package "JANE">\n? (export \'(slot1 slot2 slot3))\nT\n? (in-package bob)\n#<Package "BOB">\n? (use-package \'jane)\nT\n? (symbol-package \'slot1)\n#<Package "JANE">\n? (unintern \'slot1)\nNIL\n? (symbol-package \'slot1)\n#<Package "JANE">\n?\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This is a problem, because it would seem to make it impossible to use two different packages that export a symbol with the same name. For example, suppose you wanted to use two packages P1 and P2 in a third package named MYPACKAGE, and both P1 and P2 exported a symbol named X. If you just tried to USE-PACKAGE both P1 and P2 you would get a name conflict because Lisp would have no way of knowing whether X in MYPACKAGE should now be P1",":X"," or P2",":X",". To resolve such name conflicts every package maintains what is called a shadowing symbols list. The shadowing symbols list is a list of symbols that shadow or override any symbols would normally become visible in that package as a result of calling USE-PACKAGE. There are two ways to add symbols to a package\u2019s shadowing symbols list, SHADOW and SHADOWING-IMPORT. SHADOW is used to add symbols that are in the package to the shadowing symbols list. SHADOWING-IMPORT is used to add symbols that are in some other package."]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'? (in-package p1)\n#<Package "P1">\n? (export \'(x y z))\nT\n? (in-package p2)\n#<Package "P2">\n? (export \'(x y z))\nT\n? (in-package bob)\nT\n? (use-package \'p1)\nT\n? (use-package \'p2)\n> Error: Using #<Package "P2"> in #<Package "BOB">\n> would cause name conflicts with symbols inherited\n> by that package:\n> Z P2:Z\n> Y P2:Y\n> X P2:X\n. . .\n1 >\nAborted\n? (unuse-package \'p1)\nT\n? (shadow \'x)\nT\n? (shadowing-import \'p1:y)\nT\n? (shadowing-import \'p2:z)\nT\n? (use-package \'p1)\nT\n? (use-package \'p2)\nT\n? (symbol-package \'x)\n#<Package "BOB">\n? (symbol-package \'y)\n#<Package "P1">\n? (symbol-package \'z)\n#<Package "P2">\n?\n'})}),"\n",(0,t.jsx)(n.p,{children:"To undo the effect of SHADOW or SHADOWING-IMPORT use UNINTERN. Note that UNINTERN (and many, many other surprising things) can result in name conflicts unexpectedly appearing. The most common cause of an unexpected name conflict is usually inadvertently interning a symbol in a package by typing it at the reader without paying close attention to which package you were in at the time."}),"\n",(0,t.jsx)(n.h2,{id:"7-defpackage",children:"7. DEFPACKAGE"}),"\n",(0,t.jsx)(n.p,{children:"Now that you\u2019ve learned all about the myriad functions and macros that can be used to manipulate packages you shouldn\u2019t really be using any of them. Instead, all of the functionality of IMPORT, EXPORT, SHADOW, etc. is all rolled up in a single macro called DEFPACKAGE, which is what you should use for real (non- prototype) code."}),"\n",(0,t.jsx)(n.p,{children:"I\u2019m not going to try to explain DEFPACKAGE here because now that you understand the basic concepts of packages you should just be able to read the documentation in the hyperspec and understand it. (There are also a lot of other goodies, like DO-SYMBOLS and WITH-PACKAGE-ITERATOR, in the hyperspec that you should now be able to understand on your own.)"}),"\n",(0,t.jsx)(n.p,{children:"One caveat about using DEFPACKAGE though: note that most of the arguments to DEFPACKAGE are string designators, not symbols. This means that they can be symbols, but if you choose to use symbols then those symbols will get interned in the current package, whatever it may be, at the time that the DEFPACKAGE form is read. This often leads to undesirable consequences, so it\u2019s a good idea to get into the habit of using keywords or strings in your DEFPACKAGE forms."}),"\n",(0,t.jsx)(n.h2,{id:"8-final-thoughts",children:"8. Final Thoughts"}),"\n",(0,t.jsx)(n.p,{children:"The most important thing to understand about packages is that they are fundamentally a part of the Lisp reader and not the evaluator. Once you wrap your brain around that idea, everything else will fall into place. Packages control how the reader maps strings onto symbols (and how PRINT maps symbols onto strings), nothing else. In particular, packages have nothing to do with the functions, values, property lists, etc. that might or might not be associated with any particular symbol. Note in particular (this has nothing to do with packages but newcomers often get confused by this anyway) that both symbols and function objects can be used as functions, but they behave slightly differently. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'? (defun foo () "Original foo")\nFOO\n? (setf f1 \'foo)\nFOO\n? (setf f2 #\'foo)\n#<Compiled-function FOO #xEB3446>\n? (defun demo ()\n(list (funcall f1) (funcall f2)\n(funcall #\'foo) (funcall #.#\'foo)))\n;Compiler warnings :\n; Undeclared free variable F1, in DEMO.\n; Undeclared free variable F2, in DEMO.\nDEMO\n? (demo)\n("Original foo" "Original foo" "Original foo" "Original foo")\n? (defun foo () "New foo")\nFOO\n? (demo)\n("New foo" "Original foo" "New foo" "Original foo")\n?\n'})}),"\n",(0,t.jsx)(n.p,{children:"In this example we have two variables, F1 and F2. The value of F1 is the symbol FOO. The value of F2 is the function object that was in the symbol-function slot of the symbol FOO at the time F2 was assigned. Note that when FOO is redefined, the effect of calling the symbol FOO is to get the new behavior, whereas calling the function object produces the old behavior. Explaining the second and third result in the list is left as an exercise for the reader (no pun intended)."}),"\n",(0,t.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,t.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{id:"user-content-fn-2",children:["\n",(0,t.jsxs)(n.p,{children:["This is not quite accurate, but a good enough approximation for now. The real truth is that a #: prefix just means that a symbol has no home package, not necessarily that it is not interned in any package. ",(0,t.jsx)(n.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>i});var t=a(7294);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);