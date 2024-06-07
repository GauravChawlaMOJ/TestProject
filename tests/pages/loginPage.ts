import { type Page, type Locator, expect } from "@playwright/test";
import {newSwanseaLocalAuthorityUserOne, webAddresses} from "../web-addresses";

export class LogInPage {
    readonly page: Page;
    readonly url: string;
    readonly emailInputLocator: Locator;
    readonly passwordInputLocator: Locator;
    readonly signInButtonLocator: Locator;
    readonly applyLocator: Locator;
    public constructor(page: Page) {
        this.page = page;
        this.url = webAddresses.webAddress;
        this.emailInputLocator = page.getByLabel("Email address");
        this.passwordInputLocator = page.getByLabel("Password");
        this.signInButtonLocator = page.getByRole("button", {name: "Sign in"});
        this.applyLocator = page.getByRole("button", { name: "Apply" });

    }

    async visit() {
        await this.page.goto(this.url);
    }

    async navigateTOCaseDetails(caseNumber: string) {
        await this.page.goto(`${webAddresses.webAdress}case-details/${caseNumber}`);
    }

    async login(email: string, password: string) {
        await this.emailInputLocator.fill(email);
        await this.passwordInputLocator.fill(password);
        await this.signInButtonLocator.click();
    }

    async isSignedIn() {
        await this.applyLocator.click();
        await expect(this.applyLocator).toBeVisible();
    }

    async passwordBlank() {
        expect(await this.page.getByText("Password cannot be blank").isVisible());
    }

    async wrongEmail() {
        expect(await this.page.getByText("Your email address must include @ and . (full stop) characters. It should not include spaces or any of these characters: * ( ) & ! / ;").isVisible());
    }

    async wrongPassword() {
        expect(await this.page.getByText("Check your email address").isVisible());
        expect(await this.page.getByText("Check your password").isVisible());
    }

    async signOut() {
        await this.page.getByText('Sign out').click();
    }
}