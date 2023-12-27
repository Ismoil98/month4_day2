// DATA TYPES ////////////////////////////////////
//  ---- PRIMITVE TYPES --------------------
//  NUMBER -------
// let a = 34;
// let b = -56;
// let c = 3.14;
// console.log(a, typeof a);
// console.log(b, typeof b);
// console.log(c, typeof c);
// console.log(typeof a);

// let a = Infinity;
// console.log(a);

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(NaN, typeof NaN);
// let a = 10_000_000_000;
// console.log(a);

// STRING ---------------/////////////////
// let singleQuote = 'Sultonqul Programmer';
// let doubleQuute = 'Sultonqul Programmer'
// let backTicks = `Sultonqul Programmer is ${singleQuote}`;

// console.log(singleQuote);
// console.log(doubleQuute);
// console.log(backTicks);

// NULL   --------///////////////////////
// let selected = null;
// console.log(typeof selected); // javascript bug

// UNDEFINED --------- //////////////////
// let firstName;
// let firstName = undefined;
// console.log(firstName);

// BOOLEAN -------- /////////////////////
// let isMarried = false;
// let isSingle = true;
// console.log(isMarried);
// console.log(isSingle, typeof isMarried);

// SYMBOL ----------------/////////////////////
// let s1 = Symbol();
// let s2 = Symbol();

// console.log(s1 === s2);
// console.log(s1);

// let a = 2 ** 53 - 1;
// console.log(a);

// let b1 = 1231232312321312321321;
// let b2 = BigInt(234343413213123123);

// console.log(b1, typeof b1);
// console.log(b2, typeof b2);

// COMPLEX --------------------------
// OBJECT ///////////////////
// let person = {
//   firstName: 'Sultonqul',
//   lastName: 'Nortoyloqov',
//   age: 24,
// };
// console.log(person);
// console.log(person.firstName);

// ARITHMETIC OPERATORS (MIX)
// num + str
// console.log(34 + '56');

// num /*- str(num)
// console.log(90 + '5');
// console.log(90 / '5');
// console.log(90 * '5');
// console.log(90 - '5');

// str(num) /*- str(num)
// console.log('90' / '5');
// console.log('90' * '5');
// console.log('90' - '5');

// OTHERS
// console.log('90a' / 5);
// console.log(90 * '5a');
// console.log(90 - 'a5');

// ASSIGNMENT OPERATORS /////////////////
// let a = 34;
// a = a += 1;
// console.log(a);

// let a;
// let b;
// let c;
// a = b = c = 2

// COMPARISON OPERATORS //////////////////////////////////
// console.log(56 == '56');
// console.log(56 === '56');

// console.log(56 != '56');
// console.log(56 !== '56');

// console.log(34 > 35);
// console.log(34 < 33);

// console.log(34 >= 33);
// console.log(34 <= 35);

// SWAPPING //////////////
// let a = 10;
// let b = 20;
// let c;
// c = a;
// a = b;
// b = c;
// console.log(a);
// console.log(b);

// MATH //////////////
// let pi = Math.PI;
// console.log(pi);

// MATH METHODS ///////////////
// let a = 3.9786;
// console.log(Math.round(a));
// console.log(Math.trunc(a));
// console.log(Math.ceil(a));
// console.log(Math.floor(a));

// let a = 0;
// console.log(Math.sign(a));

// console.log(Math.pow(2, 4));

// console.log(Math.sqrt(16));

// console.log(Math.abs(-45));

// console.log(Math.min(23, 45, 67, 12));
// console.log(Math.max(23, 45, 67, 12));

// let a = Math.floor(Math.random() * 1000) + 1;
// console.log(a);

// console.log(Math.floor(Math.random() * (300 - 200)) + 200);
// console.log(Math.floor(Math.random() * (300 - 200 + 1)) + 200);

// DARSDA-OPERATORS
// let a = 10;
// let b = 5;
// let c = 20;
// let y = 1 / Math.pow(a, 2) - Math.pow(b / 10, 2) * Math.sqrt(a + c);
// console.log(y);

// DARSDA-BOOLEAN-1
// let a = 0;
// console.log(a > 0);



