import {Typed, TypedSerializer} from "../src";
import {SubClazz} from "./model/sub-class";

describe(`TypedSerializer.serialize`, () => {
    it(`should return the object version without _ prefix on fields`, () => {
        class SuperTypeClazz {
            _numberField: number;
            stringField: string;
            booleanField: boolean;
            @Typed(SubClazz)
            complexTypeField: SubClazz;

            constructor(obj?: Partial<SuperTypeClazz>) {
                Object.assign(this, obj);
            }
        }
        const superTypeClazz = new SuperTypeClazz({_numberField: 1, stringField: 'test', booleanField: false, complexTypeField: {booleanField: false, numberField: 1, stringField: 'test'}});

        expect(superTypeClazz).toEqual({
            _numberField: 1,
            stringField: 'test',
            booleanField: false,
            _complexTypeField: {
                booleanField: false,
                numberField: 1,
                stringField: 'test'
            }
        });

        expect(TypedSerializer.serialize(superTypeClazz)).toEqual({
            numberField: 1,
            stringField: 'test',
            booleanField: false,
            complexTypeField: {
                booleanField: false,
                numberField: 1,
                stringField: 'test'
            }
        });
    });
});
