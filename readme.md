tion.
﻿## react-tender-app
web app that displays the 10 latest available tenders. The application should also allow the businessman to search for available tenders through their title and description.



>  This website is a fully responsive react web app and it is also using the [React Router](https://reacttraining.com/react-router/) to its navigation. This webapp is also using [ the Tenders Guru API]([https://tenders.guru/hu/api],).
Please do note that the the Tenders Guru API has some errors. Their data is not in a right formart.

I had to pull the whole day then cleen it and place it on json server. Spent a lot of time doing that.



> Aproach
  * build a fully responsive website.
  * use [React Router](https://reacttraining.com/react-router/).
  * query data from a third party library using ` useEffect hook` with the `async` and `await` promise.
  * use  states around the application without any redux, just hooks.
  
  
  > References:
  * [Cleaning of data](https://www.npmjs.com/package/json-server) 
  * [useEffect hooks](https://reactjs.org/docs/hooks-effect.html)
  * [Async and Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
  * [Javascript Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  * [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

## Installation

Download the repo with:

```bash
$ git clone https://github.com/SOTASHE/react-tender-app
```

After downloading the repo you can cd into the `react-tender-app` and then open up your console and type 

```bash
$ npm install
```

before  running the application with the live-server first start the json live server with following command. make sure you're on the root fold with file name 'data;

```bash
$ npx json-server --watch data/db.json --port 8000
```

now you can run the follpowing to start the frontend:
```bash
$ cd react-tender-app
$ npm start
```

All the assets are already included so you can run the application and it will work. 


## Author

[Snaye](https://github.com/SOTASHE).

## License 

Copyright © 2022, [Snaye](https://github.com/SOTASHE).
Released under the [MIT License](LICENSE).
# react-tender-app