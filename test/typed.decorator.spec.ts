import { SubClazz } from './model/sub-class';
import {Typed} from "../src";

describe(`Typed`, () => {
    it(`When SuperTypeClazz.complexTypeField is decorated with @Typed, should type subClass`, () => {
        class SuperTypeClazz {
            numberField: number;
            stringField: string;
            booleanField: boolean;
            @Typed(SubClazz)
            complexTypeField: SubClazz;

            constructor(obj?: Partial<SuperTypeClazz>) {
                Object.assign(this, obj);
            }
        }
        const superTypeClazz = new SuperTypeClazz({complexTypeField: {booleanField: false, numberField: 1, stringField: 'test'}});
        expect(superTypeClazz.complexTypeField instanceof SubClazz).toEqual(true);
    });
});
