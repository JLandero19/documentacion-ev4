---

title: Stock and Item Dependency Management in eV4

---

In eV4, the "Stock Dependencies" feature allows for efficient inventory management, especially when dealing with a generic product sold under different references or names. When a sale is made for any of these items, the system will automatically deduct the same quantity from the generic product, helping to maintain precise inventory control.

## How does stock dependency management work?

1. **Configuration of the Main Item**: The main item is the generic product that will be deducted when any of its variants are sold. For example, in the attached image, there is a generic product of "T-Shirts."

2. **Definition of Dependent Items**: These are the specific products sold under various references. Each of these items is configured to deduct stock from the main item when sold. In the provided example, the "T-Shirts" come in different colors (Blue, Pink, Green, Orange, Yellow, etc.).

3. **Configuration in eV4**:
   - **Create the Main Item**: Register the generic product in the system.
   - **Configure the Dependencies**: In the "Stock Dependencies" section, specify the product variants that will deduct stock from the main item. This is shown in the image where different references of color T-shirts are configured to deduct stock from their respective generic variants.

## Practical Example:

Suppose we have the following references configured:

   - **PL001-1AM** - Buy T-Shirts (Yellow)
     - Dependencies: PL001-3AM, PL001-4AM, PL001-5AM, PL001-6AM (Different types of party T-shirts in yellow)

   - **PL001-1AZ** - Buy T-Shirts (Blue)
     - Dependencies: PL001-3AZ, PL001-4AZ, PL001-5AZ, PL001-6AZ (Different types of party T-shirts in blue)

When a sale of "PL001-1AM" is made, the system will automatically deduct the corresponding quantities from "PL001-3AM," "PL001-4AM," "PL001-5AM," and "PL001-6AM," ensuring that the inventory accurately reflects the stock levels.

## Steps to Configure Stock Dependencies in eV4:

1. **Access the Inventory Module**:
   - Navigate to the inventory management section in eV4.

2. **Register the Main Item**:
   - Create and save the generic main item in the system.

3. **Define the Dependencies**:
   - In the "Stock Dependencies" option, add the specific references that will depend on the main item.
   - Save the changes and verify that all dependencies are correctly configured.

## Benefits of Stock Dependencies:

   - **Inventory Accuracy**: Ensures that the stock of generic products is updated correctly when any variant is sold.
   - **Easy Management**: Simplifies the management of multiple references of the same product.
   - **Sales Optimization**: Provides better control of stock, preventing the sale of out-of-stock products.

## Conclusion

The "Stock Dependencies" feature in eV4 is a powerful tool for managing inventory with precision. Properly configuring dependencies ensures that stock control remains accurate, optimizing both internal management and the customer experience.

For more details on how to implement this feature in eV4, refer to the system documentation or contact eV4 technical support.
