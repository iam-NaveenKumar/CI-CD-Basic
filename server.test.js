import request from "supertest";
import app from "./server.js";

test("Homepage should return 200", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
});

test("About page should return 200", async () => {
    const response = await request(app).get("/about");

    expect(response.statusCode).toBe(200);
});