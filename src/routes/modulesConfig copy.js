/**
|--------------------------------------------------
| Modules Config
|--------------------------------------------------
*/
import React from "react";

//dashboard
const AdminDashboard = React.lazy(() =>
  import("../views/Dashboard/AdminDashboard")
);
const PatientDashboard = React.lazy(() =>
  import("../views/Dashboard/PatientDashboard")
);
const UserDashboard = React.lazy(() =>
  import("../views/Dashboard/UserDashboard")
);
// const Lab = React.lazy(() => import("../views/Lab"));
const Imaging = React.lazy(() => import("../views/Imaging/"));
// const Pharmacy = React.lazy(() => import("../views/Pharmacy/"));

// const Activities = React.lazy(() => import("../views/Records/Activities"));
// const Consultations = React.lazy(() =>
//   import("../views/Records/Consultations")
// );
//records
const HomeRecords = React.lazy(() => import("../views/Records/Home"));
const Patients = React.lazy(() => import("../views/Records/Patients"));
const PatientsChart = React.lazy(() =>
  import("../views/Records/PatientsChart")
);
const Inpatients = React.lazy(() => import("../views/Records/Inpatients"));
const Triage = React.lazy(() => import("../views/Records/Triage"));
const BedsCalendar = React.lazy(() => import("../views/Records/BedsCalendar"));
const Consultations = React.lazy(() =>
  import("../views/Records/Consultations")
);
const Calendars = React.lazy(() => import("../views/Records/Calendars"));
const FrontOffice = React.lazy(() => import("../views/Records/FrontOffice"));
//billing

// const BillingDashboard = React.lazy(() =>
//   import("../views/Billing/BillingDashboard")
// );
// const PatientBilling = React.lazy(() => import("../views/Billing/Patient"));
// const PatientsBilling = React.lazy(() => import("../views/Billing/Patients"));
// //reports
// const Reports = React.lazy(() => import("../views/Reports"));
// const Communication = React.lazy(() =>
//   import("../views/Communication/Dashboard")
// );
// const Chatbox = React.lazy(() => import("../views/Communication/Chatbox"));
// //office
// const Contacts = React.lazy(() => import("../views/Office/Contacts"));
// const Tasks = React.lazy(() => import("../views/Office/Tasks"));
// const Documents = React.lazy(() => import("../views/Office/Documents"));
// const Notes = React.lazy(() => import("../views/Office/Notes"));
//settings
const Settings = React.lazy(() => import("../views/Settings"));
//clients
const Clients = React.lazy(() => import("../views/Clients"));
// //stock
// const StockDashboard = React.lazy(() =>
//   import("../views/Stock/StockDashboard")
// );
// const StockLocations = React.lazy(() =>
//   import("../views/Stock/StockLocations")
// );
// const StockItems = React.lazy(() => import("../views/Stock/StockItems"));
// const StockPrepItems = React.lazy(() =>
//   import("../views/Stock/StockPrepItems")
// );
// const StockTransfers = React.lazy(() =>
//   import("../views/Stock/StockTransfers")
// );
// const StockTransRequests = React.lazy(() =>
//   import("../views/Stock/StockTransRequests")
// );
// const StockRecipes = React.lazy(() => import("../views/Stock/StockRecipes"));
// const StockBillOfMaterials = React.lazy(() =>
//   import("../views/Stock/StockBillOfMaterials")
// );
// //accounts
// const AccountsDashboard = React.lazy(() =>
//   import("../views/Accounts/AccountsDashboard")
// );
// const CashierShifts = React.lazy(() =>
//   import("../views/Accounts/CashierShifts")
// );
// const AccountItems = React.lazy(() => import("../views/Accounts/AccountItems"));
//morgue
const Morgue = React.lazy(() => import("../views/Morgue/Morgue"));
const StorageAreas = React.lazy(() => import("../views/Morgue/StorageAreas"));
const Chambers = React.lazy(() => import("../views/Morgue/Chambers"));
// //queue
// const Queue = React.lazy(() => import("../views/Queue"));
// //procurement
// const ProcurementSuppliers = React.lazy(() =>
//   import("../views/Procurement/Suppliers")
// );
// const ProcurementDashboard = React.lazy(() =>
//   import("../views/Procurement/ProcurementDashboard")
// );

// component's config object.
// const components = {
//   pChart: {
//     name: "Settings T",
//     url: "/records/patient-chart",
//     path: "/records/patient-chart",
//     component: Settings
//   }
// };

const depName = JSON.parse(localStorage.getItem("depName"));

