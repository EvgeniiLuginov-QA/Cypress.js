describe('Стая', function () { 
    it('Авторизоваться', function () {
        cy.visit("https://staya.dog/");
        cy.get(".header-bottom__right--link").click();
        cy.get('.auth-form > form > [type="email"]').type('mm.ee.108@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('Govinda_108');
        cy.get(".auth-form__submit").click();
        cy.contains("Мой профиль");
    })

    it('НЕАвторизоваться', function () {
        cy.visit("https://staya.dog/");
        cy.get(".header-bottom__right--link").click();
        cy.get("button.profile__nav-link").click();
        cy.get(".box__button_ok").click();
        cy.get(".header-bottom__right--link").click();
        cy.get('.auth-form > form > [type="email"]').type('mm.ee.108@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('Govinda_1008');
        cy.get(".auth-form__submit").click();
        cy.contains("Невозможно войти с предоставленными учетными данными.");
    })

})

    // cy.get("#forgotEmailButton").click();
       // cy.get("#mailForgot").type("mm.ee.108@gmail.com");
       // cy.get("#restoreEmailButton").click();
       // cy.contains("#message","Успешно отправили пароль на e-mail","#exitMessageButton > .exitIcon");