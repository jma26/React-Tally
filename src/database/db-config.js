import localforage from 'localforage';

export default () => {
  localforage.config({
    driver      : localforage.indexDB, // Force WebSQL; same as using setDriver()
    name        : 'React Tally',
    version     : 1.0,
    size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
    storeName   : 'React Tally', // Should be alphanumeric, with underscores.
    description : 'React Tally - Keep Track of daily customer interactions'
  });
};
