import { TypedFactory } from '../src/typed.factory';
import { SubClazz } from './model/sub-class';

describe(`TypedFactory.create`, () => {

    it(`should return null for null`, () => {
        expect(TypedFactory.create(null, SubClazz)).toBeNull();
    });

    it(`should return null for null`, () => {
        expect(TypedFactory.create(undefined, SubClazz)).toBeUndefined();
    });

    it(`should return a SubClazz`, () => {
        const nonTypedObject = {numberField: 1, stringField: 'string', booleanField: true};
        expect(nonTypedObject instanceof SubClazz).toEqual(false);
        expect(TypedFactory.create(nonTypedObject, SubClazz) instanceof SubClazz).toEqual(true);
    });

    it(`should return a Array<SubClazz>`, () => {
        const nonTypedArray = [{numberField: 1, stringField: 'string', booleanField: true}, {numberField: 2, stringField: 'string2', booleanField: false}];
        expect(nonTypedArray instanceof Array).toEqual(true);

        const hasAtLeastOneObjectTyped = nonTypedArray.reduce((prev, typedObject: SubClazz) => prev || typedObject instanceof SubClazz, false);
        expect(hasAtLeastOneObjectTyped).toEqual(false);

        const typedArray = TypedFactory.create(nonTypedArray, SubClazz) as Array<SubClazz>;
        const isAllArrayObjectsTyped = typedArray.reduce((prev, typedObject: SubClazz) => prev && typedObject instanceof SubClazz, true);
        expect(isAllArrayObjectsTyped).toEqual(true);
    });

});
