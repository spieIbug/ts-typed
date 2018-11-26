import { Model } from './typed.model';
/**
 * This factory aims to create a typed object for a given data (Array, or object), and model
 *
 * @author: Maamar Yacine MEDDAH <my.meddah@gmail.com>
 */
export declare abstract class TypedFactory {
    /**
     * Takes a data, and model. Returns a typed object
     * @param data: any
     * @param model: Type<T>
     * @returns {T | T[]}
     */
    static create<T>(data: any, model: Model<T>): T | T[];
}
