package com.neki.desafioFinal.model;

import java.util.List;

import com.neki.desafioFinal.dto.SkillDTO;

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
	@Column(name="url")
	private String url;
	@Column(name="descricao")
	private String descricao;
	@Column(name="level")
	private String level;
	
	@OneToMany(mappedBy = "idUsuario")
	private List<Usuario> usuario;
	
	
	public Skill(){
		
	}

	public Skill(Long idSkill, String nome, String url, String descricao, String level) {
		super();
		this.idSkill = idSkill;
		this.nome = nome;
		this.url = url;
		this.descricao = descricao;
		this.level = level;
	}

	public Skill(SkillDTO skillDto) {
		this.idSkill = skillDto.getIdSkill();
		this.nome = skillDto.getNome();
		this.url = skillDto.getUrl();
		this.descricao = skillDto.getDescricao();
		this.level = skillDto.getLevel();
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


	public String getDescricao() {
		return descricao;
	}


	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}
	
	
	
}
