
import getDriver from "./setupTests"
import {getHostName} from "./setupTests"
import {By} from 'selenium-webdriver'

let driver
beforeAll( async () =>  { 
	driver = await getDriver()
 })

it('should find react' , async () => {
	let info = await driver.findElement(By.id("info"))
	let infoentry = 'cooler entry'
	await info.sendKeys(infoentry)
	expect(await info.getAttribute('value')).toBe(infoentry)
	let pushButtonA = await driver.findElement(By.id("pushButtonA"))
	await pushButtonA.click();
    let display = await driver.findElement(By.id("display"))
     expect(await display.getAttribute('value')).toContain('Enter customer number')
})