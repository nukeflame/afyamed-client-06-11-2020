// component's config object.
const components = {
  recDashboard: {
    component: "RecDashboard",
    url: "/site/reception/dashboard",
    name: "Dashboard",
    icon: "icon-speedometer",
    modl: 1
  },
  recTitle: {
    name: "Reception",
    title: true,
    modl: 2
  },
  dashboard: {
    name: "Dashboard",
    component: "RecDashboard",
    url: "/site/dashboard",
    icon: "icon-speedometer",
    modl: 6
  },
  frontoffice: {
    component: "FrontOffice",
    url: "/site/frontoffice",
    name: "Front Office",
    icon: "cui-home",
    modl: 3
  },
  register: {
    name: "Register",
    url: "/site/e",
    icon: "fa fa-user",
    component: "Register",
    modl: 4
  },
  inpatients: {
    name: "Inpatients",
    url: "/site/inpatients",
    icon: "fa fa-user-md",
    component: "Inpatients",
    modl: 5
  }
};

// component's access to roles.
const rolesConfig = {
  admin: {
    routes: [
      components.dashboard,
      {
        component: "FrontOffice",
        url: "/site/frontoffice",
        name: "Front Office",
        icon: "cui-home",
        modl: 3
      },
      {
        name: "Records",
        exact: true,
        icon: "fa fa-group",
        component: "Das",
        modl: 7,
        children: [
          {
            component: "FrontOffice",
            url: "/site/frontoffice",
            name: "Front Office",
            icon: "cui-home",
            modl: 3
          }
        ]
      }

      // components.inpatients,
    ]
  },

  receptionist: {
    routes: [
      {
        name: "Reception",
        title: true
      },
      {
        component: "RecDashboard",
        url: "/site/dashboard",
        name: "Dashboard",
        icon: "icon-speedometer"
      },
      {
        component: "FrontOffice",
        url: "/site/frontoffice",
        name: "Front Office",
        icon: "cui-home"
      },
      {
        name: "Register",
        url: "/site/register",
        icon: "fa fa-user",
        component: "Register"
      },
      {
        name: "Inpatients",
        url: "/site/inpatients",
        icon: "fa fa-user-md",
        component: "Inpatients"
      },
      {
        component: "CheckIns",
        url: "/site/checkins",
        name: "Check Ins",
        icon: "fa fa-calendar-o"
      },
      {
        url: "/site/settings",
        name: "Settings",
        exact: true,
        icon: "icon-settings",
        component: "OutPatient",
        children: [
          {
            component: "Profile",
            url: "/site/settings/profile",
            name: "Profile"
          },
          {
            component: "OutPatient",
            url: "/site/outpatients",
            name: "In Patients"
          }
        ]
      }

      // components.requests
    ]
  },

  cashier: {
    routes: [
      {
        name: "Billing",
        title: true
      },
      {
        component: "RecDashboard",
        url: "/site/dashboard",
        name: "Dashboard",
        icon: "icon-speedometer"
      },
      {
        component: "Requests",
        url: "/site/requests",
        name: "Requests",
        icon: "cui-home"
      },
      {
        name: "Patient",
        url: "/admin/billing/patient"
      },
      {
        name: "Copayer",
        url: "/admin/billing/copayer"
      },
      {
        name: "Copayers",
        url: "/admin/billing/copayers"
      },
      {
        name: "Invoices",
        url: "/admin/billing/invoices"
      },
      {
        name: "Payments",
        url: "/admin/billing/payments"
      },
      {
        name: "Receipts",
        url: "/admin/billing/receipts"
      },

      {
        name: "Reports",
        url: "/admin/billing/receipts",
        children: [
          {
            name: "Report A",
            url: "/admin/billing/payments"
          },
          {
            name: "Report B",
            url: "/admin/billing/receipts"
          }
        ]
      }

      // components.requests
    ]
  },

  triage: {
    routes: [
      {
        name: "Triage",
        title: true
      },
      {
        component: "TriDashboard",
        url: "/site/dashboard",
        name: "Dashboard",
        icon: "icon-speedometer"
      },
      {
        component: "Out Patient",
        url: "/site/inpatient",
        name: "In Patient",
        icon: "fa fa-user-md"
      },
      {
        component: "In Patient",
        url: "/site/inpatient",
        name: "In Patient",
        icon: "fa fa-user-md"
      },
      {
        component: "Requests",
        url: "/site/billing",
        name: "Requests",
        icon: "cui-home"
      },

      {
        name: "Reports",
        url: "/admin/billing/receipts",
        icon: "fa fa-file-alt",
        children: [
          {
            name: "Report A",
            url: "/admin/billing/payments"
          },
          {
            name: "Report B",
            url: "/admin/billing/receipts"
          }
        ]
      }

      // components.requests
    ]
  },

  common: {
    routes: [
      {
        component: "Home",
        title: true
      },
      {
        component: "Profile",
        url: "/site/profile",
        name: "Profile",
        exact: true,
        icon: "icon-user",
        module: 1
      }
    ]
  }
};

export default rolesConfig;
