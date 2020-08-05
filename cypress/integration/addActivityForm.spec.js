describe('AddActivityForm', () => {
  beforeEach(() => {
    cy.visit('/create')
  })

  it('should fill the form', () => {
    cy.get('[name="name"]')
      .type('test activity name')
      .should('have.value', 'test activity name')

    cy.get('[name="details"]')
      .type('Lorem ipsum dolor sit amet, consetetur sadipscing')
      .should('have.value', 'Lorem ipsum dolor sit amet, consetetur sadipscing')

    cy.contains('Add').click()
  })

  it('tests if the add button is disabled when minimum amount of chracters is not met', () => {
    cy.get('[name="name"]').type('a')
    cy.contains('Add').should('be.disabled')
  })

  it('tests if the add button when activity name exceeds the maximum character number', () => {
    cy.get('[name="name"]').type(
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volu'
    )
    cy.contains('Add').should('be.disabled')
  })

  it('tests if the add button when activity details exceeds the maximum character number', () => {
    cy.get('[name="name"]').type('test activity name')
    cy.get('[name="details"]').type(
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. '
    )
    cy.contains('Add').should('be.disabled')
  })
})
