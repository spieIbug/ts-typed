"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This factory aims to create a typed object for a given data (Array, or object), and model
 *
 * @author: Maamar Yacine MEDDAH <my.meddah@gmail.com>
 */
var TypedFactory = /** @class */ (function () {
    function TypedFactory() {
    }
    /**
     * Takes a data, and model. Returns a typed object
     * @param data: any
     * @param model: Type<T>
     * @returns {T | T[]}
     */
    TypedFactory.create = function (data, model) {
        if (Array.isArray(data)) {
            var response = [];
            for (var i = 0; i < data.length; i++) {
                response.push(new model(data[i]));
            }
            return response;
        }
        return new model(data);
    };
    return TypedFactory;
}());
exports.TypedFactory = TypedFactory;
