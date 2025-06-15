export const formSchemas = [
  {
    id: 'customer-feedback',
    title: 'Customer Feedback',
    fields: ['Name', 'Email', 'Contact Number', 'Rating', 'Comments'],
  },
  {
    id: 'employee-review',
    title: 'Employee Review',
    fields: ['Employee Name', 'Reviewer', 'Rating', 'Strengths', 'Improvements'],
  },
  {
    id: 'bug-report',
    title: 'Bug Report Form',
    fields: ['Reported By', 'Email', 'Description', 'Steps to Reproduce', 'Severity', 'Expected Result', 'Actual Result'],
  },
  {
    id: 'job-application',
    title: 'Job Application Form',
    fields: ['Full Name', 'Email', 'Phone Number', 'Address', 'Position Applied', 'Resume Link', 'Cover Letter'],
  },
  {
    id: 'leave-request',
    title: 'Leave Request Form',
    fields: ['Employee Name', 'Employee ID', 'Department', 'Leave Type', 'Start Date', 'End Date', 'Reason for Leave'],
  },
  {
    id: 'contact-us',
    title: 'Contact Us Form',
    fields: ['Full Name', 'Email', 'Phone', 'Subject', 'Message'],
  },
  {
    id: 'medical-consent',
    title: 'Medical Consent Form',
    fields: ['Patient Name', 'Guardian Name', 'DOB', 'Treatment Consent', 'Doctor Name', 'Date'],
  },
  {
    id: 'event-registration',
    title: 'Event Registration Form',
    fields: ['Full Name', 'Email', 'Phone Number', 'Event Name', 'Session Preference', 'Special Requirements'],
  },
  {
    id: 'purchase-order',
    title: 'Purchase Order Form',
    fields: ['PO Number', 'Supplier Name', 'Item Description', 'Quantity', 'Unit Price', 'Total Amount', 'Authorized By'],
  },
  {
    id: 'invoice',
    title: 'Invoice Form',
    fields: ['Invoice Number', 'Customer Name', 'Date', 'Item List', 'Subtotal', 'Tax', 'Total Amount', 'Payment Due Date'],
  },
  {
    id: 'feedback-survey',
    title: 'Feedback Survey Form',
    fields: ['Participant Name', 'Date', 'Overall Experience', 'What Did You Like?', 'Suggestions for Improvement'],
  },
  {
    id: 'incident-report',
    title: 'Incident Report Form',
    fields: ['Reported By', 'Date & Time', 'Location', 'People Involved', 'Description', 'Witnesses', 'Actions Taken'],
  },
  {
    id: 'training-evaluation',
    title: 'Training Evaluation Form',
    fields: ['Trainee Name', 'Trainer Name', 'Course Title', 'Training Date', 'Course Feedback', 'Suggestions'],
  },
  {
    id: 'timesheet',
    title: 'Employee Timesheet Form',
    fields: ['Employee Name', 'Employee ID', 'Week Starting', 'Daily Hours (Mon–Fri)', 'Total Hours', 'Manager Signature'],
  },
  {
    id: 'student-enrollment',
    title: 'Student Enrollment Form',
    fields: ['Student Name', 'DOB', 'Grade', 'Parent/Guardian Name', 'Address', 'Emergency Contact'],
  }
];
