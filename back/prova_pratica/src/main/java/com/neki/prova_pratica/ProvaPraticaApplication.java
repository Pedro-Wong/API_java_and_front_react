package com.neki.prova_pratica;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
@EntityScan(basePackages = "com.neki.model")
@SpringBootApplication
public class ProvaPraticaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProvaPraticaApplication.class, args);
	}

}
