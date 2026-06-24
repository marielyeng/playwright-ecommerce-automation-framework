import { type Page } from '@playwright/test';

export async function cartItems(page: Page, heading: string, qtyText: string, descriptionText: string) {
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.goto('cart.html');

    const cartHeading = page.locator('.title', { hasText: heading });
    const qtyLabel = page.locator('.cart_quantity_label', { hasText: qtyText });
    const descriptionLabel = page.locator('.cart_desc_label', { hasText: descriptionText });

    return {
        cartHeading,
        qtyLabel,
        descriptionLabel
    }
}
