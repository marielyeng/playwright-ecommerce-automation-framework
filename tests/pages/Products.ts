import { type Page} from '@playwright/test';

export async function addProductToCart(page: Page, index: number) {
    console.log('Products.ts loaded');
   
    const itemWrapper = page.locator('.inventory_item_description').nth(index);
    const count = await page.locator('.inventory_item_description').count();
    console.log(`Found ${count} items, requested index ${index}`);

    const productName = await itemWrapper.locator('[data-test="inventory-item-name"]').first().textContent();
    const productDescription = await itemWrapper.locator('[data-test="inventory-item-desc"]').first().textContent();
    const productPrice = await itemWrapper.locator('[data-test="inventory-item-price"]').first().textContent();

    const addToCartButton = itemWrapper.getByRole('button', { name: 'Add to cart' });
    await addToCartButton.click();

    return {
        name: productName,
        description: productDescription,
        price: Number(productPrice?.substring(1)),
    };

}