import { openDB } from 'idb';

const initdb = async () =>
  openDB('NASER', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('NASER')) {
        console.log('NASER database already exists');
        return;
      }
      db.createObjectStore('NASER', { keyPath: 'id', autoIncrement: true });
      console.log('NASER database created');
    },
  });


export const putDb = async (content) => {
  console.log('Post to the database');
  
  const NASERDb = await openDB('NASER', 1);

  const tx = NASERDb.transaction('NASER', 'readwrite');

  const store = tx.objectStore('NASER');

  const request = store.put({ id: 1, value: content });

  
  const result = await request;
  console.log('save complete', result);
};


export const getDb = async () => {
  console.log('GET from the database');
  
  const NASERDb = await openDB('NASER', 1);
  
  const tx = NASERDb.transaction('NASER', 'readonly');

    const store = tx.objectStore('NASER');

    const request = store.getAll();

    const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();