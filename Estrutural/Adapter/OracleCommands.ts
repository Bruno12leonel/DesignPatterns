import DbAdapter from "./DbAdapter";

class OracleCommands implements DbAdapter {
    insert(): void {
        throw new Error("Method not implemented.");
    }
    update(): void {
        throw new Error("Method not implemented.");
    }
    delete(): void {
        throw new Error("Method not implemented.");
    }

}

export default OracleCommands;