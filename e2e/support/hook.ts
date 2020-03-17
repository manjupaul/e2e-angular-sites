import {After, AfterAll, setDefaultTimeout, Status} from 'cucumber';
import { browser } from "protractor";

After(async function (scenario)  {
  if (scenario.result.status === Status.FAILED) {
    const screenShot = await browser.takeScreenshot();  // screenShot is a base-64 encoded PNG
    this.attach(screenShot, "image/png");
  }
});

AfterAll({timeout: 100 * 1000}, async () => {
  await browser.quit();
});

setDefaultTimeout(60 * 1000);
