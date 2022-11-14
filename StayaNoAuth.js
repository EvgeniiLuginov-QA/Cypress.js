describe('Стая', function () { 
    it('Авторизоваться', function () {
        cy.visit("https://staya.dog/");
        cy.get(".header-bottom__right--link").click();
        cy.get('.auth-form > form > [type="email"]').type('mm.ee.108@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('Govinda_1008');
        cy.get(".auth-form__submit").click();
        cy.contains("Невозможно войти с предоставленными учетными данными.");
    })
})    