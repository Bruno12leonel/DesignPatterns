import MySQLAdapter from "./MySQLAdapter";
import MySQLCommands from "./MySQLCommands";
import OracleCommands from "./OracleCommands";


const oracle = new OracleCommands();
oracle.insert();

const mysql = new MySQLAdapter(new MySQLCommands());
mysql.insert();