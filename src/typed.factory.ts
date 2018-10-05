import { Model } from './typed.model';
/**
 * This factory aims to create a typed object for a given data (Array, or object), and model
 *
 * @author: Maamar Yacine MEDDAH <my.meddah@gmail.com>
 */
export abstract class TypedFactory {
    /**
     * Takes a data, and model. Returns a typed object
     * @param data: any
     * @param model: Type<T>
     * @returns {T | T[]}
     */
    static create<T>(data: any, model: Model<T>): T | T[] {
        if(data === undefined || data === null) {
            return data;
        }

        if (Array.isArray(data)) {
            let response: T[] = [];
            for (let i = 0; i < data.length; i++) {
                response.push(new model(data[i]));
            }
            return response;
        }
        return new model(data);
    }
}
