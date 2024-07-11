package com.neki.desafioFinal.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neki.desafioFinal.dto.UsuarioDTO;
import com.neki.desafioFinal.model.Usuario;
import com.neki.desafioFinal.repositories.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	UsuarioRepository usuarioRepository;
	
	public List<UsuarioDTO> listarUsuarios(){
		List<Usuario> usuarios = usuarioRepository.findAll();
		List<UsuarioDTO> usuariosDTO = new ArrayList<>();
		for(Usuario usuario : usuarios) {
			
			UsuarioDTO usuarioDto = new UsuarioDTO();
			usuarioDto.setIdUsuario(usuario.getIdUsuario());
			usuarioDto.setLogin(usuario.getLogin());
			usuarioDto.setSenha(usuario.getSenha());
			usuariosDTO.add(usuarioDto);
			
		}
		return usuariosDTO;
	}
	
	public boolean salvarUsuarios(UsuarioDTO usuarioDto) {
		Usuario usuario = new Usuario(usuarioDto);
		Usuario saveUsuario = usuarioRepository.save(usuario);
		if(saveUsuario != null) {
			return true;
		}
		return false;
	}
	
	public boolean deletarUsuarios(Long idUsuario) {
		if(usuarioRepository.existsById(idUsuario)) {
			usuarioRepository.deleteById(idUsuario);
			return true;
		}
		return false;
	}
	
	public boolean atualizarUsuario(Long idUsuario, UsuarioDTO newUsuario) {
		
		Optional<Usuario> optionalUsuario = usuarioRepository.findById(idUsuario);
		
		if(optionalUsuario.isPresent()) {
			
			Usuario antigoUsuario = optionalUsuario.get();
			antigoUsuario.setIdUsuario(idUsuario);
			
			if(newUsuario.getIdUsuario() != null) {
				antigoUsuario.setIdUsuario(newUsuario.getIdUsuario());
			}
			
			if(newUsuario.getLogin() != null) {
				antigoUsuario.setLogin(newUsuario.getLogin());
			}
			if(newUsuario.getSenha() != null) {
				antigoUsuario.setSenha(newUsuario.getSenha());
			}
			
			usuarioRepository.save(antigoUsuario);
			return true;
			
		}
		
		return false;
	}
	
}
