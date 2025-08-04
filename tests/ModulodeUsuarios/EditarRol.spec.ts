import { test, expect } from '@playwright/test';

test('EditarRol', async ({ page }) => {
  await page.goto('https://abt.bits.bo/auth/login');
  await page.getByRole('button', { name: 'INGRESAR COMO FUNCIONARIO' }).click();
  await page.getByRole('textbox', { name: 'Correo Electronico o Usuario' }).click();
  await page.getByRole('textbox', { name: 'Correo Electronico o Usuario' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('Admin1234');
  await page.getByRole('button', { name: 'INICIAR SESIÓN' }).click();
  await page.getByRole('link', { name: ' Lista de roles' }).click();
  await page.getByRole('row', { name: '/07/2025 17:29 Evaluador tecnico Oficina: Santa Cruz Sigla: DDSC Tipo:' }).getByRole('button').click();
  await page.getByRole('menuitem', { name: 'Editar' }).locator('a').click();
  await page.locator('#description').click();
  await page.locator('#description').fill('Evaluador Tecnico Editado');
  await page.getByRole('button', { name: 'Siguiente' }).click();
  await page.getByRole('button', { name: 'Guardar' }).click();
  //await page.getByRole('button', { name: 'AM' }).click();
  //await page.getByRole('button', { name: ' Cerrar Sesión' }).click();
});