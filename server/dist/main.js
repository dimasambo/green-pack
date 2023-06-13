"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const validation_pipe_1 = require("./pipes/validation.pipe");
async function bootstrap() {
    try {
        const PORT = process.env.port || 5000;
        exports.app = await core_1.NestFactory.create(app_module_1.AppModule);
        exports.app.enableCors();
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Eco-management')
            .setDescription('Docs REST API')
            .setVersion('1.0.0')
            .addTag('program')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(exports.app, config);
        swagger_1.SwaggerModule.setup('/api/docs', exports.app, document);
        exports.app.useGlobalPipes(new validation_pipe_1.ValidationPipe);
        await exports.app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    }
    catch (e) {
        console.log(e);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map