import { connectDB } from "../database";

export class BaseService<T> {
    private tableName: string;

    constructor(tableName: string) {
        this.tableName = tableName;
    }

    // Função para adicionar um registro
    async add(item: T): Promise<{ id: number } & T> {
        const db = await connectDB();
        // @ts-ignore
        const fields = Object.keys(item).join(', ');
        // @ts-ignore
        const placeholders = Object.keys(item).map(() => '?').join(', ');
        // @ts-ignore
        const values = Object.values(item);

        const stmt = db.prepare(`INSERT INTO ${this.tableName} (${fields}) VALUES (${placeholders})`);
        const result = stmt.run(...values);
        // @ts-ignore
        return { id: result.lastInsertRowid, ...item };
    }

    // Função para obter todos os registros
    async getAll(): Promise<unknown[]> {
        const db = await connectDB();
        const stmt = db.prepare(`SELECT * FROM ${this.tableName}`);
        return stmt.all();
    }

    // Função para obter registros filtrados
    async getBy(params: { chave: string, valor: string }[]): Promise<unknown[]> {
        const db = await connectDB();
        let sql = `SELECT * FROM ${this.tableName}`;
    
        if (params.length > 0) {
            const whereClauses = params.map(p => `${p.chave} LIKE ?`).join(' AND ');
            sql += ` WHERE ${whereClauses}`;
        }
    
        // Adicione os '%' diretamente no valor dos parâmetros
        const values = params.map(p => `%${p.valor}%`);
    
        const stmt = db.prepare(sql);
        return stmt.all(...values);
    }
    

    // Função para atualizar um registro
    async update(id: number, item: Partial<T>): Promise<boolean> {
        const db = await connectDB();
        const fields = Object.keys(item).map(key => `${key} = ?`).join(', ');
        const values = Object.values(item);
        const query = `UPDATE ${this.tableName} SET ${fields} WHERE id = ?`;
        const stmt = db.prepare(query);
        const result = stmt.run(...values, id);
        return result.changes > 0;
    }

    // Função para deletar um registro
    async delete(id: number): Promise<boolean> {
        const db = await connectDB();
        const stmt = db.prepare(`DELETE FROM ${this.tableName} WHERE id = ?`);
        const result = stmt.run(id);
        return result.changes > 0;
    }
}
