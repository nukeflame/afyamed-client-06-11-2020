import * as actionTypes from "../../actions/types";
import * as c from "../../../routes/ModulesConfig";

const initState = {
  items: [],
  hospitalModules: [],
  hospitalPermissions: [],
  //general Modules
  configModules: {
    medical_records: {
      routes: [
        //records children links
        {
          name: "Patient Data",
          url: "/records/patientChart",
          path: "/records/patientChart",
          class: "hidden",
          component: c.PatientsChart
        },
        {
          name: "Triage",
          url: "/records/triage",
          path: "/records/triage",
          class: "hidden",
          component: c.Triage
        },
        {
          name: "Doctor",
          url: "/records/consultations",
          path: "/records/consultations",
          class: "hidden",
          component: c.Consultations
        },
        {
          name: "Registry",
          url: "/records/patients",
          path: "/records/patients",
          class: "hidden",
          component: c.Patients
        },
        {
          name: "Queue",
          url: "/records/queue",
          path: "/records/queue",
          class: "hidden",
          component: c.Queue
        },
        {
          name: "Inpatients",
          url: "/records/inpatients",
          path: "/records/inpatients",
          class: "hidden",
          component: c.Inpatients
        },
        //Records
        {
          name: "Clinical",
          url: "/records",
          path: "/records",
          exact: true,
          icon: "fas fa-clipboard",
          component: c.Patients,
          children: [
            {
              name: "Registry",
              url: "/records/patients"
            },
            {
              name: "Patient Data",
              url: "/records/patientChart"
            },
            {
              name: "Inpatients",
              url: "/records/inpatients"
            },
            {
              name: "Appointments",
              url: "/records/appointments"
            },
            {
              name: "Refferals",
              url: "/records/refferals"
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
    //Imaging
    imaging: {
      routes: [
        {
          name: "Imaging",
          url: "/imaging",
          path: "/imaging",
          icon: "fas fa-picture-o",
          component: c.Imaging
        }
      ]
    },
    //Laboratory
    laboratory: {
      routes: [
        {
          name: "Laboratory",
          url: "/laboratory",
          path: "/laboratory",
          icon: "fas fa-picture-o",
          component: c.Laboratory
        }
      ]
    },

    accounts: {
      routes: [
        {
          name: "Accounts",
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

    financial: {
      routes: [
        {
          name: "Billing",
          url: "/billing",
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
          name: "Human Resource",
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
          name: "Maternity",
          url: "/maternity",
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
          component: c.Morgue
        },
        {
          name: "Storage Areas",
          url: "/morgue/storage_areas",
          path: "/morgue/storage_areas",
          class: "hidden",
          component: c.StorageAreas
        },
        {
          name: "Chambers",
          url: "/morgue/chambers",
          path: "/morgue/chambers",
          class: "hidden",
          component: c.Chambers
        },

        //
        {
          name: "Morgue",
          url: "/morgue",
          path: "/morgue",
          exact: true,
          icon: "fas fa-store-alt",
          component: c.Morgue,
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
          name: "Procurement",
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
          name: "Inventory",
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
          icon: "fas fa-file-alt",
          path: "/reports",
          component: c.Reports
        }
      ]
    },

    general: {
      routes: [
        {
          name: "Front Office",
          url: "/records/frontoffice",
          path: "/records/frontoffice",
          class: "hidden",
          component: c.FrontOffice
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
          component: c.Settings
        },
        {
          name: "Sytem Dashboard",
          class: "hidden",
          url: "/admin/system-dashboard",
          path: "/admin/system-dashboard",
          component: c.SystemDashboard
        }
      ]
    },
    //clients list
    client_module: {
      routes: [
        {
          name: "Clients",
          url: "/admin/clients",
          path: "/admin/clients",
          icon: "fas fa-users",
          component: c.Clients
        }
      ]
    },

    adminDashboard: {
      routes: [
        {
          name: "",
          title: true
        },
        {
          name: "Home",
          exact: true,
          class: "hidden",
          url: "/",
          path: "/",
          icon: "icon-speedometer",
          component: c.AdminDashboard
        },

        {
          name: "Dashboard",
          url: "/admin/dashboard",
          path: "/admin/dashboard",
          icon: "icon-speedometer",
          component: c.AdminDashboard
        },
        // {
        //   name: "Clients",
        //   url: "/admin/clients",
        //   path: "/admin/clients",
        //   icon: "fas fa-users",
        //   component: c.Clients
        // },
        {
          name: "Branches",
          class: "hidden",
          url: "/admin/branches",
          path: "/admin/branches",
          component: c.Branches
        }
      ]
    },

    userDashboard: {
      routes: [
        {
          name: "Administaration",
          title: true
        },
        {
          name: "Home",
          exact: true,
          class: "hidden",
          url: "/",
          path: "/",
          icon: "icon-speedometer",
          component: c.UserDashboard
        },

        {
          name: "Dashboard",
          url: "/user/dashboard",
          path: "/user/dashboard",
          icon: "icon-speedometer",
          component: c.UserDashboard
        }
      ]
    },

    patientDashboard: {
      routes: [
        {
          name: "",
          title: true
        },
        {
          name: "Home",
          exact: true,
          class: "hidden",
          url: "/",
          path: "/",
          icon: "icon-speedometer",
          component: c.PatientDashboard
        },
        {
          name: "Dashboard",
          url: "/patient/dashboard",
          path: "/patient/dashboard",
          icon: "icon-speedometer",
          component: c.PatientDashboard
        }
      ]
    }
  }
};

export default function(state = initState, action) {
  switch (action.type) {
    case actionTypes.FETCH_MODULES:
      return {
        ...state,
        items: action.payload
      };

    case actionTypes.FIND_MODULES:
      return {
        ...state,
        hospitalModules: action.payload
      };

    // case actionTypes.SET_SIGN_IN_ROOM:
    //   return {
    //     ...state,
    //     configModules: {
    //       adminDashboard: {
    //         routes: state.configModules.adminDashboard.routes.map(
    //           (item, index) => {
    //             let val = Object.keys(item);
    //             if (index === 0 && val.includes("title")) {
    //               return Object.assign({}, item, {
    //                 name: action.payload.depName,
    //                 title: true
    //               });
    //             }

    //             return item;
    //           }
    //         )
    //       }
    //     }
    //   };

    case actionTypes.SHOW_PERM_GROUP:
      return {
        ...state,
        hospitalPermissions: action.payload
      };

    case actionTypes.DISPLAY_ROOM:
      return {
        ...state
        // userDashboard: {
        //   ...state.userDashboard,
        //   routes: [
        //     ...state.userDashboard.routes,
        //     {
        //       name: "Nursing",
        //       title: true
        //     }
        //   ]
        // }
      };

    default:
      return state;
  }
}
