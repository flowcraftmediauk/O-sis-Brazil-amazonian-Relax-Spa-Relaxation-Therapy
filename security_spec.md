# Security Specification & Test Payloads for Oásis Brazil amazonian Relax

## 1. Data Invariants
- `appointment_inquiries` must contain valid strings with enforced maximum lengths.
- `clientName` must be between 1 and 100 characters.
- `clientPhone` must be between 5 and 30 characters.
- `serviceName` must be a valid string <= 120 characters.
- `status` must be initialized to 'pending' upon creation.
- Anyone can submit a new inquiry (appointment booking preview), or authenticated users can link their inquiry to their UID.
- Inquiries can only be viewed by the user who created them (if `userId` matches `request.auth.uid`) or by the administrator (`oasisfilialalgarve@gmail.com` or `flowcraftmediauk@gmail.com`).
- Updates to status are restricted to the business owner/admin.

## 2. The Dirty Dozen Rejected Payloads
1. Malicious 500KB clientName string (DoS / Denial of Wallet).
2. Empty clientName.
3. Missing clientPhone.
4. Client setting status to 'completed' or 'approved' directly on create.
5. Injected unauthorized admin role or extra arbitrary fields.
6. User trying to read another user's inquiry document without being the owner or admin.
7. Unauthenticated user listing all appointment inquiries across the database.
8. Client attempting to delete an inquiry document without permission.
9. Invalid document ID with path traversal or illegal characters.
10. Attempt to spoof another user's `userId`.
11. Attempt to update immutable fields like `createdAt`.
12. Attempt to bypass status validation with arbitrary status states.
