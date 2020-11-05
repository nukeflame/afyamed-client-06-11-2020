/**
|--------------------------------------------------
| Roles
|--------------------------------------------------
*/

// component's config object.
const components = {
  recDashboard: {
    component: "RecDashboard",
    url: "/site/reception/dashboard",
    name: "Dashboard",
    icon: "icon-speedometer",
    modl: 1
  }
};

// component's access to roles.
const rolesConfig = {
  receptionist: {
    routes: [
      // {
      //   name: "Reception",
      //   title: true
      // },
      // {
      //   component: "RecDashboard",
      //   url: "/site/dashboard",
      //   name: "Dashboard",
      //   icon: "icon-speedometer"
      // }
    ]
  },

  common: {
    routes: [
      {
        name: "Home",
        title: true
      },
      {
        component: "Settings",
        url: "/site/settings",
        name: "Settings",
        icon: "icon-settings"
      }
    ]
  }
};

export default rolesConfig;
