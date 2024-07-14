package com.neki.desafioFinal.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@PostMapping("/cadastrarUsuarios")
	public ResponseEntity<String> salvarUsuarios(@RequestBody UsuarioDTO usuarioDto){
		boolean uDto = usuarioService.salvarUsuarios(usuarioDto);
		if(uDto) {
			return ResponseEntity.status(HttpStatus.OK).body("Usuario salvo com sucesso!");
		}else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao salvar usuario");
		}
		
	}
	
	@DeleteMapping("/deletarUsuario/{idUsuario}")
	public ResponseEntity<String> deletarUsuario(@PathVariable Long idUsuario){
		boolean deleteUsuario = usuarioService.deletarUsuarios(idUsuario);
		if(deleteUsuario) {
			return ResponseEntity.status(HttpStatus.OK).body("Usuario com o ID: " + idUsuario + " deletado com sucesso!");
		}else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Não foi possível deletar o usuário ou id inexistente");
		}
	}
	
	@PatchMapping("/atualizarUsuario/{idUsuario}")
	public ResponseEntity<String> editarUsuario(@PathVariable Long idUsuario, @RequestBody UsuarioDTO newUsuario){
		boolean usuarioUpdate = usuarioService.atualizarUsuario(idUsuario, newUsuario);
		
		if(usuarioUpdate) {
			return ResponseEntity.status(HttpStatus.OK).body("Usuario atualizado com sucesso");
		}else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao atualizar usuário");
		}
		
	}
	
}
