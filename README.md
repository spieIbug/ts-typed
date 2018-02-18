# Description
Typed is a lighweight library that aims to add typings at runtime.

# How to use it

Install using npm `$ npm install ts-typed --save` or using `$ yarn add ts-typed --save`

- Using TypedFactory.create(data, Model) allows you to return data in a given Model structure

- Using @Typed decorator. Example :
```
import Typed from 'typed';

export class AddressModel extends AbstractTypedModel {
  city: string;
  zip: string;
  street: string;

  constructor(parameters: Partial<AddressModel>) {
    super();
    const {city, zip, street} = parameters;
    this.city = city;
    this.zip = zip;
    this.street = street;
  }
}

export class PersonModel {

  id: string;
  lastname: string;
  firstname: string;

  @Typed(AddressModel)
  address: AddressModel;

  constructor(parameters: Partial<PersonModel>) {
    const {id, lastname, firstname, address} = parameters;
    this.id = id;
    this.lastname = lastname;
    this.firstname = firstname;
    this.address = address; // the address here will not be the param directly, but the typed setter
  }

  doSomething(): void {
    console.log('PersonModel : ', this);
  }
}
```
Using this way, you'll be sure to get the model at runtime, and then call method, get subtypes, etc.