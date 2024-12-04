interface DbAdapter {
    insert(): void;
    update(): void;
    delete(): void;
}

export default DbAdapter;