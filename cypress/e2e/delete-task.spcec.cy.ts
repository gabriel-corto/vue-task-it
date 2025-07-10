describe("Remove Task", () => {
	it("Should remove a task", () => {
		cy.visit("/")

		cy.get("input[type='text']").type("Study Vuejs 03")
		cy.contains("Add").click()
		cy.contains("Study Vuejs 03").should("exist")

		cy.get("#remove-task-button").click()
		cy.contains("Study Vuejs 03").should("not.exist")
	})
})
