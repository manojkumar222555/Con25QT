export class LogoutPage {
  weblocators = {
    Username: "input[placeholder='Enter your email']",
    Password: "input[placeholder='Enter your password']",
    Signin: ".signin-inform-singnin-btn",
    Dashboard:
      ".d-flex.align-items-center.justify-content-start.link-side.active-side-link",
    Logout:
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)",
    Cancel_logbtn: ".d-btn.inner-cancel-btn",
    Logout_btn: ".d-btn.inner-reject-btn",
  };

  openurl() {
    cy.visit("https://vendor-test.conqt.com/");
  }

  enterusername(username) {
    cy.get(this.weblocators.Username).type(username);
  }

  enterpassword(password) {
    cy.get(this.weblocators.Password).type(password);
  }

  clickonSignin() {
    cy.get(this.weblocators.Signin).click();
  }

  clickonDashboard() {
    cy.get(this.weblocators.Dashboard).click();
  }

  clickonToastmsg() {
    cy.get(this.weblocators.toastmsg).click();
  }

  ClickonLogout() {
    cy.get(this.weblocators.Logout).click();
  }

  Cancel_logbtn() {
    cy.get(this.weblocators.Cancel_logbtn).click();
  }

  Logout_btn() {
    cy.get(this.weblocators.Logout_btn).click();
  }
}
