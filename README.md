

# Complex Query Filters in NestJS

This project demonstrates how to manage complex query parameters in a RESTful API using [NestJS](https://nestjs.com/), [class-validator](https://github.com/typestack/class-validator), and [class-transformer](https://github.com/typestack/class-transformer).

## Objective

The main goal is to show best practices for handling, validating, and transforming complex query parameters in a NestJS application, making your APIs robust and user-friendly.

## Features

- Parse and validate nested and complex query parameters
- Use DTOs (Data Transfer Objects) for type safety
- Leverage `class-validator` for declarative validation
- Use `class-transformer` for automatic transformation of query params
- Example endpoints and test cases

## Technologies Used

- **NestJS**: Progressive Node.js framework for building efficient and scalable server-side applications
- **class-validator**: Library for declarative validation using decorators
- **class-transformer**: Library for transforming plain objects into class instances and vice versa

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Running the Application

```bash
npm run start:dev
```

The API will be available at `http://localhost:3000` by default.

### Example Usage

You can test the API using tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/). Example query:

```
GET /?filter[status]=active&filter[date][start]=2023-01-01&q=something
```

### Project Structure

- `src/filters.dto.ts`: DTO for complex query filters
- `src/query.dto.ts`: DTO for general query parameters
- `src/app.controller.ts`: Example controller demonstrating usage
- `test/`: Example tests

## How It Works

1. **DTOs** define the expected structure of query parameters.
2. **class-transformer** automatically transforms incoming query params into DTO instances.
3. **class-validator** validates the DTOs, ensuring only valid requests are processed.
4. The controller uses the validated DTOs to handle requests.

## Notes

- This project is for educational purposes and may not cover all edge cases.
- Always validate and sanitize user input in production applications.
- You can extend the DTOs and validation rules as per your application's requirements in order to fit your specific needs.
- If you want to add sortering, pagination, or other common query features, you can easily extend the DTOs and validation logic.

## References

- [NestJS Documentation](https://docs.nestjs.com/)
- [class-validator Documentation](https://github.com/typestack/class-validator)
- [class-transformer Documentation](https://github.com/typestack/class-transformer)

## Get in Touch

For inquiries or feedback, please reach out via:

- Linkedin: [Ruben O. Alvarado](https://www.linkedin.com/in/ruben-alvarado-molina-9020010)
- GitHub: [RubenOAlvarado](https://github.com/RubenOAlvarado)

## License

MIT

