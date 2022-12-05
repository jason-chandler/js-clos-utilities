This is a simple Common Lisp lib for Valtan that provides some CLOS methods to semi-automatically wrap JS objects with CLOS versions to hide FFI a bit better.

To use it, clone js-clos-utilities to your valtan library folder.
By default this is in ~/.roswell/local-projects/cxxxr/valtan/library/

include "js-clos-utilities" as a dependency in your system file
then use it in your package as you would with the react utilities:

(defpackage my-new-package
    (:use :cl :valtan.js-clos-utilities))

ISC License