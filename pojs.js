/**
 * Created by darylshy on 2/5/17.
 * The purpose of this program is to illustrate the difference between
 * custom directive's -- scope: true/false
 */
class Controller{
    constructor(scope){
        let vm = this;
        vm.name = "Daryl Shy";
        vm.message = "Hello";
        vm.scope = scope;
    }
    sayHello(){
        return `${this.message} ${this.name}`;
    }
}

let someController = new Controller({});
someController.someDirective = {};
//Output of someDirective
/*
Controller
 message:"Hello"
 name:"Daryl Shy"
 scope:Object
 someDirective:Object <---- The directive is on the controller and doesn't have its own scope
 __proto__:Object
*/

let someOtherDirective =  new Controller({});
/*
someOtherDirective <--- The directive inherits from the controller and has its own scope
 message:"Hello"
 name:"Daryl Shy"
 scope:Object <----own scope
*/
console.log(someController);
console.log(someOtherDirective);


/**
 * In Angular, when we create a new directive, we can choose to set the scope to true or false
 * =============================================================================================
 * It is set to false by default. This is equivalent to someDirective above, where the directive is
 * placed on the controller and does not have its own scope
 *
 * Setting it to true is equivalent to someOtherDirective above. It uses prototypical inheritance
 * and has its own scope.
 */



















