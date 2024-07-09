package com.neki.dto;

import com.neki.model.Usuario;

public class UsuarioDTO {
	private Long idUsuario;
	private String login;
	private String senha;
	
	
	public UsuarioDTO(Usuario usuario) {
		this.idUsuario = usuario.getIdUsuario();
		this.login = usuario.getLogin();
		this.senha = usuario.getSenha();
	}


	public Long getIdUsuario() {
		return idUsuario;
	}


	public void setIdUsuario(Long idUsuario) {
		this.idUsuario = idUsuario;
	}


	public String getLogin() {
		return login;
	}


	public void setLogin(String login) {
		this.login = login;
	}


	public String getSenha() {
		return senha;
	}


	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	
}
