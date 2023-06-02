"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const error_404_1 = require("./error.404");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useStaticAssets((0, path_1.join)(__dirname, "..", "/public"));
    app.setBaseViewsDir((0, path_1.join)(__dirname, "..", "views"));
    app.setViewEngine("ejs");
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Median")
        .setDescription("The Median API description")
        .setVersion("0.1")
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api", app, document);
    app.use(cookieParser());
    app.useGlobalFilters(new error_404_1.NotFoundExceptionFilter());
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map