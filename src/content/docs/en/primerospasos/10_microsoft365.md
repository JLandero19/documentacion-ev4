---

title: Guide to Connect Microsoft 365 Accounts to eV4's Document Inbox

---

For eV4 to access your Microsoft 365 inbox and process emails automatically, a simple authorization process must be completed. This process ensures that our system can access the necessary emails while maintaining the security of your Microsoft 365 account.

## Steps to authorize access from our ERP to your Microsoft 365 account:

1. **Initiate the Authorization Process**:
   - When you attempt to connect your Microsoft 365 account to our ERP for the first time, you will be redirected to the Microsoft sign-in page.
   - Enter your **Microsoft 365** credentials (email and password) to log in.

2. **Global Administrator Consent**:
   - If you are the administrator of your Microsoft 365 organization, Microsoft will ask you to grant access to our ERP application to read emails in your account.
   - **If you are not the administrator** of the organization, you will need to contact the administrator to perform this step. The administrator will receive a request to approve access to our application.

3. **Accept the Requested Permissions**:
   - Upon logging in, you will see a screen asking you to authorize the necessary permissions for our application to access your inbox.
   - The requested permissions include:
     - **Read Emails**: So that we can read the unread emails in your inbox and process them in our CRM.
     - **IMAP Access**: This allows our application to use IMAP to access the content of your inbox.
   - Click the **"Accept"** button to grant these permissions.

4. **Successful Connection**:
   - Once you grant consent, your Microsoft 365 account will be connected to our ERP.
   - Our system will begin reading the emails and processing them as configured.

## Important:

   - **Security**: This authorization process uses **OAuth2**, an industry-standard security protocol that ensures your credentials are not shared directly with our application. Instead, our system receives an access token that allows us to read the emails, and you can revoke this access at any time from your Microsoft admin panel.
   - **Reauthentication**: In some cases, you may need to reauthorize access if the access token expires or is revoked.

## Frequently Asked Questions (FAQ):

**1. What happens if I am not the administrator of my Microsoft 365 account?**  
If you are not the global administrator, you will need to contact the person responsible for Microsoft 365 administration in your organization to authorize the application on your behalf.

**2. Can I revoke access at any time?**  
Yes, you can revoke access at any time from the Microsoft 365 Admin Center. This can be done by accessing the authorized applications and removing our application’s access.

**3. What email data will be shared with the ERP?**  
Our ERP will only access the emails you have authorized (typically unread emails) and solely for the specific purposes of your CRM. We do not access any other information without your consent.

**4. Is this process secure?**  
Yes, the process uses the OAuth2 security standard, which is the most secure method available for authenticating and authorizing external applications.

If you have any questions or need further assistance to complete the process, feel free to contact our support team.

