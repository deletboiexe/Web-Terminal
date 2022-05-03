const echo = {
    description: "Echos the text back in the terminal",
    usage: "echo <text>",
    run: (commander, args) => {
        if(!Array.isArray(args)) return commander.updateLines("")
        commander.updateLines(args.join(" "))
    }
}

export default echo