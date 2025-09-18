import { test, expect } from '@playwright/test';

test('NuevoRol', async ({ page }) => {
  const randomrol = "rol" + Date.now();
  await page.goto('https://abt.bits.bo/auth/login');
  await page.getByRole('button', { name: 'INGRESAR COMO FUNCIONARIO' }).click();
  await page.getByRole('textbox', { name: 'Correo Electronico o Usuario' }).click();
  await page.getByRole('textbox', { name: 'Correo Electronico o Usuario' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('Admin1234');
  await page.getByRole('button', { name: 'INICIAR SESIÓN' }).click();
  await page.getByRole('link', { name: ' Lista de roles' }).click();
  await page.getByRole('button', { name: '+ Nuevo rol' }).click();
  await page.getByRole('textbox', { name: 'Nombre' }).click();
  await page.getByRole('textbox', { name: 'Nombre' }).fill(randomrol);
  await page.getByRole('textbox', { name: 'Código' }).click();
  await page.locator('#description').click();
  await page.locator('#description').fill('Este es un Rol prueba');
  await page.getByRole('button', { name: 'Siguiente' }).click();
  await page.getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByText('Departamental').click();
  await page.locator('p-radiobutton').filter({ hasText: 'La Paz' }).locator('div').nth(2).click();
  const saveButton = page.locator('button.p-button-success:has-text("Guardar")');
  await expect(saveButton).toBeEnabled();
});