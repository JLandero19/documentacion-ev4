---

title: Creating a New Vehicle with Pack

---

This manual describes the process of creating a new vehicle in the system and including configurable optional packs.

## Steps

### 1. Creating the New Vehicle

- Click the **"New"** button to create a new vehicle record.
- Complete the mandatory fields in the vehicle form, including vehicle information and owner details.

### 2. Assigning Families

- It is important to correctly associate the vehicle with the appropriate families.
- Please refer to the section **"Configuring Families for Articles in Dealership Mode"** for more information.

### 3. Prices

- **Cost Price:** Enter the vehicle’s purchase price without taxes.
- **Base Price:** Indicate the vehicle's base price excluding taxes.

### 4. Creating the Optional Pack

#### Pack Configuration

- Create a new item as if it were a regular product.
- Assign the name **"Optional Pack"** or something similar to describe the contents of the pack.
- Set the pack price to zero (`€0.00`).

#### Adding Options to the Pack

- In the optional pack form, include all the optional items that make up the pack.
- Refer to the provided image to see an example of how to add options.

#### Discounts

- (Optional) Apply a discount to the optional pack. You can choose between two methods:
  - **Percentage Discount:** Set a percentage discount to be automatically applied to the pack's price.
  - **Fixed Amount:** Specify a fixed amount to be discounted from the pack's price.

#### Sale Price

- Define the final sale price of the pack. This price can be the original pack price minus any discount applied (if applicable).

### 5. Associating the Optional Pack to the Vehicle

- Open the newly created vehicle form.
- Go to the **"Optional"** tab.
- Select the optional pack you wish to associate with the vehicle.

## Prices

### Price at which it will be marketed

- **Option 1:** Set the price at which the optional pack will be marketed to the customer. This price can be the same as the sale price of the pack or a lower price.
  - Example: If the pack's sale price is `€5,000` and you wish to offer it to the customer for `€1,000`, enter `€1,000` in this field.
- **Option 2:** Leave this field blank. In this case, the system will automatically apply the discount configured in the optional pack’s form.
  - Example: If the pack has a sale price of `€5,000` and a `100%` discount is applied in the pack form, the system will display a price of `€0.00` for the pack in the vehicle form.

## Additional Considerations

- The system will show the final price of the pack in the vehicle's quote, considering the sale price of the pack and any discounts applied.
- You can create different optional packs with various price and discount configurations to offer customers a wider range of options.

## Additional Resources

- Refer to the section **"Configuring Families for Articles in Dealership Mode"** for more information on assigning families to vehicles.
- Review the system documentation for detailed information on managing options and discounts.

