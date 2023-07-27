const radios = await page.locator('[type="radio"]');
const count = await radios.count();
for (let i = 0; i < count; i++) {
  await radios.nth(i).click();
}