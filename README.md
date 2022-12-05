This is a simple Common Lisp lib for Valtan that provides some CLOS methods to semi-automatically wrap JS objects with CLOS versions to hide FFI a bit better.

To use it: 
1. Clone js-clos-utilities to your valtan library folder.
    * By default this is in ~/.roswell/local-projects/cxxxr/valtan/library/

2. Include "js-clos-utilities" as a dependency in your system file
    * ex. 
        ```
        (defsystem "my-new-valtan-system"
            :serial t
            :components ((:file "packages")
                         (:file "main"))
            :depends-on ("react-utilities" "js-clos-utilities"))
        ```
3. Use it in your package as you would the react utilities:
    * ex.  
        ```
        (defpackage my-new-package
            (:use :cl :valtan.react-utilities :valtan.js-clos-utilities))
        ```

ISC License
