const chaiHttp = require("chai-http");
const chai = require("chai");
chai.use(chaiHttp);
chai.should();

const server = require("../routes/productRoutes");

describe("Testing Shop services endpoints", () => {

  describe("GET /shop"), () => { //GET all Products.
    it("It should get all the products and get a status code 200", () => {
      chai.request(server)
        .get("/shop")
        .end((error, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");
          done()
        });
    });

    it("It should not get all the products and get a status code 404", () => {
      chai.request(server)
        .get("/shops") //wrong URL
        .end((error, response) => {
          response.should.have.status(404);
          done()
        });
    });
  };


  describe("GET /producto/:id", () => { //GET 1 Product by ID.
    it("It should get a product by ID", (done) => {
      const productID = 1
      chai.request(server)
        .get("/producto/:id" + productID)
        .end((error, response) => {
          response.should.have.status(200)
          response.body.should.be.a("object")
          response.body.should.have.property("id")
          response.body.should.have.property("id_usuario")
          response.body.should.have.property("nombre")
          response.body.should.have.property("descripcion")
          response.body.should.have.property("precio")
          response.body.should.have.property("imagen")
          response.body.should.have.property("id").eq(1)
          done()
        })
    })
  })


  describe("POST /nuevoproducto", () => { //POST a new product.
    it("It should add a new product ", (done) => {
      const newProduct = {
        id_usuario: 1,
        nombre: "test-product",
        descripcion: "test-description",
        precio: 4900,
        imagen: "test-url-image"
      }

      chai.request(server)
        .post("/producto/:id" + productID)
        .send(newProduct)
        .end((error, response) => {
          response.text.should.be.eq("Producto agregado exitosamente")
          response.body.should.be.a("object")
          response.body.should.have.property("nombre").eq("test-product")
          response.body.should.have.property("descripcion").eq("test-description")
          response.body.should.have.property("precio").eq(4900)
          done()
        })
    })
  })


  describe("DELETE /producto/:id", () => {  //DELETE 1 product.
    it("It should eliminate a product ", (done) => {
      const productID = 1
      chai.request(server)
        .delete("/producto/:id" + productID)
        .end((error, response) => {
          response.text.should.be.eq("Producto eliminado con exito")
          done()
        })
    })

    it("It should NOT eliminate a product ", (done) => {
      const productID = 15269695 //Non existent ID
      chai.request(server)
        .delete("/producto/:id" + productID)
        .end((error, response) => {
          response.should.have.status(500);
          done()
        })
    })
  })

});
