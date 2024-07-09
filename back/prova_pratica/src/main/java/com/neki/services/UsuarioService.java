package com.neki.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neki.DTO.UsuarioDTO;
import com.neki.model.Usuario;
import com.neki.repositores.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	UsuarioRepository usuarioRepository;
	
	public List<UsuarioDTO> listarUsuario(){
		List<Usuario> usuarios = usuarioRepository.findAll();
		List<UsuarioDTO> usuariosDTO = new ArrayList<>();
		for(Usuario usuario : usuarios) {
			UsuarioDTO usuarioDto = new UsuarioDTO(usuario);
			usuariosDTO.add(usuarioDto);
		}
		
		return usuariosDTO;
		

	}
	
	
}
