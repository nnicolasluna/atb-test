import { test, expect } from '@playwright/test';

test('AmbosCamposIncorrectos', async ({ page }) => {
  await page.goto('https://abt.bits.bo/auth/login');
  await page.getByRole('button', { name: 'INGRESAR COMO FUNCIONARIO' }).click();
  await page.getByRole('textbox', { name: 'Correo Electronico o Usuario' }).click();
  await page.getByRole('textbox', { name: 'Correo Electronico o Usuario' }).fill('AAmdind');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('123456789sdsfsf');
  await page.getByRole('button', { name: 'INICIAR SESIÓN' }).click();
  await page.locator('p-messages').getByText('Usuario o contraseña').click();
  await page.getByText('VOLVER').click();
});