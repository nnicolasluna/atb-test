import { test, expect } from '@playwright/test';

test('PruebadeFechasdeActividades', async ({ page }) => {
  await page.goto('https://abt.bits.bo/auth/login');
  await page.getByRole('button', { name: 'INGRESAR COMO FUNCIONARIO' }).click();
  await page.getByRole('textbox', { name: 'Correo Electronico o Usuario' }).click();
  await page.getByRole('textbox', { name: 'Correo Electronico o Usuario' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('Admin1234');
  await page.getByRole('button', { name: 'INICIAR SESIÓN' }).click();
  await page.getByRole('link', { name: ' Registro de Actividades del' }).click();
  await page.getByRole('button', { name: 'Choose Date' }).click();
  //await page.getByRole('row', { name: '28 29 30 31 1 2' }).getByLabel('28').click();
  //await page.getByRole('row', { name: '28 29 30 31 1 2' }).getByLabel('31').click();
  await page.getByText('1', { exact: true }).first().click();
  await page.getByText('6', { exact: true }).first().click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Descargar xlsx' }).click();
  const download = await downloadPromise;
  await page.getByRole('button', { name: 'AM' }).click();
  await page.getByRole('button', { name: ' Cerrar Sesión' }).click();
});