import RegisterPage from "../../../pages/registration";

describe('Web Registration Page', () => {
    const registerPage = new RegisterPage()

    // Declare test data
    const firstName = "John";
    const lastName = "Doe";
    const address = "123 Main St";
    const email = "johndoe@test.com";
    const phone = "1234567890";
    const gender = "Male";
    const hobbies = ["Cricket"];
    const language = ["English"];
    const skills = "Android";
    const country = "Select Country";
    const countryName = "Australia";
    const year = "1990";
    const month = "May";
    const day = "1";
    const password = "password123";
    const confirmPassword = "password123";

    beforeEach(() => {
        registerPage.visit()
    })

    it('should be able to open the page successfully', () => {
        cy.url().should("eq", 'https://demo.automationtesting.in/Register.html');
        cy.title().should("eq", "Register");
    })

    it('should contain correct form-data for email field', () => {
        // Fill in the registration form
        registerPage.fillForm(
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
            confirmPassword
        );

        registerPage.submitForm()

        cy.wait(6000)

        // Assert that the email field has the correct value
        cy.get(registerPage.emailField)
            .should('have.value', 'johndoe@test.com')
    })

    it('displays an error message when first name field is empty', () => {
        registerPage.submitForm();
        cy.contains('Please fill out this field')  // find the error message
          .should('be.visible')  // assert that it's visible
    })

    // it("should display error messages for empty required fields", () => {
    //     // Click submit
    //     registerPage.submitForm();
    //     cy.wait(1000); // Wait for the form to be processed
    //     // Assert that error messages are displayed for each required field
    //     cy.get('.error-popup').should('be.visible')
    // })

    it('should be able register a new user', () => {
        // Fill in the registration form
        registerPage.fillForm(
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
            confirmPassword
        );

        registerPage.submitForm()

    })


})