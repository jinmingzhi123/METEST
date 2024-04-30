package com.shirleydl.mtest;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.shirleydl.mtest.mapper")
public class MEtestApplication {

	public static void main(String[] args) {
		SpringApplication.run(MEtestApplication.class, args);
	}

}
