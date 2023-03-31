#! /usr/bin/env node

import { CloudflreAccess } from "./access";
import open from "openurl";

const cf = new CloudflreAccess();
cf.events.on("login", (url) => {
    open.open(url)
    console.log(`Please login via URL:\n\n${url}\n\n`)
});
cf.events.on("complete", (token) => console.log(`Login completed! Here your token:\n\n${token}\n\n`))
if(!process.argv[2]) throw new Error("Missing URL")
cf.login(process.argv[2]).then(() => {})