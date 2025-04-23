---

title: First Steps to Configure the CRM Module in eV4

---

The CRM module in eV4 ERP is a powerful tool for managing contacts, leads, and business opportunities efficiently. However, to fully take advantage of its features, it is crucial to perform the correct initial configuration. In this post, we will guide you step by step in the basic CRM setup to ensure your sales team can work optimally.

## Step 1: Configuring Contact Creation

When a contact is created in the CRM, either manually or through a web form, it is important to configure the required fields and rules so that the process is consistent. The fields that must be completed when creating a contact are:

- **Contact Date**: The date the first contact with the client was made.
- **Contact Time**: The exact time of the initial contact.
- **Business Name**: The name of the client’s company or business.
- **Document**: Legal identification (NIF, CIF, etc.).
- **Legal Name**: The legal name of the company.
- **Contact Person**: The name of the person who made the contact.
- **Phone**: The client's contact number.
- **Email**: The contact’s email address.
- **Contact Source**: Indicates where the lead originated from (web, call, event, etc.).
- **Address**: The client’s physical address.
- **Postal Code**: The postal code corresponding to the client’s address.

This basic information ensures that each new contact is properly identified and ready for future follow-ups.

## Step 2: Configuring Opportunities

It is essential to properly configure the creation of opportunities in the system to ensure proper tracking of the sales process. These configurations ensure that opportunities are created automatically and are correctly visible within the CRM.

### Automatic Opportunity Creation:
- Configure the system so that when a budget is created, an opportunity for follow-up is automatically generated. This allows the sales manager to track the evolution of the budget within the CRM.

### Opportunity Stages:
- **Opportunity Accepted Stage**: This indicates the stage an opportunity is in when a budget has been accepted. This could be "Closed - Won."
- **Opportunity Cancelled Stage**: Defines the stage for opportunities that have been lost or canceled, such as "Closed - Lost."
- **Hide Cancelled Opportunities**: Configure the system to automatically hide canceled opportunities from the management panel, making it easier to view active opportunities.

### Opportunities from Web Contacts:
- **Web Contact Opportunity Stage**: Defines the stage for opportunities coming from web contact forms, such as "New."

### Viewing in the Agenda:
- To manage follow-up flow, you can configure the opportunities to be visible in the CRM’s agenda once they are created. This allows the sales team to manage their time and upcoming events in an organized manner.

### Rental States Visible in the Timeline:
- If you work with rental vehicles, you can configure the following states to be visible in the timeline:
  - Canceled
  - In Progress
  - Issue
  - Pending
  - Received
  - Reserved

## Step 3: Required Fields for Creating Opportunities

For each opportunity created, either manually or through a budget, it is necessary to ensure that the following required fields are collected:

- **Contact**: The client associated with the opportunity.
- **Name**: A descriptive name for the opportunity.
- **Stage**: The current status of the opportunity (e.g., New, Negotiating, Closed - Won).
- **Next Event Date**: The scheduled date for the next contact or action related to the opportunity.
- **Probability**: The estimated percentage chance of successfully closing the opportunity.
- **Project**: The project to which the opportunity is linked, if applicable.
- **Source**: The origin of the lead or opportunity.
- **Notes**: Additional relevant information about the opportunity.

## Step 4: Configuration of Auto-Opportunities from Budgets

One of the most efficient features of the CRM in eV4 is the automatic generation of opportunities from budgets. This configuration allows the system to automatically convert budgets into opportunities, with the following parameters:

- **Opportunity Stage**:
  - When a budget is created, an opportunity is automatically assigned a default stage. This allows continuous tracking from budget creation to the sale closure.

- **Save Budget Data in the "Name" Field**:
  - Configure the system to automatically fill the opportunity name with the data from the generated budget. This makes it easier to identify the opportunity quickly in the system.

- **Use Shortened Item Name**:
  - Instead of using the full name of the item or vehicle, you can configure the CRM to use a shortened or key name, which simplifies the visibility of opportunities in the CRM interface.

## Conclusion

Proper configuration of the eV4 CRM module allows you to efficiently manage leads and opportunities, automating much of the follow-up process and budget generation. Setting up required fields and defining how opportunities are managed from creation to conversion into sales optimizes the sales team’s workflow and ensures that no lead or budget goes untracked.

## Recommended Readings

- [Opportunity Management in eV4 ERP](../primerpresupuesto/pagina4)
- [Generation and Follow-up of Budgets in the eV4 CRM Module](./03_generacion_crm)

