export abstract class TypedSerializer {
    serialize(obj: any): any {
        const props: string[] = Object.getOwnPropertyNames(obj);

        props.filter(prop => prop.startsWith('_')).map(prop => {
            const newName = prop.substring(1, prop.length);
            Object.defineProperty(obj, newName, Object.getOwnPropertyDescriptor(obj, prop));
            delete obj[prop];
        })
    }
}
