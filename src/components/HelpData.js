export class HelpData {
    name = null;
    description = null;
    usage = null;
    examples = new Array();
    subcommands = new Array();
    ignoreSuperCommand = false;
    superCommand = null;
    secondDescription = null;
    secondUsage = null;
    prefix = "/";
    category = null;

    /**
     * @param {String} [name]
     * @param {String} [description]
     */
    constructor(name, description, usage = name, ignoreSuperCommand = false) {
        this.name = name;
        this.description = description;
        this.usage = usage;
        this.ignoreSuperCommand = ignoreSuperCommand;
    }

    getName() {
        if (this.superCommand != null) {
            return this.superCommand.getName() + " " + this.name;
        }
        return this.name;
    }

    getDescription() {
        return this.description + (this.secondDescription != null ? "\n" + this.secondDescription : "");
    }

    getCategory(data = this) {
        if (data.category != null) {
            return data.category;
        } else
            if (data.superCommand != null) {
                return this.getCategory(data.superCommand);
            }
        return null;
    }

    getUsage() {
        if (this.superCommand != null && !this.ignoreSuperCommand) {
            return this.superCommand.getUsage() + " " + this.usage;
        }
        return this.usage;
    }

    /**
     * @param {HelpData} command
     */
    getSecondUsage(command) {
        if (command.superCommand != null) {
            return command.superCommand.getUsage() + " " + command.secondUsage;
        }
        return command.secondUsage;
    }

    getUsageFormatted(command = this) {
        if (command.subcommands.length == 0) {
            return (this.prefix + command.getUsage() + (command.secondUsage != null ? "\n" + this.prefix + this.getSecondUsage(command) : ""));
        }
        return (this.prefix + command.getUsage() + " <subcommand>" + (command.secondUsage != null ? "\n" + this.prefix + this.getSecondUsage(command) : ""));
    }

    getSubcommands() {
        return this.subcommands;
    }

    /**
     * @param {HelpData[]} subcommands
     */
    addSubcommands(subcommands) {
        for (const subcommand of subcommands) {
            this.subcommands.push(HelpData.from(subcommand).setSuperCommand(this));
        }
        return this;
    }

    getExamples() {
        let examplesStr = "";
        for (let i = 0; i < this.examples.length; i++) {
            if (i != 0) {
                examplesStr += "\n";
            }
            examplesStr += "`" + this.prefix + (this.superCommand != null && !this.ignoreSuperCommand ? this.superCommand.getUsage() + " " : "") + this.examples[i] + "`";
        }
        return examplesStr.toString();
    }

    /**
    * @param {HelpData} superCommand
    */
    setSuperCommand(superCommand) {
        this.superCommand = superCommand;
        return this;
    }

    /**
     * @param {any} json
     */
    static from(json) {
        return Object.assign(new HelpData(), json);
    }
}