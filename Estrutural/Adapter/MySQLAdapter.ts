import DbAdapter from "./DbAdapter";
import MySQLCommands from "./MySQLCommands";

class MySQLAdapter implements DbAdapter {

    private mysql: MySQLCommands;
    constructor(mysql: MySQLCommands) {
        this.mysql = mysql;
    }

    insert(): void {
        this.mysql.insertMySQL();
    }
    update(): void {
        this.mysql.updateMySQL();
    }
    delete(): void {
        this.mysql.deleteMySQL();
    }

}

export default MySQLAdapter;