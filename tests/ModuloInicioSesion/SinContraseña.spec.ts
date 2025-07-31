import { test, expect } from '@playwright/test';

test('SinContraseña', async ({ page }) => {
  await page.goto('https://abt.bits.bo/auth/login');
  //await page.getByRole('link', { name: 'Inicio' }).click();
  await page.getByRole('button', { name: 'INGRESAR COMO FUNCIONARIO' }).click();
  await page.getByRole('textbox', { name: 'Correo Electronico o Usuario' }).click();
  await page.getByRole('textbox', { name: 'Correo Electronico o Usuario' }).fill('admin');
  await page.getByText('*Campo requerido').click();
  await page.getByText('VOLVER').click();
});