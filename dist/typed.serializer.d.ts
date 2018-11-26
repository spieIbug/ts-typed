export declare abstract class TypedSerializer {
    /**
     * Use this method to remove underscore "_" from prop when serializing Typed Object
     * @param obj
     * @returns {{}&U}
     */
    serialize(obj: any): any;
}
