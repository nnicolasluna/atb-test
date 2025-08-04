import { test, expect } from '@playwright/test';

test('ConfiguracionUsuarioActivo', async ({ page }) => {
  await page.goto('https://abt.bits.bo/auth/login');
await page.getByRole('button', { name: 'INGRESAR COMO FUNCIONARIO' }).click();
await page.getByRole('textbox', { name: 'Correo Electronico o Usuario' }).click();
await page.getByRole('textbox', { name: 'Correo Electronico o Usuario' }).fill('admin');
await page.getByRole('textbox', { name: 'Contraseña' }).click();
await page.getByRole('textbox', { name: 'Contraseña' }).fill('Admin1234');
await page.getByRole('button', { name: 'INICIAR SESIÓN' }).click();
await page.getByText('Direción General de Gestión de Manejo de Bosques y Tierras').click();
await page.getByRole('row', { name: 'Cristhian Ruddy Ramirez' }).getByRole('button').click();
await page.getByRole('menuitem', { name: 'Configurar Usuario' }).locator('a').click();
await page.getByRole('button', { name: 'Siguiente' }).click();
await page.getByRole('button', { name: 'Anterior' }).click();
await page.getByRole('button', { name: 'Close' }).click();
await page.getByText('Logs de Sincronización').click();
await page.getByRole('dialog').getByRole('button').click();
await page.getByRole('button', { name: 'AM' }).click();
await page.getByRole('button', { name: ' Cerrar Sesión' }).click();
});