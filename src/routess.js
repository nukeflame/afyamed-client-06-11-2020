import React from "react";

// const Dashboard = React.lazy(() => import("./views/Dashboard"));
const AdminDashboard = React.lazy(() =>
  import("./views/Dashboard/AdminDashboard")
);

const Lab = React.lazy(() => import("./views/Lab"));
const Imaging = React.lazy(() => import("./views/Imaging/"));
const Pharmacy = React.lazy(() => import("./views/Pharmacy/"));
const PatientsChart = React.lazy(() => import("./views/Records/PatientsChart"));
const Activities = React.lazy(() => import("./views/Records/Activities"));
const Consultations = React.lazy(() => import("./views/Records/Consultations"));
//records
const Home = React.lazy(() => import("./views/Records/Home"));
const Patients = React.lazy(() => import("./views/Records/Patients"));
const Inpatients = React.lazy(() => import("./views/Records/Inpatients"));
const Triage = React.lazy(() => import("./views/Records/Triage"));
const BedsCalendar = React.lazy(() => import("./views/Records/BedsCalendar"));
const Checkins = React.lazy(() => import("./views/Records/CheckIns"));
const Calendars = React.lazy(() => import("./views/Records/Calendars"));
const FrontOffice = React.lazy(() => import("./views/Records/FrontOffice"));
//billing

const BillingDashboard = React.lazy(() =>
  import("./views/Billing/BillingDashboard")
);
const PatientBilling = React.lazy(() => import("./views/Billing/Patient"));
const PatientsBilling = React.lazy(() => import("./views/Billing/Patients"));
//reports
const Reports = React.lazy(() => import("./views/Reports"));
const Communication = React.lazy(() =>
  import("./views/Communication/Dashboard")
);
const Chatbox = React.lazy(() => import("./views/Communication/Chatbox"));
//office
const Contacts = React.lazy(() => import("./views/Office/Contacts"));
const Tasks = React.lazy(() => import("./views/Office/Tasks"));
const Documents = React.lazy(() => import("./views/Office/Documents"));
const Notes = React.lazy(() => import("./views/Office/Notes"));
//settings
const Settings = React.lazy(() => import("./views/Settings"));
//clients
const Clients = React.lazy(() => import("./views/Clients"));
//stock
const StockDashboard = React.lazy(() => import("./views/Stock/StockDashboard"));
const StockLocations = React.lazy(() => import("./views/Stock/StockLocations"));
const StockItems = React.lazy(() => import("./views/Stock/StockItems"));
const StockPrepItems = React.lazy(() => import("./views/Stock/StockPrepItems"));
const StockTransfers = React.lazy(() => import("./views/Stock/StockTransfers"));
const StockTransRequests = React.lazy(() =>
  import("./views/Stock/StockTransRequests")
);
const StockRecipes = React.lazy(() => import("./views/Stock/StockRecipes"));
const StockBillOfMaterials = React.lazy(() =>
  import("./views/Stock/StockBillOfMaterials")
);
//accounts
const AccountsDashboard = React.lazy(() =>
  import("./views/Accounts/AccountsDashboard")
);
const CashierShifts = React.lazy(() =>
  import("./views/Accounts/CashierShifts")
);
const AccountItems = React.lazy(() => import("./views/Accounts/AccountItems"));
//morgue
const Morgue = React.lazy(() => import("./views/Morgue/Morgue"));
const StorageAreas = React.lazy(() => import("./views/Morgue/StorageAreas"));
const Chambers = React.lazy(() => import("./views/Morgue/Chambers"));
//queue
const Queue = React.lazy(() => import("./views/Queue"));
//procurement
const ProcurementSuppliers = React.lazy(() =>
  import("./views/Procurement/Suppliers")
);
const ProcurementDashboard = React.lazy(() =>
  import("./views/Procurement/ProcurementDashboard")
);

