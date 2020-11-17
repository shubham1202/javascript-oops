/***********
 * Everytime you create a function
 * js creates two objects one is
 * Function object,
 * Prototype object
 ***********/

 /**********
  * The function has a property
  * called prototype, which refers to the prototype object using which we
  * can access the prototype object
  **********/

  function foo() {};

  console.log(foo.prototype);


  /*****
   * When an object is created using 
   * constructor mode(new keyword) it
   * contains __proto__ property that refers
   * to the prototype object
   */

   /***Refer lec 12 prototype.png */


   /*** Lecture 13 ***/
   let myObj = new foo();
   
   foo.prototype.test = 'This is an test property'; // kind of global property for all objs created from foo()
   console.log(myObj.__proto__.test);

   foo.prototype === myObj.__proto__; // true

   /***Property lookup in objects ****/

   /*** 
    * When we try to access any property from object 
    * js engine first sees the prop. exists in main obj, if not 
    * then it looks in obj.__proto__  
    ***/
   
   myObj.__proto__.hello = 'This is proto prp.'
   console.log(myObj.hello); // This is proto prp.
   myObj.hello = 10;
   console.log(myObj.hello); //10
   