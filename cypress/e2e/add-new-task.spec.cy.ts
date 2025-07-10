describe("Add New Task", () => {
	it("Should add new task", () => {
		cy.visit("/")

		cy.get("input[type='text']").type("Study Vuejs 03")
		cy.contains("Add").click()
		cy.contains("Study Vuejs 03").should("exist")
	})
})
