# IndexedDB

:::tip
check for Browser suport
:::

```js
if (!window.indexedDB) {
    console.log("Your browser doesn't support indexedDB.");
}
```

:::tip
create a IndexedDB connection on particular database
:::

```js

const main = () => {

    // initializing database
    let DB;

    // Let us open our database
    let IDB = indexedDB.open("MyTestDatabase", 3);

    // error during connection to database
    IDB.onerror = (e) => {
        console.error(e.target.errorCode)
    }

    // on connection success
    IDB.onsuccess = (e) => {
        DB = e.target.result;
    }

    // DB common error handler
    DB.onerror = (e) => {
        console.error("Database error:" + e.target.errorCode);
    }
}



```






