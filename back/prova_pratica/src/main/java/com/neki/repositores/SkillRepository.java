package com.neki.repositores;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.neki.model.Skill;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {
	
}
