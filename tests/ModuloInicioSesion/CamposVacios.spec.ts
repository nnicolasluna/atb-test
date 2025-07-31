import { test, expect } from '@playwright/test';

test('CamposVacios', async ({ page }) => {
  await page.goto('https://abt.bits.bo/auth/login');
  await page.getByRole('button', { name: 'INGRESAR COMO FUNCIONARIO' }).click();
  await page.locator('form div').filter({ hasText: 'Correo Electronico o Usuario' }).getByRole('paragraph').click();
  await page.locator('form div').filter({ hasText: 'Contraseña *Campo requerido' }).getByRole('paragraph').click();
});