import { con } from "./connection.js"

export async function inserirGuitarra(guit) {
    const comando = `INSERT INTO tb_guit (marca, modelo, cor, trastes, peso, madeira,
                                             ponte, cap_braco, cap_meio, 
                                             cap_ponte)
                                             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const [resposta] = await con.query(comando, [guit.marca, guit.modelo, guit.cor, 
                                                 guit.trastes, guit.peso, guit.madeira,
                                                 guit.ponte, guit.cap_braco, 
                                                 guit.cap_meio, guit.cap_ponte, ]);                                                
    guit.id = resposta.insertId;  

    return guit;
}

export async function listarGuitarras() {
    const comando =
            `SELECT id_guit		  id,
                marca		      marca,
                modelo	          modelo,
                cor	              cor,
                trastes           trastes,
                peso              peso,
                madeira	          madeira,
                ponte             ponte,
                cap_braco         cap_braco,    
                cap_meio          cap_meio,
                cap_ponte         cap_ponte
            FROM tb_guit`;
    
    const [linhas] = await con.query(comando);
    return linhas;
  }
  
export async function buscarPorModelo(modelo) {
    const comando =
        `SELECT id_guit		      id,
                marca		      marca,
                modelo	          modelo,
                cor	              cor,
                trastes           trastes,
                peso              peso,
                madeira	          madeira,
                ponte             ponte,
                cap_braco         cap_braco,    
                cap_meio          cap_meio,
                cap_ponte         cap_ponte               
        FROM tb_guit
        WHERE modelo like ? `;
    
    const [linhas] = await con.query(comando, [modelo]);
    return linhas;
  }

  export async function buscarPorId(id) {
    const comando =
        `SELECT id_guit		        id,
                marca		          marca,
                modelo	          modelo,
                cor	              cor,
                trastes           trastes,
                peso              peso,
                madeira	          madeira,
                ponte             ponte,
                cap_braco         cap_braco,    
                cap_meio          cap_meio,
                cap_ponte         cap_ponte             
        FROM tb_guit
        WHERE id_guit = ? `;
    
    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
  }

  export async function alterarinformacoes(id, guit) {
    const comando = 
        `UPDATE tb_guit 
          SET 
              marca		          = ?,
              modelo	          = ?,
              cor	              = ?,
              trastes           = ?,
              peso              = ?,
              madeira	          = ?,
              ponte             = ?,
              cap_braco         = ?,    
              cap_meio          = ?,
              cap_ponte         = ?,
          WHERE id_guit         = ?`
    
    const [resposta] = await con.query(comando, [id, guit.marca, guit.modelo, guit.cor, 
                                                 guit.trastes, guit.peso, guit.madeira,
                                                 guit.ponte, guit.cap_braco, guit.cap_meio, 
                                                 guit.cap_ponte]);
    return resposta.affectedRows;
  }

export async function removerguitarra(id) {
    const comando =
        `DELETE FROM tb_guit
        WHERE id_guit = ? `;
    
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
  }