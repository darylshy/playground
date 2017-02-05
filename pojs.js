/**
 * Created by darylshy on 2/5/17.
 * The purpose of this program is to illustrate the difference between
 * controller scope and directive scope
 */

//This is basically how controller-scope in angular works
//Controller scopes are basically closures. They are NOT prototypical inheritance.
//Nested controllers, by default, have access to the outer closure scope through javascript scope-chain. This is just plain old javascript..Nothing new or special...
function globalScope() {
    let scope = {};
    scope.globalSettings = "Some global settings";
    return function parentScope() {
         scope.parentScope = {};
         scope.parentScope.parentSettings = "Some parent settings";
        return function childScope() {
            scope.parentScope.childScope = {};
            scope.parentScope.childScope.someValue = "Some Value from Child Scope";
            return scope;
        };
    };
};



