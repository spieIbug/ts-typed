export interface Model<T> extends Function {
    new (...args: any[]): T;
}
