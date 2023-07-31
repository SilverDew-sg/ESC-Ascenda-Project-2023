// Test code for the first feature
<<<<<<< Updated upstream
//import DisplayHotel from ("./public/javascripts/displayHotels.js")
const {app, server} = require('./app.js');
const request = require("supertest")


describe('Backend test Cases for Express App', () => {

  beforeAll((done) =>{
    server.on('listening', () => {
      done();
    });
  });

  afterAll((done) => {
    server.close(done);
  });

  test('should respond with the contents of HomePage.html', async () => {
    const res = await request(app).get("/")
    expect(res.status).toBe(200);
  });

  test('should respond with hotel data and DisplayHotels.html', async () => {
=======
const app = require('./app.js');

describe('Test Cases for Express App', () => {
  it('should respond with the contents of HomePage.html', () => {
    const res = app.get('/')
    expect(res).toBe(200, done);
  });

  it('should respond with hotel data and DisplayHotels.html', () => {
>>>>>>> Stashed changes
    const destinationId = 12345;
    const checkinDate = '2023-08-01';
    const checkoutDate = '2023-08-05';
    const guests = 2;

    // Call the exported function from app.js
<<<<<<< Updated upstream
    const res = await request(app)
    .get(`/api/disphotels?destination_id=${destinationId}&checkin=${checkinDate}&checkout=${checkoutDate}&guests=${guests}`);
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
  });

  test('should respond with an error for missing query parameters', async () => {
    const res = await request(app)
    .get('/api/disphotels?destination_id=12345&lang=en&currency=USD&checkin=2023-08-01&checkout=2023-08-05&guests=2')
    expect(res.status).toBe(400);
  });

  test('should respond with an error for incorrect data types', async () => {
    const res = await request(app)
=======
    const reply = app.getHotelsData(destinationId, checkinDate, checkoutDate, guests)
      .then(() => {
        // To add any assertions related to the getHotelsData function here if needed
        done();
      })
      .catch((err) => {
        done(err);
      })
    expect(reply).toBeTruthy();
  });

  it('should respond with an error for missing query parameters', () => {
    supertest(app)
      .get('/api/disphotels?destination_id=12345&lang=en&currency=USD&checkin=2023-08-01&checkout=2023-08-05&guests=2')
      .expect(400, done);
  });

  it('should respond with an error for incorrect data types', () => {
    supertest(app)
>>>>>>> Stashed changes
      .get('/api/disphotels?destination_id=abc&lang=en&currency=USD&checkin=2023-08-01&checkout=2023-08-05&country_code=US&guests=2&partner_id=xyz')
    expect(res.status).toBe(400);
  });

<<<<<<< Updated upstream
  test('should respond with hotel data but no hotel prices', async () => {
    const res = await request(app)
=======
  it('should respond with hotel data but no hotel prices', () => {
    supertest(app)
>>>>>>> Stashed changes
      .get('/api/disphotels?destination_id=67890&lang=en&currency=USD&checkin=2023-08-01&checkout=2023-08-05&country_code=US&guests=2&partner_id=54321')
      expect(res.status).toBe(200);
  });

<<<<<<< Updated upstream
  test('should respond with an error when the API is unreachable', async () => {
    const res = await request(app)
=======
  it('should respond with an error when the API is unreachable', () => {
    supertest(app)
>>>>>>> Stashed changes
      .get('/api/disphotels?destination_id=12345&lang=en&currency=USD&checkin=2023-08-01&checkout=2023-08-05&country_code=US&guests=2&partner_id=54321')
    expect(res.status).toBe(500);
  });

<<<<<<< Updated upstream
  test('should respond with a 404 error for an invalid route', async () => {
    const res = await request(app)
=======
  it('should respond with a 404 error for an invalid route', () => {
    supertest(app)
>>>>>>> Stashed changes
      .get('/invalid_route')
    expect(res.status).toBe(404);
  });

<<<<<<< Updated upstream
  test('should respond with the appropriate CORS headers for custom Origin', async () => {
    const res = await request(app)
=======
  it('should respond with the appropriate CORS headers for custom Origin', () => {
    supertest(app)
>>>>>>> Stashed changes
      .get('/')
      .set('Origin', 'http://example.com')
      .expect('Access-Control-Allow-Origin', 'http://example.com')
      .expect(200);
  });

<<<<<<< Updated upstream
  test('should respond with the appropriate CORS headers for Credentials',async () =>{
    const res = await request(app)
=======
  it('should respond with the appropriate CORS headers for Credentials', () =>{
    supertest(app)
>>>>>>> Stashed changes
      .get('/')
      .set('Origin', 'http://example.com')
      .set('Credentials', true)
      .expect('Access-Control-Allow-Origin', 'http://example.com')
      .expect('Access-Control-Allow-Credentials', 'true')
      .expect(20);
  });
});

/*describe("Frontend test cases for booking app",() =>{
  test("Should fetch hotel data from server", async() => {
    DisplayHotel.
  })
}
);*/