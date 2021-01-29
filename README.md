<pre>
 _____  _____                    _ 
|_   _||_   _|                  | |
  | |___ | |_   _ _ __   ___  __| |
  | / __|| | | | | '_ \ / _ \/ _` |
  | \__ \| | |_| | |_) |  __/ (_| |
  \_/___/\_/\__, | .__/ \___|\__,_|
             __/ | |               
            |___/|_|               
</pre>
[![codecov](https://codecov.io/gh/meyacine/ts-typed/branch/master/graph/badge.svg)](https://codecov.io/gh/meyacine/ts-typed)
[![Build Status](https://travis-ci.com/meyacine/ts-typed.svg?branch=master)](https://travis-ci.com/meyacine/ts-typed)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fmeyacine%2Fts-typed.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fmeyacine%2Fts-typed?ref=badge_shield)
# Description
Typed is a lighweight library that aims to add typings at runtime.

# How to use it

Install using npm `$ npm install ts-typed --save` or using `$ yarn add ts-typed --save`

- Using `TypedFactory.create(data, Model)` allows you to return data in a given Model structure

- Using `@Typed` property decorator. 
# Good to know
When fetching data from network on typescript project, these data are typed as Object on the Runtime.
Typescript care about compilation, but somtime you need to get typed on the Runtime. 
In order to do that you need to know that the only way is to instantiate typescript class. However the subclasses will not be typed if you dont explicitly instantiate them, that's where `@Typed` is helpfull.

>Notice two recommended things:
>- The use of `Partial` in order get flexible constuctor params.
>- The use of `?` for optional param in order to get also acces the a no params constructor.

# Serialization
Since @Typed rewrites Getter and Setter and renames the property with an underscore `_` prefix. Sometime it can be touchy to get this when sending data to server.
That's why ts-typed provides the `TypedSerializer.serialize` method. You only have to define the toJSON method like the example below :
# Example
```
import { Typed, TypedSerializer } from 'typed';

abstract class AbstractTypedModel{
}

export class AccountModel extends AbstractTypedModel {

  id: string;
  uri: string;
  username: string;
  provider: string;
  avatar: string;

  constructor(parameters?: Partial<AccountModel>) {
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

  constructor(parameters?: Partial<PersonModel>) {
    const {id, lastname, firstname, account} = parameters;
    this.id = id;
    this.lastname = lastname;
    this.firstname = firstname;
    this.account = account;
  }

  whatIsYourName(): void {
    console.log('A girl has no name');
  }

  toJSON(): PersonModel {
     return TypedSerializer.serialize(this);
  }
}
```
![Console capture](typing-console-capture.png)
Using this way, you'll be sure to get the model at runtime, and then call method, get subtypes, etc.


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fmeyacine%2Fts-typed.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fmeyacine%2Fts-typed?ref=badge_large)