const clear = {
    description: "Clears the terminal (soon™)",
    usage: "clear",
    run: (commander, args) => {
       commander.updateLines("This command is WIP") // This does not clear, method for setting raw array is still not exposed
    }
}

export default clear