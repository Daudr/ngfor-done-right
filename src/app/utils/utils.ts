import { Item } from '../models/item';

export const items: Item[] = [{ _id: 'a2fHdS8P', name: 'Mike' }];

export const makeRandomId = (): string => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength: number = characters.length;
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const makeRandomName = (): string => {
  const names = ['Sara', 'Mattia', 'Giulia', 'Rob', 'Dany', 'Vyserion', 'Bernard', 'Stewie'];

  return names[Math.floor(Math.random() * names.length)];
};

export const itemsLong: Item[] = [{
  _id: makeRandomId(),
  name: makeRandomName()
},
{
  _id: makeRandomId(),
  name: makeRandomName()
},
{
  _id: makeRandomId(),
  name: makeRandomName()
},
{
  _id: makeRandomId(),
  name: makeRandomName()
},
{
  _id: makeRandomId(),
  name: makeRandomName()
},
{
  _id: makeRandomId(),
  name: makeRandomName()
},
{
  _id: makeRandomId(),
  name: makeRandomName()
}
];