"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TypedSerializer {
    serialize(obj) {
        const props = Object.getOwnPropertyNames(obj);
        props.filter(prop => prop.startsWith('_')).map(prop => {
            const newName = prop.substring(1, prop.length);
            Object.defineProperty(obj, newName, Object.getOwnPropertyDescriptor(obj, prop));
            delete obj[prop];
        });
    }
}
exports.TypedSerializer = TypedSerializer;
