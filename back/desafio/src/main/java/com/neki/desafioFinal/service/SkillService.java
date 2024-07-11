package com.neki.desafioFinal.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neki.desafioFinal.dto.SkillDTO;
import com.neki.desafioFinal.model.Skill;
import com.neki.desafioFinal.repositories.SkillRepository;

@Service
public class SkillService {

	@Autowired
	SkillRepository skillRepository;
	
	public List<SkillDTO> listarSkills(){
		List<Skill> skills = skillRepository.findAll();
		List<SkillDTO> skillsDto = new ArrayList<>();
		
		for(Skill skill : skills) {
			SkillDTO skillDto = new SkillDTO();
			
			skillDto.setIdSkill(skill.getIdSkill());
			skillDto.setNome(skill.getNome());
			skillDto.setUrl(skill.getUrl());
			skillDto.setDescricao(skill.getDescricao());
			skillDto.setLevel(skill.getLevel());
			
			skillsDto.add(skillDto);
					
		}
		return skillsDto;
	}
	
	public boolean salvarSkills(SkillDTO skillDto ){
		Skill skill = new Skill(skillDto);
		Skill saveSkill = skillRepository.save(skill);
		if(saveSkill != null) {
			return true;
		}
		return false;
		
	}
	
	public boolean deletarSkills(Long idSkill) {
		if(skillRepository.existsById(idSkill)) {
			skillRepository.deleteById(idSkill);
			return true;
		}
		return false;
	}
	
	public boolean atualizarSkill(Long idSkill, SkillDTO newSkill) {
		
		Optional<Skill> optionalSkill = skillRepository.findById(idSkill);
		
		if(optionalSkill.isPresent()) {
			
			Skill antigaSkill = optionalSkill.get();
			antigaSkill.setIdSkill(idSkill);
			
			if(newSkill.getIdSkill() != null) {
				antigaSkill.setIdSkill(newSkill.getIdSkill());
			}
			if(newSkill.getNome() != null) {
				antigaSkill.setNome(newSkill.getNome());
			}
			if(newSkill.getUrl() != null) {
				antigaSkill.setUrl(newSkill.getUrl());
			}
			if(newSkill.getDescricao() != null) {
				antigaSkill.setDescricao(newSkill.getDescricao());
			}
			if(newSkill.getLevel() != null) {
				antigaSkill.setLevel(newSkill.getLevel());
			}
			
			skillRepository.save(antigaSkill);
			return true;

		}
		return false;
		
	}
}
