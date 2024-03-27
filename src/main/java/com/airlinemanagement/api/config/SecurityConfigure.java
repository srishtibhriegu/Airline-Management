package com.airlinemanagement.api.config;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;

public interface SecurityConfigure {
    void configure(HttpSecurity http) throws Exception;
}