// routes
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/admin/dashboard", name: "Dashboard", component: AdminDashboard },
  { path: "/lab", name: "Lab", component: Lab },
  { path: "/imaging", name: "Imaging", component: Imaging },
  { path: "/pharmacy", name: "Pharmacy", component: Pharmacy },
  //records
  {
    path: "/records",
    exact: true,
    name: "Records",
    component: Home
  },
  {
    path: "/records/home",
    name: "Home",
    component: Home
  },
  {
    path: "/records/patient-chart",
    name: "PatientsChart",
    component: PatientsChart
  },
  {
    path: "/records/activities",
    name: "Activities",
    component: Activities
  },
  {
    path: "/records/triage",
    name: "Triage",
    component: Triage
  },
  {
    path: "/records/consultations",
    name: "Consultations",
    component: Consultations
  },
  {
    path: "/records/calendars",
    name: "Calendars",
    component: Calendars
  },
  {
    path: "/records/patients",
    name: "Patient Registry",
    component: Patients
  },
  {
    path: "/records/inpatients",
    name: "Inpatients",
    component: Inpatients
  },
  {
    path: "/records/beds-calendar",
    name: "BedsCalendar",
    component: BedsCalendar
  },
  {
    path: "/records/checkins",
    name: "Checkins",
    component: Checkins
  },
  {
    path: "/records/frontoffice",
    name: "Front Office",
    component: FrontOffice
  },

  //reports
  { path: "/reports", name: "Reports", component: Reports },

  //billing
  {
    path: "/billing",
    exact: true,
    name: "Billing",
    component: BillingDashboard
  },
  {
    path: "/billing/dashboard",
    name: "Dashboard",
    component: BillingDashboard
  },
  {
    path: "/billing/patient",
    name: "Patient",
    component: PatientBilling
  },
  {
    path: "/billing/patients",
    name: "Patients",
    component: PatientsBilling
  },
  {
    path: "/billing/copayer",
    name: "Copayer",
    component: PatientsBilling
  },
  {
    path: "/billing/copayers",
    name: "Copayers",
    component: PatientsBilling
  },
  {
    path: "/billing/invoices",
    name: "Invoices",
    component: PatientsBilling
  },
  {
    path: "/billing/payments",
    name: "Payments",
    component: PatientsBilling
  },
  {
    path: "/billing/receipts",
    name: "Receipts",
    component: PatientsBilling
  },
  {
    path: "/billing/reports/balance-sheet",
    name: "Balance Sheet",
    component: PatientsBilling
  },
  {
    path: "/billing/reports/financial-summary",
    name: "Balance Sheet",
    component: PatientsBilling
  },

  // Communication
  {
    path: "/communication",
    name: "Communication",
    exact: true,
    component: Communication
  },
  {
    path: "/communication/chatbox",
    name: "Chatbox",
    component: Chatbox
  },
  //office
  {
    path: "/office",
    exact: true,
    name: "Office",
    component: Contacts
  },
  {
    path: "/office/contacts",
    name: "Contacts",
    component: Contacts
  },
  {
    path: "/office/tasks",
    name: "Tasks",
    component: Tasks
  },
  {
    path: "/office/docs",
    name: "Documents",
    component: Documents
  },
  {
    path: "/office/notes",
    name: "Notes",
    component: Notes
  },

  //stock
  {
    path: "/stock",
    exact: true,
    name: "Stock",
    component: StockDashboard
  },
  {
    path: "/stock/dashboard",
    name: "Dashboard",
    component: StockDashboard
  },
  {
    path: "/stock/locations",
    name: "Locations",
    component: StockLocations
  },
  {
    path: "/stock/items",
    name: "Items",
    component: StockItems
  },
  {
    path: "/stock/prepaid-items",
    name: "Prepaid Items",
    component: StockPrepItems
  },
  {
    path: "/stock/transfers",
    name: "Transfers",
    component: StockTransfers
  },
  {
    path: "/stock/transfer-requests",
    name: "Transfer Requests",
    component: StockTransRequests
  },
  {
    path: "/stock/recipes",
    name: "Recipes",
    component: StockRecipes
  },
  {
    path: "/stock/bill-of-materials",
    name: "Bill Of Materials",
    component: StockBillOfMaterials
  },

  //settings
  {
    path: "/settings",
    name: "Settings",
    component: Settings
  },

  //clients
  {
    path: "/clients",
    name: "Clients",
    component: Clients
  },
  // accounts
  {
    path: "/accounts",
    exact: true,
    name: "Accounts",
    component: AccountsDashboard
  },
  {
    path: "/accounts/dashboard",
    name: "Dashboard",
    component: AccountsDashboard
  },
  {
    path: "/accounts/cashier-shifts",
    name: "Cashier Shifts",
    component: CashierShifts
  },
  {
    path: "/accounts/items",
    name: "Items",
    component: AccountItems
  },

  //morgue
  {
    path: "/morgue",
    name: "Morgue",
    exact: true,
    component: Morgue
  },
  {
    path: "/morgue/storage-areas",
    name: "Storage Areas",
    component: StorageAreas
  },
  {
    path: "/morgue/chambers",
    name: "Chambers",
    component: Chambers
  },

  //queue
  {
    path: "/queue",
    name: "Queue",
    component: Queue
  },

  //procurement
  {
    path: "/procurement",
    name: "Procurement",
    exact: true,
    component: ProcurementSuppliers
  },
  {
    path: "/procurement/dashboard",
    name: "Dashboard",
    component: ProcurementDashboard
  },
  {
    path: "/procurement/suppliers",
    name: "Suppliers",
    component: ProcurementSuppliers
  }
];

export default routes;
