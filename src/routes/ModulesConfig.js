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
const SystemDashboard = React.lazy(() =>
  import("../views/Dashboard/SystemDashboard")
);

const PatientDashboard = React.lazy(() =>
  import("../views/Dashboard/PatientDashboard")
);
const UserDashboard = React.lazy(() =>
  import("../views/Dashboard/UserDashboard")
);
const Laboratory = React.lazy(() => import("../views/Lab"));
const Imaging = React.lazy(() => import("../views/Imaging/"));
// const Pharmacy = React.lazy(() => import("../views/Pharmacy/"));

// const Activities = React.lazy(() => import("../views/Records/Activities"));
// const Consultations = React.lazy(() =>
//   import("../views/Records/Consultations")
// );
//records
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
//reports
const Reports = React.lazy(() => import("../views/Reports"));
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
const Branches = React.lazy(() => import("../views/Branches"));

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
//queue
const Queue = React.lazy(() => import("../views/Queue"));
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

export {
  SystemDashboard,
  AdminDashboard,
  PatientDashboard,
  UserDashboard,
  Imaging,
  Patients,
  PatientsChart,
  Inpatients,
  Triage,
  BedsCalendar,
  Consultations,
  Calendars,
  //
  Settings,
  Clients,
  Branches,
  Morgue,
  StorageAreas,
  Chambers,
  FrontOffice,
  Queue,
  //
  Reports,
  //
  Laboratory
  //
};
