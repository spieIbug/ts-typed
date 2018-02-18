import {TypedFactory} from './typed.factory';
import {Type} from '@angular/core';

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
export default function Typed(model: Type<Object>) {
    return (target: Object, property: string) => {
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
                this['_' + property] = TypedFactory.create(value, model);
            }
        });
    };
}
