package com.neki.desafioFinal.dto;

public class SkillDTO {

	private Long idSkill;

	private String nome;

	private String url;

	private String descricao;

	private String level;

	public SkillDTO() {

	}

	public SkillDTO(Long idSkill, String nome, String url, String descricao, String level) {
		this.idSkill = idSkill;
		this.nome = nome;
		this.url = url;
		this.descricao = descricao;
		this.level = level;
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
