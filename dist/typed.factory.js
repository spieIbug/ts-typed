"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This factory aims to create a typed object for a given data (Array, or object), and model
 *
 * @author: Maamar Yacine MEDDAH <my.meddah@gmail.com>
 */
class TypedFactory {
    /**
     * Takes a data, and model. Returns a typed object
     * @param data: any
     * @param model: Type<T>
     * @returns {T | T[]}
     */
    static create(data, model) {
        if (data === undefined || data === null) {
            return data;
        }
        if (Array.isArray(data)) {
            let response = [];
            for (let i = 0; i < data.length; i++) {
                response.push(new model(data[i]));
            }
            return response;
        }
        return new model(data);
    }
}
exports.TypedFactory = TypedFactory;
