describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://ventus.enalog.se/Booking/Booking/Index/EmbassyLondon')
    cy.contains("Book an appointment").click()
    cy.get('[type="checkbox"]').check()
    cy.get('[name="Next"]').click()
    cy.get('[type="radio"]').click()
    cy.get('[name="Next"]').click()
    cy.get('[name="TimeSearchFirstAvailableButton"]').click()
    cy.contains("label", "Fully booked").should("exist")
  })
})
