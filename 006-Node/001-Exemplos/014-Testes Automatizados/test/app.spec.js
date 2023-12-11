import supertest from "supertest"
import app from "../src/app.js"

const request = supertest(app)

describe("app.js", ()=>{
    test("Deveria retornar Ola e Status 200", async ()=>{
        let res = await request.get("/user")

        
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty("msn")
        expect(res.body.msn).toEqual("Ola")
    })

    test("Deveria retornar os dados id e nome enviados na requisicao e Status 201", async ()=>{
        let res = await request.post("/user").send({"id": 23, "nome": "Steve Jobs"})
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty("id")
        expect(res.body).toHaveProperty("nome")
        expect(res.body.id).toEqual(23)
        expect(res.body.nome).toEqual("Steve Jobs")
    })

    test("Deveria retornar 'User deletado com sucesso' e Status 200", async ()=>{
        let res = await request.delete("/user")
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty("msn")
        expect(res.body.msn).toEqual("User deletado com sucesso")
    })

    test("Deveria retornar os dados id e nome enviados na requisicao e Status 201", async ()=>{
        let res = await request.put("/user").send({"id": 23, "nome": "Steve Jobs"})
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty("id")
        expect(res.body).toHaveProperty("nome")
        expect(res.body.id).toEqual(23)
        expect(res.body.nome).toEqual("Steve Jobs")
    })
})