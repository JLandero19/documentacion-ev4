---

title: Stock Management and Dependencies in eV4  
description: The Stock Dependencies functionality in EV4 is a powerful tool for managing inventories of generic products sold under different references or names. Below, we explain in detail how this feature works and provide an example based on the configuration shown in the image.  
---

#### Stock Dependencies Functionality in eV4

The stock dependencies functionality in eV4 is a powerful tool for managing inventories of generic products sold under different references or names. Below, we explain in detail how this feature works and provide an example based on the configuration shown in the image.

#### Description of the Functionality

Stock dependencies allow the system to automatically deduct the corresponding quantity of a generic product from the inventory when a specific product is sold. This is especially useful when you have a base product marketed in several variations or under different names and reference codes.

#### Practical Example

Let’s imagine you have a series of t-shirts in different colors. Each color has its own reference, but all depend on the general stock of "T-shirts."

In the image, we see how an item with its multiple dependencies is configured:

- **Main Item**: CM001 - T-shirt Purchase
    - **Attribute**: Color
        - Blue (CM001-1AZ)
        - Pink (CM001-2RZ)
        - Green (CM001-3V)
        - Orange (CM001-4N)
        - Yellow (CM001-5AM)
        - Red (CM001-6R)
        - Purple (CM001-7M)
        - White (CM001-8B)
        - Mixed (CM001-V)

Each of these colors has additional dependencies for related products, for example:

- **CM001-1AM** (Yellow) has dependencies on:
    - CM001-1A1: Cotton T-shirts (Yellow)
    - CM001-1A2: Sports T-shirts (Yellow)
    - CM001-1A3: Polyester T-shirts (Yellow)

#### How to Configure Stock Dependencies

1. **Create the Generic Product**: This will be the base product from which all other variants will depend.
2. **Configure the Attributes**: Define the attributes that will vary, such as the color in this case.
3. **Set Dependencies**: In the system, stock dependencies should be configured for each variant of the product. This involves linking each specific reference to the related products that will share the stock.

#### Benefits

- **Automation**: The system automatically adjusts the inventory of the generic product each time a variant is sold.
- **Simplification**: It streamlines inventory management and reduces the risk of human errors.
- **Flexibility**: It allows greater flexibility in marketing products, offering multiple variants without the need to manage separate inventories.

#### Visual Example

In the provided image, we can see how dependencies have been set up for t-shirts of different colors. Each color has its reference code and depends on the general "T-shirt" inventory.

#### Frequently Asked Questions

###### Q1: How can I optimize stock dependency configuration for products with multiple variants?

To optimize the configuration of stock dependencies, it's crucial to:

- **Group similar variants**: Group variants under the same generic product whenever possible.
- **Automate processes**: Use tools that allow automatic inventory updates to avoid human errors.
- **Sales analysis**: Analyze sales to adjust the stock of generic products according to the demand for their variants.
- **System integration**: Integrate this functionality with other enterprise management systems for full visibility into operations.

##### Q2: What challenges might I face when implementing stock dependency functionality in a company with a highly diversified inventory?

The main challenges may include:

- **Complex initial configuration**: Setting up all the dependencies can be time-consuming and prone to errors if not done meticulously.
- **Ongoing maintenance**: It requires constant monitoring to ensure dependencies are up to date, especially if new products or variants are frequently introduced.
- **Staff training**: Staff must be adequately trained to understand and properly use this functionality.
- **Integration with existing systems**: Ensuring this functionality integrates smoothly with current inventory management systems.

##### Q3: What additional benefits could stock dependency functionality offer to an expanding company?

For an expanding company, the additional benefits include:

- **Scalability**: The ability to manage growing inventories more efficiently, allowing the company to expand without proportionally increasing resources dedicated to inventory management.
- **Improved customer satisfaction**: Maintaining more accurate inventory and avoiding stockouts, which improves the customer experience.
- **Advanced analytics**: Facilitates data collection for a more detailed analysis of the performance of different products and variants.
- **Cost reduction**: Reduces operational costs related to inventory management and minimizes losses from overstocking or stock shortages.
