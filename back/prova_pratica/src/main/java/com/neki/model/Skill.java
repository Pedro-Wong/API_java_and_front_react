package com.neki.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.OneToMany;

import jakarta.persistence.Table;

@Entity
@Table(name = "habilidades")
public class Skill {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idSkill;

	@Column(name = "nome")
	private String nome;

	@Column(name = "url")
	private String url;

	@Column(name = "level")
	private String level;

	@Column(name = "descricao")
	private String descricao;

	@OneToMany(mappedBy = "idUsuario")
	private List<Usuario> usuario;

	public Skill() {
	}

	public Skill(Long idSkill, String nome, String url, String level, String descricao, List<Usuario> usuario) {
		this.idSkill = idSkill;
		this.nome = nome;
		this.url = url;
		this.level = level;
		this.descricao = descricao;
		this.usuario = usuario;
	}

	public Long getIdSkill() {
		return idSkill;
	}

	public void setIdSkill(Long idSkill) {
		this.idSkill = idSkill;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public List<Usuario> getUsuario() {
		return usuario;
	}

	public void setUsuario(List<Usuario> usuario) {
		this.usuario = usuario;
	}

}
