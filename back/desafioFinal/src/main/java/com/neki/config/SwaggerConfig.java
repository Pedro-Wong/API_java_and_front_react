package com.neki.config;

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
                .info(new Info().title("Documentação API - Desafio NEKI ")
                        .description("API com endpoints do Desafio Neki")
                        .version("1.0.0")
                        .license(new License().name("Licença do sistema").url("http://springdoc.org")));
    }

}
