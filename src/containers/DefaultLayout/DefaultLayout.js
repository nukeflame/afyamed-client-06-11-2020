import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from "@coreui/react";
import $ from "jquery";
import PropTypes from "prop-types";
import navigation from "../../_nav";
import "react-datepicker/dist/react-datepicker.css";
import * as router from "react-router-dom";
import { connect } from "react-redux";
import { ReactTableDefaults } from "react-table";
import { fetchuser } from "../../redux/actions/userActions";
import { fetchroomstatus } from "../../redux/actions/roomStatusActions";
import { fetchdepartment } from "../../redux/actions/depActions";
import { fetchqueues } from "../../redux/actions/queueActions";
import { showmodules } from "../../redux/actions/moduleActions";
import { fetchpositions } from "../../redux/actions/positionActions";
import { fetchclients } from "../../redux/actions/clientActions";
import { fetchids } from "../../redux/actions/idsActions";
import { showpermgroup } from "../../redux/actions/permActions";
import { fetchbranches } from "../../redux/actions/branchActions";
import { fetchclinics } from "../../redux/actions/clinicActions";

import SearchBox from "./SearchBox";
import { SystemDashboard, AlertBox } from "./Modals";
import { destroyToken } from "../../config/auth";
import { uniqBy } from "lodash";

const DefaultAside = React.lazy(() => import("./DefaultAside"));
const DefaultFooter = React.lazy(() => import("./DefaultFooter"));
const DefaultHeader = React.lazy(() => import("./DefaultHeader"));

