package com.airlinemanagement.api.config;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;


@Configuration
@EnableWebSecurity
public class SecurityConfig implements SecurityConfigure {

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .dispatcherTypeMatchers(HttpMethod.valueOf("/public/**")).permitAll() // Allow public access to certain URLs
                .anyRequest().authenticated() // Require authentication for all other URLs
                .and()
                .formLogin()
                .loginPage("/login") // Specify the custom login page URL
                .permitAll()
                .and()
                .logout()
                .permitAll();
    }

}
