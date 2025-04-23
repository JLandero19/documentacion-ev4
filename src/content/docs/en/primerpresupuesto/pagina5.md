---

title: First Steps to Configure the CRM Module in eV4  
description: CRM Configuration  

---

# Basic Configuration of the CRM Module in eV4 ERP

The **eV4 CRM module** is a powerful tool for managing contacts, leads, and business opportunities efficiently. However, to make the most of its features, it's crucial to perform proper initial configuration. In this post, we will guide you step by step in configuring the CRM so your sales team can work optimally.

## Step 1: Contact Creation Configuration
When a contact is generated in the CRM, either manually or via a web form, it’s important to configure the required fields and rules to ensure the process is consistent. These are the fields that must be completed when creating a contact:

- **Contact Date:** Date the first contact with the customer was made.
- **Contact Time:** Exact time of the initial contact.
- **Commercial Name:** Name of the customer’s company or business.
- **Document:** Legal identification (NIF, CIF, etc.).
- **Corporate Name:** Legal name of the company.
- **Contact Person:** Name of the person who was contacted.
- **Phone:** Customer’s contact number.
- **Email:** Contact’s email address.
- **Contact Source:** Indicates where the lead came from (web, call, event, etc.).
- **Address:** Customer’s physical address.
- **Postal Code:** Postal code corresponding to the customer’s address.

This basic information ensures that every new contact is properly identified and ready for future management.

## Step 2: Opportunity Configuration
It's essential to configure the opportunity generation correctly in the system to track the sales process efficiently. These configurations ensure that opportunities are created automatically and displayed correctly in the CRM.

### Automatic Opportunity Generation:

- Set up the system so that when a quote is created, an opportunity for follow-up is automatically generated. This allows the sales representative to manage the progress of the quote within the CRM.

### Opportunity Phases:

- **Accepted Opportunity Phase:** Defines the phase an opportunity enters when a quote is accepted. This could be “Closed - Won.”
- **Cancelled Opportunity Phase:** Defines the phase for opportunities that are lost or canceled, such as “Closed - Lost.”
- **Hide Cancelled Opportunities:** Configure the system to automatically hide canceled opportunities from the management panel, providing a clearer view of active opportunities.

### Opportunities from Web Contact:

- **Web Contact Opportunity Phase:** Define the phase for opportunities generated from contact forms on the web, such as “New.”

### Visualization in the Agenda:

To control the follow-up flow, configure the CRM so that opportunities, once created, are visible in the CRM agenda. This allows the sales team to manage their time and upcoming events in an organized manner.

### Rental Status Visible in Timeline:

If you work with rental vehicles, you can configure the following statuses for their visualization in the timeline:

- **Cancelled**
- **In Progress**
- **Incident**
- **Pending**
- **Received**
- **Reserved**

## Step 3: Required Fields to Create Opportunities
For every opportunity generated, either manually or through a quote, it's necessary to ensure the following required fields are collected:

- **Contact:** Customer associated with the opportunity.
- **Name:** Descriptive name of the opportunity.
- **Phase:** Current status of the opportunity (e.g., New, In Negotiation, Closed - Won).
- **Next Event Date:** Scheduled date for the next contact or action related to the opportunity.
- **Probability:** Estimated percentage chance the opportunity will close successfully.
- **Project:** Project to which the opportunity is linked, if applicable.
- **Source:** Origin of the lead or opportunity.
- **Notes:** Additional relevant information about the opportunity.

## Step 4: Auto-Opportunities Configuration from Quotes
One of the most efficient features of the CRM in eV4 is the automatic generation of opportunities from quotes. This configuration enables the system to convert quotes into opportunities automatically, with the following parameters:

### Opportunity Phase:

- When a quote is created, a default opportunity phase is automatically assigned. This enables continuous tracking from the generation of the quote to the closing of the sale.

### Save Quote Data in the "Name" Field:

- Configure the system to automatically complete the opportunity name with the data from the generated quote. This facilitates the quick identification of the opportunity in the system.

### Use Shortened Product Name:

- Instead of using the full name of the product or vehicle, you can configure the CRM to use a shortened or key name, making it easier to visualize opportunities in the CRM interface.

## Conclusion

Proper configuration of the **eV4 CRM module** allows you to efficiently manage leads and opportunities, automating much of the follow-up and quote generation process. Configuring the required fields and defining how opportunities are managed from their creation to conversion into sales optimizes the sales team's work and ensures that no lead or quote is left untracked.

## Recommended Readings

- **Opportunity Management in eV4 ERP**
- **Quote Generation and Tracking in the eV4 CRM Module**
