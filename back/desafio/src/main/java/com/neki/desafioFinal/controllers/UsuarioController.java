package com.neki.desafioFinal.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neki.desafioFinal.dto.UsuarioDTO;
import com.neki.desafioFinal.service.UsuarioService;


@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

	@Autowired
	UsuarioService usuarioService;
	@GetMapping("/listarUsuarios")
	public List<UsuarioDTO> listarUsuarios(){
		return usuarioService.listarUsuarios();
	}
	
	
	
}
