export class SubClazz {
    numberField: number;
    stringField: string;
    booleanField: boolean;

    constructor(obj?: Partial<SubClazz>) {
        Object.assign(this, obj);
    }
}
