1. values added: 20
2. final result: 20
3. Should not use var because variables can leak out of loops when using it. This can also lead to naming and scoping issues. 
4. values added: 20
5. ReferenceError: result is not defined. This is because let is block scoped so result does not exist in the outer scope. 
6. TypeError: Assignment to constant variable. Cannot reassign to a const in JS like in line 7 so this error gets thrown. 
7. ReferenceError: result is not defined. Result is outside the scope since 
