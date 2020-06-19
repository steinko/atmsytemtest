
import getDriver from "./setupTests"
import {getHostName} from "./setupTests"
import {By, Key} from 'selenium-webdriver'

let driver
beforeAll( async () =>  { 
	driver = await getDriver()
	await driver.get(getHostName())
 })

it('should find react' , async () => {
	let driver = getDriver()
	let appLink = await driver.findElement(By.className('App-link'))
	expect(await appLink.getText()).toBe('Learn React')
  
})