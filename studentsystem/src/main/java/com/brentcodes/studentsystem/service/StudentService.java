package com.brentcodes.studentsystem.service;

import com.brentcodes.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();

}
