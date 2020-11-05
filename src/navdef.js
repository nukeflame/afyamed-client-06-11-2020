export default {
  items: [
    {
      name: "ADMINISTRATION",
      title: true
    },
    {
      name: "DASHBOARD",
      url: "/dashboard",
      icon: "icon-speedometer"
    },
    {
      name: "CLIENTS",
      url: "/clients",
      icon: "fas fa-users"
    },
    {
      name: "MEDICAL",
      url: "/records/home",
      icon: "fas fa-clipboard",
      children: [
        {
          name: "Home",
          url: "/records/home",
          icon: "icon-home"
        },
        {
          name: "Patient Chart",
          url: "/records/patient-chart"
        },
        {
          name: "Patient Registry",
          url: "/records/patients"
        },
        {
          name: "Triage",
          url: "/records/triage"
        },
        {
          name: "Doctor",
          url: "/records/consultations"
        },
        {
          name: "Laboratory",
          url: "/lab",
          icon: "fa fa-flask"
        },
        {
          name: "Imaging",
          url: "/imaging",
          icon: "fas fa-picture-o"
        },
        {
          name: "Theatre",
          url: "/records/inpatients",
          icon: "fas fa-picture-o"
        },
        {
          name: "Admissions",
          url: "/records/inpatients"
        },
        {
          name: "Appointments",
          url: "/records/inpatients"
        },
        {
          name: "Refferals",
          url: "/records/inpatients"
        },
        {
          name: "Queue",
          url: "/records/checkins"
        },
        {
          name: "Front Office",
          url: "/records/frontoffice"
        }
      ]
    },

    {
      name: "BILLING",
      url: "/records/inpatients",
      icon: "fas fa-money",
      children: [
        {
          name: "Pharmacy",
          url: "/billing/pharmacy"
        },
        {
          name: "Over The Counter",
          url: "/billing/copayer"
        },
        {
          name: "Patients Bills",
          url: "/billing/copayer"
        },
        {
          name: "Copayers",
          url: "/billing/copayers"
        },
        {
          name: "Transactions",
          url: "/billing/invoices"
        },

        {
          name: "Gate Pass",
          url: "/billing/copayers"
        }
      ]
    },
    {
      name: "MATERNITY",
      url: "/records/inpatients",
      icon: "fas fa-bed",
      children: [
        {
          name: "Maternity",
          url: "/billing/pharmacy"
        },
        {
          name: "Dev Milestones",
          url: "/billing/copayer"
        },
        {
          name: "Required Immunization",
          url: "/billing/copayer"
        }
      ]
    },
    {
      name: "PROCUREMENT",
      url: "/procurement",
      icon: "icon-basket-loaded",
      children: [
        {
          name: "Dashboard",
          url: "/procurement/dashboard"
        },
        {
          name: "Suppliers",
          url: "/procurement/suppliers"
        },
        {
          name: "Purchases",
          url: "/procurement/purchases"
        },
        {
          name: "Invoices",
          url: "/procurement/invoices"
        },
        {
          name: "Payments",
          url: "/procurement/payments"
        }
      ]
    },
    {
      name: "INVENTORY",
      url: "/records/inpatients",
      icon: "fas fa-clipboard-list",
      children: [
        {
          name: "Inventory",
          url: "/billing/pharmacy"
        },
        {
          name: "Orders",
          url: "/billing/copayer"
        },
        {
          name: "Material Consumption",
          url: "/billing/copayer"
        },
        {
          name: "Stock Take",
          url: "/billing/copayer"
        },
        {
          name: "Price Markup",
          url: "/billing/copayer"
        },
        {
          name: "Unit Of Measure",
          url: "/billing/copayer"
        }
      ]
    },
    {
      name: "ACCOUNTS",
      url: "/accounts",
      icon: "fas fa-clipboard-list",
      children: [
        {
          name: "Dashboard",
          url: "/accounts/dashboard"
        },
        {
          name: "Accounts",
          url: "/accounts/items"
        },
        {
          name: "Cashier Shifts",
          url: "/accounts/cashier-shifts"
        }
      ]
    },
    {
      name: "HUMAN RESOURCE",
      url: "/records/inpatients",
      icon: "fas fa-users",
      children: [
        {
          name: "Employees",
          url: "/billing/pharmacy"
        },
        {
          name: "Consultants",
          url: "/billing/copayer"
        },
        {
          name: "Pay Periods",
          url: "/billing/copayer"
        },
        {
          name: "Payroll Parameters",
          url: "/billing/copayer"
        },
        {
          name: "PAYE Tax Ranges",
          url: "/billing/copayer"
        },
        {
          name: "Payslips",
          url: "/billing/copayer"
        },
        {
          name: "Leaves",
          url: "/billing/copayer"
        },
        {
          name: "Scheduling",
          url: "/billing/copayer"
        }
      ]
    },
    {
      name: "SETTINGS",
      url: "/settings",
      icon: "fas fa-wrench"
    },
    {
      name: "MOURGUE",
      url: "/morgue",
      icon: "fas fa-store-alt",
      children: [
        {
          name: "Morgue",
          url: "/morgue"
        },
        {
          name: "Storage Areas",
          url: "/morgue/storage-areas"
        },
        {
          name: "Chambers",
          url: "/morgue/chambers"
        }
      ]
    },
    {
      name: "PROFILE",
      url: "/profile",
      icon: "fas fa-user"
    },
    {
      name: "REPORTS",
      url: "/reports",
      icon: "fas fa-file-alt"
    }
  ]
};
