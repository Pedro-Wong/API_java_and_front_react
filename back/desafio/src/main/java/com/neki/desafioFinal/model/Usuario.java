package com.neki.desafioFinal.model;

import com.neki.desafioFinal.dto.UsuarioDTO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;


@Entity
@Table(name="usuario")
public class Usuario {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long idUsuario;
	@Column(name="login")
	private String login;
	@Column(name="senha")
	private String senha;
	
	@ManyToOne
	@JoinColumn(name = "id_skill")
	private Skill idSkill;
	
	public Usuario() {
		
	}
	public Usuario(Long idUsuario, String login, String senha) {
		super();
		this.idUsuario = idUsuario;
		this.login = login;
		this.senha = senha;
	}
	
	public Usuario(UsuarioDTO usuarioDto) {
		this.idUsuario = usuarioDto.getIdUsuario();
		this.login = usuarioDto.getLogin();
		this.senha = usuarioDto.getSenha();
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
