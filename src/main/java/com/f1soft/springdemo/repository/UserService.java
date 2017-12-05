/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.f1soft.springdemo.repository;

import com.f1soft.springdemo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author asmita
 */
public interface UserService extends JpaRepository<User, Integer> {
    
}
