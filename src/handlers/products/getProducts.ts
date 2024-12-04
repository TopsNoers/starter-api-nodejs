import { httpStatusCode, responseMessage } from "../../libs/enum";
import { makeResponse } from "../../libs/helper";
export const getProducts = (req: any, res: any) => {
    let data = {
        "products": [
            {
              "id": 1,
              "name": "Product 1",
              "description": "Description 1",
            },
            {
              "id": 2,
              "name": "Product 2",
              "description": "Description 2",
            }
        ],
        "users" : [
            {
              "id": 1,
              "name": "User 1",
            },
            {
              "id": 2,
              "name": "User 2",
            }
        ]
    }
    res.status(httpStatusCode.ok).send(makeResponse(httpStatusCode.ok, responseMessage.success,data));
};