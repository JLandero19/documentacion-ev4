---

title: Assignment of Optional Items Based on Product/Vehicle Range

---

#### Module: Catalog

In the eV4 ERP system, the "Assignment of Optional Items Based on Range" option provides greater control over assigning optional items to products or vehicles. With this feature, it is only possible to assign options that belong to the same range as the main item or vehicle and that have been previously cataloged as optional. This ensures efficient management and prevents errors when linking incorrect options to items.

This tutorial will guide you step by step on how to configure this feature and how to assign the necessary parameters when creating an option.

## Step 1: Activate the Option for Assigning Options Based on Range in the Catalog Settings

1. **Access the Catalog**:
   - Go to the **Catalog** module from the main menu in eV4 ERP.
   - Select the **Configuration** or **Catalog Settings** option.

2. **Activate the Option for Range-Based Assignment**:
   - In the catalog settings, look for the option regarding the **Assignment of Optional Items Based on Range**.
   - Enable this option. This will restrict the assignment of options to those that belong to the same range as the main item or vehicle.

## Step 2: Create a New Optional Item

1. **Add a New Option**:
   - In the **Catalog** module, select the **New** option to create a new product/optional item.
   - Complete the form for the new option with the relevant details, such as name, description, and other necessary information.

2. **Assign Management Group**:
   - In the **Management Group** field, select "Optional Items." This assignment is crucial as it allows the system to identify the item as an optional, distinguishing it from other types of products or vehicles.

3. **Assign Range**:
   - In the **Range** field, select the range to which the option belongs. This step is important because it limits the use of the option to only those items or vehicles that belong to the same range.
   - Ensure that the option is correctly assigned to the range, as this will determine whether it can be selected later when configuring vehicles or items.

## Step 3: Assign Optional Items to Products or Vehicles

1. **Access the Product or Vehicle Record**:
   - From the **Catalog**, select the product or vehicle to which you want to assign the optional items.

2. **Open the Optional Items Tab**:
   - Within the product or vehicle record, go to the **Optional Items** tab.
   - Here, the system will only allow you to select options that belong to the same range as the main item or vehicle, ensuring that the selected options are compatible.

3. **Select the Option**:
   - Use the search function or advanced filter to find the option you want to add.
   - Only the options that belong to the same range will be available for assignment, following the control set up in the previous steps.

4. **Save the Changes**:
   - Once you have assigned the necessary options, make sure to save the changes in the product or vehicle record.

## Step 4: Verify the Assignment

1. **Check the Correct Assignment**:
   - Verify that the assigned options appear correctly in the Optional Items tab of the product or vehicle.
   - Ensure that there are no options assigned that belong to different ranges.

## Conclusion

This process provides strict control over which options can be assigned to products or vehicles, preventing the mixing of incompatible options. Using ranges for optional items ensures that assignments are consistent and reflect the reality of the product catalog.

## Recommended Readings

   - [Configuration of Families and Management Groups in the Catalog.] (../)
   - [Creation and Management of Optional Packs in eV4 ERP​​.] (../)