// Boolean1 
// let a = +prompt('a = ')
// console.log(a%2==0);


// Boolean2 
// let a = +prompt('a = ')
// let b = +prompt('b = ')
// console.log(a >= 0 || b <= -2);


// Boolean3 
// let a = +prompt('a = ')
// let b = +prompt('b = ')
// let c = +prompt('c = ')
// console.log((a <= b && b <= c) || (a >= b && b >= c) );


// Boolean4
// let a = +prompt('a = ')
// let b = +prompt('b = ')
// console.log((a % 2 == 1) && (b % 2 == 1));


// Boolean5
// let a = +prompt('a = ')
// let b = +prompt('b = ')
// console.log((a % 2 == 1) || (b % 2 == 1));


// Boolean6
// let a = +prompt('a = ')
// let b = +prompt('b = ')
// console.log((a % 2 == 1 && b % 2 == 0) || (a % 2 == 0 && b % 2 == 1));


// Boolean7
// let a = +prompt('a = ')
// let b = +prompt('b = ')
// let c = +prompt('c = ')
// console.log(a>0 && b>0 && c>0);


// Boolean8
// let a = +prompt('a = ')
// let b = +prompt('b = ')
// let c = +prompt('c = ')
// console.log((a>0 && b<=0 && c<=0) || (b>0 && a<=0 && c<=0) || (c>0 && a<=0 && b<=0));


// Boolean9
// let a = +prompt('a = ')
// let b = +prompt('b = ')
// let c = +prompt('c = ')
// console.log((a>0 && b>0 && c<=0) || (a>0 && c>0 && b<=0) || (c>0 && b>0 && c<=0));


// Boolean10
// let a = +prompt('a = ')
// console.log();





// Operators1
// let a = +prompt('a = ')
// let b = +prompt('b = ')
// let y = (-b/2) * (Math.pow(a,2)+ Math.pow(b,2))
// console.log(y);


// Operators2
// let a = +prompt('a = ')
// let b = +prompt('b = ')
// let c = +prompt('c = ')
// let d = +prompt('d = ')
// let y = Math.pow((a+b)/(c+d),2)+Math.pow(b.2);
// console.log(y);


// Operators3
// let a = +prompt('a = ')
// let c = +prompt('c = ')
// let d = +prompt('d = ')
// let y = 2 * (Math.pow(a,d)+(4*Math.pow(c,2)/3));
// console.log(y);


// Operators4
// let a = +prompt('a = ')
// let b = +prompt('b = ')
// let c = +prompt('c = ')
// let d = +prompt('d = ')
// let y = 1/Math.pow(a,2)*Math.pow(b/10,3)*Math.pow(c+d,2);
// console.log(y);


// Operators5
// let a = +prompt('a = ')
// let b = +prompt('b = ')
// let c = +prompt('c = ')
// let d = +prompt('d = ')
// let y = Math.pow((a/b-1)/(c/(d-1)),2);
// console.log(y);


// Operators6
// let a = +prompt('a = ')
// let b = +prompt('b = ')
// let c = +prompt('c = ')
// let d = +prompt('d = ')
// let y = (a+b)/(c+(d/(a+c)));
// console.log(y);


// Operators7
// let a = +prompt('a = ')
// let b = +prompt('b = ')
// let c = +prompt('c = ')
// let y = Math.sqrt(Math.pow(a+b+c,2)-Math.pow(a-b-c,2));
// console.log(y);


// Operators8
// let a = +prompt('a = ')
// let b = +prompt('b = ')
// let c = +prompt('c = ')
// let y = (Math.pow(a,2)+Math.pow(b,2)+Math.pow(c,2))/a*b*c;
// console.log(y);


// Operators9
// let a = +prompt('a = ')
// let b = +prompt('b = ')
// let c = +prompt('c = ')
// let d = +prompt('d = ')
// let y = a*Math.pow(d,3)+b*Math.pow(c,2)/2;
// console.log(y);


// Operators10
// let a = +prompt('a = ')
// let b = +prompt('b = ')
// let c = +prompt('c = ')
// let d = +prompt('d = ')
// let y = Math.abs(a/b-b/c)+Math.pow(a+c,1/4);
// console.log(y);