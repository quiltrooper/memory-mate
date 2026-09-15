export async function unlock(page) {
  const field=page.getByRole('textbox',{name:'PIN',exact:true});
  await field.waitFor();
  await field.click();await field.pressSequentially('4782',{delay:30});await field.press('Tab');
  const confirm=page.getByRole('textbox',{name:'Confirm PIN',exact:true});
  if(await confirm.count()){await confirm.click();await confirm.pressSequentially('4782',{delay:30});await confirm.press('Tab');await page.getByRole('button',{name:'Set PIN and open'}).click();}
  else await page.getByRole('button',{name:'Unlock',exact:true}).click();
  await page.getByRole('button',{name:'Refresh records',exact:true}).waitFor();
}
