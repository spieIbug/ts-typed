"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typed_factory_1 = require("./typed.factory");
/**
 * @Typed is a property decorator, takes a model as param. generates typed getter and setter
 *
 * How to use ?
 * @Typed(CustomModel)
 * customProperty: CustomModel;
 *
 *
 * @param model
 * @returns {(target:Object, property:string)=>undefined}
 * @constructor
 *
 * @author: Maamar Yacine MEDDAH <my.meddah@gmail.com>
 */
function Typed(model) {
    return (target, property) => {
        // define another attribute (private) in order to avoid stackoverflow
        Object.defineProperty(target, '_' + property, {
            writable: true,
            value: target[property]
        });
        // define getter and setter, for the property that point on the private attribute freshly defined
        Object.defineProperty(target, property, {
            get: function () {
                return this['_' + property];
            },
            set: function (value) {
                this['_' + property] = typed_factory_1.TypedFactory.create(value, model);
            }
        });
    };
}
exports.default = Typed;
