import { IItem } from 'src/interfaces/item.interface';
import Item from '../models/Item.model';
import { nanoid } from 'nanoid'

export const createItem = async function (itemObj: IItem) {
  try {
    if (!itemObj || !itemObj.name || !itemObj.rating || !itemObj.price || !itemObj.hash) {
      throw new Error('Invalid arguments');
    }
    const {
      name,
      rating,
      price,
      hash
    } = itemObj;

    let item = new Item({
      name,
      rating,
      price,
      hash
    });

    return await item.save();
  } catch (err) {
    return Promise.reject(err);
  }
}

export const updateItemHash = async function (hash: string) {
  try {
    if (!hash) {
      throw new Error('Incomplete arguments');
    }

    let item = await Item.findOne({
      hash
    });
    item.hash = getUniqueHash(item);

    return await item.save();
  } catch (err) {
    return Promise.reject(err);
  }
}

export const readItem = async function (hash: string) {
  try {
    if (!hash) {
      throw new Error('Invalid item id');
    }

    return await Item.findOne({
      hash
    });
  } catch (err) {
    return Promise.reject(err);
  }
}


// Private function
function getUniqueHash(item: IItem) {
  if (!item) return null;
  const currentHash = item.hash;
  let newHash = nanoid(10);

  while (newHash === currentHash) {
    newHash = nanoid(10);
  }
  return newHash;
}