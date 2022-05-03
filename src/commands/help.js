const help = {
    description: "Lists all available commands",
    usage: "help",
    run: (commander, args) => {
        let commands = []
        for(let [key, value] of Object.entries(commander.commands)) {
            commands.push(`${key.toUpperCase()} - ${value.description}`)
        }
        commander.updateLines(commands)
    }
}

export default help