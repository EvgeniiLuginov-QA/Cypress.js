describe('Логика восстановления', function () { 
    it('Проверка Забыли пароль', function () {
        cy.visit("https://login.qa.studio/");
        cy.get("#forgotEmailButton").click();
        cy.get("#mailForgot").type("mm.ee.108@gmail.com");
        cy.get("#restoreEmailButton").click();
        cy.contains("#message","Успешно отправили пароль на e-mail","#exitMessageButton > .exitIcon");
})


    it('Позитивный кейс авторизации', function () {
        cy.visit("https://login.qa.studio/");
        cy.get("#mail").type("german@dolnikov.ru");
        cy.get("#pass").type("iLoveqastudio1");
        cy.get("#loginButton").click();
        cy.contains("#message","Авторизация прошла успешно","#exitMessageButton > .exitIcon");



    })    

    it('негативный кейс авторизации', function () {
        cy.visit("https://login.qa.studio/");
        cy.get("#mail").type("german@dolnikov1.ru");
        cy.get("#pass").type("iLoveqastudio1");
        cy.get("#loginButton").click();
        cy.contains("#message","Такого логина или пароля нет","#exitMessageButton > .exitIcon");



    })    

    it('негативный кейс авторизации 2', function () {
        cy.visit("https://login.qa.studio/");
        cy.get("#mail").type("german@dolnikov.ru");
        cy.get("#pass").type("iLoveqastudio11");
        cy.get("#loginButton").click();
        cy.contains("#message","Такого логина или пароля нет","#exitMessageButton > .exitIcon");



    })
})






// cy.contains("#exitMessageButton > .exitIcon");

// describe('Тестирование dolnikov.ru', function () {

   // it('Проверка, что при переходе в статью урл будет верный', function () {
     //   cy.visit('https://dolnikov.ru/blog/');
       // cy.contains('Про образование').click();
        // cy.url().should('eq', 'https://dolnikov.ru/blog/all/pro-obrazovanie/')
    // })
// })
// cy.get("input[type='text']").type('tesla').type('{enter}');