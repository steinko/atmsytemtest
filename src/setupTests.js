// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
require('dotenv').config()

let chrome = require('selenium-webdriver/chrome');
let {Builder} = require('selenium-webdriver');

let hostName 
let driver

beforeAll(async ()=>{  
   hostName = process.env.URL
   jest.setTimeout(100000)
    driver = await new Builder()
     .forBrowser('chrome')
     .setChromeOptions(new chrome.Options().headless())
     .build();
    await driver.navigate().to(hostName)
 })

afterAll(async ()=>{ 
   await driver.quit()
})

it('should do nothing', ()=> { })

export default function getDriver() { 
    return driver}
    