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

import com.neki.desafioFinal.dto.SkillDTO;
import com.neki.desafioFinal.service.SkillService;

@RestController
@RequestMapping("/habilidades")
public class SkillController {

	@Autowired
	SkillService skillService;
	
	@GetMapping("/listarHabilidades")
	public List<SkillDTO> listHabilidades(){
		return skillService.listarSkills();
		
	}
	
	@PostMapping("/salvarHabilidades")
	
	public ResponseEntity<String> saveHabilidades(@RequestBody SkillDTO skillDto){
		boolean sDto = skillService.salvarSkills(skillDto);
		
		if(sDto) {
			return ResponseEntity.status(HttpStatus.OK).body("Habilidade cadastrada com sucesso");
		}else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao cadastrar habilidade");
		}
		
	}
	
	@DeleteMapping("/deletarHabilidades/{idSkill}")
	public ResponseEntity<String> deleteHabilidades(@PathVariable Long idSkill){
		boolean dDto = skillService.deletarSkills(idSkill);
		if(dDto) {
			return ResponseEntity.status(HttpStatus.OK).body("Habilidade excluida com sucesso");
		}else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao excluir habilidade");
		}
		
	}
	
	
	@PatchMapping("/atualizarHabilidades/{idSkill}")
	public ResponseEntity<String> updateHabilidades(@PathVariable Long idSkill, @RequestBody SkillDTO newSkill){
		boolean uDto = skillService.atualizarSkill(idSkill, newSkill);
		if(uDto) {
			return ResponseEntity.status(HttpStatus.OK).body("Habilidade atualizada com sucesso");
		}else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao atualizar habilidade");
		}
	}
	
	
	
}
