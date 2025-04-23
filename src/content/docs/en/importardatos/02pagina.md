---
title: Data Import in eV4 - Dealership
description: Data Import
---

# Data Import Manual in eV4

This manual describes the process of importing data into eV4 using Excel files.

## Types of Importable Data

- **Items**: You can import new items or update information for existing items.
- **Options**: You can import new options or associate existing options with items.

## General Import Process

### 1. Select Data Model
Choose the type of data you wish to import (**items** or **options**).

### 2. Configure the Import

#### - **Excel File**
Upload the Excel file containing the data to be imported.

#### - **Reference Column**
Select the column in the file that contains the unique identifier for each item (by default, the `Reference` column is used).

#### - **Import Option**
- **Add new items and update existing ones**: Allows creating new items and updating information for existing items that match the reference column.
- **Only update existing items**: Only updates information for existing items that match the reference column. New items will not be created.

#### - **Column Mapping**
Map each column in the Excel file to a corresponding field in the eV4 data model.

### 3. Start the Import
Click the **"Import"** button to begin the import process.

## Notifications

### - **Email**
Once the import is complete, eV4 will send an email to the user who initiated the import with a summary of the process.

### - **Event Panel**
The import will also be logged in the **event panel** of eV4, allowing the user to track completed imports.

## Additional Considerations

- **Families**: If the Excel file contains information about families, new families will be added to the general family group. The user will then need to assign them to the relevant main families.
- **Options**: The references for options must already exist in eV4. The import associates the option references with the corresponding items.
- **Prices and Discounts**: eV4 will assign the price listed in the item’s record to the imported options. If the option has discounts or special requirements, these must be manually configured in the corresponding item’s record.

## Additional Resources

- Refer to the system documentation for detailed information on importing each type of data.
- Check the **"Catalog: eV4 Database"** section for more information on managing items in the system.

## Improvements Made

- The text has been restructured for clarity and conciseness.
- Spelling and grammar have been corrected.
- Information on import notifications has been added.
- Clarified considerations about families, options, prices, and discounts.
- Additional resources have been included for easier access to supplementary information.
