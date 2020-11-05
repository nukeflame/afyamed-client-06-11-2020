export default {
  items: [
    {
      name: "DASHBOARD",
      url: "/dashboard",
      icon: "icon-speedometer"
    },
    {
      name: "RECORDS",
      url: "/buttons",
      icon: "fa fa-group",
      children: [
        {
          name: "Home",
          url: "/records/home",
          icon: "icon-home"
        },
        {
          name: "Patient Chart",
          url: "/records/patient-chart",
          icon: "icon-user"
        },
        {
          name: "Activities",
          url: "/records/activities"
        },
        {
          name: "Consultations",
          url: "/records/consultations"
        },
        {
          name: "Patients",
          url: "/records/patients"
        },
        {
          name: "Inpatients",
          url: "/records/inpatients",
          icon: "fa fa-user-md"
        },
        {
          name: "Beds Calendar",
          url: "/records/beds-calendar"
        },
        {
          name: "Calendars",
          url: "/records/calendars",
          icon: "fa fa-calendar-o"
        },
        {
          name: "Checkins",
          url: "/records/checkins"
        },
        {
          name: "Resources",
          url: "/records/resources"
        }
      ]
    },
    {
      name: "LABORATORY",
      url: "/lab",
      icon: "fa fa-flask"
    },
    {
      name: "IMAGING",
      url: "/imaging",
      icon: "icon-picture"
    },
    {
      name: "PHARMACY",
      url: "/pharmacy",
      icon: "fa fa-medkit"
    },
    {
      name: "OFFICE",
      url: "/office",
      icon: "fa fa-id-card-o",
      children: [
        {
          name: "Contacts",
          url: "/office/contacts"
        },
        {
          name: "Tasks",
          url: "/office/tasks"
        },
        {
          name: "Documents",
          url: "/office/docs"
        },
        {
          name: "Notes",
          url: "/office/notes"
        }
      ]
    },
    {
      name: "BILLING",
      url: "/billing",
      icon: "fa fa-money",
      children: [
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
          name: "Special Offers",
          url: "/billing/offers"
        }
      ]
    },
    {
      name: "PURCHASES",
      url: "/purchases",
      icon: "icon-basket-loaded",
      children: [
        {
          name: "Dashboard",
          url: "/purchases/dashboard"
        },
        {
          name: "Supplier",
          url: "/purchases/button-dropdowns"
        },
        {
          name: "Suppliers",
          url: "/purchases/button-groups"
        },
        {
          name: "Invoices",
          url: "/purchases/brand-purchases"
        },
        {
          name: "Payments",
          url: "/purchases/button-groups"
        },
        {
          name: "Returns",
          url: "/purchases/brand-purchases"
        },
        {
          name: "Credit Returns",
          url: "/purchases/button-groups"
        }
      ]
    },
    {
      name: "COMPANY",
      url: "/company",
      icon: "fa fa-institution",
      children: [
        {
          name: "Company",
          url: "/company/company"
        },
        {
          name: "Locations",
          url: "/company/locations"
        },
        {
          name: "Items",
          url: "/company/items"
        },
        {
          name: "Prepaid Items",
          url: "/company/prepaid-items"
        },
        {
          name: "Transfers",
          url: "/company/transfers"
        },
        {
          name: "Transfers Request",
          url: "/company/transfers-request"
        },
        {
          name: "Recipes",
          url: "/company/recipes"
        },
        {
          name: "Bills of Materials",
          url: "/company/bills-of-materials"
        },
        {
          name: "Medic Percents",
          url: "/company/medic-percents"
        },
        {
          name: "Adjustments",
          url: "/company/adjustments"
        }
      ]
    },
    {
      name: "REPORTS",
      url: "/reports",
      icon: "fa fa-file-text-o"
    },
    {
      name: "COMMUNICATION",
      url: "/communication",
      icon: "fa fa-envelope-o"
    },
    {
      name: "SETTINGS",
      url: "/settings",
      icon: "icon-settings"
    }
  ]
};

// export default {
//   items: [
//     {
//       name: "Back to Home",
//       url: "/communication",
//       icon: "icon-home"
//     },
//     {
//       title: true,
//       name: "Chat Groups",
//       class: "text-danger"
//     },
//     {
//       name: "#General",
//       url: "/home",
//       icon: "icon-user"
//     },
//     {
//       name: "#0ffice",
//       url: "/home",
//       icon: "icon-user"
//     },
//     {
//       name: "#VideoChars",
//       url: "/home",
//       icon: "icon-user"
//     },
//     {
//       title: true,
//       name: "Direct Chats",
//       class: "text-danger"
//     },
//     {
//       name: "John Doe",
//       url: "/home",
//       icon: "icon-user"
//     },
//     {
//       name: "Jane Doe",
//       url: "/home",
//       icon: "icon-user"
//     }
//   ]
// };
