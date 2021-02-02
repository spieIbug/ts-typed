"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypedSerializer = void 0;
class TypedSerializer {
    /**
     * Use this method to remove underscore "_" from prop when serializing Typed Object
     * @param obj
     * @returns {{}&U}
     */
    static serialize(obj) {
        const serialized = Object.assign({}, obj);
        const props = Object.getOwnPropertyNames(serialized);
        props.filter(prop => prop.startsWith('_')).map(prop => {
            const newName = prop.substring(1, prop.length);
            Object.defineProperty(serialized, newName, Object.getOwnPropertyDescriptor(serialized, prop));
            delete serialized[prop];
        });
        return serialized;
    }
}
exports.TypedSerializer = TypedSerializer;