// component's access to roles.
const modulesConfig = {
  records: {
    routes: [
      //children links
      {
        name: "Patient Chart",
        url: "/records/patientChart",
        path: "/records/patientChart",
        class: "hidden",
        component: PatientsChart
      },
      {
        name: "Records Home",
        url: "/records/home",
        path: "/records/home",
        class: "hidden",
        component: HomeRecords
      },
      {
        name: "Triage",
        url: "/records/triage",
        path: "/records/triage",
        class: "hidden",
        component: Triage
      },
      {
        name: "Doctor",
        url: "/records/consultations",
        path: "/records/consultations",
        class: "hidden",
        component: Consultations
      },
      {
        name: "Patient Registry",
        url: "/records/patients",
        path: "/records/patients",
        class: "hidden",
        component: Patients
      },
      {
        name: "Queue",
        url: "/records/patients",
        path: "/records/patients",
        class: "hidden",
        component: Patients
      },
      {
        name: "Front Office",
        url: "/records/frontoffice",
        path: "/records/frontoffice",
        class: "hidden",
        component: Patients
      },

      //
      {
        name: "Records",
        url: "/records/home",
        path: "/records/home",
        exact: true,
        icon: "fas fa-clipboard",
        children: [
          {
            name: "Home Records",
            url: "/records/home",
            icon: "icon-home"
          },
          {
            name: "Patient Chart",
            url: "/records/patientChart"
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
            url: "/records/queue"
          },
          {
            name: "Front Office",
            url: "/records/frontoffice"
          }
        ]
      }
    ]
  },

  imaging: {
    routes: [
      {
        name: "Imaging",
        url: "/imaging",
        path: "/imaging",
        icon: "fas fa-picture-o",
        component: Imaging
      }
    ]
  },

  laboratory: {
    routes: [
      {
        name: "Laboratory",
        url: "/lab",
        icon: "fa fa-flask"
      }
    ]
  },

  accounts: {
    routes: [
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
      }
    ]
  },

  billing: {
    routes: [
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
      }
    ]
  },

  human_resource: {
    routes: [
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
      }
    ]
  },

  maternity: {
    routes: [
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
      }
    ]
  },

  operation_theatre: {
    routes: [
      {
        name: "Theatre",
        url: "/records/inpatients",
        icon: "fas fa-picture-o"
      }
    ]
  },

  morgue: {
    routes: [
      {
        name: "Morgue Reception",
        url: "/morgue/reception",
        path: "/morgue/reception",
        class: "hidden",
        component: Morgue
      },
      {
        name: "Storage Areas",
        url: "/morgue/storage_areas",
        path: "/morgue/storage_areas",
        class: "hidden",
        component: StorageAreas
      },
      {
        name: "Chambers",
        url: "/morgue/chambers",
        path: "/morgue/chambers",
        class: "hidden",
        component: Chambers
      },

      //
      {
        name: "Morgue",
        url: "/morgue",
        path: "/morgue",
        exact: true,
        icon: "fas fa-store-alt",
        component: Morgue,
        children: [
          {
            name: "Morgue Reception",
            url: "/morgue/reception",
            path: "/morgue/reception"
          },
          {
            name: "Storage Areas",
            url: "/morgue/storage_areas",
            path: "/morgue/storage_areas"
          },
          {
            name: "Chambers",
            url: "/morgue/chambers",
            path: "/morgue/chambers"
          }
        ]
      }
    ]
  },

  procurement: {
    routes: [
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
      }
    ]
  },

  inventory: {
    routes: [
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
      }
    ]
  },

  reports: {
    routes: [
      {
        name: "Reports",
        url: "/reports",
        icon: "fas fa-file-alt"
      }
    ]
  },

  last_common: {
    routes: [
      {
        name: "Settings",
        path: "/settings",
        url: "/settings",
        icon: "icon-settings",
        component: Settings
      }
    ]
  },

  adminDashboard: {
    routes: [
      {
        name: depName,
        title: true
      },
      {
        name: "Home",
        exact: true,
        class: "hidden",
        url: "/",
        path: "/",
        icon: "icon-speedometer",
        component: AdminDashboard
      },

      {
        name: "Dashboard",
        url: "/admin/dashboard",
        path: "/admin/dashboard",
        icon: "icon-speedometer",
        component: AdminDashboard
      },
      {
        name: "Clients",
        url: "/clients",
        path: "/clients",
        icon: "fas fa-users",
        component: Clients
      }
    ]
  },

  userDashboard: {
    routes: [
      {
        name: depName,
        title: true
      },
      {
        name: "Home",
        exact: true,
        class: "hidden",
        url: "/",
        path: "/",
        icon: "icon-speedometer",
        component: UserDashboard
      },

      {
        name: "Dashboard",
        url: "/user/dashboard",
        path: "/user/dashboard",
        icon: "icon-speedometer",
        component: UserDashboard
      }
    ]
  },

  patientDashboard: {
    routes: [
      {
        name: depName,
        title: true
      },
      {
        name: "Home",
        exact: true,
        class: "hidden",
        url: "/",
        path: "/",
        icon: "icon-speedometer",
        component: PatientDashboard
      },
      {
        name: "Dashboard",
        url: "/patient/dashboard",
        path: "/patient/dashboard",
        icon: "icon-speedometer",
        component: PatientDashboard
      }
    ]
  }
};

export default modulesConfig;
