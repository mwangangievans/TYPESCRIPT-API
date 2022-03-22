import { Request, Response } from 'express';

import { connect } from '../database'
import { Identity_types } from '../interface/identity_types';

export async function get_All_Id_Identity_types(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const identity = await conn.query('SELECT * FROM identity_types');
    return res.json(identity[0]);
}

export async function create_Id_Identity_type(req: Request, res: Response) {
    const newPost: Identity_types = req.body;
    const conn = await connect();
     await conn.query('INSERT INTO identity_types SET ?', [newPost]);
     return res.json({
         message: 'identity ID Created'
     });
}


//var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";

export async function get_Identity_type_by_ID(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const conn = await connect();
    const post = await conn.query('SELECT * FROM identity_types WHERE id_type = ?', [id]);

    return res.json(post[0]);
}

export async function delete_Identity_type_by_ID(req: Request, res: Response) {
    const id = req.params.id;
    const conn = await connect();
    await conn.query('DELETE FROM identity_types WHERE id_type = ?', [id]);
    return res.json({
        message: 'identity ID deleted'
    });
}

export async function update_Identity_type_by_ID(req: Request, res: Response) {
    const id = req.params.id;
    const updatePost: Identity_types = req.body;
    const conn = await connect();
    await conn.query('UPDATE identity_types SET ? WHERE id_type = ?', [updatePost, id]);
    return res.json({
        message: 'identity ID updated'
    });
}