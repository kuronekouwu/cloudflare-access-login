# Cloudflare access login
A simple login cloudflare access and store token into `.cloudflared` with using NodeJS

## ⚠️ Note
I'm not cloudflared developer. I use code reference from repo [Cloudflared](https://github.com/cloudflare/cloudflared). The reason why I made this. Because I use from porject [FishTerm](https://github.com/mrwan200/fishterm).
# Install
```
npm install https://github.com/mrwan200/cloudflare-access-login

or 

yarn add https://github.com/mrwan200/cloudflare-access-login
```


## How to use 
### 1. With CIL
```
cflogin <URL_ACCESS>
```

### 2. With code
```js
import { CloudflreAccess } from "./access";

const cf = new CloudflreAccess();
cf.events.on("login", (url) => {
    // Will return URL for authentication
}));
cf.events.on("complete", (token) => {
    // Will retuen token for access tunnel, etc.
})
cf.login('<ACCESS_URL>').then(() => {})
```

## Enjoy!
![IMG](https://media.tenor.com/tOQwllZ8ixwAAAAd/nahida-genshin-impact.gif)