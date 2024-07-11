package com.neki.desafioFinal.dto;


public class UsuarioDTO {
	
	private Long idUsuario;
	private String login;
	private String senha;
	
	
	public UsuarioDTO() {
		
	}
	
	public UsuarioDTO(Long idUsuario, String login, String senha) {
		
		this.idUsuario = idUsuario;
		this.login = login;
		this.senha = senha;
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
