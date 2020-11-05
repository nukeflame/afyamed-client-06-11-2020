export default {
  items: [
    {
      name: "BILLING",
      title: true
    },

    {
      name: "Dashboard",
      url: "/billing/dashboard"
    },
    {
      name: "Patient",
      url: "/billing/patient"
    },
    {
      name: "Patients",
      url: "/billing/patients"
    },

    {
      name: "Copayer",
      url: "/billing/copayer"
    },
    {
      name: "Copayers",
      url: "/billing/copayers"
    },
    {
      name: "Invoices",
      url: "/billing/invoices"
    },
    {
      name: "Payments",
      url: "/billing/payments"
    },
    {
      name: "Receipts",
      url: "/billing/receipts"
    },

    {
      name: "REPORTS",
      url: "/billing/reports",
      icon: "fa fa-file-alt",
      children: [
        {
          name: "Balance Sheet",
          url: "/billing/reports/balance-sheet"
        },
        {
          name: "Financial Summary",
          url: "/billing/reports/financial-summary"
        }
      ]
    }
  ]
};
