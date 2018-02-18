import { Type } from '@angular/core';
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
export default function Typed(model: Type<Object>): (target: Object, property: string) => void;
