describe ('API Adopet', () => {

    it ('Validando API de mensagens Adopet', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/432e1902-bfb7-4e65-bcb7-cf96fbb95253',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    });
})