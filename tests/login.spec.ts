import { test, expect } from '@playwright/test';
import {LogInPage} from './pages/loginPage';
import {newSwanseaLocalAuthorityUserOne} from "./web-addresses";

test.describe('todo tests', () => {
    let loginPage: LogInPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LogInPage(page);
    });

    test('Successful sign on', async ({ page }) => {

        await loginPage.visit();
        await loginPage.login(newSwanseaLocalAuthorityUserOne.email, newSwanseaLocalAuthorityUserOne.password);
        await loginPage.isSignedIn();
    });

    test('Unsuccessful sign on - password blank', async ({ page }) => {
        await loginPage.visit();
        await loginPage.login(newSwanseaLocalAuthorityUserOne.email, '');
        await loginPage.passwordBlank();
    });

    test('Unsuccessful sign on - wrong email', async ({ page }) => {
        await loginPage.visit();
        await loginPage.login('newSwanseaLocalAuthorityUserOne.email', newSwanseaLocalAuthorityUserOne.password);
        await loginPage.wrongEmail();
    });

    test('Unsuccessful sign on - wrong password', async ({ page }) => {
        await loginPage.visit();
        await loginPage.login(newSwanseaLocalAuthorityUserOne.email, 'wrong password');
        await loginPage.wrongPassword();
    });
});

