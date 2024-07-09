package com.neki.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neki.dto.UsuarioDTO;
import com.neki.services.UsuarioService;


@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

	@Autowired
	UsuarioService usuarioService;
	
	@GetMapping("/listar_usuario")
	public List<UsuarioDTO> listarUsuarios(){
		return usuarioService.listarUsuario();
	}
	
	
	
}
