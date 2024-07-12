package com.neki.desafioFinal.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info().title("Documentação projeto prático Neki")
                        .description("Documentação da API e endpoints ")
                        .version("1.0.0")
                        .license(new License().name("Licença").url("http://springdoc.org")));
    }

}
