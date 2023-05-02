/// <reference types="cypress"/>

class RegisterPage {
    constructor() {
      this.url = "https://demo.automationtesting.in/Register.html";
  
      this.firstNameField =
        "#basicBootstrapForm > div:nth-child(1) > div:nth-child(2) > input";
      this.lastNameField = "#basicBootstrapForm > div:nth-child(1) > div:nth-child(3) > input";
      this.addressField = "#basicBootstrapForm textarea";
      this.emailField = "#eid input";
      this.phoneField = "#basicBootstrapForm > div:nth-child(4) > div > input";
      this.genderRadio =
        "#basicBootstrapForm input[type='radio'][name='radiooptions']";
      this.hobbiesCheckboxes =
        "#checkbox1";
      this.languagesDropdown =
        "#msdd";
      this.skillsDropdown =
        "#Skills";
      this.countriesDropdown = "#countries";
      this.selectCountryDropdown =
        "#basicBootstrapForm > div:nth-child(10) > div > span > span.selection > span";
      this.yearDropdown = "#basicBootstrapForm select#yearbox";
      this.monthDropdown = "#basicBootstrapForm select[placeholder='Month']";
      this.dayDropdown = "#basicBootstrapForm #daybox";
      this.passwordField = "#firstpassword";
      this.confirmPasswordField = "#secondpassword";
      //this.uploadImage = '#imagetrgt';
      this.submitButton = "#submitbtn";
    }
  
    visit() {
      cy.visit(this.url);
    }
  
    fillForm(
      firstName,
      lastName,
      address,
      email,
      phone,
      gender,
      hobbies,
      language,
      skills,
      country,
      countryName,
      year,
      month,
      day,
      password,
      confirmPassword,
      //uploadImage
    ) {
      cy.get(this.firstNameField).type(firstName);
      cy.get(this.lastNameField).type(lastName);
      cy.get(this.addressField).type(address);
      cy.get(this.emailField).type(email);
      cy.get(this.phoneField).type(phone);
      cy.get(this.genderRadio).check(gender);
      cy.get(this.hobbiesCheckboxes).check(hobbies);
      cy.get(this.languagesDropdown).invoke('val', language);
      cy.get(this.skillsDropdown).select(skills);
      cy.get(this.selectCountryDropdown).click();
      cy.get('.select2-search__field').type(countryName)
      cy.get('.select2-results__option').contains(countryName).click()
      cy.get(this.yearDropdown).select(year);
      cy.get(this.monthDropdown).select(month);
      cy.get(this.dayDropdown).select(day);
      cy.get(this.passwordField).type(password);
      cy.get(this.confirmPasswordField).type(confirmPassword);
      //cy.get(this.uploadImage).attachFile(uploadImage);

    }
  
    submitForm() {
      cy.get(this.submitButton).click();
    }
  }
  
  export default RegisterPage;