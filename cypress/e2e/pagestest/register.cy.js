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
        cy.wait(6000)
        cy.title().should("eq", "Register");
    })

    it('should be able to register a new user', () => {
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

        // Wait for the success alert to appear
        cy.get('.alert-success')
        .should('be.visible')
        .and('contain', 'Thank you for your registration')
    })


})