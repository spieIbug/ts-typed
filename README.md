# Description
Typed is a lighweight library that aims to add typings at runtime.

# How to use it

Install using npm `$ npm install ts-typed --save` or using `$ yarn add ts-typed --save`

- Using TypedFactory.create(data, Model) allows you to return data in a given Model structure

- Using @Typed decorator. Example :
```
import Typed from 'typed';

abstract class AbstractTypedModel{

}

export class AccountModel extends AbstractTypedModel {

  id: string;
  uri: string;
  username: string;
  provider: string;
  avatar: string;

  constructor(parameters: Partial<AccountModel>) {
    super();
    const {id, uri, username, provider, avatar} = parameters;
    this.id = id;
    this.uri = uri;
    this.username = username;
    this.provider = provider;
    this.avatar = avatar;
  }
}

export class PersonModel {

  id: string;
  lastname: string;
  firstname: string;

  @Typed(AccountModel)
  account: AccountModel;

  constructor(parameters: Partial<PersonModel>) {
    const {id, lastname, firstname, account} = parameters;
    this.id = id;
    this.lastname = lastname;
    this.firstname = firstname;
    this.account = account;
  }

  whatIsYourName(): void {
    console.log('A girl has no name');
  }
}
```
![Console capture](typing-console-capture.png)
Using this way, you'll be sure to get the model at runtime, and then call method, get subtypes, etc.