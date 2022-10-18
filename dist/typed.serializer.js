"use strict";
exports.__esModule = true;
exports.TypedSerializer = void 0;
var TypedSerializer = /** @class */ (function () {
    function TypedSerializer() {
    }
    /**
     * Use this method to remove underscore "_" from prop when serializing Typed Object
     * @param obj
     * @returns {{}&U}
     */
    TypedSerializer.serialize = function (obj) {
        var serialized = Object.assign({}, obj);
        var props = Object.getOwnPropertyNames(serialized);
        props.filter(function (prop) { return prop.startsWith('_'); }).map(function (prop) {
            var newName = prop.substring(1, prop.length);
            Object.defineProperty(serialized, newName, Object.getOwnPropertyDescriptor(serialized, prop));
            delete serialized[prop];
        });
        return serialized;
    };
    return TypedSerializer;
}());
exports.TypedSerializer = TypedSerializer;