class DefaultLayout extends Component {
  static propTypes = {
    fetchuser: PropTypes.func,
    fetchPatients: PropTypes.func,
    logoutUser: PropTypes.func,
    // showmodules: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchMod: false,
      dashMod: false,
      allowedModules: [],
    };
  }

  loadingBody = () => (
    <div
      className="animated fadeIn pt-1 text-center d-flex justify-content-center"
      style={{ margin: "40px auto" }}
    >
      <div className="sk-wave  m-0 ">
        <div className="sk-rect sk-rect1" />
        &nbsp;
        <div className="sk-rect sk-rect2" />
        &nbsp;
        <div className="sk-rect sk-rect3" />
        &nbsp;
        <div className="sk-rect sk-rect4" />
        &nbsp;
        <div className="sk-rect sk-rect5" />
      </div>
    </div>
  );

  loadingSidebar = () => (
    <div
      className="animated fadeIn pt-1 text-center d-flex justify-content-center"
      style={{ margin: "195px auto" }}
    >
      <div className="sk-wave  m-0 ">
        <div className="sk-rect sk-rect1" />
        &nbsp;
        <div className="sk-rect sk-rect2" />
        &nbsp;
        <div className="sk-rect sk-rect3" />
        &nbsp;
        <div className="sk-rect sk-rect4" />
        &nbsp;
        <div className="sk-rect sk-rect5" />
      </div>
    </div>
  );

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">
      <div className="sk-wave  m-0 ">
        <div className="sk-rect sk-rect1" />
        &nbsp;
        <div className="sk-rect sk-rect2" />
        &nbsp;
        <div className="sk-rect sk-rect3" />
        &nbsp;
        <div className="sk-rect sk-rect4" />
        &nbsp;
        <div className="sk-rect sk-rect5" />
      </div>
    </div>
  );
  //right
  activateContextMenu = () => {
    if (document.addEventListener) {
      document.addEventListener(
        "contextmenu",
        function (e) {
          // alert("You've tried to open context menu"); //here you draw your own menu
          e.preventDefault();
        },
        false
      );
    } else {
      document.attachEvent("oncontextmenu", function () {
        // alert("You've tried to open context menu");
        window.event.returnValue = false;
      });
    }
  };

  initState = () => {
    // // find  hospital modules
    // const client = JSON.parse(localStorage.getItem("client"));
    // this.props.showmodules(client.clientId);
    // //show module permissions
    // this.props.showpermgroup(client.clientId);
    // // fetch branches
    // this.props.fetchbranches(client.clientId);
    // // initiate user
    // this.props.fetchuser().then(() => {
    //   const { user, location, hospmodules, configmodules } = this.props;
    //   if (user !== null) {
    //     // set branch & room
    //     this.props.fetchroomstatus();
    //     // set modules
    //     if (hospmodules && hospmodules.length > 0) {
    //       let modules = [];
    //       hospmodules.forEach((el) => {
    //         modules.push(el.slug);
    //       });
    //       if (modules) {
    //         modules = [...modules, "general", "last_common"];
    //         const pathname = location.pathname;
    //         //redirect to dashboard
    //         if (pathname === "/admin/dashboard") {
    //           modules.unshift("adminDashboard");
    //         } else if (pathname === "/user/dashboard") {
    //           modules.unshift("userDashboard");
    //         } else {
    //           modules.unshift("patientDashboard");
    //         }
    //         let allowedModules = modules.reduce((acc, md) => {
    //           return [...acc, ...configmodules[md].routes];
    //         }, []);
    //         // For removing settings entries, compare with 'name'.
    //         allowedModules = uniqBy(allowedModules, "name");
    //         this.setState({ allowedModules });
    //       } else {
    //         this.props.history.push("/");
    //       }
    //     }

    //     // set online users
    //     this.onlineUsers(user);
    //     this.props.fetchclients(); // fetch clients
    //     this.props.fetchdepartment(); // fetch departments
    //     this.props.fetchqueues(); // fetch queues
    //     this.props.fetchpositions(); // fetch positions
    //     this.props.fetchids(); // fetch ids
    //     this.props.fetchclinics(); // fetch clinics
    //   }
    // });

    // React table defaults
    Object.assign(ReactTableDefaults, {
      pageSizeOptions: [14, 30, 40, 50],
      defaultPageSize: 14,
      noDataText: "",
      loadingText: (
        <div className="animated fadeIn text-center">
          <div className="sk-spinner sk-spinner-pulse" />
        </div>
      ),
    });
  };

  componentDidMount() {
    // this.activateContextMenu();
    //initiate funcs
    // this.initState();
    // find  hospital modules
    const client = JSON.parse(localStorage.getItem("client"));
    this.props.showmodules(client.clientId);
    //show module permissions
    this.props.showpermgroup(client.clientId);
    // fetch branches
    this.props.fetchbranches(client.clientId);
    // initiate user
    this.props.fetchuser().then(() => {
      const { user, hospmodules, configmodules } = this.props;
      if (user !== null) {
        // set branch & room
        this.props.fetchroomstatus();
        // set modules
        if (hospmodules && hospmodules.length > 0) {
          let modules = [];
          hospmodules.forEach((el) => {
            modules.push(el.slug);
          });
          if (modules.length) {
            modules = [...modules, "general", "last_common"];
            const pathname = this.props.location.pathname;
            //redirect to dashboard
            if (pathname === "/admin/dashboard") {
              modules.unshift("adminDashboard");
            } else if (pathname === "/user/dashboard") {
              modules.unshift("userDashboard");
            } else {
              modules.unshift("patientDashboard");
            }
            let allowedModules = modules.reduce((acc, md) => {
              return [...acc, ...configmodules[md].routes];
            }, []);

            // For removing settings entries, compare with 'name'.
            allowedModules = uniqBy(allowedModules, "name");
            if (allowedModules.length > 0) {
              this.setState({ allowedModules });
            }
          } else {
            this.props.history.push("/");
          }
        }

        // set online users
        this.onlineUsers(user);
        this.props.fetchclients(); // fetch clients
        this.props.fetchdepartment(); // fetch departments
        this.props.fetchqueues(); // fetch queues
        this.props.fetchpositions(); // fetch positions
        this.props.fetchids(); // fetch ids
        this.props.fetchclinics(); // fetch clinics
      }
    });
  }

  onlineUsers = (user) => {
    // window.Echo &&
    //   window.Echo.channel("laravel_database_test-event").listen(
    //     "TestEvent",
    //     e => {
    //       console.log(e.details.body);
    //     }
    //   );
    // window.Echo && window.Echo.private('chat')
    // .listenForWhisper('typing', (e) => {
    //     console.log(e);
    // });
    // window.Echo.channel(`laravel_database_private-users.${user.id}`).listen(
    //   "BroadcastNotificationCreated",
    //   e => {
    //     console.log(e);
    //   }
    // );
    // window.Echo.private("users." + user.id).notification(notification => {
    //   console.log(notification.type);
    // });
  };

  signOut = (e) => {
    e.preventDefault();
    // this.props.logoutUser().then(() => {
    destroyToken();
    this.props.history.push("/auth/login");
    // });
  };

  toChats = (e) => {
    $(".sidebar").addClass("bgs");
    $(".breadcrumb").addClass("hidden");
    $(".app-footer").addClass("hidden");
    $("body").addClass("aside-menu-lg-show");
    $(".dnav").addClass("hidden");
    this.props.history.push("/communication/chatbox");
  };

  toSettings = (e) => {
    this.props.history.push("/settings");
  };

  searchModal = () => {
    const { searchMod } = this.state;
    this.setState({
      searchMod: !searchMod,
    });
  };

  // fn system dashboard toggle
  systemDashboardToggle = () => {
    const { dashMod } = this.state;
    this.setState({
      dashMod: !dashMod,
    });
  };

  // fn alert box toggle
  alertBoxToggle = () => {
    const { alertMd } = this.state;
    this.setState({
      alertMd: !alertMd,
    });
  };

  render() {
    const { dashMod, searchMod, allowedModules } = this.state;

    const RouteComponent = (route, idx) => {
      return route.component ? (
        <Route
          key={idx}
          path={route.url}
          exact={route.exact}
          name={route.name}
          render={() => (
            <route.component searchModal={this.searchModal} {...this.props} />
          )}
        />
      ) : null;
    };

    const RouteRedirect = () => {
      const { cookies, location } = this.props;
      const level = cookies.get("level");
      if (parseInt(level) === 1) {
        return location.pathname === "/user/dashboard" ? null : (
          <Redirect from="/" to="/user/dashboard" />
        );
      } else if (parseInt(level) === 2) {
        return location.pathname === "/admin/dashboard" ? null : (
          <Redirect from="/" to="/admin/dashboard" />
        );
      } else if (parseInt(level) === 0) {
        return location.pathname === "/patient/dashboard" ? null : (
          <Redirect from="/" to="/patient/dashboard" />
        );
      }
    };
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader
              user={this.props.user}
              onLogout={(e) => this.signOut(e)}
              onSms={(e) => this.toChats(e)}
              searchModal={this.searchModal}
              systemDashboardToggle={this.systemDashboardToggle}
              {...this.props}
            />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              {allowedModules.length > 0 ? (
                <AppSidebarNav
                  navConfig={navigation(allowedModules)}
                  {...this.props}
                  router={router}
                />
              ) : null}
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            {/* navbar breadcrumb */}
            {allowedModules && allowedModules.length > 0 ? (
              <AppBreadcrumb appRoutes={allowedModules} />
            ) : null}
            <Container fluid>
              <Suspense fallback={this.loadingBody()}>
                <Switch>
                  {allowedModules && allowedModules.length > 0
                    ? allowedModules.map((route, idx) =>
                        RouteComponent(route, idx)
                      )
                    : null}
                  {/* redirect to dashboard */}
                  {RouteRedirect()}
                </Switch>
              </Suspense>

              {/* Search Modal */}
              <SearchBox
                {...this.props}
                toggleSearch={(e) => this.searchModal(e)}
                searchMod={searchMod}
              />
              {/* Modals */}
              <SystemDashboard
                dashMod={dashMod}
                systemDashboardToggle={this.systemDashboardToggle}
                {...this.props}
              />
              {/* alert */}
              <AlertBox alertBoxToggle={this.alertBoxToggle} {...this.props} />
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loadingSidebar()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  cookies: ownProps.cookies,
  user: state.user.user,
  hospmodules: state.modules.hospitalModules,
  configmodules: state.modules.configModules,
});

const mapDispatchToProps = {
  // eslint-disable-next-line
  showmodules,
  showpermgroup,
  fetchuser,
  fetchdepartment,
  fetchqueues,
  fetchpositions,
  fetchclients,
  fetchids,
  fetchroomstatus,
  fetchbranches,
  fetchclinics,
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
