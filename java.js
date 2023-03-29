// function add(){
//     a = 4;
//     b = 3;
//     console.log(a+b)
// }
// add()

// var x = 21;
//         var girl = function () {
//         console.log(x);
//         var x = 20;
//         };
//         girl ()

// var x = 21;
//         girl ();
//         console.log(x)
//         function girl() {
//             console.log(x);
//             var x = 20;
//         }

        function factorial (n) {
            if (n > 1) {
              return n * factorial(n-1);
            }
            return 1;
          }
          console.log(factorial(5)); 