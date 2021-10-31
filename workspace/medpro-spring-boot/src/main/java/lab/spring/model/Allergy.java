package lab.spring.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.apache.commons.lang3.builder.ToStringBuilder;

import lab.spring.constants.Severity;

@Entity
public class Allergy {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long id;

	long pid;  //Patient ID
	
	String substance;  // cause: milk, penicillin,  pollen

	String reaction; // sneezing , cough, Allergic sinusitis 

	@Enumerated(EnumType.STRING)
	Severity severity;  

	String occurence;  // 

	String status;  // Active, inactive
	
	String codes;  //format: code1;code2;...;codeN

	LocalDate  beginDate;
	
	LocalDate  endDate;
	
	
	String referredBy; // source physician name
	
	LocalDateTime  creationDate;  // of this record
	
	String comments;

	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this);
	}
	
	//------------------------------------------
	// GETTERS and SETTERS
	//------------------------------------------
	
	public long getId() {
		return id;
	}

	public long getPid() {
		return pid;
	}

	public void setPid(long pid) {
		this.pid = pid;
	}

	public String getSubstance() {
		return substance;
	}

	public void setSubstance(String substance) {
		this.substance = substance;
	}

	public String getReaction() {
		return reaction;
	}

	public void setReaction(String reaction) {
		this.reaction = reaction;
	}

	

	public String getCodes() {
		return codes;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Severity getSeverity() {
		return severity;
	}

	public void setSeverity(Severity severity) {
		this.severity = severity;
	}

	public void setCodes(String codes) {
		this.codes = codes;
	}

	public LocalDate getBeginDate() {
		return beginDate;
	}

	public void setBeginDate(LocalDate beginDate) {
		this.beginDate = beginDate;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}

	public String getOccurence() {
		return occurence;
	}

	public void setOccurence(String occurence) {
		this.occurence = occurence;
	}

	public String getReferredBy() {
		return referredBy;
	}

	public void setReferredBy(String referredBy) {
		this.referredBy = referredBy;
	}

	public LocalDateTime getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(LocalDateTime creationDate) {
		this.creationDate = creationDate;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public void setId(long id) {
		this.id = id;
	}

		
}
