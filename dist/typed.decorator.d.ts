import { Model } from './typed.model';
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
export default function Typed(model: Model<Object>): (target: Object, property: string) => void;
