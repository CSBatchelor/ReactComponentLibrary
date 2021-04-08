import "@testing-library/jest-dom"
import React from "react"
import { render, screen } from "@testing-library/react"
import { Button } from "./Button"

describe("Button Component", () => {
	it("Renders the label", () => {
		const buttonText = "This is a button"
		render(<Button primary={true} backgroundColor="blue" size="medium" label={buttonText} />)
		const button = screen.getByText(buttonText)
		expect(button).toBeInTheDocument()
	})
})
