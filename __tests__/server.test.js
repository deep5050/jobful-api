
const request = require("supertest");
const app = require('../server');
const signale = require('signale');

// beforeAll(async () => {

// });

beforeEach(() => {
    // seed with some data
    signale.start("Starting new Test......");
});

// afterEach(async () => {
//   await db.query("DELETE FROM students");
// });

afterAll(() => {
    signale.star("Tests completed......");
});

describe("GET / ", () => {
    test("It should respond with: In Root", async () => {
        const response = await request(app).get("/");
        // expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
        expect(response.statusCode).toBe(200);
    });
});

describe("GET /freejobalert/ ", () => {
    test("It should respond with: status code 200", async () => {
        const response = await request(app).get("/");
        // expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
        expect(response.statusCode).toBe(200);
        // console.log(response.body);
    });
});

/* describe("GET /freejobalert/xyz ", () => {
    test("It should respond with: status code 404", async () => {
        const response = await request(app).get("/freejobalert/xyz");
        // expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
        expect(response.statusCode).toBe(404);
    });
}); */

describe("GET /freejobalert/teaching-jobs ", () => {
    test("It should respond with: status code 200", async () => {
        const response = await request(app).get("/freejobalert/teaching-jobs");
        // expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
        expect(response.statusCode).toBe(200);
    });
});

describe("GET /freejobalert/engineering-jobs ", () => {
    test("It should respond with: status code 200", async () => {
        const response = await request(app).get("/freejobalert/engineering-jobs");
        // expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
        expect(response.statusCode).toBe(200);
    });
});

describe("GET /freejobalert/railway-jobs ", () => {
    test("It should respond with: status code 200", async () => {
        const response = await request(app).get("/freejobalert/railway-jobs");
        // expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
        expect(response.statusCode).toBe(200);
    });
});
describe("GET /freejobalert/defence-jobs ", () => {
    test("It should respond with: status code 200", async () => {
        const response = await request(app).get("/freejobalert/defence-jobs");
        // expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
        expect(response.statusCode).toBe(200);
    });
});

describe("GET /freejobalert/gov/state/ap ", () => {
    test("It should respond with: status code 200", async () => {
        const response = await request(app).get("/freejobalert/gov/state/ap");
        // expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
        expect(response.statusCode).toBe(200);
    });
});
/* describe("GET /freejobalert/gov/state/ab1 ", () => {
    test("It should respond with: status code 404", async () => {
        const response = await request(app).get("/freejobalert/gov/state/ab1");
        // expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
        expect(response.statusCode).toBe(404);
    });
}); */
describe("GET /freejobalert/gov/state/WB ", () => {
    test("It should respond with: status code 200", async () => {
        const response = await request(app).get("/freejobalert/gov/state/WB");
        // expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
        expect(response.statusCode).toBe(200);
    });
});
// describe("GET /students", () => {
//   test("It should respond with an array of students", async () => {
//     const response = await request(app).get("/students");
//     expect(response.body.length).toBe(2);
//     expect(response.body[0]).toHaveProperty("id");
//     expect(response.body[0]).toHaveProperty("name");
//     expect(response.statusCode).toBe(200);
//   });
// });

// describe("POST /students", () => {
//   test("It should respond with an array of students", async () => {
//     const newStudent = await request(app)
//       .post("/students")
//       .send({
//         name: "New Student"
//       });
//     expect(newStudent.body.name).toBe("New Student");
//     expect(newStudent.body).toHaveProperty("id");
//     expect(newStudent.body).toHaveProperty("name");
//     expect(newStudent.statusCode).toBe(200);

//     // make sure we have 3 students
//     const response = await request(app).get("/students");
//     expect(response.body.length).toBe(3);
//   });
// });

// describe("PATCH /students/1", () => {
//   test("It should respond with an array of students", async () => {
//     const newStudent = await request(app)
//       .post("/students")
//       .send({
//         name: "Another one"
//       });
//     const updatedStudent = await request(app)
//       .patch(`/students/${newStudent.body.id}`)
//       .send({ name: "updated" });
//     expect(updatedStudent.body.name).toBe("updated");
//     expect(updatedStudent.body).toHaveProperty("id");
//     expect(updatedStudent.body).toHaveProperty("name");
//     expect(updatedStudent.statusCode).toBe(200);

//     // make sure we have 3 students
//     const response = await request(app).get("/students");
//     expect(response.body.length).toBe(3);
//   });
// });

// describe("DELETE /students/1", () => {
//   test("It should respond with an array of students", async () => {
//     const newStudent = await request(app)
//       .post("/students")
//       .send({
//         name: "Another one"
//       });
//     const removedStudent = await request(app).delete(
//       `/students/${newStudent.body.id}`
//     );
//     expect(removedStudent.body).toEqual({ message: "Deleted" });
//     expect(removedStudent.statusCode).toBe(200);

//     // make sure we still have 2 students
//     const response = await request(app).get("/students");
//     expect(response.body.length).toBe(2);
//   });
// });

// describe("Test a 404", () => {
//   test("It should respond with a 404 status", async () => {
//     const response = await request(app).get("/nowhere");
//     expect(response.statusCode).toBe(404);
//   });
// });