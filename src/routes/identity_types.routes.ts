import { Router } from 'express';

import { get_All_Id_Identity_types,
      create_Id_Identity_type,
      get_Identity_type_by_ID,
      delete_Identity_type_by_ID,
      update_Identity_type_by_ID } from '../controllers/identity_types.controller';


const router = Router();

const swaggerJsDoc = require ('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express') ;

const swaggerOptions = {
      swaggerDefination: {
            info:{
                  title: "Old Mutual Api",
                  description: "Insurance Api Infomation",
                  contact: "softclans Technology"
            },
            servers: ["http://localhost:3000"]
      }
}

router.route('/')
      .get(get_All_Id_Identity_types)
      .post(create_Id_Identity_type);

router.route('/:id')
      .get(get_Identity_type_by_ID)
      .delete(delete_Identity_type_by_ID)
      .put(update_Identity_type_by_ID);

export default router;  